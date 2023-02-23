const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let words = [];

console.log("digite palavras,quando quiser parar,digite'sair'");

rl.on('line', (input) => {
    if (input.toLowerCase() === 'sair') {
        console.log(`palavras digitadas: ${words.sort().join(', ')}`);
        rl.close();
    } else {
        words.push(input);
    }
});