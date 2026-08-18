/* ==========================================================================
   Matthew Luu — Portfolio
   1) Mobile nav toggle
   2) Active-section highlighting while scrolling
   3) Placeholder photo swap: any element with data-src is checked for a
      real image at that path. If found, it becomes the background and the
      grey placeholder + filename label disappear automatically — no HTML
      edits needed beyond dropping the file into /images/...
   ========================================================================== */

(function () {
  "use strict";

  /* ---- 1. Mobile nav toggle ---- */
  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    if (navLinks) {
      navLinks.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  /* ---- 2. Active nav link on scroll ---- */
  var sections = document.querySelectorAll("section[id]");
  var links = document.querySelectorAll(".nav-links a");

  function onScroll() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute("id");
      var link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (!link) return;
      if (scrollPos >= top && scrollPos < bottom) {
        links.forEach(function (l) { l.style.opacity = ""; });
        link.style.opacity = "1";
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- 3. Swap placeholder blocks for real images once dropped in ---- */
  var photos = document.querySelectorAll(".photo[data-src], .video-ph[data-src]");
  photos.forEach(function (el) {
    var src = el.getAttribute("data-src");
    if (!src) return;
    var img = new Image();
    img.onload = function () {
      el.style.backgroundImage = 'url("' + src + '")';
      el.classList.add("is-loaded");
    };
    img.onerror = function () {
      /* No file at this path yet — keep showing the labeled placeholder. */
    };
    img.src = src;
  });
})();
