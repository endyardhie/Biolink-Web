const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');

        // Deteksi apakah perangkat menggunakan layar sentuh
        const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        const canUseCustomCursor = !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !isTouchDevice && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

        if (canUseCustomCursor) {
            document.body.classList.add('has-custom-cursor');

            window.addEventListener('mousemove', function(e) {
                const posX = e.clientX;
                const posY = e.clientY;

                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            });

            const interactables = document.querySelectorAll('a, summary, .cursor-pointer');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorOutline.style.width = '60px';
                    cursorOutline.style.height = '60px';
                    cursorOutline.style.borderColor = '#129E85'; 
                    cursorOutline.style.backgroundColor = 'rgba(18, 158, 133, 0.1)';
                });
                el.addEventListener('mouseleave', () => {
                    cursorOutline.style.width = '40px';
                    cursorOutline.style.height = '40px';
                    cursorOutline.style.borderColor = 'rgba(192, 96, 74, 0.8)';
                    cursorOutline.style.backgroundColor = 'transparent';
                });
            });
        }
