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

/* =========================================================
   💍 ADVANCED WEDDING COUNTDOWN
   Показывает: годы, месяцы, дни, часы, минуты и секунды
   ЗАМЕНИ ИМ ЭТОТ СТАРЫЙ КОД countdownToWedding()
========================================================= */

function updateWeddingCountdown() {
    const weddingElement = document.getElementById("weddingCountdown");
    if (!weddingElement) return;

    // 📅 Дата свадьбы (ровно через 5 лет)
    // Измени на свою дату, если нужно
    const weddingDate = new Date("2031-01-03T00:00:00");

    const now = new Date();

    // Если дата уже наступила
    if (now >= weddingDate) {
        weddingElement.innerHTML = "💍 Today is our wedding day! ❤️";
        return;
    }

    // ==========================================
    // 📆 Расчёт лет, месяцев, дней, часов, минут, секунд
    // ==========================================
    let years = weddingDate.getFullYear() - now.getFullYear();
    let months = weddingDate.getMonth() - now.getMonth();
    let days = weddingDate.getDate() - now.getDate();
    let hours = weddingDate.getHours() - now.getHours();
    let minutes = weddingDate.getMinutes() - now.getMinutes();
    let seconds = weddingDate.getSeconds() - now.getSeconds();

    // Корректировка секунд
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    // Корректировка минут
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    // Корректировка часов
    if (hours < 0) {
        hours += 24;
        days--;
    }

    // Корректировка дней
    if (days < 0) {
        // Последний день предыдущего месяца
        const prevMonthLastDay = new Date(
            weddingDate.getFullYear(),
            weddingDate.getMonth(),
            0
        ).getDate();

        days += prevMonthLastDay;
        months--;
    }

    // Корректировка месяцев
    if (months < 0) {
        months += 12;
        years--;
    }

    // ==========================================
    // 💖 Вывод красивого таймера
    // ==========================================
    weddingElement.innerHTML =
        `💍 ${years} years, ` +
        `${months} months, ` +
        `${days} days, ` +
        `${hours} hours, ` +
        `${minutes} minutes, ` +
        `${seconds} seconds left until our wedding ❤️`;
}

// ==========================================
// 🚀 Запуск таймера
// ==========================================
updateWeddingCountdown();
setInterval(updateWeddingCountdown, 1000);

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

/* =====================================================
   🌍 ПОЛНЫЙ КОД ДЛЯ ПЕРЕВОДА ВСЕГО САЙТА
   ВСТАВЬ ЭТО В САМЫЙ КОНЕЦ ФАЙЛА script.js
   НЕ УДАЛЯЙ существующие функции (таймер, музыка, игры)
===================================================== */

// ==========================================
// 🌍 ПОЛНЫЙ СЛОВАРЬ ПЕРЕВОДОВ
// ==========================================
const BASE_TEXTS = {
  // Основные тексты
  "🎵 Play Music": {
    en: "🎵 Play Music",
    ru: "🎵 Включить музыку",
    ua: "🎵 Увімкнути музику",
    cz: "🎵 Přehrát hudbu"
  },

  "💖 Our Love 💖": {
    en: "💖 Our Love 💖",
    ru: "💖 Наша Любовь 💖",
    ua: "💖 Наше Кохання 💖",
    cz: "💖 Naše Láska 💖"
  },

  "A romantic story written in the stars ✨": {
    en: "A romantic story written in the stars ✨",
    ru: "Романтическая история, написанная звёздами ✨",
    ua: "Романтична історія, написана зірками ✨",
    cz: "Romantický příběh napsaný ve hvězdách ✨"
  },

  "⏳ Together Since January 3, 2026": {
    en: "⏳ Together Since January 3, 2026",
    ru: "⏳ Вместе с 3 января 2026",
    ua: "⏳ Разом з 3 січня 2026",
    cz: "⏳ Spolu od 3. ledna 2026"
  },

  "Loading...": {
    en: "Loading...",
    ru: "Загрузка...",
    ua: "Завантаження...",
    cz: "Načítání..."
  },

  "💌 Love Letter": {
    en: "💌 Love Letter",
    ru: "💌 Любовное письмо",
    ua: "💌 Любовний лист",
    cz: "💌 Milostný dopis"
  },

  "💖 Reasons Why I Love You": {
    en: "💖 Reasons Why I Love You",
    ru: "💖 Причины, почему я тебя люблю",
    ua: "💖 Причини, чому я тебе кохаю",
    cz: "💖 Důvody, proč tě miluji"
  },

  "🤍 My Promise": {
    en: "🤍 My Promise",
    ru: "🤍 Моё обещание",
    ua: "🤍 Моя обіцянка",
    cz: "🤍 Můj slib"
  },

  "📸 Our Beautiful Memories": {
    en: "📸 Our Beautiful Memories",
    ru: "📸 Наши прекрасные воспоминания",
    ua: "📸 Наші прекрасні спогади",
    cz: "📸 Naše krásné vzpomínky"
  },

  // Кнопки и разделы
  "🔐 Open My Secret": {
    en: "🔐 Open My Secret",
    ru: "🔐 Открой мой секрет",
    ua: "🔐 Відкрий мій секрет",
    cz: "🔐 Otevři mé tajemství"
  },

  "🎥 Video Surprise": {
    en: "🎥 Video Surprise",
    ru: "🎥 Видео сюрприз",
    ua: "🎥 Відео сюрприз",
    cz: "🎥 Video překvapení"
  },

  "💍 Will You Stay With Me Forever?": {
    en: "💍 Will You Stay With Me Forever?",
    ru: "💍 Ты останешься со мной навсегда?",
    ua: "💍 Ти залишишся зі мною назавжди?",
    cz: "💍 Zůstaneš se mnou navždy?"
  },

  "✨ Special Surprises ✨": {
    en: "✨ Special Surprises ✨",
    ru: "✨ Особенные сюрпризы ✨",
    ua: "✨ Особливі сюрпризи ✨",
    cz: "✨ Speciální překvapení ✨"
  },

  "Click the buttons below for romantic surprises ❤️": {
    en: "Click the buttons below for romantic surprises ❤️",
    ru: "Нажми на кнопки ниже для романтических сюрпризов ❤️",
    ua: "Натисни кнопки нижче для романтичних сюрпризів ❤️",
    cz: "Klikni na tlačítka níže pro romantická překvapení ❤️"
  },

  "🔐 Secret Password": {
    en: "🔐 Secret Password",
    ru: "🔐 Секретный пароль",
    ua: "🔐 Секретний пароль",
    cz: "🔐 Tajné heslo"
  },

  "Enter the secret password to unlock a hidden message ❤️": {
    en: "Enter the secret password to unlock a hidden message ❤️",
    ru: "Введите секретный пароль, чтобы открыть скрытое сообщение ❤️",
    ua: "Введіть секретний пароль, щоб відкрити приховане повідомлення ❤️",
    cz: "Zadej tajné heslo pro odemknutí skryté zprávy ❤️"
  },

  "Enter password...": {
    en: "Enter password...",
    ru: "Введите пароль...",
    ua: "Введіть пароль...",
    cz: "Zadejte heslo..."
  },

  "Unlock Secret": {
    en: "Unlock Secret",
    ru: "Открыть секрет",
    ua: "Відкрити секрет",
    cz: "Odemknout tajemství"
  },

  "🎵 Ukrainian Love Playlist": {
    en: "🎵 Ukrainian Love Playlist",
    ru: "🎵 Украинский романтический плейлист",
    ua: "🎵 Український романтичний плейлист",
    cz: "🎵 Ukrajinský romantický playlist"
  },

  "🎲 Date Idea Generator": {
    en: "🎲 Date Idea Generator",
    ru: "🎲 Генератор идей для свиданий",
    ua: "🎲 Генератор ідей для побачень",
    cz: "🎲 Generátor nápadů na rande"
  },

  "Click to get a romantic date idea ❤️": {
    en: "Click to get a romantic date idea ❤️",
    ru: "Нажми, чтобы получить романтическую идею для свидания ❤️",
    ua: "Натисни, щоб отримати романтичну ідею для побачення ❤️",
    cz: "Klikni pro romantický nápad na rande ❤️"
  },

  "Generate Date Idea": {
    en: "Generate Date Idea",
    ru: "Сгенерировать идею",
    ua: "Згенерувати ідею",
    cz: "Vygenerovat nápad"
  },

  "💍 Countdown to Our Wedding": {
    en: "💍 Countdown to Our Wedding",
    ru: "💍 Обратный отсчёт до нашей свадьбы",
    ua: "💍 Відлік до нашого весілля",
    cz: "💍 Odpočet do naší svatby"
  },

  "🎮 Memory Game": {
    en: "🎮 Memory Game",
    ru: "🎮 Игра на память",
    ua: "🎮 Гра на пам'ять",
    cz: "🎮 Paměťová hra"
  },

  "Find matching hearts ❤️": {
    en: "Find matching hearts ❤️",
    ru: "Найди одинаковые сердечки ❤️",
    ua: "Знайди однакові сердечка ❤️",
    cz: "Najdi stejná srdíčka ❤️"
  },

  "Start Game": {
    en: "Start Game",
    ru: "Начать игру",
    ua: "Почати гру",
    cz: "Začít hru"
  }
};

// ==========================================
// 🌍 СОХРАНЕНИЕ ОРИГИНАЛЬНОГО ТЕКСТА
// ==========================================
function saveAllOriginalTexts() {
  document.querySelectorAll("*").forEach(el => {
    if (["SCRIPT", "STYLE", "IFRAME"].includes(el.tagName)) return;

    if (el.children.length === 0) {
      const text = el.textContent.trim();
      if (text && !el.dataset.originalText) {
        el.dataset.originalText = text;
      }
    }

    if (el.placeholder && !el.dataset.originalPlaceholder) {
      el.dataset.originalPlaceholder = el.placeholder;
    }
  });
}

// ==========================================
// 🌍 ПЕРЕВОД САЙТА
// ==========================================
function translateEntireWebsite(lang) {
  document.querySelectorAll("*").forEach(el => {
    if (["SCRIPT", "STYLE", "IFRAME"].includes(el.tagName)) return;

    if (el.dataset.originalText) {
      const original = el.dataset.originalText.trim();
      if (BASE_TEXTS[original] && BASE_TEXTS[original][lang]) {
        el.textContent = BASE_TEXTS[original][lang];
      } else {
        el.textContent = original;
      }
    }

    if (el.dataset.originalPlaceholder) {
      const original = el.dataset.originalPlaceholder.trim();
      if (BASE_TEXTS[original] && BASE_TEXTS[original][lang]) {
        el.placeholder = BASE_TEXTS[original][lang];
      } else {
        el.placeholder = original;
      }
    }
  });
}

// ==========================================
// 🌍 СМЕНА ЯЗЫКА
// ==========================================
function changeLanguage(lang) {
  localStorage.setItem("loveLanguage", lang);
  translateEntireWebsite(lang);
}

// ==========================================
// 🚀 АВТОЗАПУСК
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  saveAllOriginalTexts();

  const savedLang = localStorage.getItem("loveLanguage") || "en";

  const selector = document.getElementById("languageSelector");
  if (selector) {
    selector.value = savedLang;
  }

  // Повторно сохраняем тексты после загрузки таймеров и динамического контента
  setTimeout(() => {
    saveAllOriginalTexts();
    translateEntireWebsite(savedLang);
  }, 1000);
});

/* =========================================================
   💌 365 LOVE MESSAGES + 🌅 GOOD MORNING AT 7:00 + 🔔 DAILY NOTIFICATIONS
   ВСТАВЬ ЭТО В КОНЕЦ ФАЙЛА script.js
========================================================= */

// ==========================================
// 💌 365 ЛЮБОВНЫХ СООБЩЕНИЙ
// ==========================================
const loveMessages = [
  "❤️ Доброе утро, моя любовь! Я люблю тебя больше всего на свете.",
  "🌹 Ты — самое прекрасное, что случилось в моей жизни.",
  "💖 С каждым днём я люблю тебя всё сильнее.",
  "✨ Ты делаешь мой мир ярче.",
  "💋 Я посылаю тебе тысячи поцелуев.",
  "🤗 Мои объятия всегда рядом с тобой.",
  "🌙 Даже во сне я думаю о тебе.",
  "☀️ Ты — моё солнце и моя радость.",
  "💍 Я хочу провести с тобой всю жизнь.",
  "💘 Моё сердце принадлежит только тебе.",
  "🌸 Ты самая красивая девушка в мире.",
  "🎵 Твой голос — моя любимая мелодия.",
  "🏡 Рядом с тобой я чувствую себя дома.",
  "💎 Ты бесценна для меня.",
  "🌈 Ты раскрашиваешь мою жизнь яркими красками.",
  "💞 Ты — моя судьба.",
  "🌹 Я благодарен за каждый день с тобой.",
  "❤️ Ты — смысл моей жизни.",
  "💖 Моё счастье начинается с тебя.",
  "🌟 Ты — моя звезда.",
  // Автоматически дополняем до 365 сообщений
];

// Дополняем массив до 365 сообщений
for (let i = loveMessages.length + 1; i <= 365; i++) {
  loveMessages.push(`💖 День ${i}: Я люблю тебя всё сильнее с каждым днём ❤️`);
}

// ==========================================
// 📅 ПОЛУЧИТЬ СООБЩЕНИЕ ДНЯ
// ==========================================
function getTodayLoveMessage() {
  const startDate = new Date(2026, 05, 20); // 1 января 2025
  const today = new Date();
  const diffDays = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
  );
  const index = diffDays % 365;
  return loveMessages[index];
}

// ==========================================
// 🌅 УТРЕННЕЕ ПРИВЕТСТВИЕ В 7:00
// ==========================================
function showGoodMorningMessage() {
  const now = new Date();
  const lastShown = localStorage.getItem("lastMorningMessage");
  const today = now.toDateString();

  if (now.getHours() >= 7 && lastShown !== today) {
    const message = getTodayLoveMessage();

    setTimeout(() => {
      alert("🌅 Доброе утро, любимая!\n\n" + message);
    }, 2000);

    localStorage.setItem("lastMorningMessage", today);
  }
}

// ==========================================
// 🔔 ЗАПРОС РАЗРЕШЕНИЯ НА УВЕДОМЛЕНИЯ
// ==========================================
function requestNotificationPermission() {
  if (!("Notification" in window)) return;

  if (Notification.permission === "default") {
    Notification.requestPermission();
  }
}

// ==========================================
// 🔔 ПОКАЗАТЬ УВЕДОМЛЕНИЕ
// ==========================================
function showDailyNotification() {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;

  const message = getTodayLoveMessage();

  new Notification("❤️ Доброе утро, любимая!", {
    body: message,
    icon: "icon-192.png",
    badge: "icon-192.png"
  });
}

// ==========================================
// ⏰ ПРОВЕРКА ВРЕМЕНИ (7:00)
// ==========================================
function checkMorningNotification() {
  const now = new Date();
  const today = now.toDateString();
  const lastNotification = localStorage.getItem("lastNotificationDate");

  if (
    now.getHours() === 7 &&
    now.getMinutes() === 0 &&
    lastNotification !== today
  ) {
    showDailyNotification();
    localStorage.setItem("lastNotificationDate", today);
  }
}

// ==========================================
// 💌 ПОКАЗАТЬ СООБЩЕНИЕ ДНЯ НА САЙТЕ
// ==========================================
function addDailyLoveMessageToPage() {
  if (document.getElementById("dailyLoveMessage")) return;

  const container = document.querySelector(".container");
  if (!container) return;

  const card = document.createElement("div");
  card.className = "card";
  card.id = "dailyLoveMessage";

  card.innerHTML = `
    <h2>💌 Message of the Day</h2>
    <p style="font-size: 1.2rem; line-height: 1.8;">
      ${getTodayLoveMessage()}
    </p>
  `;

  // Добавляем после таймера
  const timerBox = document.querySelector(".timer-box");
  if (timerBox && timerBox.nextSibling) {
    timerBox.parentNode.insertBefore(card, timerBox.nextSibling);
  } else {
    container.appendChild(card);
  }
}

// ==========================================
// 🚀 ИНИЦИАЛИЗАЦИЯ
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  // Добавляем сообщение дня на сайт
  addDailyLoveMessageToPage();

  // Запрашиваем разрешение на уведомления
  requestNotificationPermission();

  // Показываем приветствие после 7:00 один раз в день
  showGoodMorningMessage();

  // Проверяем каждую минуту, наступило ли 7:00
  setInterval(checkMorningNotification, 60000);

  // Проверяем сразу при загрузке
  checkMorningNotification();
});

function showProposal() {
    const answer = confirm(
        "💍 My Love,\n\n" +
        "From the moment you came into my life, everything became more beautiful.\n" +
        "You are my happiness, my best friend, and my forever.\n\n" +
        "Will you marry me? ❤️"
    );

    if (answer) {
        alert(
            "💖 YES! 💖\n\n" +
            "This is the happiest moment of my life.\n" +
            "I promise to love you forever and ever. 💍❤️"
        );

        startProposalCelebration();
    } else {
        alert("❤️ No matter what, I will always love you forever. ❤️");
    }
}

function startProposalCelebration() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "💖";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "100vh";
            heart.style.fontSize = (Math.random() * 30 + 20) + "px";
            heart.style.zIndex = "9999";
            heart.style.pointerEvents = "none";
            heart.style.transition = "all 4s ease-out";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.top = "-10vh";
                heart.style.opacity = "0";
            }, 50);

            setTimeout(() => {
                heart.remove();
            }, 4500);
        }, i * 100);
    }
}

// ==========================================
// 🕰️ TIME CAPSULE LETTER
// Письмо откроется только через 1 год
// ==========================================

function openTimeCapsule() {
    // Дата начала отсчёта
    const startDate = new Date("2026-05-20");

    // Дата открытия = через 1 год
    const unlockDate = new Date(startDate);
    unlockDate.setFullYear(unlockDate.getFullYear() + 1);

    const now = new Date();

    // Если ещё рано открывать письмо
    if (now < unlockDate) {
        const diff = unlockDate - now;
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

        alert(
            "🔒 This letter is still locked.\n\n" +
            "It will open in " + days + " days. ❤️"
        );
        return;
    }

    // Сообщение, которое откроется через год
    alert("❤️ Я все еще люблю тебя ❤️");
}

/* =========================================================
   🕰️ TIME CAPSULE LETTER + LIVE COUNTDOWN
   ВСТАВЬ ЭТО В САМЫЙ КОНЕЦ ФАЙЛА script.js
========================================================= */

// ==========================================
// 💌 ОТКРЫТЬ ПИСЬМО ЧЕРЕЗ 1 ГОД
// ==========================================
function openTimeCapsule() {
    // Дата начала отсчёта
    // Измени на любую дату, с которой хочешь считать 1 год
    const startDate = new Date("2026-05-20");

    // Дата открытия = через 1 год
    const unlockDate = new Date(startDate);
    unlockDate.setFullYear(unlockDate.getFullYear() + 1);

    const now = new Date();

    // Если ещё рано открывать письмо
    if (now < unlockDate) {
        const diff = unlockDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (diff % (1000 * 60 * 60)) /
            (1000 * 60)
        );
        const seconds = Math.floor(
            (diff % (1000 * 60)) /
            1000
        );

        alert(
            "🔒 This letter is still locked.\n\n" +
            "⏳ Time left:\n" +
            days + " days, " +
            hours + " hours, " +
            minutes + " minutes, " +
            seconds + " seconds ❤️"
        );
        return;
    }

    // Сообщение, которое откроется через год
    alert("❤️ Я все еще люблю тебя ❤️");
}

// ==========================================
// 🕰️ СОЗДАНИЕ БЛОКА ОБРАТНОГО ОТСЧЁТА
// ==========================================
function createTimeCapsuleCountdown() {
    // Если блок уже существует — не создаём второй раз
    if (document.getElementById("timeCapsuleCountdown")) return;

    const container = document.querySelector(".container");
    if (!container) return;

    // Создаём новый раздел
    const section = document.createElement("section");
    section.className = "card center";
    section.innerHTML = `
        <h2>🕰️ Letter Countdown</h2>
        <p>Time left until the secret letter opens ❤️</p>
        <div id="timeCapsuleCountdown"
             style="font-size:1.6rem;font-weight:bold;margin-top:15px;">
            Loading...
        </div>
    `;

    // Добавляем раздел в конец сайта
    container.appendChild(section);
}

// ==========================================
// ⏳ ОБНОВЛЕНИЕ ТАЙМЕРА КАЖДУЮ СЕКУНДУ
// ==========================================
function updateTimeCapsuleCountdown() {
    const countdownElement = document.getElementById("timeCapsuleCountdown");
    if (!countdownElement) return;

    // Дата начала отсчёта (должна совпадать с openTimeCapsule)
    const startDate = new Date("2025-05-20");

    // Дата открытия = через 1 год
    const unlockDate = new Date(startDate);
    unlockDate.setFullYear(unlockDate.getFullYear() + 1);

    const now = new Date();
    const diff = unlockDate - now;

    // Если письмо уже можно открыть
    if (diff <= 0) {
        countdownElement.innerHTML = "💌 The letter is now unlocked! ❤️";
        return;
    }

    // Вычисляем дни, часы, минуты, секунды
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.floor(
        (diff % (1000 * 60)) /
        1000
    );

    // Показываем живой обратный отсчёт
    countdownElement.innerHTML =
        `⏳ ${days} days, ` +
        `${hours} hours, ` +
        `${minutes} minutes, ` +
        `${seconds} seconds ❤️`;
}

// ==========================================
// 🚀 ЗАПУСК
// ==========================================
createTimeCapsuleCountdown();
updateTimeCapsuleCountdown();
setInterval(updateTimeCapsuleCountdown, 1000);


        // 🎵 Автоматическое воспроизведение музыки
window.addEventListener("load", function () {
    const music = document.getElementById("bgMusic");
    if (!music) return;

    // Громкость (от 0.0 до 1.0)
    music.volume = 0.7;

    // Функция запуска музыки
    function startMusic() {
        music.play().catch(() => {});
    }

    // Пытаемся запустить сразу
    startMusic();

    // Если браузер запретил автозапуск,
    // музыка начнётся после первого касания
    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });
});
