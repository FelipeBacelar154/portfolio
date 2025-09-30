const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
});

sr.reveal('.hero h1, .hero p', { interval: 200 });
sr.reveal('.projetos .card', { interval: 200 });
sr.reveal('.experiencias .exp', { interval: 200 });
sr.reveal('.contato h2, .contato p, .contato .btn', { interval: 200 });


const botaoVoltarTopo = document.getElementById('voltar-topo');

// Mostra ou esconde o botão baseado na posição do scroll
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    botaoVoltarTopo.classList.add('visivel');
  } else {
    botaoVoltarTopo.classList.remove('visivel');
  }
};