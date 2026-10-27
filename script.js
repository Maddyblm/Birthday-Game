//Maping the codes

const codes = {
    "Martin30": "raetsel1.html",
    "Lieblingsbruder": "raetsel2.html",
    "07.10.1996": "raetsel3.html",
    "Sei gegrüßt mein getreuer Bruder! An diesem Tag sei dir kundiggetan, dass du nun dreißig Sonnenjahre durchschritten hast. Möchten die Sterne deinen Pfad erleuchten und Gesundheit, Glück und Weisheit dir stets Gefährten sein.": "final.html"
};

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const codeInput = document.getElementById("codeInput");
    const message = document.getElementById("message");

    if (!submitBtn || !codeInput || !message) {
        console.error("Button, Eingabefeld oder Meldung fehlt.");
        return;
    }

    submitBtn.addEventListener("click", () => {
        const userCode = codeInput.value.trim();

        if (Object.prototype.hasOwnProperty.call(codes, userCode)) {
            const target = codes[userCode];
            message.textContent = "Korrekt! Weiterleitung...";

            setTimeout(() => {
                window.location.assign(target);
            }, 2000);
        } else {
            message.textContent = "Falscher Code. Bitte versuche es erneut.";
        }
    });
});

