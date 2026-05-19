// ==========================================
// ❤️ ULTIMATE LOVE WEBSITE - script.js
// Полностью замени содержимое файла script.js
// ==========================================

// =======================
// TIMER (с 3 января 2026)
// =======================
const startDate = new Date("2026-01-03T08:35:11");

function updateTimer() {
    const timer = document.getElementById("timer");
    if (!timer) return;

    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        timer.innerHTML = "Our love story begins soon ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    timer.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes ❤️`;
}

// =======================
// FLOATING HEARTS
// =======================
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";

    const emojis = ["💖", "💕", "💗", "💘", "💝", "❤️", "💞", "💓"];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.opacity = (0.6 + Math.random() * 0.4).toString();
    heart.style.zIndex = "99999";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 8s linear, opacity 8s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform =
            `translate(${(Math.random() - 0.5) * 200}px, -120vh) rotate(${Math.random() * 720}deg)`;
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => heart.remove(), 8000);
}

// =======================
// HEART BURST ON TOUCH
// =======================
function createHeartBurst(x, y) {
    const emojis = ["💖", "💕", "💘", "💝", "❤️"];

    for (let i = 0; i < 12; i++) {
        const heart = document.createElement("div");
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";
        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.fontSize = (16 + Math.random() * 20) + "px";
        heart.style.zIndex = "99999";
        heart.style.pointerEvents = "none";
        heart.style.transition = "all 1.5s ease-out";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 140;

        setTimeout(() => {
            heart.style.transform =
                `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = "0";
        }, 20);

        setTimeout(() => heart.remove(), 1600);
    }
}

// =======================
// ROSE PETALS
// =======================
function createRose() {
    const rose = document.createElement("div");
    rose.textContent = "🌹";

    rose.style.position = "fixed";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.top = "-50px";
    rose.style.fontSize = (20 + Math.random() * 20) + "px";
    rose.style.zIndex = "9998";
    rose.style.pointerEvents = "none";
    rose.style.transition = "transform 12s linear, opacity 12s linear";

    document.body.appendChild(rose);

    setTimeout(() => {
        rose.style.transform =
            `translate(${(Math.random() - 0.5) * 250}px, 120vh) rotate(${Math.random() * 720}deg)`;
        rose.style.opacity = "0";
    }, 50);

    setTimeout(() => rose.remove(), 12000);
}

// =======================
// TWINKLING STARS
// =======================
function createStar() {
    const star = document.createElement("div");
    star.textContent = "✨";

    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.fontSize = (10 + Math.random() * 18) + "px";
    star.style.zIndex = "9997";
    star.style.pointerEvents = "none";
    star.style.opacity = "0";
    star.style.transition = "opacity 1.2s ease";

    document.body.appendChild(star);

    setTimeout(() => star.style.opacity = "1", 50);
    setTimeout(() => star.style.opacity = "0", 1500);
    setTimeout(() => star.remove(), 2500);
}

// =======================
// SECRET MESSAGE
// =======================
function showSecretMessage() {
    alert("🔐 Secret Message:\n\nС тебя кебаб 🌯❤️");
}

// =======================
// VIDEO SURPRISE
// =======================
function openVideoSurprise() {
    window.open("https://www.youtube.com/watch?v=450p7goxZqg", "_blank");
}

// =======================
// FINAL LOVE MESSAGE
// =======================
function showForeverMessage() {
    createHeartFireworks();

    setTimeout(() => {
        alert(
            "💍 Will You Stay With Me Forever?\n\n" +
            "I will love you today, tomorrow and forever. ❤️"
        );
    }, 500);
}

// =======================
// HEART FIREWORKS
// =======================
function createHeartFireworks() {
    const emojis = ["💖", "💕", "💘", "💝", "❤️"];

    for (let i = 0; i < 120; i++) {
        const heart = document.createElement("div");
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.zIndex = "99999";
        heart.style.pointerEvents = "none";
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
// LOVE WHEEL
// =======================
function spinLoveWheel() {
    const prizes = [
        "💋 Kiss",
        "🤗 Hug",
        "🌯 С тебя кебаб ❤️",
        "🎁 Surprise",
        "🌹 Rose",
        "🍫 Chocolate"
    ];

    const result = prizes[Math.floor(Math.random() * prizes.length)];
    alert("🎰 Love Wheel\n\n" + result);
}

// =======================
// RANDOM COMPLIMENT
// =======================
function showRandomCompliment() {
    const compliments = [
        "You are the most beautiful girl in the world ❤️",
        "Your smile lights up my universe ✨",
        "Every day with you is a gift 🎁",
        "You are my favorite person 💖",
        "I fall in love with you more every day 💘"
    ];

    const compliment =
        compliments[Math.floor(Math.random() * compliments.length)];

    alert("💌 " + compliment);
}

// =======================
// LOVE METER
// =======================
function showLoveMeter() {
    const percent = 1000;
    alert(`💘 Love Meter\n\nOur love is ${percent}% ❤️`);
}

// =======================
// GIFT BOX
// =======================
function openGiftBox() {
    createHeartFireworks();
    alert("🎁 Inside this gift is all my love for you ❤️");
}

// =======================
// KISSES ON SCREEN
// =======================
function createKiss(x, y) {
    const kiss = document.createElement("div");
    kiss.textContent = "💋";

    kiss.style.position = "fixed";
    kiss.style.left = x + "px";
    kiss.style.top = y + "px";
    kiss.style.fontSize = "40px";
    kiss.style.zIndex = "99999";
    kiss.style.pointerEvents = "none";
    kiss.style.transition = "all 2s ease-out";

    document.body.appendChild(kiss);

    setTimeout(() => {
        kiss.style.transform = "translateY(-80px) scale(1.5)";
        kiss.style.opacity = "0";
    }, 50);

    setTimeout(() => kiss.remove(), 2000);
}

// =======================
// LOVE QUIZ
// =======================
function startLoveQuiz() {
    alert("🧠 Love Quiz\n\nWho loves you the most?\n\n❤️ Me ❤️");
}

// =======================
// MINI GAME
// =======================
function startCatchHeartsGame() {
    alert("🎮 Catch Hearts Game\n\nComing soon... ❤️");
}

// =======================
// DAY / NIGHT MODE
// =======================
function toggleDayNight() {
    document.body.classList.toggle("light-mode");
}

// =======================
// EVENT LISTENERS
// =======================
document.addEventListener("click", function (e) {
    createHeartBurst(e.clientX, e.clientY);

    // Небольшой шанс появления поцелуя
    if (Math.random() < 0.15) {
        createKiss(e.clientX, e.clientY);
    }
});

document.addEventListener("touchstart", function (e) {
    const touch = e.touches[0];
    if (!touch) return;

    createHeartBurst(touch.clientX, touch.clientY);

    if (Math.random() < 0.15) {
        createKiss(touch.clientX, touch.clientY);
    }
}, { passive: true });

// =======================
// START ALL EFFECTS
// =======================
document.addEventListener("DOMContentLoaded", function () {
    updateTimer();
    setInterval(updateTimer, 60000);

    // Летающие сердечки
    setInterval(createFloatingHeart, 700);

    // Падающие розы
    setInterval(createRose, 2500);

    // Мерцающие звёзды
    setInterval(createStar, 800);

    // Небольшой приветственный эффект
    setTimeout(createHeartFireworks, 1500);
});
