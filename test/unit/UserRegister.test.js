import { mount } from '@vue/test-utils';
import UserRegister from '../../src/components/UserRegister.vue';

// Mock socket.io
const mockSocket = {
  emit: jest.fn(),
  disconnect: jest.fn(),
};

global.fetch = jest.fn();

jest.mock('socket.io-client', () => ({
  io: () => mockSocket,
}));

describe('UserRegister.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UserRegister);
    jest.clearAllMocks();
    global.fetch.mockClear();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('Validação de formulário', () => {
    it('deve validar e-mail inválido', async () => {
      wrapper.vm.formData.username = 'testuser';
      wrapper.vm.formData.password = 'senha123';
      wrapper.vm.formData.email = 'emailinvalido';
      wrapper.vm.formData.nome = 'Teste Usuário';
      wrapper.vm.formData.cpf = '12345678901';
      wrapper.vm.formData.forma_pagamento = 'pix';
      await wrapper.vm.$nextTick();
      const form = wrapper.find('form');
      await form.trigger('submit');
      expect(wrapper.vm.msg).toBe('E-mail inválido. Informe um e-mail válido.');
      expect(wrapper.vm.success).toBe(false);
    });

    it('deve validar e-mail válido', async () => {
      jest.clearAllMocks();
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true, msg: 'Usuário cadastrado com sucesso!' })
      });
      wrapper.vm.formData.username = 'testuser';
      wrapper.vm.formData.password = 'senha123';
      wrapper.vm.formData.email = 'teste@teste.com';
      wrapper.vm.formData.nome = 'Teste Usuário';
      wrapper.vm.formData.cpf = '12345678909';
      wrapper.vm.formData.forma_pagamento = 'pix';
      wrapper.vm.autoLogin = jest.fn().mockResolvedValue();
      await wrapper.vm.$nextTick();
      const form = wrapper.find('form');
      await form.trigger('submit');
      expect(global.fetch).toHaveBeenCalled();
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.success).toBe(true);
      expect(wrapper.vm.msg).toBe('Usuário cadastrado com sucesso!');
    });

    it('deve validar CPF inválido (menos de 11 dígitos)', async () => {
      wrapper.vm.formData.username = 'testuser';
      wrapper.vm.formData.password = 'senha123';
      wrapper.vm.formData.email = 'teste@teste.com';
      wrapper.vm.formData.nome = 'Teste Usuário';
      wrapper.vm.formData.cpf = '12345678';
      wrapper.vm.formData.forma_pagamento = 'pix';
      await wrapper.vm.$nextTick();
      const form = wrapper.find('form');
      await form.trigger('submit');
      expect(wrapper.vm.msg).toBe('CPF inválido. Informe um CPF válido.');
      expect(wrapper.vm.success).toBe(false);
    });

    it('deve validar CPF inválido (sequência repetida)', async () => {
      wrapper.vm.formData.username = 'testuser';
      wrapper.vm.formData.password = 'senha123';
      wrapper.vm.formData.email = 'teste@teste.com';
      wrapper.vm.formData.nome = 'Teste Usuário';
      wrapper.vm.formData.cpf = '11111111111';
      wrapper.vm.formData.forma_pagamento = 'pix';
      await wrapper.vm.$nextTick();
      const form = wrapper.find('form');
      await form.trigger('submit');
      expect(wrapper.vm.msg).toBe('CPF inválido. Informe um CPF válido.');
      expect(wrapper.vm.success).toBe(false);
    });

    it('deve aceitar CPF válido', async () => {
      jest.clearAllMocks();
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true, msg: 'Usuário cadastrado com sucesso!' })
      });
      wrapper.vm.formData.username = 'testuser';
      wrapper.vm.formData.password = 'senha123';
      wrapper.vm.formData.email = 'teste@teste.com';
      wrapper.vm.formData.nome = 'Teste Usuário';
      wrapper.vm.formData.cpf = '52998224725'; // CPF válido
      wrapper.vm.formData.forma_pagamento = 'pix';
      wrapper.vm.autoLogin = jest.fn().mockResolvedValue();
      await wrapper.vm.$nextTick();
      const form = wrapper.find('form');
      await form.trigger('submit');
      expect(global.fetch).toHaveBeenCalled();
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.success).toBe(true);
      expect(wrapper.vm.msg).toBe('Usuário cadastrado com sucesso!');
    });
  });

  describe('Login automático e redirecionamento', () => {
    it('deve redirecionar para dashboard após cadastro e login automático', async () => {
      jest.clearAllMocks();
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ok: true, msg: 'Usuário cadastrado com sucesso!' })
      });
      const pushMock = jest.fn();
      wrapper.vm.$router = { push: pushMock };
      wrapper.vm.formData.username = 'testuser';
      wrapper.vm.formData.password = 'senha123';
      wrapper.vm.formData.email = 'teste@teste.com';
      wrapper.vm.formData.nome = 'Teste Usuário';
      wrapper.vm.formData.cpf = '52998224725';
      wrapper.vm.formData.forma_pagamento = 'pix';
      wrapper.vm.autoLogin = jest.fn().mockResolvedValue();
      await wrapper.vm.$nextTick();
      const form = wrapper.find('form');
      await form.trigger('submit');
      expect(global.fetch).toHaveBeenCalled();
      await wrapper.vm.$nextTick();
      expect(pushMock).toHaveBeenCalledWith('/dashboard');
    });
  });
}); 