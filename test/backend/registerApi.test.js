jest.setTimeout(20000);

const request = require('supertest');

// URL do servidor rodando
const SERVER_URL = 'http://localhost:3001';

// Função para gerar dados únicos
const generateUniqueData = (suffix) => {
  const timestamp = Date.now();
  return {
    username: `testuser_${suffix}_${timestamp}`,
    password: 'senha123',
    email: `test_${suffix}_${timestamp}@example.com`,
    nome: `Usuário Teste ${suffix}`,
    cpf: `123.456.789-${suffix.padStart(2, '0')}${timestamp % 100}`,
    forma_pagamento: 'pix'
  };
};

describe('POST /api/register', () => {
  it('deve cadastrar usuário com dados válidos', async () => {
    const userData = generateUniqueData('valid');
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send(userData);
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.msg).toBe('Usuário cadastrado com sucesso!');
  });

  it('deve rejeitar cadastro sem username', async () => {
    const userData = generateUniqueData('no_username');
    const { username, ...dataWithoutUsername } = userData;
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send(dataWithoutUsername);
    expect(res.statusCode).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('Todos os campos são obrigatórios: usuário, senha, email, nome, CPF e forma de pagamento.');
  });

  it('deve rejeitar cadastro sem password', async () => {
    const userData = generateUniqueData('no_password');
    const { password, ...dataWithoutPassword } = userData;
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send(dataWithoutPassword);
    expect(res.statusCode).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('Todos os campos são obrigatórios: usuário, senha, email, nome, CPF e forma de pagamento.');
  });

  it('deve rejeitar cadastro sem email', async () => {
    const userData = generateUniqueData('no_email');
    const { email, ...dataWithoutEmail } = userData;
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send(dataWithoutEmail);
    expect(res.statusCode).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('Todos os campos são obrigatórios: usuário, senha, email, nome, CPF e forma de pagamento.');
  });

  it('deve rejeitar cadastro sem nome', async () => {
    const userData = generateUniqueData('no_nome');
    const { nome, ...dataWithoutNome } = userData;
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send(dataWithoutNome);
    expect(res.statusCode).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('Todos os campos são obrigatórios: usuário, senha, email, nome, CPF e forma de pagamento.');
  });

  it('deve rejeitar cadastro sem cpf', async () => {
    const userData = generateUniqueData('no_cpf');
    const { cpf, ...dataWithoutCpf } = userData;
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send(dataWithoutCpf);
    expect(res.statusCode).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('Todos os campos são obrigatórios: usuário, senha, email, nome, CPF e forma de pagamento.');
  });

  it('deve rejeitar cadastro sem forma_pagamento', async () => {
    const userData = generateUniqueData('no_pagamento');
    const { forma_pagamento, ...dataWithoutFormaPagamento } = userData;
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send(dataWithoutFormaPagamento);
    expect(res.statusCode).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('Todos os campos são obrigatórios: usuário, senha, email, nome, CPF e forma de pagamento.');
  });

  it('deve rejeitar senha fraca', async () => {
    const userData = generateUniqueData('weak_pass');
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send({ ...userData, password: 'a' });
    expect(res.statusCode).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toContain('Senha muito fraca');
  });

  it('deve rejeitar usuário duplicado', async () => {
    const userData = generateUniqueData('dup_username');
    
    // Primeiro cadastro
    await request(SERVER_URL)
      .post('/api/register')
      .send(userData);
    
    // Tentar cadastrar novamente com mesmo username
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send({ ...userData, email: 'different@example.com', cpf: '999.999.999-99' });
    expect(res.statusCode).toBe(409);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('Nome de usuário já existe.');
  });

  it('deve rejeitar email duplicado', async () => {
    const userData = generateUniqueData('dup_email');
    
    // Primeiro cadastro
    await request(SERVER_URL)
      .post('/api/register')
      .send(userData);
    
    // Tentar cadastrar novamente com mesmo email
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send({ ...userData, username: 'different_user', cpf: '999.999.999-99' });
    expect(res.statusCode).toBe(409);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('Email já está em uso.');
  });

  it('deve rejeitar cpf duplicado', async () => {
    const userData = generateUniqueData('dup_cpf');
    
    // Primeiro cadastro
    await request(SERVER_URL)
      .post('/api/register')
      .send(userData);
    
    // Tentar cadastrar novamente com mesmo CPF
    const res = await request(SERVER_URL)
      .post('/api/register')
      .send({ ...userData, username: 'different_user', email: 'different@example.com' });
    expect(res.statusCode).toBe(409);
    expect(res.body.ok).toBe(false);
    expect(res.body.msg).toBe('CPF já está em uso.');
  });
}); 