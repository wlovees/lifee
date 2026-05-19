// =======================
// SECRET MESSAGE
// =======================
function showSecretMessage() {
    alert("🔐 Secret Message:\n\nС тебя кебаб 🌯❤️");
}

// =======================
// FINAL LOVE BUTTON
// =======================
function showForeverMessage() {
    createHeartFireworks();

    setTimeout(() => {
        alert(
            "💍 Will You Stay With Me Forever?\n\n" +
            "I will love you today, tomorrow, and forever. ❤️"
        );
    }, 500);
}

// =======================
// HEART FIREWORKS
// =======================
function createHeartFireworks() {
    for (let i = 0; i < 120; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = ["💖","💕","💘","💝","❤️"][Math.floor(Math.random() * 5)];

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "99999";
        heart.style.transition = "all 2s ease-out";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 500;

        setTimeout(() => {
            heart.style.transform =
                `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${Math.random() * 720}deg)`;
            heart.style.opacity = "0";
        }, 20);

        setTimeout(() => heart.remove(), 2200);
    }
}

// =======================
// VIDEO SURPRISE
// =======================
function openVideoSurprise() {
    window.open("https://www.youtube.com/watch?v=450p7goxZqg", "_blank");
}
// =======================
// SECRET MESSAGE
// =======================
function showSecretMessage() {
    alert("🔐 Secret Message:\n\nС тебя кебаб 🌯❤️");
}

// =======================
// FINAL LOVE BUTTON
// =======================
function showForeverMessage() {
    createHeartFireworks();

    setTimeout(() => {
        alert(
            "💍 Will You Stay With Me Forever?\n\n" +
            "I will love you today, tomorrow, and forever. ❤️"
        );
    }, 500);
}

// =======================
// HEART FIREWORKS
// =======================
function createHeartFireworks() {
    for (let i = 0; i < 120; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = ["💖","💕","💘","💝","❤️"][Math.floor(Math.random() * 5)];

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "99999";
        heart.style.transition = "all 2s ease-out";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 500;

        setTimeout(() => {
            heart.style.transform =
                `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${Math.random() * 720}deg)`;
            heart.style.opacity = "0";
        }, 20);

        setTimeout(() => heart.remove(), 2200);
    }
}

// =======================
// VIDEO SURPRISE
// =======================
function openVideoSurprise() {
    window.open("https://www.youtube.com/watch?v=450p7goxZqg", "_blank");
}
