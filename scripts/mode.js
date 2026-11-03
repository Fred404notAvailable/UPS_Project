(function () {
  'use strict';

  var THEMES = ['paper', 'void', 'blueprint'];
  var STORAGE_KEY = 'devcrew_theme';

  function getStoredTheme() {
    try {
      if (typeof window !== 'undefined' && window.location && window.location.search) {
        var params = new URLSearchParams(window.location.search);
        var qTheme = params.get('theme');
        if (qTheme && THEMES.indexOf(qTheme.toLowerCase()) !== -1) {
          return qTheme.toLowerCase();
        }
      }
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && THEMES.indexOf(stored) !== -1) {
        return stored;
      }
    } catch (e) {
      // Storage access blocked or unavailable
    }
    return 'paper';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var labelEl = document.getElementById('current-mode-label');
    if (labelEl) {
      labelEl.textContent = '[ MODE: ' + theme.toUpperCase() + ' ]';
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Storage write failed
    }
  }

  function cycleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'paper';
    var currentIndex = THEMES.indexOf(current);
    var nextIndex = (currentIndex + 1) % THEMES.length;
    var nextTheme = THEMES[nextIndex];
    applyTheme(nextTheme);
  }

  // Apply immediately before DOM content loads
  var initialTheme = getStoredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  function updateLocalTime() {
    var timeEl = document.getElementById('local-time-display');
    var footerTimeEl = document.getElementById('footer-time-display');

    var now = new Date();
    // Compute IST (UTC + 5:30)
    var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    var istTime = new Date(utc + (3600000 * 5.5));

    var hours = istTime.getHours();
    var minutes = istTime.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour format
    var strHours = hours < 10 ? '0' + hours : '' + hours;
    var strMinutes = minutes < 10 ? '0' + minutes : '' + minutes;

    var formatted = 'IST ' + strHours + ':' + strMinutes + ' ' + ampm;
    if (timeEl) timeEl.textContent = formatted;
    if (footerTimeEl) footerTimeEl.textContent = formatted;
  }

  function initFrames() {
    var closeButtons = document.querySelectorAll('.frame-close-btn');
    closeButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var frame = btn.closest('.frame');
        if (!frame) return;
        var isCollapsed = frame.classList.toggle('frame-collapsed');
        btn.textContent = isCollapsed ? '+' : 'x';
        btn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
      });
    });
  }

  function initNav() {
    var menuBtn = document.getElementById('nav-toggle-btn');
    var navPanel = document.getElementById('nav-panel');
    var navClose = document.getElementById('nav-close-btn');

    if (!menuBtn || !navPanel) return;

    function openNav() {
      navPanel.classList.add('nav-open');
      menuBtn.setAttribute('aria-expanded', 'true');
      if (navClose) navClose.focus();
    }

    function closeNav() {
      navPanel.classList.remove('nav-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.focus();
    }

    menuBtn.addEventListener('click', function () {
      if (navPanel.classList.contains('nav-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (navClose) {
      navClose.addEventListener('click', closeNav);
    }

    var navLinks = navPanel.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navPanel.classList.contains('nav-open')) {
        closeNav();
      }
    });
  }

  function initCalloutHighlights() {
    var callouts = document.querySelectorAll('.callout');
    callouts.forEach(function (callout) {
      var targetId = callout.getAttribute('data-target-node');
      if (!targetId) return;

      function highlight() {
        var node = document.getElementById(targetId);
        if (node) node.classList.add('node-highlighted');
        callout.classList.add('callout-highlighted');
      }

      function unhighlight() {
        var node = document.getElementById(targetId);
        if (node) node.classList.remove('node-highlighted');
        callout.classList.remove('callout-highlighted');
      }

      callout.addEventListener('mouseenter', highlight);
      callout.addEventListener('mouseleave', unhighlight);
      callout.addEventListener('focusin', highlight);
      callout.addEventListener('focusout', unhighlight);
    });
  }

  function initScrollShift() {
    var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    var spine = document.getElementById('ink-spine-element');
    var staggeredBlocks = document.querySelectorAll('.stagger-scroll');

    window.addEventListener('scroll', function () {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      var shift = Math.min(24, Math.max(-24, (scrolled % 200) / 8 - 12));

      if (spine) {
        spine.style.transform = 'translateY(' + shift + 'px)';
      }
      staggeredBlocks.forEach(function (block, idx) {
        var dir = idx % 2 === 0 ? 1 : -1;
        block.style.transform = 'translateY(' + (shift * 0.5 * dir) + 'px)';
      });
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var modeBtn = document.getElementById('mode-switch-btn');
    if (modeBtn) {
      modeBtn.addEventListener('click', cycleTheme);
    }

    var labelEl = document.getElementById('current-mode-label');
    if (labelEl) {
      var current = document.documentElement.getAttribute('data-theme') || 'paper';
      labelEl.textContent = '[ MODE: ' + current.toUpperCase() + ' ]';
    }

    updateLocalTime();
    setInterval(updateLocalTime, 60000);

    initFrames();
    initNav();
    initCalloutHighlights();
    initScrollShift();
  });
})();
