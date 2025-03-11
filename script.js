// Countdown Timer
document.addEventListener("DOMContentLoaded", function() {
    const launchDate = new Date("March 23, 2025 10:09:00").getTime();
    const announceDate = new Date("March 11, 2025 09:55:00").getTime();
	

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;
        const annouceLeft = announceDate - now;
		

        console.log(`Time Left: ${timeLeft}`); // Debugging: Check if countdown reaches zero

        if (annouceLeft >= 0) {
            clearInterval(countdownInterval); // Stop the countdown when time is up
            document.getElementById("timer").innerHTML = "🚀 We're coming Live!";
            console.log("🚀 Countdown Ended: Message Should Now Be Visible");
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        //document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	document.getElementById("timer").innerHTML = `
    <span class="count-box">${days}d</span> 
    <span class="count-box">${hours}h</span> 
    <span class="count-box">${minutes}m</span> 
    ${seconds}s
`;

    }

    let countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run it immediately so there's no delay
});
