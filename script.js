// ============================
// TIMER
// ============================
const startDate = new Date("2026-01-03T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const timer = document.getElementById("timer");

    if (!timer) return;

    if (diff < 0) {
        timer.innerHTML = "Our love story begins soon ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    timer.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes`;
}

updateTimer();
setInterval(updateTimer, 60000);

// ============================
// FLOATING HEARTS
// ============================
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";

    const hearts = ["💖", "💕", "💗", "💘", "💝", "❤️", "💞", "💓"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.opacity = 0.6 + Math.random() * 0.4;
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 700);

// ============================
// HEART BURST ON TOUCH
// ============================
function createHeartBurst(x, y) {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.zIndex = "99999";
        heart.style.pointerEvents = "none";
        heart.style.transition = "all 1.5s ease-out";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;

        setTimeout(() => {
            heart.style.transform =
                `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => heart.remove(), 1500);
    }
}

document.addEventListener("click", (e) => {
    createHeartBurst(e.clientX, e.clientY);
});

document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    createHeartBurst(touch.clientX, touch.clientY);
});

// ============================
// ROSE PETALS
// ============================
function createPetal() {
    const petal = document.createElement("div");
    petal.innerHTML = "🌹";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-50px";
    petal.style.fontSize = (20 + Math.random() * 20) + "px";
    petal.style.zIndex = "9998";
    petal.style.pointerEvents = "none";
    petal.style.transition = "transform 12s linear, opacity 12s linear";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.style.transform =
            `translate(${(Math.random() - 0.5) * 200}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;
        petal.style.opacity = "0";
    }, 100);

    setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 3000);

// ============================
// TWINKLING STARS
// ============================
function createStarFlash() {
    const star = document.createElement("div");
    star.innerHTML = "✨";
    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.fontSize = (10 + Math.random() * 20) + "px";
    star.style.zIndex = "9997";
    star.style.pointerEvents = "none";
    star.style.opacity = "0";
    star.style.transition = "opacity 1s";

    document.body.appendChild(star);

    setTimeout(() => star.style.opacity = "1", 100);
    setTimeout(() => star.style.opacity = "0", 1500);
    setTimeout(() => star.remove(), 2500);
}

setInterval(createStarFlash, 800);

// ============================
// SECRET MESSAGE
// ============================
function showSecretMessage() {
    alert("🔐 Secret Message:\n\nС тебя кебаб 🌯❤️");
}

// ============================
// VIDEO SURPRISE
// ============================
function openVideoSurprise() {
    window.open("https://www.youtube.com/watch?v=450p7goxZqg", "_blank");
}

// ============================
// FINAL LOVE BUTTON
// ============================
function showForeverMessage() {
    createHeartFireworks();

    setTimeout(() => {
        alert(
            "💍 Will You Stay With Me Forever?\n\n" +
            "I will love you today, tomorrow, and forever. ❤️"
        );
    }, 500);
}

// ============================
// HEART FIREWORKS
// ============================
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
