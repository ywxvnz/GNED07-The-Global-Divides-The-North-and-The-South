document.addEventListener("DOMContentLoaded", () => {
      const revealElements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right");

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.12
      };

      const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target); // Stop observing once revealed
          }
        });
      }, observerOptions);

      revealElements.forEach(element => {
        revealOnScroll.observe(element);
      });
    });