function playSong() {
  const audio = document.getElementById('birthdaySong');
  audio.volume = 0.4; 
  audio.play();
}

// Confetti animation
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
let confetti = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function randomColor() {
  const colors = ['#ff3cac', '#784ba0', '#fff176', '#43e97b', '#38f9d7', '#f6d365', '#fda085'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfettiPiece() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 8 + 4,
    d: Math.random() * 40 + 10,
    color: randomColor(),
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltAngleIncremental: Math.random() * 0.07 + 0.05
  };
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 3, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.d);
    ctx.stroke();
  });
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  for (let i = 0; i < confetti.length; i++) {
    let c = confetti[i];
    c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
    c.x += Math.sin(0.01 * c.d);
    c.tiltAngle += c.tiltAngleIncremental;
    c.tilt = Math.sin(c.tiltAngle) * 15;

    if (c.y > canvas.height) {
      confetti[i] = createConfettiPiece();
      confetti[i].y = -10;
    }
  }
}

function initConfetti() {
  confetti = [];
  for (let i = 0; i < 120; i++) {
    confetti.push(createConfettiPiece());
  }
}

initConfetti();
drawConfetti();

// Gift box pop and image flip
const giftBox = document.getElementById('giftBox');
const flipPhoto = document.getElementById('flipPhoto');
let flipped = false;

giftBox.addEventListener('click', () => {
  giftBox.classList.toggle('opened');
  flipPhoto.classList.toggle('flipped');
});

// (Optional) Animate name color with JS for smoother effect
const rainbowName = document.getElementById('rainbowName');
const rainbowColors = ['#ff3cac', '#784ba0', '#fff176', '#43e97b', '#38f9d7', '#f6d365', '#fda085'];
let colorIndex = 0;
setInterval(() => {
  rainbowName.style.color = rainbowColors[colorIndex];
  colorIndex = (colorIndex + 1) % rainbowColors.length;
}, 300);