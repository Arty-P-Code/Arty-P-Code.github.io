const emojis = ['📮', '📬', '📦', '💌', '✉️'];
let emojiInterval;

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.fontSize = `${Math.random() * 16 + 24}px`;
    emoji.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(emoji);

    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

function startEmojiAnimation() {
    if (!emojiInterval) {
        emojiInterval = setInterval(createEmoji, 500);
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
