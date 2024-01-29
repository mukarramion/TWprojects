const observeAnimations = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const elements = entry.target.querySelectorAll('[data-animation]');
    
    elements.forEach(element => {
      const animation = element.getAttribute("data-animation");
      console.log(entry.intersectionRatio);

      if (entry.isIntersecting) {
        element.classList.add('animate__' + animation);
      } else {
        element.classList.remove('animate__' + animation);
      }
    });
  });
});

const animateTargets = document.querySelectorAll('.cars-wrapper, .link-wrapper, .chooseus-wrapper');

animateTargets.forEach(target => observeAnimations.observe(target));
