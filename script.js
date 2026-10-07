// Loader functionality
const loader = document.getElementById('loader');
const enterBtn = document.getElementById('enterBtn');

const startJourney = () => {
  loader.classList.add('hidden');
  document.body.style.overflow = 'auto';
};

if (enterBtn) {
  enterBtn.addEventListener('click', startJourney);
}

document.body.style.overflow = 'hidden';

// Intersection Observer for reveal animations
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));

// Counter functionality
const startDate = new Date('2026-04-06T00:00:00');
const now = new Date();
const diffMs = now - startDate;

const days = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
const hours = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60)));
const minutes = Math.max(0, Math.floor(diffMs / (1000 * 60)));

const counterDays = document.getElementById('counterDays');
const counterHours = document.getElementById('counterHours');
const counterMinutes = document.getElementById('counterMinutes');

if (counterDays) counterDays.textContent = days;
if (counterHours) counterHours.textContent = hours;
if (counterMinutes) counterMinutes.textContent = minutes;

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});