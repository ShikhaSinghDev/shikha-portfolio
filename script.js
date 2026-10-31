
function showGreeting() {
    const message = document.getElementById("greeting-message");

    message.textContent =
        "You are growing, learning and becoming amazing! ♡ 🌷";
}

/* ===== FLOATING HEARTS, BOWS & SPARKLES 🎀 ===== */

document.addEventListener("DOMContentLoaded", function () {
    // Create a decoration layer
    const decorationLayer = document.createElement("div");
    decorationLayer.className = "floating-decorations";
    decorationLayer.setAttribute("aria-hidden", "true");

    document.body.appendChild(decorationLayer);

    // Cute coquette decorations
    const stickers = ["♡", "🎀", "✧", "୨୧", "💗", "✦", "୨♡୧"];

    // Create floating decorations
    for (let i = 0; i < 16; i++) {
        const sticker = document.createElement("span");

        sticker.className = "floating-sticker";
        sticker.textContent =
            stickers[Math.floor(Math.random() * stickers.length)];

        sticker.style.setProperty("--left", Math.random() * 96 + "%");
        sticker.style.setProperty("--size", (16 + Math.random() * 18) + "px");
        sticker.style.setProperty("--duration", (10 + Math.random() * 12) + "s");
        sticker.style.setProperty("--delay", (-Math.random() * 20) + "s");

        decorationLayer.appendChild(sticker);
    }
});


/* ===== FIX: NIGHT MODE BUTTON 🌙 ===== */

const themeButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

if (themeButton && themeIcon && themeLabel) {
    // Load saved theme
    if (localStorage.getItem("portfolio-theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateTheme() {
        const dark = document.body.classList.contains("dark-mode");

        themeIcon.textContent = dark ? "☀️" : "🌙";
        themeLabel.textContent = dark ? "Day mode" : "Night mode";
        themeButton.setAttribute("aria-pressed", String(dark));
        themeButton.setAttribute(
            "aria-label",
            dark ? "Switch to light mode" : "Switch to dark mode"
        );
    }

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const dark = document.body.classList.contains("dark-mode");
        localStorage.setItem("portfolio-theme", dark ? "dark" : "light");

        updateTheme();
    });

    updateTheme();
} else {
    console.error("Night mode button ya uske icon/label ki ID missing hai.");
}


/* ===== DREAMY TYPING EFFECT 🎀 ===== */

document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    const phrases = [
        "An Aspiring Developer 🌷",
        "A Creative Thinker 🎀",
        "A Python Learner 🐍",
        "A Dreamer Building Big Things ✨"
    ];

    // Respect reduced-motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        typingElement.textContent = phrases[0];
        return;
    }

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (deleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingElement.textContent =
            currentPhrase.substring(0, characterIndex);

        let delay = deleting ? 45 : 85;

        if (!deleting && characterIndex === currentPhrase.length) {
            deleting = true;
            delay = 1400;
        } else if (deleting && characterIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
});



/* 🎀 Soft blush pink mouse trail */
(function () {
    if (
        window.matchMedia("(hover: none)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const decorations = ["♡", "✧", "୨୧"];
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    document.addEventListener("mousemove", function (event) {
        const now = Date.now();
        const distance = Math.hypot(
            event.clientX - lastX,
            event.clientY - lastY
        );

        /* Fewer decorations */
        if (distance < 45 || now - lastTime < 100) return;

        lastX = event.clientX;
        lastY = event.clientY;
        lastTime = now;

        const item = document.createElement("span");
        item.className = "cursor-trail-item";
        item.textContent =
            decorations[Math.floor(Math.random() * decorations.length)];

        item.style.left = event.clientX + "px";
        item.style.top = event.clientY + "px";
        item.style.fontSize = (12 + Math.random() * 6) + "px";

        /* Very light pink shades */
        item.style.color = [
            "#f8cddd",
            "#f4d5e1",
            "#f9dce8"
        ][Math.floor(Math.random() * 3)];

        item.style.setProperty(
            "--drift-x",
            (Math.random() * 24 - 12) + "px"
        );
        item.style.setProperty(
            "--rotation",
            (Math.random() * 30 - 15) + "deg"
        );

        document.body.appendChild(item);

        item.addEventListener("animationend", function () {
            item.remove();
        }, { once: true });
    });
})();

// Contact button - Open Gmail compose
document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");

    if (contactButton) {
        contactButton.addEventListener("click", function (event) {
            event.preventDefault();

            const gmailLink =
                "https://mail.google.com/mail/?view=cm&fs=1&to=shikhusingh34@gmail.com";

            window.open(gmailLink, "_blank");
        });
    }
});
