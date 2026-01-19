const meses = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL",
  "MAYO", "JUNIO", "JULIO", "AGOSTO",
  "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

function updateDate() {
  const now = new Date();
  const day = now.getDate();
  const month = meses[now.getMonth()];

  document.querySelector("#day .top").textContent = day;
  document.querySelector("#day .bottom").textContent = day;

  document.querySelector("#month .top").textContent = month;
  document.querySelector("#month .bottom").textContent = month;
}

updateDate();
setInterval(updateDate, 60 * 1000);
