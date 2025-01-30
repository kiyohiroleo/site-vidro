document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('nav ul li a');
  
  links.forEach(link => {
    // Verifica se o link é interno (com href começando com '#')
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Ajuste: subtrai a altura do cabeçalho
        const headerHeight = document.querySelector('header').offsetHeight;

        window.scrollTo({
          top: targetSection.offsetTop - headerHeight, // Subtrai a altura do cabeçalho
          behavior: 'smooth',
        });
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const inicioSection = document.getElementById('inicio');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        inicioSection.classList.add('visible');
        observer.unobserve(inicioSection); // Para de observar após a animação ser aplicada
      }
    });
  }, {
    threshold: 0.1 // A animação será disparada quando 10% da seção estiver visível
  });

  observer.observe(inicioSection);
});
