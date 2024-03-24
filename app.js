// Definindo a cifra de substituição
const substitutionCipher = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'onto',
  u: 'uter'
};

// Função para criptografar o texto
function encryptText(text) {
  let encryptedText = '';
  // Percorre cada caractere do texto
  for (let char of text) {
      // Verifica se o caractere está na tabela de substituição
      // Se estiver, substitui pelo valor correspondente na cifra
      // Caso contrário, mantém o caractere original
      encryptedText += substitutionCipher[char] || char;
  }
  return encryptedText; // Retorna o texto criptografado
}

// Função para descriptografar o texto
function decryptText(text) {
  let decryptedText = '';
  let i = 0;
  // Percorre o texto de entrada
  while (i < text.length) {
      let found = false;
      // Percorre cada entrada na tabela de substituição
      for (let key in substitutionCipher) {
          // Verifica se a substring atual corresponde a uma entrada na cifra
          if (text.startsWith(substitutionCipher[key], i)) {
              // Se encontrar uma correspondência, substitui pela chave correspondente
              decryptedText += key;
              // Avança o índice para a próxima substring
              i += substitutionCipher[key].length;
              found = true;
              break; // Sai do loop interno
          }
      }
      // Se não encontrar uma correspondência, mantém o caractere original
      if (!found) {
          decryptedText += text[i];
          i++;
      }
  }
  return decryptedText; // Retorna o texto descriptografado
}

// Seleciona os elementos do HTML
const buttonEncrypt = document.getElementById('botao__encriptografar');
const buttonDecrypt = document.getElementById('botao__desencriptografar');
const inputText = document.getElementById('campoTexto');
const outputText = document.getElementById('textoEncriptografado');
const headerTitle = document.querySelector('#textoEncriptografadoContainer h2');

// Adiciona um ouvinte de evento para o botão de criptografar
buttonEncrypt.addEventListener('click', () => {
  // Obtém o texto do campo de entrada
  const textToEncrypt = inputText.value;
  // Criptografa o texto e atualiza o valor do campo de saída com o texto criptografado
  outputText.value = encryptText(textToEncrypt);
});

// Adiciona um ouvinte de evento para o botão de descriptografar
buttonDecrypt.addEventListener('click', () => {
  // Obtém o texto do campo de saída
  const textToDecrypt = outputText.value;
  // Descriptografa o texto e atualiza o valor do campo de entrada com o texto descriptografado
  outputText.value = decryptText(textToDecrypt);
  // Altera o texto dentro da tag <h2> para "Texto Desencriptografado"
  headerTitle.textContent = "Texto Desencriptografado";
});

