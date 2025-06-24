<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-header">
        <h1>Cadastro de Usuário</h1>
        <p>Crie sua conta para começar a monitorar sua infraestrutura</p>
      </div>
      
      <UserRegister @registration-success="onRegistrationSuccess" />
      
      <div class="register-footer">
        <p>Já tem uma conta? <router-link to="/dashboard">Faça login</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import UserRegister from '../components/UserRegister.vue';

export default {
  name: 'Register',
  components: {
    UserRegister
  },
  methods: {
    onRegistrationSuccess() {
      // Redirecionar para o dashboard após cadastro bem-sucedido
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.register-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  backdrop-filter: blur(10px);
}

.register-header {
  text-align: center;
  margin-bottom: 2rem;
}

.register-header h1 {
  color: #FFD700;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.register-header p {
  color: #cccccc;
  font-size: 1.1rem;
}

.register-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.register-footer p {
  color: #cccccc;
  font-size: 1rem;
}

.register-footer a {
  color: #FFD700;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.register-footer a:hover {
  color: #FFA500;
}

@media (max-width: 768px) {
  .register-container {
    padding: 2rem;
  }
  
  .register-header h1 {
    font-size: 2rem;
  }
}
</style> 