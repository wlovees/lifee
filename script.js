// ==========================
// TIMER
// ==========================
const startDate = new Date("2026-01-03T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        document.getElementById("timer").innerHTML = "Совсем скоро начнётся наша история ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    document.getElementById("timer").innerHTML =
        `${days} дней, ${hours} часов, ${minutes} минут`;
}

updateTimer();
setInterval(updateTimer, 60000);

// ==========================
// FLOATING HEARTS
// ==========================
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";

    const hearts = ["💖", "💕", "💗", "💘", "💝", "❤️", "💞", "💓"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    // Случайная позиция по всей ширине экрана
    heart.style.left = Math.random() * 100 + "vw";

    // Размер
    const size = 20 + Math.random() * 30;
    heart.style.fontSize = size + "px";

    // Скорость
    const duration = 5 + Math.random() * 6;
    heart.style.animationDuration = duration + "s";

    // Небольшое вращение
    heart.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

    // Прозрачность
    heart.style.opacity = 0.6 + Math.random() * 0.4;

    document.body.appendChild(heart);

    // Удаляем после окончания анимации
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Создаем новые сердечки каждые 400 мс
setInterval(createHeart, 400);

// Первые сердечки сразу
for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
}
