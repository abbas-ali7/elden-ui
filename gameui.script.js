const hpBar = document.getElementById("hpBar");
const audio = document.getElementById("bg-audio");
const volumeSlider = document.getElementById("volume");
const muteBtn = document.getElementById("muteBtn");

// Fade in music on interaction
document.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = volumeSlider.value;
    audio.play();
  }
});

// Volume controls
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "UNMUTE" : "MUTE";
});

// HP drain simulation
setInterval(() => {
  let width = parseFloat(hpBar.style.width) || 100;
  if (width > 0) {
    width -= 0.1;
    hpBar.style.width = `${width}%`;
  }
}, 300);

// Change image on thumbnail click
function changeImage(src) {
  document.getElementById("main-image").src = src;
}

// Ambient star particles
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 200; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedY: Math.random() * 0.5 + 0.2,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ccc";
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.speedY;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
