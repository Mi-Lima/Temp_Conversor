function converter() {
  const valor = parseFloat(document.getElementById("inputTemp").value);
  const unidade = document.getElementById("inputUnit").value;
  const resultadoDiv = document.getElementById("resultados");

  if (isNaN(valor)) {
    resultadoDiv.innerHTML = "Digite uma temperatura válida.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unidade) {
    case "celsius":
      celsius = valor;
      fahrenheit = (valor * 9) / 5 + 32;
      kelvin = valor + 273.15;
      break;
    case "fahrenheit":
      celsius = ((valor - 32) * 5) / 9;
      fahrenheit = valor;
      kelvin = celsius + 273.15;
      break;
    case "kelvin":
      celsius = valor - 273.15;
      kelvin = valor;
      fahrenheit = (celsius * 9) / 5 + 32;
      break;
  }

  resultadoDiv.innerHTML = `
    <p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
    <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
    <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
  `;
}