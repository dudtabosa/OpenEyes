<template>
  <div class="landing-page">
    <!-- Header/Navigation -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div class="navbar-brand">
          <div class="logo">
            <i class="fas fa-eye"></i>
            <span>OpenEyes</span>
          </div>
        </div>
        
        <div class="navbar-nav ms-auto">
          <a class="nav-link" href="#features">Recursos</a>
          <a class="nav-link" href="#testimonials">Depoimentos</a>
          <a class="nav-link" href="#integrations">Integrações</a>
          <a class="nav-link" href="#pricing">Preços</a>
          <a class="nav-link" href="#faq">FAQ</a>
          <button class="btn btn-outline-primary me-2" @click="goToLogin">
            Login
          </button>
          <button class="btn btn-primary" @click="goToSignup">
            Cadastro
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 mx-auto text-center hero-content">
            <h1 class="hero-title">
              Monitoramento <span class="gradient-text">Inteligente</span>,
              <br>
              Operação <span class="gradient-text">Impecável</span>.
            </h1>
            <p class="hero-subtitle">
              OpenEyes é a plataforma completa para monitoramento de infraestrutura, aplicações e serviços. Tenha visibilidade total, alertas proativos e relatórios detalhados para garantir a máxima disponibilidade.
            </p>
            <div class="hero-buttons justify-content-center">
              <button class="btn btn-primary btn-lg" @click="scrollToPricing">Começar Agora</button>
              <button class="btn btn-outline-primary btn-lg" @click="openDemo">Ver Demo</button>
            </div>
            <div class="hero-stats justify-content-center">
              <div class="stat">
                <span class="stat-number">50k+</span>
                <span class="stat-label">Usuários Ativos</span>
              </div>
              <div class="stat">
                <span class="stat-number">1M+</span>
                <span class="stat-label">Servidores Monitorados</span>
              </div>
              <div class="stat">
                <span class="stat-number">99.9%</span>
                <span class="stat-label">Uptime Garantido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Estatísticas -->
    <section class="stats">
      <div class="container">
        <div class="section-header text-center">
          <h2>Números que Impressionam</h2>
          <p>Confira os resultados que nossos clientes alcançaram com o OpenEyes</p>
        </div>
        
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4" v-for="(stat, index) in stats" :key="index" style="--animation-order: index">
            <div class="stat-card">
              <div class="stat-icon">
                <i :class="stat.icon"></i>
              </div>
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-description">{{ stat.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
      <div class="container">
        <div class="section-header text-center">
          <h2>Recursos Poderosos</h2>
          <p>Tudo que você precisa para monitorar sua infraestrutura</p>
        </div>
        
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>Monitoramento em Tempo Real</h3>
              <p>Acompanhe o desempenho de seus sistemas com métricas em tempo real e histórico detalhado.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-bell"></i>
              </div>
              <h3>Alertas Inteligentes</h3>
              <p>Receba notificações instantâneas via email, SMS, Slack, Discord, WhatsApp e muito mais.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3>App Mobile</h3>
              <p>Monitore seus sistemas de qualquer lugar com nosso app mobile nativo para iOS e Android.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Segurança Avançada</h3>
              <p>Autenticação 2FA, criptografia SSL/TLS e compliance com as principais normas de segurança.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-code"></i>
              </div>
              <h3>API Completa</h3>
              <p>Integre o OpenEyes com suas ferramentas favoritas através da nossa API RESTful completa.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>Equipe Colaborativa</h3>
              <p>Compartilhe dashboards, configure permissões e trabalhe em equipe de forma eficiente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
      <div class="container">
        <div class="section-header text-center">
          <h2>O que nossos clientes dizem</h2>
          <p>Empresas que confiam no OpenEyes para monitorar sua infraestrutura</p>
        </div>
        
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="(testimonial, index) in testimonials" :key="index" style="--animation-order: index">
            <div class="testimonial-card">
              <div class="testimonial-rating">
                <i class="fas fa-star" v-for="n in 5" :key="n"></i>
              </div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <i :class="testimonial.avatar"></i>
                </div>
                <div class="author-info">
                  <h4>{{ testimonial.name }}</h4>
                  <p>{{ testimonial.role }}</p>
                  <span class="company">{{ testimonial.company }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integrations Section -->
    <section class="integrations" id="integrations">
      <div class="container">
        <div class="section-header text-center">
          <h2>Integrações Populares</h2>
          <p>Conecte-se com suas ferramentas favoritas</p>
        </div>
        
        <div class="row">
          <div class="col-lg-12">
            <div class="integration-categories">
              <div class="category-section">
                <h4>Comunicação</h4>
                <div class="integration-grid">
                  <div class="integration-item" v-for="(integration, index) in communicationIntegrations" :key="index" style="--animation-order: index">
                    <i :class="integration.icon"></i>
                    <span>{{ integration.name }}</span>
                  </div>
                </div>
              </div>
              
              <div class="category-section">
                <h4>DevOps & Ferramentas</h4>
                <div class="integration-grid">
                  <div class="integration-item" v-for="(integration, index) in devopsIntegrations" :key="index" style="--animation-order: index">
                    <i :class="integration.icon"></i>
                    <span>{{ integration.name }}</span>
                  </div>
                </div>
              </div>
              
              <div class="category-section">
                <h4>Cloud & Infraestrutura</h4>
                <div class="integration-grid">
                  <div class="integration-item" v-for="(integration, index) in cloudIntegrations" :key="index" style="--animation-order: index">
                    <i :class="integration.icon"></i>
                    <span>{{ integration.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing" id="pricing">
      <div class="container">
        <div class="section-header text-center">
          <h2>Planos Simples e Transparentes</h2>
          <p>Escolha o plano ideal para sua infraestrutura</p>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="pricing-card">
              <div class="pricing-header">
                <h3>Starter</h3>
                <p>Perfeito para pequenas equipes</p>
              </div>
              <div class="price">
                <span class="currency">R$</span>
                <span class="amount">49</span>
                <span class="period">/mês</span>
              </div>
              <div class="pricing-features">
                <ul>
                  <li><i class="fas fa-check"></i> Até 10 monitores</li>
                  <li><i class="fas fa-check"></i> Alertas por email</li>
                  <li><i class="fas fa-check"></i> Dashboard básico</li>
                  <li><i class="fas fa-check"></i> Histórico de 30 dias</li>
                  <li><i class="fas fa-check"></i> Suporte por email</li>
                </ul>
              </div>
              <button class="btn btn-outline-primary w-100">Escolher Plano</button>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="pricing-card featured">
              <div class="pricing-badge">Mais Popular</div>
              <div class="pricing-header">
                <h3>Professional</h3>
                <p>Ideal para empresas em crescimento</p>
              </div>
              <div class="price">
                <span class="currency">R$</span>
                <span class="amount">99</span>
                <span class="period">/mês</span>
              </div>
              <div class="pricing-features">
                <ul>
                  <li><i class="fas fa-check"></i> Até 50 monitores</li>
                  <li><i class="fas fa-check"></i> Alertas multi-canal</li>
                  <li><i class="fas fa-check"></i> Dashboard avançado</li>
                  <li><i class="fas fa-check"></i> API completa</li>
                  <li><i class="fas fa-check"></i> Histórico de 1 ano</li>
                  <li><i class="fas fa-check"></i> Suporte prioritário</li>
                  <li><i class="fas fa-check"></i> Relatórios personalizados</li>
                </ul>
              </div>
              <button class="btn btn-primary w-100">Escolher Plano</button>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="pricing-card">
              <div class="pricing-header">
                <h3>Enterprise</h3>
                <p>Para grandes organizações</p>
              </div>
              <div class="price">
                <span class="currency">R$</span>
                <span class="amount">199</span>
                <span class="period">/mês</span>
              </div>
              <div class="pricing-features">
                <ul>
                  <li><i class="fas fa-check"></i> Monitores ilimitados</li>
                  <li><i class="fas fa-check"></i> Suporte 24/7</li>
                  <li><i class="fas fa-check"></i> SLA garantido</li>
                  <li><i class="fas fa-check"></i> Onboarding dedicado</li>
                  <li><i class="fas fa-check"></i> Integrações customizadas</li>
                  <li><i class="fas fa-check"></i> Histórico ilimitado</li>
                </ul>
              </div>
              <button class="btn btn-outline-primary w-100">Falar com Vendas</button>
            </div>
          </div>
        </div>
        
        <div class="pricing-note text-center mt-4">
          <p>Não tem certeza? Experimente gratuitamente por 14 dias. Sem cartão de crédito necessário.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container text-center">
        <h2>Pronto para começar?</h2>
        <p>Junte-se a milhares de empresas que confiam no OpenEyes</p>
        <button class="btn btn-primary btn-lg">
          <i class="fas fa-rocket me-2"></i>
          Começar Gratuitamente por 14 dias
        </button>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq" id="faq">
      <div class="container">
        <div class="section-header text-center">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre o OpenEyes</p>
        </div>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="faq-item" v-for="(item, index) in faqItems" :key="index" style="--animation-order: index">
              <div class="faq-question" @click="toggleFAQ(index)">
                <h4>{{ item.question }}</h4>
                <i :class="item.isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
              </div>
              <div class="faq-answer" :class="{ 'open': item.isOpen }">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="footer-brand">
              <div class="logo">
                <i class="fas fa-eye"></i>
                <span>OpenEyes</span>
              </div>
              <p>Monitoramento inteligente para sua infraestrutura tecnológica.</p>
            </div>
          </div>
          <div class="col-lg-2">
            <h5>Produto</h5>
            <ul>
              <li><a href="#features">Recursos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Documentação</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h5>Empresa</h5>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h5>Suporte</h5>
            <ul>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Comunidade</a></li>
              <li><a href="#">Tutoriais</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Termos</a></li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 OpenEyes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

    <!-- Botão Voltar ao Topo -->
    <button 
      class="back-to-top" 
      @click="scrollToTop"
      :class="{ 'visible': showBackToTop }"
    >
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  mounted() {
    this.initFAQ();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      testimonials: [
        {
          text: "O OpenEyes revolucionou nossa forma de monitorar a infraestrutura. Os alertas inteligentes nos ajudaram a reduzir o tempo de inatividade em 90%.",
          name: "Carlos Silva",
          role: "CTO",
          company: "TechCorp",
          avatar: "fas fa-user"
        },
        {
          text: "Interface intuitiva e recursos poderosos. O app mobile nos permite monitorar tudo de qualquer lugar. Recomendo fortemente!",
          name: "Ana Costa",
          role: "DevOps Lead",
          company: "StartupXYZ",
          avatar: "fas fa-user"
        },
        {
          text: "Excelente suporte e documentação. A API é muito bem estruturada e nos permitiu integrar perfeitamente com nossos sistemas existentes.",
          name: "Roberto Santos",
          role: "Arquiteto de Sistemas",
          company: "MegaCorp",
          avatar: "fas fa-user"
        },
        {
          text: "Implementamos o OpenEyes em 3 dias e já vimos resultados imediatos. A facilidade de configuração é impressionante.",
          name: "Mariana Oliveira",
          role: "Gerente de TI",
          company: "E-commerce Plus",
          avatar: "fas fa-user"
        },
        {
          text: "O dashboard em tempo real nos dá visibilidade total da nossa infraestrutura. Os relatórios detalhados são perfeitos para apresentações.",
          name: "Pedro Almeida",
          role: "Diretor de Operações",
          company: "FinTech Solutions",
          avatar: "fas fa-user"
        },
        {
          text: "Custo-benefício excepcional. Conseguimos monitorar 50+ servidores com uma solução que cabe no nosso orçamento de startup.",
          name: "Juliana Ferreira",
          role: "Co-fundadora",
          company: "InnovateLab",
          avatar: "fas fa-user"
        }
      ],
      faqItems: [
        {
          question: "Como funciona o período gratuito?",
          answer: "Oferecemos 14 dias de teste gratuito com acesso completo a todos os recursos. Não é necessário cartão de crédito para começar.",
          isOpen: false
        },
        {
          question: "Quais tipos de monitoramento vocês oferecem?",
          answer: "Suportamos monitoramento de HTTP, ping, DNS, TCP, UDP, SMTP, POP3, IMAP, MySQL, PostgreSQL, MongoDB, Redis e muito mais.",
          isOpen: false
        },
        {
          question: "Posso integrar com minhas ferramentas atuais?",
          answer: "Sim! Oferecemos integrações nativas com Slack, Discord, Teams, WhatsApp, Telegram, PagerDuty, Jira e muitas outras ferramentas.",
          isOpen: false
        },
        {
          question: "Vocês oferecem suporte técnico?",
          answer: "Sim! Oferecemos suporte por email para todos os planos, e suporte 24/7 com SLA garantido para o plano Enterprise.",
          isOpen: false
        },
        {
          question: "Os dados são seguros?",
          answer: "Absolutamente! Utilizamos criptografia SSL/TLS, autenticação 2FA, e seguimos as melhores práticas de segurança da indústria.",
          isOpen: false
        },
        {
          question: "Posso monitorar servidores em diferentes localizações?",
          answer: "Sim! O OpenEyes possui pontos de monitoramento distribuídos globalmente, permitindo verificar a disponibilidade de seus serviços de diferentes regiões.",
          isOpen: false
        },
        {
          question: "Como funcionam os alertas inteligentes?",
          answer: "Nossos alertas usam machine learning para detectar padrões anômalos, reduzindo falsos positivos e alertando apenas quando há problemas reais.",
          isOpen: false
        },
        {
          question: "Posso personalizar os dashboards?",
          answer: "Sim! Você pode criar dashboards personalizados, adicionar widgets, configurar métricas específicas e organizar as informações como preferir.",
          isOpen: false
        },
        {
          question: "Existe um app mobile?",
          answer: "Sim! Temos apps nativos para iOS e Android que permitem monitorar seus serviços e receber alertas em tempo real, onde quer que esteja.",
          isOpen: false
        },
        {
          question: "Posso exportar relatórios?",
          answer: "Sim! Você pode exportar relatórios em PDF, CSV e Excel, com dados detalhados sobre uptime, performance e disponibilidade dos seus serviços.",
          isOpen: false
        }
      ],
      communicationIntegrations: [
        {
          name: "Slack",
          icon: "fab fa-slack"
        },
        {
          name: "Discord",
          icon: "fab fa-discord"
        },
        {
          name: "Teams",
          icon: "fab fa-microsoft"
        },
        {
          name: "WhatsApp",
          icon: "fab fa-whatsapp"
        },
        {
          name: "Telegram",
          icon: "fab fa-telegram"
        },
        {
          name: "PagerDuty",
          icon: "fab fa-pagerduty"
        }
      ],
      devopsIntegrations: [
        {
          name: "GitHub",
          icon: "fab fa-github"
        },
        {
          name: "Jira",
          icon: "fab fa-jira"
        },
        {
          name: "Jenkins",
          icon: "fab fa-jenkins"
        },
        {
          name: "Docker",
          icon: "fab fa-docker"
        },
        {
          name: "Kubernetes",
          icon: "fas fa-cube"
        },
        {
          name: "Terraform",
          icon: "fas fa-mountain"
        },
        {
          name: "Ansible",
          icon: "fas fa-cogs"
        },
        {
          name: "Grafana",
          icon: "fas fa-chart-line"
        }
      ],
      cloudIntegrations: [
        {
          name: "AWS",
          icon: "fab fa-aws"
        },
        {
          name: "Azure",
          icon: "fab fa-microsoft"
        },
        {
          name: "Google Cloud",
          icon: "fab fa-google"
        },
        {
          name: "DigitalOcean",
          icon: "fab fa-digital-ocean"
        },
        {
          name: "Heroku",
          icon: "fab fa-heroku"
        },
        {
          name: "Vercel",
          icon: "fas fa-rocket"
        },
        {
          name: "Netlify",
          icon: "fas fa-globe"
        },
        {
          name: "Cloudflare",
          icon: "fas fa-cloud"
        }
      ],
      stats: [
        {
          number: "99.9%",
          label: "Uptime Médio",
          description: "Nossos clientes alcançam",
          icon: "fas fa-chart-line"
        },
        {
          number: "90%",
          label: "Redução de Downtime",
          description: "Tempo de inatividade reduzido",
          icon: "fas fa-clock"
        },
        {
          number: "50K+",
          label: "Servidores Monitorados",
          description: "Em todo o mundo",
          icon: "fas fa-server"
        },
        {
          number: "24/7",
          label: "Monitoramento",
          description: "Sem interrupções",
          icon: "fas fa-shield-alt"
        }
      ],
      showBackToTop: false
    }
  },
  methods: {
    scrollToPricing() {
      document.getElementById('pricing').scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
    scrollToDemo() {
      // Implementar demo interativo
      console.log('Demo clicked');
    },
    goToLogin() {
      // Redirecionar para a página de login do dashboard
      window.open('http://localhost:3001/dashboard', '_blank');
    },
    goToSignup() {
      // Redirecionar para a página de cadastro
      this.$router.push('/register');
    },
    initFAQ() {
      const faqQuestions = document.querySelectorAll('.faq-question');
      
      faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
          const faqItem = question.parentElement;
          const answer = faqItem.querySelector('.faq-answer');
          const icon = question.querySelector('i');
          
          // Toggle active class
          faqItem.classList.toggle('active');
          
          // Toggle answer visibility
          if (faqItem.classList.contains('active')) {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
          } else {
            answer.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
          }
        });
      });
    },
    toggleFAQ(index) {
      this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    }
  }
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: var(--gradient-dark);
}

/* Navbar */
.navbar {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.logo i {
  font-size: 2rem;
  margin-right: 0.5rem;
}

.nav-link {
  color: var(--dark-font-color) !important;
  font-weight: 500;
  margin: 0 1rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--primary) !important;
}

.navbar .btn {
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.navbar .btn-outline-primary {
  border-color: var(--primary);
  color: var(--primary);
  background: transparent;
}

.navbar .btn-outline-primary:hover {
  background: var(--primary);
  color: var(--dark-bg);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
}

.navbar .btn-primary {
  background: var(--gradient-primary);
  border: none;
  color: var(--dark-bg);
}

.navbar .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.4);
}

/* Hero Section */
.hero {
  padding: 120px 0 80px;
  background: var(--gradient-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--dark-font-color);
}

.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--secondary-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--secondary-text);
  margin-top: 0.5rem;
}

/* Features Section */
.features {
  padding: 100px 0;
  background: var(--dark-bg2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.features::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.section-header {
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dark-font-color);
}

.section-header p {
  font-size: 1.1rem;
  color: var(--secondary-text);
}

.feature-card {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-color: var(--primary);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
}

.feature-icon::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.3;
  z-index: -1;
}

.feature-icon i {
  font-size: 2rem;
  color: var(--dark-bg);
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark-font-color);
}

.feature-card p {
  color: var(--secondary-text);
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials {
  padding: 100px 0;
  background: var(--gradient-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.testimonials::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.testimonial-card {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  color: var(--primary);
  opacity: 0.3;
  font-family: serif;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-color: var(--primary);
}

.testimonial-content {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.testimonial-content p {
  font-style: italic;
  color: var(--dark-font-color);
  line-height: 1.6;
  font-size: 1.1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.author-avatar {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  position: relative;
}

.author-avatar::after {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.3;
  z-index: -1;
}

.author-avatar i {
  font-size: 1.5rem;
  color: var(--dark-bg);
}

.author-info {
  text-align: left;
}

.author-info h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--dark-font-color);
}

.author-info span {
  font-size: 0.9rem;
  color: var(--secondary-text);
}

/* Integrations Section */
.integrations {
  padding: 100px 0;
  background: var(--dark-bg2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.integrations::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.integrations::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.integration-categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.category-section {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.integration-item {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  padding: 2rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.integration-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.integration-item:hover::before {
  transform: scaleX(1);
}

.integration-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-color: var(--primary);
}

.integration-item i {
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.integration-item:hover i {
  transform: scale(1.1);
}

.integration-item span {
  font-size: 1rem;
  font-weight: 600;
  color: var(--dark-font-color);
}

/* Pricing Section */
.pricing {
  padding: 100px 0;
  background: var(--gradient-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.pricing::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.pricing::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.pricing-card {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.pricing-card:hover::before {
  transform: scaleX(1);
}

.pricing-card.featured {
  border-color: var(--primary);
  transform: scale(1.05);
  position: relative;
}

.pricing-card.featured::before {
  transform: scaleX(1);
}

.pricing-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-primary);
  color: var(--dark-bg);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 10;
}

.pricing-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-font-color);
}

.pricing-header p {
  color: var(--secondary-text);
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.price {
  margin-bottom: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.currency {
  font-size: 1.5rem;
  color: var(--secondary-text);
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
}

.period {
  font-size: 1rem;
  color: var(--secondary-text);
}

.pricing-features ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.pricing-features li {
  padding: 0.75rem 0;
  color: var(--dark-font-color);
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.pricing-features li:last-child {
  border-bottom: none;
}

.pricing-features i {
  color: var(--primary);
  margin-right: 0.75rem;
  font-size: 0.9rem;
}

.pricing-note {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.pricing-note p {
  color: var(--secondary-text);
  font-size: 1rem;
}

/* CTA Section */
.cta {
  padding: 100px 0;
  background: var(--gradient-card);
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.cta h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dark-font-color);
}

.cta p {
  font-size: 1.1rem;
  color: var(--secondary-text);
  margin-bottom: 2rem;
}

.cta-note {
  font-size: 0.9rem;
  color: var(--secondary-text);
  margin-top: 1rem;
}

/* FAQ Section */
.faq {
  padding: 100px 0;
  background: var(--gradient-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.faq::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.faq::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
}

.faq-item {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.1);
}

.faq-question {
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
}

.faq-question:hover {
  background: rgba(255, 215, 0, 0.05);
}

.faq-question h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.faq-question:hover h4 {
  color: #FFD700;
}

.faq-question i {
  color: var(--text-secondary);
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.faq-question:hover i {
  color: #FFD700;
  transform: scale(1.1);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(-10px);
}

.faq-answer.open {
  max-height: 200px;
  opacity: 1;
  transform: translateY(0);
}

.faq-answer p {
  padding: 0 1.25rem 1.25rem;
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
}

/* Footer */
.footer {
  background: var(--dark-bg);
  padding: 60px 0 20px;
  border-top: 1px solid var(--dark-border-color);
}

.footer-brand p {
  color: var(--secondary-text);
  margin-top: 1rem;
}

.footer h5 {
  color: var(--dark-font-color);
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 0.5rem;
}

.footer ul li a {
  color: var(--secondary-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer ul li a:hover {
  color: var(--primary);
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--dark-border-color);
  text-align: center;
  color: var(--secondary-text);
}

/* Responsive */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .integration-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .stat {
    flex: none;
  }
  
  .pricing-card.featured {
    transform: none;
    margin-top: 2rem;
  }
  
  .navbar-nav {
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
  
  .navbar .btn {
    margin: 0.5rem 0;
    width: 100%;
    max-width: 200px;
  }
  
  .dashboard-preview {
    max-width: 350px;
  }
  
  .integration-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 2rem;
    text-align: center;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    text-align: center;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-buttons .btn {
    margin: 0.5rem 0;
    width: 100%;
    max-width: 280px;
  }
  
  .hero-stats {
    margin-top: 2rem;
  }
  
  .features,
  .testimonials,
  .integrations,
  .pricing,
  .faq,
  .cta {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
  
  .feature-card,
  .testimonial-card,
  .pricing-card {
    padding: 1.5rem;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
  }
  
  .feature-icon i {
    font-size: 1.5rem;
  }
  
  .dashboard-preview {
    max-width: 300px;
    padding: 1rem;
  }
  
  .metric-card {
    padding: 0.75rem;
  }
  
  .metric-card i {
    font-size: 1.2rem;
  }
  
  .integration-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .integration-item {
    padding: 1.5rem 1rem;
  }
  
  .integration-item i {
    font-size: 2rem;
  }
  
  .pricing-badge {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
  
  .amount {
    font-size: 2.5rem;
  }
  
  .faq-question h4 {
    font-size: 1rem;
  }
  
  .faq-answer p {
    font-size: 0.9rem;
  }
  
  .testimonial-author {
    flex-direction: column;
    text-align: center;
  }
  
  .author-avatar {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .author-info {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .feature-card h3,
  .testimonial-card h3,
  .pricing-card h3 {
    font-size: 1.3rem;
  }
  
  .integration-grid {
    grid-template-columns: 1fr;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .integration-item {
    padding: 1.5rem;
  }
  
  .amount {
    font-size: 2rem;
  }
  
  .currency {
    font-size: 1.2rem;
  }
  
  .period {
    font-size: 0.9rem;
  }
  
  .pricing-features li {
    font-size: 0.9rem;
  }
  
  .faq-item {
    padding: 1.5rem;
  }
  
  .faq-question h4 {
    font-size: 0.95rem;
  }
  
  .faq-answer p {
    font-size: 0.9rem;
  }
  
  .cta h2 {
    font-size: 2rem;
  }
  
  .cta p {
    font-size: 1rem;
  }
  
  .cta .btn {
    width: 100%;
    max-width: 280px;
  }
  
  .footer {
    text-align: center;
  }
  
  .footer .col-lg-2,
  .footer .col-lg-4 {
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.6rem;
  }
  
  .hero-buttons .btn {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }
  
  .dashboard-preview {
    max-width: 280px;
    padding: 0.75rem;
  }
  
  .preview-content {
    gap: 0.75rem;
  }
  
  .metric-card {
    padding: 0.5rem;
  }
  
  .metric-card i {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  
  .metric-name {
    font-size: 0.8rem;
  }
  
  .metric-value {
    font-size: 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
}

/* Animações e Transições */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

/* Aplicando animações */
.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero-stats {
  animation: fadeInUp 1s ease-out 0.3s both;
}

.dashboard-preview {
  animation: none;
}

.feature-card {
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: calc(var(--animation-order) * 0.1s);
}

.testimonial-card {
  animation: scaleIn 0.8s ease-out both;
  animation-delay: calc(var(--animation-order) * 0.2s);
}

.integration-item {
  animation: fadeInUp 0.6s ease-out both;
  animation-delay: calc(var(--animation-order) * 0.1s);
}

.pricing-card {
  animation: slideInFromBottom 0.8s ease-out both;
  animation-delay: calc(var(--animation-order) * 0.2s);
}

.faq-item {
  animation: fadeInUp 0.6s ease-out both;
  animation-delay: calc(var(--animation-order) * 0.1s);
}

.cta-content {
  animation: fadeInUp 1s ease-out;
}

/* Efeitos hover melhorados */
.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, #FFD700, #FFA500);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(255, 215, 0, 0.1);
  transition: all 0.3s ease;
}

.integration-item:hover {
  transform: translateY(-5px) scale(1.05);
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1));
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.integration-item:hover i {
  transform: scale(1.2);
  color: #FFD700;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(255, 215, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.pricing-card.featured:hover {
  transform: translateY(-15px) scale(1.02);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn:active {
  transform: translateY(0);
  transition: all 0.1s ease;
}

/* Efeitos especiais */
.hero-title {
  background: linear-gradient(135deg, #FFD700, #FFA500, #FFD700);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
}

.dashboard-preview {
  position: relative;
  overflow: hidden;
}

.dashboard-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
  transition: left 0.5s;
}

.dashboard-preview:hover::before {
  left: 100%;
}

/* Animações de loading */
.loading-shimmer {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Melhorias nas transições */
* {
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

/* Efeitos de foco melhorados */
.btn:focus,
.nav-link:focus {
  outline: 2px solid #FFD700;
  outline-offset: 2px;
  transition: outline 0.2s ease;
}

/* Animações de entrada para elementos dinâmicos */
.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Efeitos de partículas no hero */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
  animation: float 6s ease-in-out infinite;
  pointer-events: none;
}

/* Stats Section */
.stats {
  padding: 100px 0;
  background: var(--gradient-section);
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 165, 0, 0.05) 100%);
  pointer-events: none;
}

.stat-card {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  padding: 2.5rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #FFD700, #FFA500);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.stat-card:hover::before {
  transform: scaleX(1);
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.15);
}

.stat-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.1) rotate(5deg);
}

.stat-icon i {
  font-size: 2rem;
  color: #1a1a1a;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.stat-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  opacity: 0.8;
}

/* Category Section Styles */
.category-section h4 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.category-section h4::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, #FFD700, #FFA500);
  border-radius: 1px;
}

/* Botão Voltar ao Topo */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border: none;
  border-radius: 50%;
  color: #1a1a1a;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);
  background: linear-gradient(135deg, #FFA500, #FFD700);
}

.back-to-top:active {
  transform: translateY(-2px);
}

.back-to-top i {
  transition: transform 0.2s ease;
}

.back-to-top:hover i {
  transform: translateY(-2px);
}
</style> 