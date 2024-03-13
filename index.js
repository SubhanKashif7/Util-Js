const CryptoJS = require("crypto-js");

const utilJs = () => {
    const options = {
        arrRandom: (array) => {
            return array[Math.floor(Math.random() * array.length)];
        },
        objRandom: (object) => {
            const entries = Object.entries(object);
            entries.sort(() => Math.random() - 0.5);
            const [randomKey, randomVal] = entries.shift();
            return {
                [randomKey]: randomVal
            };
        },
        randomNumber: (from, to) => {
            return Math.floor(Math.random() * (to - from + 1)) + from;
        },
        encrypt: (key, value) => {
            return CryptoJS.AES.encrypt(value, key).toString();
        },
        decrypt: (key, value) => {
            let decryptedVal = CryptoJS.AES.decrypt(value, key);
            let plainText = decryptedVal.toString(CryptoJS.enc.Utf8);
            return plainText;
        }
    };
    return options;
};


module.exports = utilJs;