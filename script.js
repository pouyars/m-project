document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    // Move cursor
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Follower delay
        setTimeout(() => {
            follower.style.left = (e.clientX - 10) + 'px'; 
            follower.style.top = (e.clientY - 10) + 'px';
        }, 80);
    });

    const links = document.querySelectorAll('a, button, .card, .memory-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            follower.classList.add('cursor-hover');
        });
        link.addEventListener('mouseleave', () => {
            follower.classList.remove('cursor-hover');
        });
    });

    // --- Floating Background Elements ---
    const floatContainer = document.getElementById('floating-container');
    const symbols = ['❤', '⭐', '✨', '🌙', '💜'];
    
    if(floatContainer) {
        setInterval(() => {
            const el = document.createElement('div');
            el.classList.add('floater');
            el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
            el.style.left = Math.random() * 100 + 'vw';
            el.style.animationDuration = (Math.random() * 5 + 5) + 's'; 
            el.style.fontSize = (Math.random() * 20 + 10) + 'px';
            
            floatContainer.appendChild(el);

            setTimeout(() => {
                el.remove();
            }, 10000);
        }, 800);
    }

    // --- Typing Effect (UPDATED FOR PERSIAN) ---
    const typingElement = document.getElementById('typing-text');
    if(typingElement) {
        // متن جدید فارسی
        const text = "به امید نشاندن لبخندی بر لب‌هایت... 💜";
        let index = 0;

        function type() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 80); // کمی کندتر برای خوانایی بهتر فارسی
            }
        }
        setTimeout(type, 1000);
    }

    // --- Shuffle Effect ---
    const shuffleBtn = document.getElementById('shuffle-btn');
    const cardsGrid = document.getElementById('cards-grid');

    if(shuffleBtn && cardsGrid) {
        shuffleBtn.addEventListener('click', () => {
            const cards = Array.from(cardsGrid.children);
            
            cards.forEach(card => card.style.opacity = '0');

            setTimeout(() => {
                for (let i = cards.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [cards[i], cards[j]] = [cards[j], cards[i]];
                }
                
                cards.forEach(card => cardsGrid.appendChild(card));
                
                cards.forEach(card => {
                    card.style.opacity = '1';
                });
            }, 300);
        });
    }
});