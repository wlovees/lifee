// ============================
// TIMER
// ============================
const startDate = new Date("2026-01-03T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const timer = document.getElementById("timer");
    if (timer) {
        timer.innerHTML = `
            <div>Всего вместе:</div>
            <div>${days} дней, ${hours} часов, ${minutes} минут</div>
        `;
    }
}

setInterval(updateTimer, 60000);
updateTimer();

// ============================
// FLOATING HEARTS
// ============================
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = ["💖", "💕", "💗", "💘", "💞", "💓"][Math.floor(Math.random() * 6)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 8s linear, opacity 8s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform =
            `translate(${(Math.random() - 0.5) * 200}px, -${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// создаём сердечки по отдельности
setInterval(() => {
    createHeart();
}, 700);

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
        heart.style.zIndex = "9999";
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

        setTimeout(() => {
            heart.remove();
        }, 1500);
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
// RANDOM LOVE QUOTES
// ============================
const loveQuotes = [
    "Ты — моя самая красивая история. 💖",
    "С тобой каждый день становится волшебным. ✨",
    "Моё сердце принадлежит только тебе. 💘",
    "Ты моя судьба и моя любовь. 💞",
    "Люблю тебя бесконечно. ♾️",
    "Ты — мой дом. 🏡💗",
    "Ты — причина моей улыбки. 😊💕"
];

function showRandomQuote() {
    const quote = document.createElement("div");
    quote.innerHTML = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];

    quote.style.position = "fixed";
    quote.style.bottom = "20px";
    quote.style.left = "50%";
    quote.style.transform = "translateX(-50%)";
    quote.style.background = "rgba(255,255,255,0.15)";
    quote.style.backdropFilter = "blur(10px)";
    quote.style.color = "#fff";
    quote.style.padding = "12px 20px";
    quote.style.borderRadius = "20px";
    quote.style.fontSize = "18px";
    quote.style.zIndex = "9999";
    quote.style.opacity = "0";
    quote.style.transition = "opacity 1s";

    document.body.appendChild(quote);

    setTimeout(() => quote.style.opacity = "1", 100);
    setTimeout(() => quote.style.opacity = "0", 5000);
    setTimeout(() => quote.remove(), 6000);
}

setInterval(showRandomQuote, 15000);

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
    star.style.zIndex = "9998";
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
// ROSE PETALS
// ============================
function createPetal() {
    const petal = document.createElement("div");
    petal.innerHTML = "🌹";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-50px";
    petal.style.fontSize = (20 + Math.random() * 20) + "px";
    petal.style.zIndex = "9997";
    petal.style.pointerEvents = "none";
    petal.style.transition = "transform 12s linear, opacity 12s linear";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.style.transform =
            `translate(${(Math.random() - 0.5) * 200}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;
        petal.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

setInterval(createPetal, 3000);

// ============================
// LOVE MESSAGE POPUP
// ============================
const popupMessages = [
    "💌 Ты любовь всей моей жизни.",
    "💖 Спасибо, что ты есть.",
    "🌙 Ты мой самый прекрасный сон.",
    "✨ Ты моя вечность.",
    "💕 Моё сердце принадлежит тебе."
];

function showPopupMessage() {
    const popup = document.createElement("div");
    popup.innerHTML = popupMessages[Math.floor(Math.random() * popupMessages.length)];

    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.background = "rgba(255, 192, 203, 0.2)";
    popup.style.backdropFilter = "blur(10px)";
    popup.style.color = "#fff";
    popup.style.padding = "14px 24px";
    popup.style.borderRadius = "25px";
    popup.style.fontSize = "20px";
    popup.style.zIndex = "10000";
    popup.style.opacity = "0";
    popup.style.transition = "opacity 1s";

    document.body.appendChild(popup);

    setTimeout(() => popup.style.opacity = "1", 100);
    setTimeout(() => popup.style.opacity = "0", 5000);
    setTimeout(() => popup.remove(), 6000);
}

setInterval(showPopupMessage, 20000);
