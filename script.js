const form = document.getElementById("form");
const resultadoDiv = document.getElementById("resultado");
const nivelText = document.getElementById("nivel");
const scoreText = document.getElementById("score");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  let total = 0;
  let habilidades = [];

  for (let value of formData.values()) {
    total += Number(value);
    habilidades.push(Number(value));
  }

  let nivel = "";

  if (total <= 10) nivel = "Iniciante";
  else if (total <= 20) nivel = "Aprendiz";
  else if (total <= 30) nivel = "Júnior";
  else if (total <= 40) nivel = "Pleno";
  else nivel = "Sênior";

  nivelText.innerText = `Seu nível é: ${nivel}`;
  scoreText.innerText = `Pontuação: ${total}/50`;

  resultadoDiv.classList.remove("hidden");

  gerarGrafico(habilidades);
});

function gerarGrafico(habilidades) {
  const ctx = document.getElementById("grafico");

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['API', 'Git', 'Deploy', 'DOM', 'Banco de Dados'],
      datasets: [{
        label: 'Suas Habilidades',
        data: habilidades,
      }]
    }
  });
}
