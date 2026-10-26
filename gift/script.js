//Maping the codes
const codes = {
    "Martin30": "r%C3%A4tsel2.html",  // First code leads to the second riddle
    "Lieblingsbruder": "R%C3%A4tsel3.html",  // Second code leads to the third riddle   
    "07.10.1996": "R%C3%A4tsel3.html",
    "Sei gegrüßt mein getreuer Bruder! An diesem Tag sei dir kundiggetan, dass du nun dreißig Sonnenjahre durchschritten hast. Möchten die Sterne deinen Pfad erleuchten und Gesundheit, Glück und Weisheit dir stets Gefährten sein.": "final.html"
};

const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("Martin30") || document.getElementById("Lieblingsbruder") || document.getElementById("07.10.1996") || document.getElementById("Sei gegrüßt mein getreuer Bruder! An diesem Tag sei dir kundiggetan, dass du nun dreißig Sonnenjahre durchschritten hast. Möchten die Sterne deinen Pfad erleuchten und Gesundheit, Glück und Weisheit dir stets Gefährten sein.");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {
    const userCode = codeInput.value.trim();
    if (codes[userCode]) {
        message.textContent = "Korrekt! Du wirst weitergeleitet...";
        setTimeout(() => {
            window.location.href = codes[userCode];
        }, 2000);
    } else {
        message.textContent = "Falscher Code. Bitte versuche es erneut.";
    }
});