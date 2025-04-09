

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function tokenize(text) {
    let normalizeText = text.toLowerCase();
    let tokens = normalizeText.split(' ');
    tokens = tokens.filter(token => token.trim() !== '');
    return tokens;
}


rl.question('Enter text to tokenize: ', (inputText) => {
    const tokens = tokenize(inputText);
    console.log('Tokens:', tokens);
    
    rl.close();
});
