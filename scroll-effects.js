document.addEventListener('DOMContentLoaded', function () {
  const observer = new window.IntersectionObserver(
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

  // Animate all main sections, cards, timeline-content, and activities-subsection
  const revealEls = document.querySelectorAll(
    'section, .profile-section, .two-column-section, .card, .timeline-content, .project-box, .activities-subsection'
  );
  revealEls.forEach((el) => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
}); 