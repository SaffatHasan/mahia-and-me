const targetDate = new Date("2023-12-15T17:00:00");

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const countdownString = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  document.getElementById("countdown").textContent = countdownString;
};

updateCountdown();

setInterval(updateCountdown, 1000);
