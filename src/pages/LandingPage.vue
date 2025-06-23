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
          <a class="nav-link" href="#pricing">Preços</a>
          <a class="nav-link" href="#contact">Contato</a>
          <button class="btn btn-primary ms-3" @click="scrollToPricing">
            Começar Agora
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">
              Monitore sua infraestrutura com
              <span class="gradient-text">inteligência</span>
            </h1>
            <p class="hero-subtitle">
              OpenEyes oferece monitoramento em tempo real, alertas inteligentes e insights 
              poderosos para manter seus sistemas sempre funcionando perfeitamente.
            </p>
            <div class="hero-buttons">
              <button class="btn btn-primary btn-lg me-3">
                <i class="fas fa-rocket me-2"></i>
                Começar Gratuitamente
              </button>
              <button class="btn btn-outline-primary btn-lg">
                <i class="fas fa-play me-2"></i>
                Ver Demo
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image">
              <div class="dashboard-preview">
                <div class="preview-header">
                  <div class="preview-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="preview-content">
                  <div class="metric-card">
                    <i class="fas fa-server"></i>
                    <div class="metric-info">
                      <div class="metric-name">Servidores</div>
                      <div class="metric-value">12 Online</div>
                    </div>
                  </div>
                  <div class="metric-card">
                    <i class="fas fa-database"></i>
                    <div class="metric-info">
                      <div class="metric-name">Databases</div>
                      <div class="metric-value">8 Ativos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
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
              <p>Acompanhe o desempenho de seus sistemas com métricas em tempo real.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-bell"></i>
              </div>
              <h3>Alertas Inteligentes</h3>
              <p>Receba notificações instantâneas via email, SMS, Slack ou WhatsApp.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3>App Mobile</h3>
              <p>Monitore seus sistemas de qualquer lugar com nosso app mobile.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing">
      <div class="container">
        <div class="section-header text-center">
          <h2>Planos Simples e Transparentes</h2>
          <p>Escolha o plano ideal para sua infraestrutura</p>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="pricing-card">
              <h3>Starter</h3>
              <div class="price">
                <span class="currency">R$</span>
                <span class="amount">49</span>
                <span class="period">/mês</span>
              </div>
              <ul>
                <li><i class="fas fa-check"></i> Até 10 monitores</li>
                <li><i class="fas fa-check"></i> Alertas por email</li>
                <li><i class="fas fa-check"></i> Dashboard básico</li>
              </ul>
              <button class="btn btn-outline-primary w-100">Escolher Plano</button>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="pricing-card featured">
              <h3>Professional</h3>
              <div class="price">
                <span class="currency">R$</span>
                <span class="amount">99</span>
                <span class="period">/mês</span>
              </div>
              <ul>
                <li><i class="fas fa-check"></i> Até 50 monitores</li>
                <li><i class="fas fa-check"></i> Alertas multi-canal</li>
                <li><i class="fas fa-check"></i> Dashboard avançado</li>
                <li><i class="fas fa-check"></i> API completa</li>
              </ul>
              <button class="btn btn-primary w-100">Escolher Plano</button>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="pricing-card">
              <h3>Enterprise</h3>
              <div class="price">
                <span class="currency">R$</span>
                <span class="amount">199</span>
                <span class="period">/mês</span>
              </div>
              <ul>
                <li><i class="fas fa-check"></i> Monitores ilimitados</li>
                <li><i class="fas fa-check"></i> Suporte 24/7</li>
                <li><i class="fas fa-check"></i> SLA garantido</li>
              </ul>
              <button class="btn btn-outline-primary w-100">Falar com Vendas</button>
            </div>
          </div>
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
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    scrollToPricing() {
      document.getElementById('pricing').scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
    scrollToDemo() {
      // Implementar demo interativo
      console.log('Demo clicked');
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

/* Hero Section */
.hero {
  padding: 120px 0 80px;
  background: var(--gradient-dark);
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
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--secondary-text);
}

/* Dashboard Preview */
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard-preview {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
}

.preview-header {
  margin-bottom: 1.5rem;
}

.preview-dots {
  display: flex;
  gap: 0.5rem;
}

.preview-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--dark-border-color);
}

.preview-dots span:nth-child(1) { background: #FF6B6B; }
.preview-dots span:nth-child(2) { background: #FFA726; }
.preview-dots span:nth-child(3) { background: #4CAF50; }

.preview-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.metric-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  border: 1px solid var(--dark-border-color);
}

.metric-card i {
  font-size: 1.5rem;
  color: var(--primary);
  margin-right: 1rem;
}

.metric-name {
  font-size: 0.9rem;
  color: var(--secondary-text);
}

.metric-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark-font-color);
}

/* Features Section */
.features {
  padding: 80px 0;
  background: var(--dark-bg2);
}

.section-header {
  margin-bottom: 4rem;
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
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
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

/* Pricing Section */
.pricing {
  padding: 80px 0;
  background: var(--gradient-dark);
}

.pricing-card {
  background: var(--gradient-card);
  border: 1px solid var(--dark-border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
}

.pricing-card.featured {
  border-color: var(--primary);
  transform: scale(1.05);
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
}

.pricing-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark-font-color);
}

.price {
  margin-bottom: 1rem;
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

.pricing-header p {
  color: var(--secondary-text);
  margin-bottom: 2rem;
}

.pricing-features ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.pricing-features li {
  padding: 0.5rem 0;
  color: var(--dark-font-color);
  display: flex;
  align-items: center;
}

.pricing-features i {
  color: var(--primary);
  margin-right: 0.5rem;
}

/* CTA Section */
.cta {
  padding: 80px 0;
  background: var(--gradient-card);
  text-align: center;
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
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .pricing-card.featured {
    transform: none;
  }
  
  .navbar-nav {
    margin-top: 1rem;
  }
}
</style> 