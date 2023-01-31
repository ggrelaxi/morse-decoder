const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    const parts = [];
    for (let i = 0; i < expr.length; i += 10) {
        if (i + 10 > expr.length) {
            let part = expr.slice(i);
            let result = part.padStart(10, 0);
            part.push(result);
        } else {
            let part = expr.slice(i, i + 10);
            parts.push(part);
        }
    }

    let string = "";

    parts.forEach((part) => {
        let res = "";
        for (let i = 0; i < part.length; i += 2) {
            let current = part.slice(i, i + 2);
            if (current === "10") res += ".";
            if (current === "11") res += "-";
            if (current.includes("*")) {
                res += " ";
                break;
            }
        }
        if (!res.includes(" ")) string += MORSE_TABLE[res];
        else {
            string += " ";
        }
    });

    return string;
}

module.exports = {
    decode,
};
