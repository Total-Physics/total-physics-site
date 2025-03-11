// Countdown Timer
document.addEventListener("DOMContentLoaded", function() {
    const launchDate = new Date("March 23, 2025 10:09:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval); // Stop the countdown when time is up
            document.getElementById("timer").innerHTML = "🚀 We're coming Live!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Fix: Declare countdownInterval AFTER function declaration
    let countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run it immediately so there's no delay
});
