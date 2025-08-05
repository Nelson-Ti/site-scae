  // faq.js
  // FAQ accordion functionality
  // Troca o SVG da seta conforme aberto/fechado
 



  // Função para destacar menu ativo baseado no scroll (desktop e mobile)
  function highlightActiveMenu() {
    const sections = document.querySelectorAll('section[id]');
    const menuLinks = document.querySelectorAll('.menu a');
    const drawerLinks = document.querySelectorAll('.drawer-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Offset para melhor detecção
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });
    
    // Remove classe ativa de todos os links (desktop e mobile)
    menuLinks.forEach(link => {
      link.classList.remove('active');
    });
    drawerLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Adiciona classe ativa ao link correspondente (desktop e mobile)
    if (currentSection) {
      const activeDesktopLink = document.querySelector(`.menu a[href="#${currentSection}"]`);
      const activeMobileLink = document.querySelector(`.drawer-menu a[href="#${currentSection}"]`);
      
      if (activeDesktopLink) {
        activeDesktopLink.classList.add('active');
      }
      if (activeMobileLink) {
        activeMobileLink.classList.add('active');
      }
    }
  }

  // Adiciona listener para scroll
  window.addEventListener('scroll', highlightActiveMenu);

  // Executa uma vez ao carregar a página
  document.addEventListener('DOMContentLoaded', highlightActiveMenu);

  document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
      btn.addEventListener('click', function() {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        // Fecha todos
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
          openItem.classList.remove('open');
          // seta para baixo 
          const arrow = openItem.querySelector('.faq-arrow img');
          if (arrow) arrow.src = 'images/faq/arrow_down.svg';
        });
        // Abre se não estava aberto
        if (!isOpen) {
          item.classList.add('open');
          // seta para cima
          const arrow = item.querySelector('.faq-arrow img');
          if (arrow) arrow.src = 'images/faq/arrow_up.svg';
        }
      });
    });
  
    // Menu mobile
    document.getElementById('openMenu').onclick = function() {
      document.getElementById('mobileDrawer').classList.add('open');
      document.getElementById('drawerBackdrop').classList.add('open');
    };
    document.getElementById('closeMenu').onclick = function() {
      document.getElementById('mobileDrawer').classList.remove('open');
      document.getElementById('drawerBackdrop').classList.remove('open');
    };
    document.getElementById('drawerBackdrop').onclick = function() {
      document.getElementById('mobileDrawer').classList.remove('open');
      document.getElementById('drawerBackdrop').classList.remove('open');
    };

    // Fechar modal mobile ao clicar em links do menu
    document.querySelectorAll('.drawer-menu a').forEach(link => {
      link.addEventListener('click', function() {
        // Fecha o drawer
        document.getElementById('mobileDrawer').classList.remove('open');
        // Fecha o backdrop
        document.getElementById('drawerBackdrop').classList.remove('open');
      });
    });
  });