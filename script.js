// Password Logic
        function checkPass() {
            const pass = "3308"; // PASSWORD YAHAN CHANGE KARO
            const input = document.getElementById('passInput').value;
            const screen = document.getElementById('password-screen');
            if(input === pass) {
                screen.style.opacity = '0';
                setTimeout(() => {
                    screen.style.display = 'none';
                    createStars();
                }, 800);
            } else {
                document.getElementById('err').style.display = 'block';
            }
        }

        // Chapter Logic
        function toggleCh(id) {
            const allContent = document.querySelectorAll('.content');
            const target = document.getElementById('ch' + id);
            
            allContent.forEach(c => {
                if(c.id !== 'ch' + id) c.classList.remove('active');
            });
            target.classList.toggle('active');
        }

        // Dodge Button
        function dodgeBtn() {
            const btn = document.getElementById('noBtn');
            const group = document.querySelector('.btn-group');
            
            const maxX = group.clientWidth - btn.clientWidth;
            const maxY = group.clientHeight - btn.clientHeight;
            
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;
            
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }

        function sayYes() {
            document.querySelector('.btn-group').style.display = 'none';
            document.getElementById('finalMsg').style.display = 'block';
        }

        // Star Background
        function createStars() {
            for (let i = 0; i < 70; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 3 + 1 + 'px';
                star.style.width = size;
                star.style.height = size;
                star.style.left = Math.random() * 100 + 'vw';
                star.style.top = Math.random() * 100 + 'vh';
                star.style.setProperty('--d', Math.random() * 3 + 2 + 's');
                document.body.appendChild(star);
            }
        }