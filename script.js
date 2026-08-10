let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bg = new Image();
bg.src = 'ocean_background.jpg';

bg.onload = () => {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
};

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('bgMusic').play();
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    document.getElementById('invite-text').style.display = 'none';
    document.getElementById('rsvp-form').style.display = 'block';
});

// Play Music Button logic
const playBtn = document.getElementById('playMusicBtn');
const bgMusic = document.getElementById('bgMusic');

playBtn.addEventListener('click', () => {
    bgMusic.play();
    playBtn.style.display = 'none';
});

// --------------------
// Animated Bubbles
// --------------------
const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random horizontal position
    bubble.style.left = Math.random() * 100 + '%';

    // Random size
    const size = Math.random() * 30 + 10; // 10–40px
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // Random speed
    bubble.style.animationDuration = (Math.random() * 5 + 5) + 's';

    // Random transparency
    const opacity = Math.random() * 0.5 + 0.3;

    // Random ocean colors
    const blue = Math.floor(Math.random() * 156 + 100);
    const green = Math.floor(Math.random() * 100 + 150);
    bubble.style.background = `rgba(${Math.floor(Math.random() * 100)}, ${green}, ${blue}, ${opacity})`;

    bubblesContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 11000);
}

// Keep spawning bubbles
setInterval(createBubble, 300);