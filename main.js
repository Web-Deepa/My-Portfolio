document.addEventListener('DOMContentLoaded', () => {

  // 1. Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // 2. Active nav link highlight
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(a => a.classList.remove('nav-active'));
      this.classList.add('nav-active');
    });
  });

  // 3. Fullscreen certificate images
  const certImgs = document.querySelectorAll('.cert-img');
  certImgs.forEach(img => {
    img.addEventListener('click', async () => {
      try {
        if (!document.fullscreenElement) {
          await img.requestFullscreen();
        } else {
          await document.exitFullscreen();
        }
      } catch (err) {
        console.warn('Fullscreen error:', err.message);
      }
    });
  });

  // 4. Skill bar animation on scroll
  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.querySelectorAll('.progress-bar').forEach(bar => {
              const target = bar.getAttribute('data-width');
              if (target) bar.style.setProperty('width', target, 'important');
            });
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);
  }

  // 5. Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
      });
    });
  }

  // 6. Contact form submission
  const contactForm = document.getElementById('contactForm');
  const contactMessage = document.getElementById('contactMessage');

  if (contactForm && contactMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactMessage.textContent = 'Message sent! Thank you for reaching out.';
      contactMessage.classList.remove('d-none');
      contactForm.reset();

      setTimeout(() => {
        contactMessage.classList.add('d-none');
      }, 3000);
    });
  }

});

// 7. Show a specific section (used by nav links)
function showSection(id) {
  const navHeight = document.querySelector('nav')?.offsetHeight || 70;
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

// Legacy alias kept for existing onclick calls
function showSections(id) {
  showSection(id);
}
