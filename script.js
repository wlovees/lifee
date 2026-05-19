// ❤️ Дата начала отношений
const startDate = new Date("2026-01-03T00:00:00");

// ⏳ Таймер любви
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const timer = document.getElementById("timer");

    if (timer) {
        timer.innerHTML = `
            <strong>Всего вместе:</strong><br>
            ${days} дней, ${hours} часов, ${minutes} минут
        `;
    }
}

setInterval(updateTimer, 1000);
updateTimer();

// ✨ Падающие сердечки
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");

    const hearts = ["❤️", "💖", "💕", "💘", "💝"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Создаём сердечки каждые 500 мс
setInterval(createHeart, 500);
