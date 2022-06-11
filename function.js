const heroSection = document.querySelector(".nav-target");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("static");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("static");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-64px",
  }
);
obs.observe(heroSection);