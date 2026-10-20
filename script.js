const heartContainer = document.getElementById('heart-container');
        const heartIcons = ['❤️', '💖', '💗', '💓', '💕', '♥'];

        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
            heart.style.left = Math.random() * 100 + 'vw';

            const size = Math.random() * 25 + 15;
            heart.style.fontSize = size + 'px';

            const duration = Math.random() * 4 + 4;
            heart.style.animationDuration = duration + 's';

            heart.style.opacity = Math.random() * 0.5 +0.5;
            heartContainer.appendChild(heart);

            setTimeout(() => {heart.remove();}, duration * 1000);
                }
        setInterval(createHeart, 200);
        let isPage2  = false;
        function nextPage(){
            if(!isPage2){
                const p1 = document.getElementById('page1');
                const p2 = document.getElementById('page2');
                const card = document.getElementById('card');

                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    p1.style.display = 'none';
                    p2.style.display = 'block';
                    setTimeout(() => {
                        p2.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                }, 300);
                for(let i = 0; i < 15; i++){
                    setTimeout(createHeart, i * 50);
                }
                isPage2 = true;
            }
        }