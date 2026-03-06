(function () {
  'use strict';

  // ===== Accordion (FAQ) =====
  var accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.accordion-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ===== Partners carousel dots =====
  var dots = document.querySelectorAll('.carousel-dots .dot');
  var track = document.querySelector('.partners-track');
  if (dots.length && track) {
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        dots.forEach(function (d) { return d.classList.remove('active'); });
        this.classList.add('active');
        var offset = index * -280;
        track.style.transform = 'translateX(' + offset + 'px)';
      });
    });
  }

  // ===== Mobile menu toggle + أنيميشن الموديل =====
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      document.body.classList.toggle('menu-open', isOpen);
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ===== Smooth scroll for anchor links + إغلاق القائمة على الموبايل =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var navEl = document.querySelector('.nav');
        var menuBtn = document.querySelector('.menu-toggle');
        if (navEl && navEl.classList.contains('open')) {
          navEl.classList.remove('open');
          document.body.classList.remove('menu-open');
          if (menuBtn) {
            menuBtn.classList.remove('is-open');
            menuBtn.setAttribute('aria-label', 'فتح القائمة');
            menuBtn.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });

  // ===== Header: transparent over hero, solid after scroll =====
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
})();
