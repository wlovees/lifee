// ==========================================
// ❤️ ULTIMATE LOVE WEBSITE - script.js
// Полностью замени содержимое файла script.js
// ==========================================

// =======================
// TIMER (с 3 января 2026)
// =======================
const startDate = new Date("2026-01-03T02:35:11");

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

// ==========================================
// NEW FEATURES FOR LOVE WEBSITE
// ВСТАВИТЬ В САМЫЙ КОНЕЦ script.js
// ==========================================

// 🌍 Переводы
const translations = {
    en: "Our Love Story ❤️",
    ru: "Наша История Любви ❤️",
    ua: "Наша Історія Кохання ❤️",
    cz: "Náš Příběh Lásky ❤️"
};

// 🌍 Смена языка
function changeLanguage(lang) {
    localStorage.setItem("loveLanguage", lang);

    const title = document.querySelector("h1");
    if (title && translations[lang]) {
        title.textContent = translations[lang];
    }

    alert("🌍 Language changed!");
}

// 🔐 Проверка пароля
function checkSecretPassword() {
    const input = document.getElementById("secretPasswordInput");
    if (!input) return;

    if (input.value.trim().toLowerCase() === "myqueen") {
        alert("💖 Secret unlocked!\n\nYou are my queen forever ❤️👑");
    } else {
        alert("❌ Wrong password!");
    }
}

// 🎲 Генератор идей для свиданий
function generateDateIdea() {
    const ideas = [
        "🌅 Прогулка на закате",
        "🍿 Кино-вечер",
        "🍕 Свидание с пиццей",
        "🌯 С тебя кебаб ❤️",
        "🧺 Романтический пикник",
        "🎳 Боулинг",
        "☕ Кофе вместе",
        "🚗 Ночная поездка",
        "🍰 Десертное свидание",
        "🎮 Игровой вечер"
    ];

    const idea = ideas[Math.floor(Math.random() * ideas.length)];
    alert("💖 Идея для свидания:\n\n" + idea);
}

// 💍 Таймер до свадьбы (5 лет)
function updateWeddingCountdown() {
    const el = document.getElementById("weddingCountdown");
    if (!el) return;

    const weddingDate = new Date();
    weddingDate.setFullYear(weddingDate.getFullYear() + 5);

    function update() {
        const now = new Date();
        const diff = weddingDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const years = Math.floor(days / 365);
        const remainingDays = days % 365;

        el.innerHTML =
            `💍 ${years} years and ${remainingDays} days left until our wedding ❤️`;
    }

    update();
    setInterval(update, 1000);
}

// 🎮 Игра на поиск одинаковых сердечек
function startMemoryGame() {
    const emojis = ["💖","💖","❤️","❤️","💕","💕","💘","💘"];
    emojis.sort(() => Math.random() - 0.5);

    let first = null;
    let second = null;
    let lock = false;
    let matched = 0;

    const win = window.open("", "_blank", "width=450,height=550");

    win.document.write(`
        <html>
        <head>
        <title>Memory Game ❤️</title>
        <style>
            body {
                font-family: Arial;
                text-align: center;
                background: #1a0026;
                color: white;
                padding: 20px;
            }
            .grid {
                display: grid;
                grid-template-columns: repeat(4, 80px);
                gap: 10px;
                justify-content: center;
                margin-top: 20px;
            }
            .card {
                width: 80px;
                height: 80px;
                background: #ff4da6;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 40px;
                cursor: pointer;
                user-select: none;
            }
        </style>
        </head>
        <body>
            <h1>🎮 Memory Game ❤️</h1>
            <p>Find all matching hearts!</p>
            <div class="grid" id="grid"></div>
        </body>
        </html>
    `);

    const grid = win.document.getElementById("grid");

    emojis.forEach((emoji) => {
        const card = win.document.createElement("div");
        card.className = "card";
        card.textContent = "❓";

        card.onclick = function () {
            if (lock || card.textContent !== "❓") return;

            card.textContent = emoji;

            if (!first) {
                first = { card, emoji };
                return;
            }

            second = { card, emoji };
            lock = true;

            if (first.emoji === second.emoji) {
                matched += 2;
                first = null;
                second = null;
                lock = false;

                if (matched === emojis.length) {
                    setTimeout(() => {
                        win.alert("🎉 You won! ❤️");
                    }, 300);
                }
            } else {
                setTimeout(() => {
                    first.card.textContent = "❓";
                    second.card.textContent = "❓";
                    first = null;
                    second = null;
                    lock = false;
                }, 800);
            }
        };

        grid.appendChild(card);
    });
}

// 🚀 Автозапуск после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("loveLanguage") || "en";
    const selector = document.getElementById("languageSelector");

    if (selector) {
        selector.value = savedLang;
        changeLanguage(savedLang);
    }

    updateWeddingCountdown();
});

// ==========================================
// 🌍 FULL SITE TRANSLATION SYSTEM
// ВСТАВЬ ЭТО В САМЫЙ КОНЕЦ script.js
// После этого будет переводиться ВЕСЬ ТЕКСТ:
// - заголовки
// - кнопки
// - абзацы
// - подписи под фото
// - сообщения alert()
// ==========================================

// Словарь переводов
const siteTranslations = {
    en: {
        "Наша История Любви ❤️": "Our Love Story ❤️",
        "Our Love Story ❤️": "Our Love Story ❤️",
        "✨ Special Surprises ✨": "✨ Special Surprises ✨",
        "Click the buttons below for romantic surprises ❤️": "Click the buttons below for romantic surprises ❤️",
        "🔐 Secret Message": "🔐 Secret Message",
        "🎥 Video Surprise": "🎥 Video Surprise",
        "💍 Forever": "💍 Forever",
        "🎰 Love Wheel": "🎰 Love Wheel",
        "💌 Compliment": "💌 Compliment",
        "💘 Love Meter": "💘 Love Meter",
        "🎁 Gift Box": "🎁 Gift Box",
        "🧠 Love Quiz": "🧠 Love Quiz",
        "🎮 Mini Game": "🎮 Mini Game",
        "🌙 Day/Night Mode": "🌙 Day/Night Mode",
        "🎲 Date Idea Generator": "🎲 Date Idea Generator",
        "💍 Countdown to Our Wedding": "💍 Countdown to Our Wedding",
        "🎮 Memory Game": "🎮 Memory Game",
        "🔐 Secret Password": "🔐 Secret Password",
        "🎵 Ukrainian Love Playlist": "🎵 Ukrainian Love Playlist"
    },

    ru: {
        "Our Love Story ❤️": "Наша История Любви ❤️",
        "✨ Special Surprises ✨": "✨ Особенные Сюрпризы ✨",
        "Click the buttons below for romantic surprises ❤️": "Нажми на кнопки для романтических сюрпризов ❤️",
        "🔐 Secret Message": "🔐 Секретное Сообщение",
        "🎥 Video Surprise": "🎥 Видео Сюрприз",
        "💍 Forever": "💍 Навсегда",
        "🎰 Love Wheel": "🎰 Колесо Любви",
        "💌 Compliment": "💌 Комплимент",
        "💘 Love Meter": "💘 Уровень Любви",
        "🎁 Gift Box": "🎁 Подарок",
        "🧠 Love Quiz": "🧠 Викторина",
        "🎮 Mini Game": "🎮 Мини-Игра",
        "🌙 Day/Night Mode": "🌙 День/Ночь",
        "🎲 Date Idea Generator": "🎲 Генератор Идей Для Свиданий",
        "💍 Countdown to Our Wedding": "💍 Таймер До Свадьбы",
        "🎮 Memory Game": "🎮 Игра На Память",
        "🔐 Secret Password": "🔐 Секретный Пароль",
        "🎵 Ukrainian Love Playlist": "🎵 Украинский Плейлист"
    },

    ua: {
        "Our Love Story ❤️": "Наша Історія Кохання ❤️",
        "✨ Special Surprises ✨": "✨ Особливі Сюрпризи ✨",
        "Click the buttons below for romantic surprises ❤️": "Натисни кнопки для романтичних сюрпризів ❤️",
        "🔐 Secret Message": "🔐 Секретне Повідомлення",
        "🎥 Video Surprise": "🎥 Відео Сюрприз",
        "💍 Forever": "💍 Назавжди",
        "🎰 Love Wheel": "🎰 Колесо Кохання",
        "💌 Compliment": "💌 Комплімент",
        "💘 Love Meter": "💘 Рівень Кохання",
        "🎁 Gift Box": "🎁 Подарунок",
        "🧠 Love Quiz": "🧠 Вікторина",
        "🎮 Mini Game": "🎮 Міні-Гра",
        "🌙 Day/Night Mode": "🌙 День/Ніч",
        "🎲 Date Idea Generator": "🎲 Генератор Ідей Для Побачень",
        "💍 Countdown to Our Wedding": "💍 Таймер До Весілля",
        "🎮 Memory Game": "🎮 Гра На Пам'ять",
        "🔐 Secret Password": "🔐 Секретний Пароль",
        "🎵 Ukrainian Love Playlist": "🎵 Український Плейлист"
    },

    cz: {
        "Our Love Story ❤️": "Náš Příběh Lásky ❤️",
        "✨ Special Surprises ✨": "✨ Speciální Překvapení ✨",
        "Click the buttons below for romantic surprises ❤️": "Klikni na tlačítka pro romantická překvapení ❤️",
        "🔐 Secret Message": "🔐 Tajná Zpráva",
        "🎥 Video Surprise": "🎥 Video Překvapení",
        "💍 Forever": "💍 Navždy",
        "🎰 Love Wheel": "🎰 Kolo Lásky",
        "💌 Compliment": "💌 Kompliment",
        "💘 Love Meter": "💘 Měřič Lásky",
        "🎁 Gift Box": "🎁 Dárek",
        "🧠 Love Quiz": "🧠 Kvíz Lásky",
        "🎮 Mini Game": "🎮 Mini Hra",
        "🌙 Day/Night Mode": "🌙 Den/Noc",
        "🎲 Date Idea Generator": "🎲 Generátor Nápadů Na Rande",
        "💍 Countdown to Our Wedding": "💍 Odpočet Do Svatby",
        "🎮 Memory Game": "🎮 Paměťová Hra",
        "🔐 Secret Password": "🔐 Tajné Heslo",
        "🎵 Ukrainian Love Playlist": "🎵 Ukrajinský Playlist"
    }
};

// Функция полного перевода страницы
function translateEntirePage(lang) {
    const dictionary = siteTranslations[lang];
    if (!dictionary) return;

    // Переводим ВСЕ текстовые узлы
    document.querySelectorAll("*").forEach(element => {
        // Пропускаем script/style
        if (["SCRIPT", "STYLE", "IFRAME"].includes(element.tagName)) return;

        // Переводим только элементы без вложенных HTML-элементов
        if (element.children.length === 0) {
            const text = element.textContent.trim();

            if (dictionary[text]) {
                element.textContent = dictionary[text];
            }
        }

        // Перевод placeholder
        if (element.placeholder && dictionary[element.placeholder]) {
            element.placeholder = dictionary[element.placeholder];
        }
    });
}

// Переопределяем функцию смены языка
function changeLanguage(lang) {
    localStorage.setItem("loveLanguage", lang);
    translateEntirePage(lang);
}

// Автозагрузка языка при открытии сайта
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("loveLanguage") || "en";

    const selector = document.getElementById("languageSelector");
    if (selector) {
        selector.value = savedLang;
    }

    // Небольшая задержка, чтобы успели загрузиться все элементы
    setTimeout(() => {
        translateEntirePage(savedLang);
    }, 500);
});
