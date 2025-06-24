import { mount } from '@vue/test-utils';
import UserRegister from '../../src/components/UserRegister.vue';

// Mock socket.io
const mockSocket = {
  emit: jest.fn(),
  disconnect: jest.fn(),
};

// Mock fetch
global.fetch = jest.fn();

jest.mock('socket.io-client', () => ({
  io: () => mockSocket,
}));

describe('UserRegister.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UserRegister);
    jest.clearAllMocks();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('Renderização', () => {
    it('deve renderizar o formulário de cadastro com todos os campos obrigatórios', () => {
      expect(wrapper.find('form').exists()).toBe(true);
      expect(wrapper.find('input[id="username"]').exists()).toBe(true);
      expect(wrapper.find('input[id="password"]').exists()).toBe(true);
      expect(wrapper.find('input[id="email"]').exists()).toBe(true);
      expect(wrapper.find('input[id="nome"]').exists()).toBe(true);
      expect(wrapper.find('input[id="cpf"]').exists()).toBe(true);
      expect(wrapper.find('select[id="forma_pagamento"]').exists()).toBe(true);
      expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
    });

    it('deve mostrar campos obrigatórios com asterisco', () => {
      const labels = wrapper.findAll('label');
      expect(labels.at(0).text()).toContain('Usuário: *');
      expect(labels.at(1).text()).toContain('Senha: *');
      expect(labels.at(2).text()).toContain('Email: *');
      expect(labels.at(3).text()).toContain('Nome Completo: *');
      expect(labels.at(4).text()).toContain('CPF: *');
      expect(labels.at(5).text()).toContain('Forma de Pagamento: *');
    });

    it('deve mostrar dica de senha', () => {
      expect(wrapper.find('.password-hint').text()).toBe('Mínimo 6 caracteres');
    });

    it('deve ter opções de forma de pagamento', () => {
      const select = wrapper.find('select[id="forma_pagamento"]');
      const options = select.findAll('option');
      expect(options.length).toBe(5); // Incluindo a opção vazia
      expect(options.at(1).text()).toBe('PIX');
      expect(options.at(2).text()).toBe('Cartão de Crédito');
      expect(options.at(3).text()).toBe('Boleto');
      expect(options.at(4).text()).toBe('Transferência Bancária');
    });
  });

  describe('Validação de formulário', () => {
    it('deve validar campos obrigatórios', async () => {
      const form = wrapper.find('form');
      await form.trigger('submit');

      expect(wrapper.vm.msg).toBe('Todos os campos são obrigatórios.');
      expect(wrapper.vm.success).toBe(false);
    });

    it('deve validar senha com menos de 6 caracteres', async () => {
      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: '123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      expect(wrapper.vm.msg).toBe('Senha deve ter pelo menos 6 caracteres.');
      expect(wrapper.vm.success).toBe(false);
    });

    it('deve permitir envio com dados válidos', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true, msg: 'Usuário cadastrado com sucesso!' })
      });

      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      expect(global.fetch).toHaveBeenCalledWith('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        })
      });
    });
  });

  describe('Cadastro de usuário via API REST', () => {
    it('deve mostrar loading durante o cadastro', async () => {
      global.fetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));

      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      expect(wrapper.vm.loading).toBe(true);
      expect(wrapper.find('button').text()).toContain('Cadastrando');
    });

    it('deve lidar com cadastro bem-sucedido', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true, msg: 'Usuário cadastrado com sucesso!' })
      });

      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 0));
      // Simular callback do autoLogin
      const loginCallback = mockSocket.emit.mock.calls.find(call => call[0] === 'login')[2];
      if (loginCallback) loginCallback({ ok: true });
      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 10));
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.success).toBe(true);
      expect(wrapper.vm.msg).toBe('Usuário cadastrado com sucesso!');
      expect(wrapper.vm.loading).toBe(false);
    });

    it('deve lidar com erro no cadastro', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: false, msg: 'Nome de usuário já existe.' })
      });

      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(wrapper.vm.success).toBe(false);
      expect(wrapper.vm.msg).toBe('Nome de usuário já existe.');
      expect(wrapper.vm.loading).toBe(false);
    });

    it('deve lidar com erro de rede', async () => {
      global.fetch.mockRejectedValueOnce(new Error('Network error'));

      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(wrapper.vm.success).toBe(false);
      expect(wrapper.vm.msg).toBe('Erro ao conectar com o servidor.');
      expect(wrapper.vm.loading).toBe(false);
    });
  });

  describe('Login automático', () => {
    it('deve tentar login automático após cadastro bem-sucedido', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true, msg: 'Usuário cadastrado com sucesso!' })
      });

      mockSocket.emit.mockImplementation((event, data, callback) => {
        if (event === 'login') {
          callback({ ok: true });
        }
      });

      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(mockSocket.emit).toHaveBeenCalledWith('login', {
        username: 'testuser',
        password: 'senha123',
      }, expect.any(Function));
    });

    it('deve emitir evento de sucesso após login automático', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true, msg: 'Usuário cadastrado com sucesso!' })
      });

      mockSocket.emit.mockImplementation((event, data, callback) => {
        if (event === 'login') {
          callback({ ok: true });
        }
      });

      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(wrapper.emitted('registration-success')).toBeTruthy();
    });

    it('deve lidar com erro no login automático', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true, msg: 'Usuário cadastrado com sucesso!' })
      });

      mockSocket.emit.mockImplementation((event, data, callback) => {
        if (event === 'login') {
          callback({ ok: false, msg: 'Credenciais inválidas' });
        }
      });

      await wrapper.setData({
        formData: {
          username: 'testuser',
          password: 'senha123',
          email: 'test@example.com',
          nome: 'Teste Usuário',
          cpf: '123.456.789-00',
          forma_pagamento: 'pix'
        }
      });

      const form = wrapper.find('form');
      await form.trigger('submit');

      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(wrapper.vm.msg).toBe('Cadastro realizado com sucesso! Faça login para continuar.');
    });
  });

  describe('Limpeza de recursos', () => {
    it('deve desconectar socket ao destruir componente', async () => {
      await wrapper.unmount();
      expect(mockSocket.disconnect).toHaveBeenCalled();
    });
  });
}); 