// Animations.js - Sistema de animações para o site SCAE

class Animations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupScrollAnimations();
    this.setupHeroAnimations();
    this.setupChartAnimations();
    this.setupCounterAnimations();
    this.setupHoverEffects();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Delay de 1ms conforme Figma
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, 1);
        }
      });
    }, this.observerOptions);

    // Elementos que devem ser animados ao entrar na viewport
    const animatedElements = document.querySelectorAll(`
      .beneficio-card,
      .processo-card,
      .numero-item,
      .porque-scae-card,
      .faq-item,
      .banner-conteudo,
      .hero-card,
      .custom-footer,
      .cta-section
    `);

    animatedElements.forEach(el => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });
  }

  setupScrollAnimations() {
    // Animação de fade-in para seções
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      section.classList.add('section-animate');
      sectionObserver.observe(section);
    });
  }

  setupHeroAnimations() {
    // Animação sequencial para elementos do hero
    const heroElements = document.querySelectorAll(`
      .hero-tags,
      .hero-title,
      .hero-subtitle,
      .hero-btn
    `);

    heroElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      el.classList.add('hero-animate');
    });

    // Animação das tags do hero
   // this.animateHeroTags();
    
    // Efeito parallax suave no hero
    this.setupParallaxEffect();
    
    // Animação de typing no título
    //this.setupTypingEffect();
  }

  setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      // Aguardar um pouco antes de iniciar a animação de typing
      setTimeout(() => {
        heroTitle.classList.add('typing');
      }, 1000);
    }
  }

  setupParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content-wrapper');
    
    if (heroSection && heroContent) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        heroContent.style.transform = `translateY(${rate}px)`;
      });
    }
  }

  animateHeroTags() {
    const tags = document.querySelectorAll('.tag-item');
    
    tags.forEach((tag, index) => {
      setTimeout(() => {
        tag.classList.add('tag-pulse');
      }, index * 300);
    });
  }

  setupChartAnimations() {
    const bars = document.querySelectorAll('.bar');
    
    const chartObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateChartBars();
        }
      });
    }, { threshold: 0.5 });

    const chartContainer = document.querySelector('.hero-card-chart');
    if (chartContainer) {
      chartObserver.observe(chartContainer);
    }
  }

  animateChartBars() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach((bar, index) => {
      setTimeout(() => {
        // Capturar a altura original do CSS
        const originalHeight = bar.style.height;
        bar.setAttribute('data-height', originalHeight);
        
        // Animar a barra
        bar.classList.add('bar-animate');
      }, index * 200);
    });
  }

  setupCounterAnimations() {
    const counters = document.querySelectorAll('.numero-valor');
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  animateCounter(element) {
    const target = element.textContent;
    const isNumber = /^[\d,]+/.test(target);
    
    if (isNumber) {
      const finalValue = target.replace(/[^\d]/g, '');
      let currentValue = 0;
      const increment = finalValue / 50;
      
      // Adicionar classe de animação
      element.classList.add('animating');
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(timer);
          
          // Remover classe de animação após completar
          setTimeout(() => {
            element.classList.remove('animating');
          }, 600);
        }
        
        // Formatar o número
        let displayValue = Math.floor(currentValue).toLocaleString();
        if (target.includes('K')) {
          displayValue = Math.floor(currentValue / 1000) + 'K';
        } else if (target.includes('M')) {
          displayValue = Math.floor(currentValue / 1000000) + 'M';
        }
        
        element.textContent = displayValue;
      }, 30);
    }
  }

  setupHoverEffects() {
    // Efeito hover para cards
    const cards = document.querySelectorAll('.beneficio-card, .processo-card, .porque-scae-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('card-hover');
      });
      
      card.addEventListener('mouseleave', () => {
        card.classList.remove('card-hover');
      });
    });

    // Efeito hover para botões
    const buttons = document.querySelectorAll('.btn-primary, .cta-btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.classList.add('button-hover');
      });
      
      button.addEventListener('mouseleave', () => {
        button.classList.remove('button-hover');
      });
    });
  }

  // Animação de loading para a página
  setupPageLoadAnimation() {
    document.body.classList.add('page-loaded');
  }
}

// Inicializar animações quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const animations = new Animations();
  
  // Animação de carregamento da página
  setTimeout(() => {
    animations.setupPageLoadAnimation();
  }, 100);
});

// Animação suave para links de navegação
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Adicionar efeito visual ao link clicado
        link.classList.add('link-clicked');
        setTimeout(() => {
          link.classList.remove('link-clicked');
        }, 300);
        
        // Scroll suave com offset para o header fixo
        const headerHeight = document.querySelector('.scae-header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Animação para o menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('openMenu');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeMenu = document.getElementById('closeMenu');
  const backdrop = document.getElementById('drawerBackdrop');
  
  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('drawer-open');
      backdrop.classList.add('backdrop-visible');
      document.body.style.overflow = 'hidden';
      
      // Animar os itens do menu
      const menuItems = mobileDrawer.querySelectorAll('li');
      menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('menu-item-animate');
      });
    });
    
    const closeDrawer = () => {
      mobileDrawer.classList.remove('drawer-open');
      backdrop.classList.remove('backdrop-visible');
      document.body.style.overflow = '';
      
      // Remover animações dos itens
      const menuItems = mobileDrawer.querySelectorAll('li');
      menuItems.forEach(item => {
        item.classList.remove('menu-item-animate');
      });
    };
    
    if (closeMenu) closeMenu.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
  }
}); 