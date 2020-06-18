const copyBtn = document.querySelector(".js-copy"),
    resultText = document.querySelector(".result");

function copyToClipboard() {
    resultText.select();
    resultText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("Copied the text: " + resultText.value);
}

function init() {
    copyBtn.addEventListener("click", copyToClipboard);
}

init();
