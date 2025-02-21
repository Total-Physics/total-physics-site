// Countdown Timer
document.addEventListener("DOMContentLoaded", function() {
    const launchDate = new Date("March 23, 2024 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft < 0) {
            clearInterval(countdownInterval); // Stop the countdown when it reaches zero
            document.getElementById("timer").innerHTML = "🚀 We're Live!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Declare countdownInterval AFTER the function is defined
    updateCountdown(); // Run it immediately so the user sees the time right away
    const countdownInterval = setInterval(updateCountdown, 1000);
});
