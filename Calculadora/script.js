// Função para exibir os valores no display
function appendValue(value) {
    const resultField = document.getElementById("result");
    if (resultField.value === "0" || resultField.value === "") {
      resultField.value = value; // Substitui o valor inicial
    } else {
      resultField.value += value; // Adiciona ao valor existente
    }
  }
  
  // Função para limpar o display
  function clearDisplay() {
    document.getElementById("result").value = "";
  }
  
  // Função para apagar o último caractere
  function deleteLast() {
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
  }
  
  // Função para calcular o resultado
  function calculateResult() {
    const resultField = document.getElementById("result");
    try {
      // Avalia a expressão matemática e exibe o resultado
      resultField.value = eval(resultField.value) || 0;
    } catch (error) {
      resultField.value = "Erro";
    }
  }
  