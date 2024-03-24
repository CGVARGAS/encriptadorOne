### Encriptador de Textos

Este é um projeto de um encriptador de textos desenvolvido como parte de um desafio na plataforma Alura One. O objetivo principal é demonstrar o conceito de cifra de substituição, onde cada caractere é substituído por outro de acordo com uma tabela predefinida.

#### Funcionalidades Principais

- **Encriptografar Texto**: O usuário pode inserir um texto no campo designado e clicar no botão "Encriptografar" para transformar o texto de acordo com a cifra de substituição definida.
  
- **Desencriptografar Texto**: Após encriptografar um texto, o usuário pode clicar no botão "Desencriptografar" para reverter o texto ao seu estado original.

#### Implementação

O encriptador utiliza uma tabela de substituição definida no código JavaScript, onde cada letra é mapeada para outra sequência de caracteres. A cifra de substituição é aplicada através de funções específicas:

```javascript
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
  // Implementação da função de encriptação
}

// Função para descriptografar o texto
function decryptText(text) {
  // Implementação da função de desencriptação
}
```

#### Tecnologias Utilizadas

- **HTML**: Para a estruturação da página web.
  
- **CSS**: Para estilização dos elementos visuais.
  
- **JavaScript**: Para a lógica de encriptação e desencriptação dos textos.

#### Como Utilizar

1. Insira o texto desejado no campo de entrada.
2. Clique no botão "Encriptografar" para transformar o texto conforme a cifra de substituição.
3. Para reverter o texto ao seu estado original, clique no botão "Desencriptografar".

Experimente este encriptador de textos e explore o conceito de cifra de substituição de forma prática!
