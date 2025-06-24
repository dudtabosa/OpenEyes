const request = require('supertest');
const io = require('socket.io-client');
const { R } = require('redbean-node');
const passwordHash = require('../../server/password-hash');

describe('registerUser Socket Route', () => {
  let socket;
  let server;

  beforeAll(async () => {
    // Inicializar servidor de teste
    server = require('../../server/server.js');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Aguardar servidor inicializar
  });

  beforeEach(async () => {
    // Conectar socket
    socket = io('http://localhost:3001');
    await new Promise(resolve => socket.on('connect', resolve));
    
    // Limpar banco de dados de teste
    await R.exec('DELETE FROM user WHERE username LIKE "test%"');
  });

  afterEach(async () => {
    if (socket) {
      socket.disconnect();
    }
  });

  afterAll(async () => {
    if (server) {
      await server.close();
    }
  });

  describe('Validações', () => {
    it('deve rejeitar cadastro sem username', (done) => {
      socket.emit('registerUser', {
        password: 'testpass123'
      }, (response) => {
        expect(response.ok).toBe(false);
        expect(response.msg).toBe('Usuário e senha são obrigatórios.');
        done();
      });
    });

    it('deve rejeitar cadastro sem password', (done) => {
      socket.emit('registerUser', {
        username: 'testuser'
      }, (response) => {
        expect(response.ok).toBe(false);
        expect(response.msg).toBe('Usuário e senha são obrigatórios.');
        done();
      });
    });

    it('deve rejeitar senha muito fraca', (done) => {
      socket.emit('registerUser', {
        username: 'testuser',
        password: '123'
      }, (response) => {
        expect(response.ok).toBe(false);
        expect(response.msg).toContain('Senha muito fraca');
        done();
      });
    });

    it('deve rejeitar cadastro com dados vazios', (done) => {
      socket.emit('registerUser', {
        username: '',
        password: ''
      }, (response) => {
        expect(response.ok).toBe(false);
        expect(response.msg).toBe('Usuário e senha são obrigatórios.');
        done();
      });
    });
  });

  describe('Cadastro de usuário', () => {
    it('deve criar usuário com dados válidos', (done) => {
      const userData = {
        username: 'testuser123',
        password: 'testpass123'
      };

      socket.emit('registerUser', userData, async (response) => {
        expect(response.ok).toBe(true);
        expect(response.msg).toBe('Usuário cadastrado com sucesso!');

        // Verificar se usuário foi criado no banco
        const user = await R.findOne('user', 'username = ?', [userData.username]);
        expect(user).toBeTruthy();
        expect(user.username).toBe(userData.username);
        expect(user.active).toBe(1);

        // Verificar se senha foi hasheada
        const isPasswordValid = await passwordHash.verify(userData.password, user.password);
        expect(isPasswordValid).toBe(true);

        done();
      });
    });

    it('deve rejeitar usuário duplicado', (done) => {
      const userData = {
        username: 'testuser456',
        password: 'testpass123'
      };

      // Primeiro cadastro
      socket.emit('registerUser', userData, (response1) => {
        expect(response1.ok).toBe(true);

        // Tentar cadastrar novamente
        socket.emit('registerUser', userData, (response2) => {
          expect(response2.ok).toBe(false);
          expect(response2.msg).toBe('Nome de usuário já existe.');
          done();
        });
      });
    });

    it('deve permitir login após cadastro', (done) => {
      const userData = {
        username: 'testuser789',
        password: 'testpass123'
      };

      // Cadastrar usuário
      socket.emit('registerUser', userData, (registerResponse) => {
        expect(registerResponse.ok).toBe(true);

        // Tentar fazer login
        socket.emit('login', userData, (loginResponse) => {
          expect(loginResponse.ok).toBe(true);
          expect(loginResponse.token).toBeDefined();
          done();
        });
      });
    });
  });

  describe('Segurança', () => {
    it('deve hashear a senha corretamente', (done) => {
      const userData = {
        username: 'testuser_security',
        password: 'testpass123'
      };

      socket.emit('registerUser', userData, async (response) => {
        expect(response.ok).toBe(true);

        // Verificar se senha não está em texto plano no banco
        const user = await R.findOne('user', 'username = ?', [userData.username]);
        expect(user.password).not.toBe(userData.password);
        expect(user.password.length).toBeGreaterThan(20); // Hash bcrypt é longo

        done();
      });
    });

    it('deve definir usuário como ativo por padrão', (done) => {
      const userData = {
        username: 'testuser_active',
        password: 'testpass123'
      };

      socket.emit('registerUser', userData, async (response) => {
        expect(response.ok).toBe(true);

        const user = await R.findOne('user', 'username = ?', [userData.username]);
        expect(user.active).toBe(1);

        done();
      });
    });
  });

  describe('Tratamento de erros', () => {
    it('deve lidar com erros de banco de dados', (done) => {
      // Mock de erro no banco
      const originalFindOne = R.findOne;
      R.findOne = jest.fn().mockRejectedValue(new Error('Database error'));

      socket.emit('registerUser', {
        username: 'testuser_error',
        password: 'testpass123'
      }, (response) => {
        expect(response.ok).toBe(false);
        expect(response.msg).toBe('Database error');

        // Restaurar função original
        R.findOne = originalFindOne;
        done();
      });
    });

    it('deve lidar com erros de hash de senha', (done) => {
      // Mock de erro no hash
      const originalGenerate = passwordHash.generate;
      passwordHash.generate = jest.fn().mockRejectedValue(new Error('Hash error'));

      socket.emit('registerUser', {
        username: 'testuser_hash_error',
        password: 'testpass123'
      }, (response) => {
        expect(response.ok).toBe(false);
        expect(response.msg).toBe('Hash error');

        // Restaurar função original
        passwordHash.generate = originalGenerate;
        done();
      });
    });
  });
}); 