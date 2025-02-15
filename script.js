const animatedText = document.querySelector('.animated-text');

animatedText.addEventListener('mouseenter', () => {
  animatedText.style.animationPlayState = 'paused';
});

animatedText.addEventListener('mouseleave', () => {
  animatedText.style.animationPlayState = 'running';
});
