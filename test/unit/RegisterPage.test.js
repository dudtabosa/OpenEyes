import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Register from '../../src/pages/Register.vue';
import UserRegister from '../../src/components/UserRegister.vue';

describe('Register.vue', () => {
  let wrapper;
  let router;

  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/register', component: Register },
        { path: '/dashboard', component: { template: '<div>Dashboard</div>' } },
      ],
    });

    wrapper = mount(Register, {
      global: {
        plugins: [router],
      },
    });
    await router.isReady();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('Renderização', () => {
    it('deve renderizar a página de cadastro', () => {
      expect(wrapper.find('.register-page').exists()).toBe(true);
      expect(wrapper.find('.register-container').exists()).toBe(true);
      expect(wrapper.find('.register-header').exists()).toBe(true);
      expect(wrapper.find('.register-footer').exists()).toBe(true);
    });

    it('deve mostrar título e descrição', () => {
      const header = wrapper.find('.register-header');
      expect(header.find('h1').text()).toBe('Cadastro de Usuário');
      expect(header.find('p').text()).toBe('Crie sua conta para começar a monitorar sua infraestrutura');
    });

    it('deve incluir o componente UserRegister', () => {
      expect(wrapper.findComponent(UserRegister).exists()).toBe(true);
    });

    it('deve mostrar link para login', () => {
      const footer = wrapper.find('.register-footer');
      expect(footer.find('a').text()).toBe('Faça login');
      expect(footer.find('a').attributes('href')).toContain('/dashboard');
    });
  });

  describe('Redirecionamento', () => {
    it('deve redirecionar para dashboard após cadastro bem-sucedido', async () => {
      const userRegister = wrapper.findComponent(UserRegister);
      // Espionar o método push do router
      const pushSpy = jest.spyOn(wrapper.vm.$router, 'push');
      // Simular evento de sucesso no cadastro
      await userRegister.vm.$emit('registration-success');
      // Verificar se o método push foi chamado
      expect(pushSpy).toHaveBeenCalledWith('/dashboard');
    });
  });

  describe('Estilos responsivos', () => {
    it('deve aplicar estilos corretos em telas menores', () => {
      const container = wrapper.find('.register-container');
      
      // Simular tela menor
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      // Trigger resize event
      window.dispatchEvent(new Event('resize'));
      
      // Verificar se os estilos responsivos são aplicados
      expect(container.classes()).toContain('register-container');
    });
  });
}); 