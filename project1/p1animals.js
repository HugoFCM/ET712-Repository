document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const audio = card.querySelector('audio');
            if (audio) {
                audio.currentTime = 0;
                audio.play();
            }
        });
    });
});
