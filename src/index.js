const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decodeMorzeCode(a) {
    let subarray = [];
    for (let i = 0; i < Math.ceil(a.length / 2); i++) {
        subarray[i] = a.slice((i * 2), (i * 2) + 2);
    }
    return subarray.map((i) => (i == 10) ? i = '.' : i = '-').join('');
}

function decodeLetter(letter) {
    return MORSE_TABLE[letter];
}

function decodeWord(word) {
    let morzeCode;
    let letter;
    let subarray = [];
    let final = [];

    for (let i = 0; i < Math.ceil(word.length / 10); i++) {
        subarray[i] = word.slice((i * 10), (i * 10) + 10);
    }
    
    subarray.forEach((i) => {
        let arr = i.split('');
        let decLetter;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == 1) {
                decLetter = arr.slice(j, arr.length);
                break;
            }
        }
        morzeCode = decodeMorzeCode(decLetter.join(''));
        letter = decodeLetter(morzeCode);
        final.push(letter);
    });

    return final.join('');
}


function decode(expr) {
    return expr.trim().split('**********').map(decodeWord).join(' ');
}

module.exports = {
    decode
}