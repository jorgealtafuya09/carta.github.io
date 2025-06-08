const btnSi = document.querySelector('.btn.si');
const btnNo = document.querySelector('.btn.no');
const respuestaTexto = document.querySelector('.respuesta-texto');
const corazones = document.querySelector('.corazones');

btnSi.addEventListener('click', () => {
  respuestaTexto.textContent = '¡Me haces la persona más feliz del mundo! 💘';
  lanzarCorazones();
});

btnNo.addEventListener('click', () => {
  respuestaTexto.textContent = 'Está bien... seguiré esperando con cariño 🥺';
});

function lanzarCorazones() {
  for (let i = 0; i < 20; i++) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = '❤️';
    corazon.style.left = Math.random() * 100 + '%';
    corazon.style.animationDelay = Math.random() * 2 + 's';
    corazones.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 3000);
  }
}
