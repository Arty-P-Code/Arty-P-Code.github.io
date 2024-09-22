const emojis = ['📮', '📬', '📦', '💌', '✉️'];
let emojiInterval;

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.fontSize = `${Math.random() * 16 + 24}px`;
    
    // Randomize rotation direction
    const rotationDirection = Math.random() < 0.5 ? 'clockwise' : 'anticlockwise';
    emoji.dataset.rotation = rotationDirection;

    // Set animation duration
    const duration = Math.random() * 5 + 5;
    emoji.style.animationDuration = `${duration}s`;

    // Set starting position above the screen
    emoji.style.top = `-50px`;

    document.body.appendChild(emoji);

    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

function startEmojiAnimation() {
    if (!emojiInterval) {
        // Adjust this value to change the frequency of emoji generation
        // Increase the number to reduce frequency (e.g., 1000 for one emoji per second)
        emojiInterval = setInterval(createEmoji, 2500);
    }
}

function stopEmojiAnimation() {
    clearInterval(emojiInterval);
    emojiInterval = null;
    document.querySelectorAll('.emoji').forEach(emoji => emoji.remove());
}

// Export functions to make them accessible from index.html
window.startEmojiAnimation = startEmojiAnimation;
window.stopEmojiAnimation = stopEmojiAnimation;
