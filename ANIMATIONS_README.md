# Sistema de Animações - SCAE

Este documento explica o sistema de animações implementado no site SCAE.

## 📁 Arquivos

- `scripts/animations.js` - Lógica JavaScript das animações
- `animations.css` - Estilos CSS das animações
- `index.html` - Inclui os arquivos de animação

## 🎯 Funcionalidades Implementadas

### 1. Animações de Scroll
- **Elementos animados**: Cards de benefícios, processo, números, FAQ
- **Comportamento**: Aparecem suavemente quando entram na viewport
- **Classe CSS**: `.animate-on-scroll`

### 2. Animações do Hero
- **Sequencial**: Tags → Título → Subtítulo → Botão → Cards
- **Typing Effect**: Título principal com efeito de digitação
- **Parallax**: Efeito suave de parallax no conteúdo

### 3. Animações de Hover
- **Cards**: Elevação e rotação dos ícones
- **Botões**: Efeito de brilho e elevação
- **Links**: Animação de underline

### 4. Animações de Contadores
- **Números**: Animação de contagem progressiva
- **Efeito**: Pulse ao completar a contagem

### 5. Animações do Gráfico
- **Barras**: Crescimento animado das barras
- **Sequencial**: Uma barra por vez

### 6. Animações do Menu Mobile
- **Drawer**: Slide in/out suave
- **Itens**: Aparecem sequencialmente
- **Backdrop**: Fade in/out

## 🎨 Classes CSS Disponíveis

### Animações de Entrada
```css
.animate-on-scroll     /* Animação ao entrar na viewport */
.section-animate      /* Animação de seções */
.hero-animate         /* Animação do hero */
```

### Animações de Hover
```css
.card-hover           /* Efeito hover em cards */
.button-hover         /* Efeito hover em botões */
```

### Animações de Estado
```css
.loading              /* Estado de carregamento */
.error                /* Estado de erro */
.success              /* Estado de sucesso */
```

## ⚡ Performance

### Otimizações Implementadas
- **Intersection Observer**: Animações só executam quando visíveis
- **Reduced Motion**: Respeita preferências de acessibilidade
- **Hardware Acceleration**: Usa `transform` e `opacity`
- **Debounce**: Evita execução excessiva de eventos

### Acessibilidade
```css
@media (prefers-reduced-motion: reduce) {
  /* Desabilita animações para usuários que preferem menos movimento */
}
```

## 🚀 Como Usar

### 1. Adicionar Animação a um Elemento
```html
<div class="beneficio-card animate-on-scroll">
  <!-- Conteúdo -->
</div>
```

### 2. Adicionar Hover Effect
```html
<button class="btn-primary">
  <!-- Conteúdo -->
</button>
```

### 3. Adicionar Animação Customizada
```css
.minha-animacao {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.minha-animacao.animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

## 🎭 Tipos de Animação

### Fade In
- `fadeInUp`: Aparece de baixo para cima
- `fadeInLeft`: Aparece da esquerda
- `fadeInRight`: Aparece da direita

### Scale
- `scaleIn`: Aparece com escala
- `pulse`: Efeito de pulso

### Slide
- `slideInUp`: Desliza de baixo
- `slideInLeft`: Desliza da esquerda

### Special Effects
- `typing`: Efeito de digitação
- `barGrow`: Crescimento de barras
- `numberPulse`: Pulse em números

## 🔧 Configuração

### Timing Functions
```css
cubic-bezier(0.4, 0, 0.2, 1)  /* Suave e natural */
ease-in-out                     /* Padrão */
```

### Durações
- **Rápida**: 0.2s - 0.3s
- **Média**: 0.5s - 0.8s
- **Lenta**: 1s+

## 📱 Responsividade

### Mobile
- Animações mais suaves
- Menos movimento
- Performance otimizada

### Desktop
- Animações completas
- Efeitos mais elaborados
- Parallax ativo

## 🐛 Troubleshooting

### Animação não funciona
1. Verificar se o elemento tem a classe correta
2. Verificar se o JavaScript está carregado
3. Verificar console para erros

### Performance ruim
1. Verificar se está usando `transform` e `opacity`
2. Verificar se não há muitas animações simultâneas
3. Verificar se o `will-change` está sendo usado corretamente

### Acessibilidade
1. Verificar se `prefers-reduced-motion` está funcionando
2. Verificar se as animações não interferem na navegação
3. Verificar se os elementos são focáveis

## 📈 Métricas

### Indicadores de Performance
- **FPS**: Manter acima de 60fps
- **Layout Thrashing**: Evitar mudanças de layout
- **Memory**: Monitorar uso de memória

### Indicadores de UX
- **Engagement**: Tempo na página
- **Bounce Rate**: Taxa de rejeição
- **Conversion**: Taxa de conversão

## 🔄 Atualizações Futuras

### Planejadas
- [ ] Animações de scroll horizontal
- [ ] Efeitos de partículas
- [ ] Animações de loading mais elaboradas
- [ ] Micro-interações

### Considerações
- Manter performance
- Respeitar acessibilidade
- Seguir padrões de design
- Testar em diferentes dispositivos 