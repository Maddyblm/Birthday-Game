//Maping the codes
const codes = {
    "Martin30": "rätsel1.html",
    "Lieblingsbruder": "rätsel2.html",
    "07.10.1996": "rätsel3.html",
    "Sei gegrüßt mein getreuer Bruder! An diesem Tag sei dir kundiggetan, dass du nun dreißig Sonnenjahre durchschritten hast. Möchten die Sterne deinen Pfad erleuchten und Gesundheit, Glück und Weisheit dir stets Gefährten sein.": "rätsel3.html"
};

const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");

if (!submitBtn || !codeInput || !message) {
    console.error("Fehler: Ein benötigtes HTML-Element wurde nicht gefunden.");
} else {
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
}
