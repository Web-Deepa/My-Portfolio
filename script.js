document.addEventListener('DOMContentLoaded', () => {
     // Smooth scrolling for navigation links

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });

    });
    // skill..

 const skillBars = document.querySelectorAll('.skill-progress');
            let animationTriggered = false;
            
            // Function to animate skill bars
            function animateSkillBars() {
                if (animationTriggered) return;
                
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.setProperty('--target-width', width);
                    bar.classList.add('animate');
                });
                
                animationTriggered = true;
            }
            
            // Check if skills section is in viewport
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                    rect.bottom >= 0
                );
            }
   // Check on scroll and on load
            function checkScroll() {
                const skillsSection = document.getElementById('skills');
                if (isElementInViewport(skillsSection)) {
                    animateSkillBars();
                }
            }
            
            window.addEventListener('scroll', checkScroll);
            window.addEventListener('load', checkScroll);
       



//conatct-form
    function clearForm() {
    document.getElementById("contactForm").reset();
}

            
     
});

