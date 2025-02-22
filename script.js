// Countdown Timer
document.addEventListener("DOMContentLoaded", function() {
    const launchDate = new Date("March 23, 2024 00:00:00").getTime();

    let countdownInterval; // Declare variable first

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft < 0) {
            clearInterval(countdownInterval); // Now countdownInterval is declared before use
            document.getElementById("timer").innerHTML = "🚀 We're Live! 🚀";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    countdownInterval = setInterval(updateCountdown, 1000); // Initialize AFTER declaration
    updateCountdown(); // Run immediately so there's no delay
});
