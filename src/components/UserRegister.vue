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
        <input
          :value="cpfFormatted"
          @input="onCpfInput"
          id="cpf"
          placeholder="000.000.000-00"
          required
          maxlength="14"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
        />
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
export default {
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
      redirectTimeout: null,
    };
  },
  computed: {
    cpfFormatted() {
      // Formata o CPF para 000.000.000-00
      const v = this.formData.cpf.replace(/\D/g, "").slice(0, 11);
      if (!v) return "";
      if (v.length <= 3) return v;
      if (v.length <= 6) return v.slice(0,3) + '.' + v.slice(3);
      if (v.length <= 9) return v.slice(0,3) + '.' + v.slice(3,6) + '.' + v.slice(6);
      return v.slice(0,3) + '.' + v.slice(3,6) + '.' + v.slice(6,9) + '-' + v.slice(9,11);
    }
  },
  methods: {
    async register() {
      this.msg = "";
      this.success = false;
      this.loading = true;
      
      // Validação básica
      if (!this.formData.username || !this.formData.password || !this.formData.email || 
          !this.formData.nome || !this.formData.cpf || !this.formData.forma_pagamento) {
        this.success = false;
        this.msg = "Todos os campos são obrigatórios.";
        this.loading = false;
        return;
      }

      // Validação de senha
      if (this.formData.password.length < 6) {
        this.success = false;
        this.msg = "Senha deve ter pelo menos 6 caracteres.";
        this.loading = false;
        return;
      }

      // Validação de e-mail
      if (!this.validateEmail(this.formData.email)) {
        this.success = false;
        this.msg = "E-mail inválido. Informe um e-mail válido.";
        this.loading = false;
        return;
      }

      // Validação de CPF
      const cpf = this.formData.cpf.replace(/\D/g, "");
      if (cpf.length !== 11 || !this.isValidCPF(cpf)) {
        this.success = false;
        this.msg = "CPF inválido. Informe um CPF válido.";
        this.loading = false;
        return;
      }
      this.formData.cpf = cpf;

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
          // Redirecionar para dashboard após login automático
          this.$router.push('/dashboard');
        } catch (error) {
          this.msg = "Cadastro realizado com sucesso! Faça login para continuar.";
          // Redirecionar automaticamente após 2 segundos
          if (this.redirectTimeout) clearTimeout(this.redirectTimeout);
          this.redirectTimeout = setTimeout(() => {
            this.$router.push('/dashboard');
          }, 2000);
        }
      } else {
        this.success = false;
        this.msg = data.msg;
      }
      this.loading = false;
    },
    validateEmail(email) {
      // Validação simples: deve conter @ e terminar com .com
      return /.+@.+\..+/.test(email) && email.includes('@') && email.endsWith('.com');
    },
    isValidCPF(cpf) {
      // Algoritmo de validação de CPF
      if (cpf.length !== 11 || /^([0-9])\1+$/.test(cpf)) return false;
      let sum = 0;
      let rest;
      for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) rest = 0;
      if (rest !== parseInt(cpf.substring(9, 10))) return false;
      sum = 0;
      for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) rest = 0;
      if (rest !== parseInt(cpf.substring(10, 11))) return false;
      return true;
    },
    onCpfInput(e) {
      // Permite apenas números
      this.formData.cpf = e.target.value.replace(/\D/g, "").slice(0, 11);
    },
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.disconnect();
    }
    if (this.redirectTimeout) clearTimeout(this.redirectTimeout);
  }
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