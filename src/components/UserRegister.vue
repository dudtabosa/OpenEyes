<template>
  <div class="user-register">
    <form @submit.prevent="register">
      <div>
        <label for="username">Usuário: *</label>
        <input v-model="formData.username" id="username" required />
      </div>
      <div>
        <label for="password">Senha: *</label>
        <input v-model="formData.password" id="password" type="password" required />
        <small class="password-hint">Mínimo 6 caracteres</small>
      </div>
      <div>
        <label for="email">Email: *</label>
        <input v-model="formData.email" id="email" type="email" required />
      </div>
      <div>
        <label for="nome">Nome Completo: *</label>
        <input v-model="formData.nome" id="nome" required />
      </div>
      <div>
        <label for="cpf">CPF: *</label>
        <input v-model="formData.cpf" id="cpf" placeholder="000.000.000-00" required />
      </div>
      <div>
        <label for="forma_pagamento">Forma de Pagamento: *</label>
        <select v-model="formData.forma_pagamento" id="forma_pagamento" required>
          <option value="">Selecione...</option>
          <option value="pix">PIX</option>
          <option value="cartao">Cartão de Crédito</option>
          <option value="boleto">Boleto</option>
          <option value="transferencia">Transferência Bancária</option>
        </select>
      </div>
      <button type="submit" :disabled="loading">
        {{ loading ? 'Cadastrando...' : 'Cadastrar' }}
      </button>
    </form>
    <div v-if="msg" :class="{'success': success, 'error': !success}">{{ msg }}</div>
  </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  name: "UserRegister",
  data() {
    return {
      formData: {
        username: "",
        password: "",
        email: "",
        nome: "",
        cpf: "",
        forma_pagamento: ""
      },
      msg: "",
      success: false,
      loading: false,
      socket: null,
    };
  },
  mounted() {
    this.socket = io();
  },
  methods: {
    async register() {
      this.msg = "";
      this.success = false;
      this.loading = true;
      
      try {
        // Validação básica
        if (!this.formData.username || !this.formData.password || !this.formData.email || 
            !this.formData.nome || !this.formData.cpf || !this.formData.forma_pagamento) {
          this.success = false;
          this.msg = "Todos os campos são obrigatórios.";
          return;
        }

        // Validação de senha
        if (this.formData.password.length < 6) {
          this.success = false;
          this.msg = "Senha deve ter pelo menos 6 caracteres.";
          return;
        }

        // Chamada REST para cadastro
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.formData)
        });
        
        if (!res.ok) {
          this.success = false;
          this.msg = "Erro ao conectar com o servidor.";
          this.loading = false;
          return;
        }
        const data = await res.json();
        if (data.ok) {
          this.success = true;
          this.msg = data.msg;
          // Login automático após cadastro
          try {
            await this.autoLogin();
          } catch (error) {
            this.msg = "Cadastro realizado com sucesso! Faça login para continuar.";
          }
        } else {
          this.success = false;
          this.msg = data.msg;
        }
      } catch (e) {
        this.success = false;
        this.msg = "Erro ao conectar com o servidor.";
        console.error("Erro no cadastro:", e);
      }
      
      this.loading = false;
    },
    async autoLogin() {
      return new Promise((resolve, reject) => {
        this.socket.emit("login", {
          username: this.formData.username,
          password: this.formData.password,
        }, (loginRes) => {
          if (loginRes.ok) {
            this.$emit('registration-success');
            resolve();
          } else {
            reject(new Error(loginRes.msg));
          }
        });
      });
    },
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.disconnect();
    }
  },
};
</script>

<style scoped>
.user-register {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  color: #222;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
}

.user-register label {
  display: block;
  margin-bottom: 0.2rem;
  color: #222;
  font-weight: 500;
}

.user-register input,
.user-register select {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #bbb;
  color: #222;
  background: #f9f9f9;
  font-size: 14px;
}

.user-register input:focus,
.user-register select:focus {
  outline: 2px solid #1976d2;
  background: #fff;
}

.user-register .password-hint {
  display: block;
  font-size: 12px;
  color: #666;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

.user-register button {
  width: 100%;
  padding: 0.7rem;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.user-register button:hover:not(:disabled) {
  background: #1565c0;
}

.user-register button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.user-register .success {
  color: #4caf50;
  margin-top: 1rem;
  padding: 0.5rem;
  background: #e8f5e8;
  border-radius: 4px;
  text-align: center;
}

.user-register .error {
  color: #f44336;
  margin-top: 1rem;
  padding: 0.5rem;
  background: #ffebee;
  border-radius: 4px;
  text-align: center;
}
</style> 