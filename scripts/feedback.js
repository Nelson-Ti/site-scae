// Dados dos depoimentos
const testimonials = [
  {
    name: "Cleonice Azarias dos Santos",
    text: "Excelente!! Sistema simples, processamento rápido com equipe atenciosa, bem treinada com feedback rápido e preciso atendendo as necessidades",
    avatar: "images/avaliacoes/user1.png"
  },
  {
    name: "Alex Messias",
    text: "A SCAE é uma empresa de gerenciamento de loteamentos que oferece serviços excepcionais para empresas. Sua equipe compreende perfeitamente as necessidades dos clientes, fornecendo soluções personalizadas e comprometendo-se em todas as etapas do processo.",
    avatar: "images/avaliacoes/user2.png"
  },
  {
    name: "Camila Viana",
    text: "Só para agradecer a melhora que vocês fizeram no sistema e essa forma de pagamento esta excelente. Cliente acabou de solicitar presencialmente os boletos , chegou no e-mail e na mesma hora pagou",
    avatar: "images/avaliacoes/user3.png"
  },
  {
    name: "Fernando Arruda",
    text: "Excelente Sistema para Loteamento, simples de se manusear, prático e o mais importante muito eficaz.",
    avatar: "images/avaliacoes/user4.png"
  },
  {
    name: "Artur Martins",
    text: "Excelente sistema! É indispensável para gestão de loteamentos. Tudo o que uma loteadora precisa se encontra nele.",
    avatar: "images/avaliacoes/user5.png"
  }
];

let currentIndex = 0;

// Aguardar o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
  // Elementos do DOM
  const feedbackText = document.getElementById('feedback-text');
  const authorName = document.getElementById('author-name');
  const authorAvatar = document.getElementById('author-avatar');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

 
  // Função para atualizar o depoimento
  function updateTestimonial(index) {
    const testimonial = testimonials[index];
     
    // Atualizar texto
    feedbackText.textContent = testimonial.text;
    
    // Atualizar nome
    authorName.textContent = testimonial.name;
    
    // Atualizar avatar
    authorAvatar.src = testimonial.avatar;
    authorAvatar.alt = testimonial.name;
    
    // Atualizar dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentIndex = index;
  }

  // Event listeners para os dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
       updateTestimonial(index);
    });
  });

  // Event listeners para as setas
  prevBtn.addEventListener('click', () => {
     const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    updateTestimonial(newIndex);
  });

  // Auto-play ativo - altera a cada 1 minuto
  setInterval(() => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    updateTestimonial(newIndex);
  }, 60000);
}); 