let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bg = new Image();
bg.src = 'image1.jpg';

bg.onload = () => {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
};


// Play Music Button logic
const playBtn = document.getElementById('playMusicBtn');
const bgMusic = document.getElementById('bgMusic');

// Make play button also start the visual party (confetti + balloons)
function startParty() {
    // play music if not already playing
    if (bgMusic.paused) bgMusic.play();

    // ensure background image is drawn
    if (bg.complete) {
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    }

    // make bubbles container visible (overrides mobile CSS hiding when needed)
    bubblesContainer.style.display = 'block';

    // start intervals only once
    if (!window.__partyStarted) {
        window.__partyStarted = true;
        window.__confettiInterval = setInterval(createConfetti, 150);
        window.__balloonInterval = setInterval(createBalloon, 3000);
    }
}

playBtn.addEventListener('click', () => {
    startParty();
    playBtn.style.display = 'none';
});

// --------------------
// --------------------
// Birthday Party Theme: Confetti + Balloons
// --------------------
const bubblesContainer = document.querySelector('.bubbles');

const confettiColors = ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#A66FFF','#FF8AB8'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    confetti.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 10 + 6; // 6–16px
    confetti.style.width = size + 'px';
    confetti.style.height = (size * 0.6) + 'px';
    confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';

    bubblesContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 8000);
}

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    balloon.style.left = Math.random() * 90 + 5 + '%';
    const size = Math.random() * 40 + 40; // 40–80px
    balloon.style.width = size + 'px';
    balloon.style.height = (size * 1.2) + 'px';
    balloon.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    balloon.style.animationDuration = (Math.random() * 6 + 8) + 's';

    const string = document.createElement('div');
    string.classList.add('string');
    balloon.appendChild(string);

    bubblesContainer.appendChild(balloon);

    setTimeout(() => balloon.remove(), 14000);
}
