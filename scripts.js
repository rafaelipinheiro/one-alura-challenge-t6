let mainText = document.querySelector('#main-text');
let alertText = document.querySelector('.alert-text');
let resultText = document.querySelector('.result-text');
let resultImg = document.querySelector('.section-result-img');
let resultTitle = document.querySelector('.container-title');
let resultMessage = document.querySelector('.container-message');
let copyButton = document.querySelector('#btn-copy');
let messageSuccessCopy = document.querySelector('#message-success-copy');
let messageErrorCopy = document.querySelector('#message-error-copy');

function mainTextIsValid() {
    if (!/^[a-z\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/.test(mainText.value)) {
        alertText.classList.add('alert-text-error');
        return false;
    }
    else {
        alertText.classList.remove('alert-text-error');
        return true;
    }
}

function hideShowElements() {
    resultImg.classList.add('hidden');
    resultTitle.classList.add('hidden');
    resultMessage.classList.add('hidden');
    resultText.classList.remove('hidden');
    copyButton.classList.remove('hidden');
}

function encrypt() {
    if (mainTextIsValid()) {
        let text = mainText.value
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
        resultText.innerHTML = text;
        mainText.value = '';

        hideShowElements();
    }
}

function decrypt() {
    if (mainTextIsValid()) {
        let text = mainText.value
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        
        resultText.innerHTML = text;       
        mainText.value = '';        

        hideShowElements();
    }
}

function copy() {
    navigator.clipboard
        .writeText(resultText.value)
        .then(() => alert(messageSuccessCopy.innerText))
        .catch(err => console.error(messageErrorCopy.innerText, err));
}

function theme(t) {
    console.log('1');
    if (t == 'alura') {
        document.documentElement.style.setProperty('--main-font-family', 'Inter');

        document.documentElement.style.setProperty('--primary-background-color', '#F3F5FC');
        document.documentElement.style.setProperty('--primary-color', '#0A3871');
        document.documentElement.style.setProperty('--primary-color-hover', '#1f68c7');
        document.documentElement.style.setProperty('--primary-font-color', '#0A3871');

        document.documentElement.style.setProperty('--secondary-background-color', '#D8DFE8');
        document.documentElement.style.setProperty('--secondary-color', '#D8DFE8');
        document.documentElement.style.setProperty('--secondary-color-hover', '#90bffd');
        document.documentElement.style.setProperty('--secondary-font-color', '#D8DFE8');

        document.documentElement.style.setProperty('--default-color', '#495057');
    }
    else {
        document.documentElement.style.setProperty('--main-font-family', 'Chakra Petch');

        document.documentElement.style.setProperty('--primary-background-color', '#d5e8ea');
        document.documentElement.style.setProperty('--primary-color', '#0ca05e');
        document.documentElement.style.setProperty('--primary-color-hover', '#27bb79');
        document.documentElement.style.setProperty('--primary-font-color', '#e0e0e0');

        document.documentElement.style.setProperty('--secondary-background-color', '#d5e8ea');
        document.documentElement.style.setProperty('--secondary-color', '#da8a40');
        document.documentElement.style.setProperty('--secondary-color-hover', '#d48239');
        document.documentElement.style.setProperty('--secondary-font-color', '#e0e0e0');

        document.documentElement.style.setProperty('--default-color', '#82b1b4');
    }
}

function language(l) {
    if (l == 'pt-br') {
        document.getElementById('main-text').placeholder = 'Digite seu texto';
        document.getElementById('alert-text').innerText = 'Apenas letras minúsculas e sem acento.';
        document.getElementById('btn-encrypt').innerText = 'Criptografar';
        document.getElementById('btn-decrypt').innerText = 'Descriptografar';
        document.getElementById('result-title').innerText = 'Nenhuma mensagem encontrada';
        document.getElementById('result-message').innerText = 'Digite um texto ao lado para criptografar ou descriptografar.';
        document.getElementById('btn-copy').innerText = 'Copiar';
        document.getElementById('message-success-copy').innerText = 'Texto copiado para área de transferência.';
        document.getElementById('message-error-copy').innerText = 'Erro ao copiar texto para área de transferência: ';
    }
    else {
        document.getElementById('main-text').placeholder = 'Enter your text';
        document.getElementById('alert-text').innerText = 'Only lowercase letters and no accents.';
        document.getElementById('btn-encrypt').innerText = 'Encrypt';
        document.getElementById('btn-decrypt').innerText = 'Decrypt';
        document.getElementById('result-title').innerText = 'Message not found';
        document.getElementById('result-message').innerText = 'Enter text next to encrypt or decrypt.';
        document.getElementById('btn-copy').innerText = 'Copy';
        document.getElementById('message-success-copy').innerText = 'Text copied to clipboard.';
        document.getElementById('message-error-copy').innerText = 'Error copying text to clipboard: ';
    }
}