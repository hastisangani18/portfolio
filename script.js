const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ---------------------------------------------
// 2. SCROLL REVEAL
// Adds .visible class when section enters view
// ---------------------------------------------
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animate skill bars when skills section appears
        if (entry.target.id === 'skills') {
          animateSkillBars();
        }

        revealObserver.unobserve(entry.target); // only once
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach(el => revealObserver.observe(el));


// ---------------------------------------------
// 3. SKILL BAR ANIMATION
// Reads data-width and animates the fill bar
// ---------------------------------------------
function animateSkillBars() {
  const fills = document.querySelectorAll('.sk-fill');
  fills.forEach(fill => {
    const target = fill.getAttribute('data-width') + '%';
    setTimeout(() => {
      fill.style.width = target;
    }, 200);
  });
}


// ---------------------------------------------
// 4. ACTIVE NAV HIGHLIGHT ON SCROLL
// Highlights current section in navbar
// ---------------------------------------------
const sections   = document.querySelectorAll('.section[id], .hero[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentId = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) {
      currentId = sec.getAttribute('id');
    }
  });

  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + currentId) {
      a.classList.add('active');
    }
  });
});


// ---------------------------------------------
// 5. BLINKING CURSOR ON HERO NAME
// ---------------------------------------------
window.addEventListener('scroll', () => {
  let currentId = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) {
      currentId = sec.getAttribute('id');
    }
  });

  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + currentId) {
      a.classList.add('active');
    }
  });
});
