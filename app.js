// app.js

const substitutionCipher = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'onto',
    u: 'uter'
  };
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function encryptText(text) {
    text = text.toLowerCase(); // Ensure case-insensitivity
  
    let encryptedText = '';
    for (let char of text) {
      if (alphabet.includes(char)) {
        encryptedText += substitutionCipher[char] || char; // Use substitution if available, otherwise keep the character
      } else {
        encryptedText += char; // Preserve non-alphabetic characters
      }
    }
    return encryptedText;
  }
  
  function decryptText(text) {
    const reversedCipher = Object.fromEntries(
      Object.entries(substitutionCipher).map(([key, value]) => [value, key])
    );
  
    let decryptedText = '';
    for (let char of text) {
      if (Object.keys(reversedCipher).includes(char)) {
        decryptedText += reversedCipher[char] || char; // Use reverse substitution if available, otherwise keep the character
      } else {
        decryptedText += char; // Preserve non-alphabetic characters
      }
    }
    return decryptedText;
  }
  
  const buttonEncript = document.getElementById('botao__encriptografar');
  const buttonDencript = document.getElementById('botao__desencriptografar');
  const inputText = document.getElementById('campoTexto');

  // Adiciona a função auto-size ao campo de texto
  autosize(inputText);

  // Função auto-size (necessita de uma biblioteca externa)
  function autosize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  
  buttonEncript.addEventListener('click', () => {
    const textToEncrypt = inputText.value;
    const encryptedText = encryptText(textToEncrypt);
    inputText.value = encryptedText;
  });
  
  buttonDencript.addEventListener('click', () => {
    const textToDecrypt = inputText.value;
    const decryptedText = decryptText(textToDecrypt);
    inputText.value = decryptedText;
  });
  
