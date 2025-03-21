let timerValue = 25 * 60;
        let timer;
        let isRunning = false;
        const timerDisplay = document.getElementById("timer");

        document.getElementById("setSession").addEventListener("click", () => {
            const userTime = parseInt(document.getElementById("sessionTime").value);
            if (!isNaN(userTime) && userTime > 0) {
                timerValue = userTime * 60;
                updateDisplay();
            }
        });

        document.getElementById("start").addEventListener("click", () => {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(countdown, 1000);
            }
        });

        document.getElementById("pause").addEventListener("click", () => {
            clearInterval(timer);
            isRunning = false;
        });

        document.getElementById("reset").addEventListener("click", () => {
            clearInterval(timer);
            isRunning = false;
            timerValue = 25 * 60;
            updateDisplay();
        });

        function countdown() {
            if (timerValue > 0) {
                timerValue--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
            }
        }

        function updateDisplay() {
            const minutes = Math.floor(timerValue / 60);
            const seconds = timerValue % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }