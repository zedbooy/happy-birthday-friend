function playSong() {
  document.getElementById('birthdaySong').play();
}

// Balloon animation
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balloons = [];

for (let i = 0; i < 30; i++) {
  balloons.push({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 100,
    r: Math.random() * 30 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    speed: Math.random() * 2 + 1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balloons.forEach(balloon => {
    ctx.beginPath();
    ctx.arc(balloon.x, balloon.y, balloon.r, 0, Math.PI * 2);
    ctx.fillStyle = balloon.color;
    ctx.fill();
    balloon.y -= balloon.speed;
    if (balloon.y < -balloon.r) {
      balloon.y = canvas.height + balloon.r;
    }
  });
  requestAnimationFrame(animate);
}
animate();
