const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});

revealElements.forEach((element) => observer.observe(element));

const startDate = new Date('2026-04-06T00:00:00');
const today = new Date();
const totalDays = Math.max(1, Math.ceil((today - startDate) / (1000 * 60 * 60 * 24)));

const counterEl = document.getElementById('counter-number');
const counterDaysEl = document.getElementById('counter-days');

if (counterEl) {
  let current = 0;
  const target = totalDays;
  const timer = setInterval(() => {
    current += 1;
    counterEl.textContent = current;
    if (current >= target) {
      clearInterval(timer);
    }
  }, 18);
}

if (counterDaysEl) {
  counterDaysEl.textContent = `${totalDays} dias`;
}
