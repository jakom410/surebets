document.addEventListener('DOMContentLoaded', () => {
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(el => {
        setInterval(() => {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = 'glitch 0.3s infinite linear alternate';
            }, 50);
        }, 5000);
    });

    const button = document.querySelector('.cyber-button');
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 0 30px #00f7ff';
    });
    button.addEventListener('mouseout', () => {
        button.style.boxShadow = '0 0 10px #ff00ff';
    });
});