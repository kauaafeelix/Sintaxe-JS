// 26 - Crie uma função chamada "converterMorse" que recebe uma string em código Morse como
// parâmetro e retorna a mesma string em letras.
// console.log(converterMorse(".- -... -.-.")); // Exemplo de saída: "abc"
// console.log(converterMorse("--. --- --- -.. -.. --- --. .-.. ..- --. .... --- --.")); // Exemplo de saída: "good morning"

function converterMorse(morse) {
    const codigoMorse = {
        ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
        "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
        "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
        ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
        "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
        "--..": "z", "-----": "0", ".----": "1", "..---": "2", "...--": "3",
        "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8",
        "----.": "9", "/": " "
    };
    return morse.split(' ').map(code => codigoMorse[code] || '').join('');
}
console.log(converterMorse(".- -... -.-.")); 
console.log(converterMorse("--. --- --- -.. -.. --- --. .-.. ..- --. .... --- --."));