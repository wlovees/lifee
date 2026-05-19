
if (window.Telegram && Telegram.WebApp) {
  Telegram.WebApp.expand();
}

const startDate = new Date('2025-01-01T00:00:00');

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  document.getElementById('timer').innerHTML =
    `Всего вместе:<br><b>${days}</b> дней, <b>${hours}</b> часов, <b>${minutes}</b> минут`;
}
updateTimer();
setInterval(updateTimer, 60000);

// Hearts animation
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
let hearts = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
addEventListener('resize', resize);
resize();

function makeHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: 10 + Math.random() * 20,
    speed: 0.5 + Math.random() * 1.5,
    alpha: 0.4 + Math.random() * 0.6
  });
}

function drawHeart(x, y, s, a) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s / 20, s / 20);
  ctx.globalAlpha = a;
  ctx.fillStyle = '#ffb6d5';
  ctx.beginPath();
  ctx.moveTo(0, 6);
  ctx.bezierCurveTo(0, 0, -10, 0, -10, 6);
  ctx.bezierCurveTo(-10, 12, 0, 18, 0, 20);
  ctx.bezierCurveTo(0, 18, 10, 12, 10, 6);
  ctx.bezierCurveTo(10, 0, 0, 0, 0, 6);
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.15) makeHeart();
  hearts.forEach(h => {
    h.y -= h.speed;
    drawHeart(h.x, h.y, h.size, h.alpha);
  });
  hearts = hearts.filter(h => h.y > -30);
  requestAnimationFrame(animate);
}
animate();

// Simple generated music
let audioCtx;
document.getElementById('musicBtn').addEventListener('click', () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 659.25];
    let t = audioCtx.currentTime;
    for (let repeat = 0; repeat < 100; repeat++) {
      for (const freq of notes) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.value = 0.02;
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.35);
        t += 0.4;
      }
    }
    document.getElementById('musicBtn').textContent = '🎵 Музыка играет';
    document.getElementById('musicBtn').disabled = true;
  }
});
