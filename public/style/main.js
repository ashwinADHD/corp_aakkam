/**
 * Aakkam Corporate Solutions — Progressive UI Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Handle Contact Form submission
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="your_name"]')?.value || 'Client';
      const email = contactForm.querySelector('[name="your_email"]')?.value || '';
      const message = contactForm.querySelector('[name="your_enquiry"]')?.value || '';
      
      const subject = encodeURIComponent(`Consultation Inquiry from ${name}`);
      const body = encodeURIComponent(`Client Name: ${name}\nClient Email: ${email}\n\nInquiry Details:\n${message}`);
      
      // Provide immediate UX feedback and launch mail client to CEO email
      alert('Thank you for contacting Aakkam Corporate Solutions. Opening your email client to dispatch this advisory request.');
      window.location.href = `mailto:ceo@aakkamcorp.com?subject=${subject}&body=${body}`;
    });
  }
});
