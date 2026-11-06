/**
 * ===================================================================
 * CV & PORTOFOLIO PROFESIONAL - DHAFIN U.F
 * Script JS: Theme Switcher, Mobile Navigation, Scrollspy,
 * PDF Generator/Print, Form WhatsApp/Email Handlers & Copy to Clipboard
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -----------------------------------------------------------------
  // 1. DATA PLACEHOLDERS (MUDAH DIEDIT OLEH PENGGUNA)
  // -----------------------------------------------------------------
  const USER_CONFIG = {
    fullName: 'Dhafin U.F',
    role: 'Junior Network Technician',
    school: 'SMK TI Garuda Nusantara',
    email: 'dhafin.uf@example.com',
    whatsapp: '6281200000000', // Ganti dengan nomor WhatsApp aktif (format internasional tanpa '+')
    whatsappDisplay: '+62 8xx-xxxx-xxxx',
    location: 'Indonesia'
  };

  // -----------------------------------------------------------------
  // 2. THEME SWITCHER (DARK / LIGHT MODE)
  // -----------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Cek preferensi yang tersimpan di localStorage atau preferensi sistem
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme) {
      return savedTheme;
    }
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return userPrefersDark ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-preference', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap');
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap');
    }
  };

  // Set theme awal
  applyTheme(getInitialTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Mode ${newTheme === 'dark' ? 'Gelap' : 'Terang'} diaktifkan`);
    });
  }

  // -----------------------------------------------------------------
  // 3. TOAST NOTIFICATION SYSTEM
  // -----------------------------------------------------------------
  const toastEl = document.getElementById('toast');
  const toastMsgEl = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message, duration = 3000) {
    if (!toastEl || !toastMsgEl) return;
    
    toastMsgEl.textContent = message;
    toastEl.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, duration);
  }

  // -----------------------------------------------------------------
  // 4. DOWNLOAD CV (PDF / CETAK RESMI SIAP PRINT)
  // -----------------------------------------------------------------
  const printButtons = document.querySelectorAll('.btn-print');

  printButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Beri feedback toast kepada pengguna
      showToast('Menyiapkan format dokumen A4 resmi untuk dicetak / disimpan sebagai PDF...');

      // Tutup menu mobile jika sedang terbuka
      closeMobileMenu();

      // Berikan jeda sejenak agar UI menutup drawer sebelum dialog print muncul
      setTimeout(() => {
        window.print();
      }, 400);
    });
  });

  // -----------------------------------------------------------------
  // 5. MOBILE NAVIGATION DRAWER
  // -----------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileDrawer || !mobileToggleBtn) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileToggleBtn.classList.add('active');
    mobileToggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !mobileToggleBtn) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggleBtn.classList.remove('active');
    mobileToggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Tutup menu dengan tombol ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // -----------------------------------------------------------------
  // 6. STICKY HEADER & SCROLLSPY (ACTIVE NAV HIGHLIGHT)
  // -----------------------------------------------------------------
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('main > section');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  const handleScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header shadow saat di-scroll
    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Tampilkan tombol Back to Top jika scroll > 350px
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy: deteksi section aktif
    let currentSectionId = '';
    const scrollMargin = 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - scrollMargin;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger pertama kali saat load

  // Tombol Back to Top klik
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -----------------------------------------------------------------
  // 7. COPY TO CLIPBOARD BUTTONS
  // -----------------------------------------------------------------
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback untuk browser lawas / non-secure context
          const tempInput = document.createElement('input');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        showToast(`Tersalin ke clipboard: "${textToCopy}"`);
      } catch (err) {
        showToast(`Gagal menyalin teks.`);
      }
    });
  });

  // -----------------------------------------------------------------
  // 8. INTERACTIVE CONTACT FORM (WHATSAPP & EMAIL SENDER)
  // -----------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const btnSendWA = document.getElementById('btn-send-wa');

  const getFormData = () => {
    const nameInput = document.getElementById('sender-name');
    const contactInput = document.getElementById('sender-contact');
    const subjectSelect = document.getElementById('message-subject');
    const messageTextarea = document.getElementById('sender-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const contact = contactInput ? contactInput.value.trim() : '';
    const subject = subjectSelect ? subjectSelect.value : '';
    const message = messageTextarea ? messageTextarea.value.trim() : '';

    return { name, contact, subject, message };
  };

  const validateForm = (data) => {
    if (!data.name) {
      showToast('Silakan isi nama lengkap / instansi Anda.');
      document.getElementById('sender-name')?.focus();
      return false;
    }
    if (!data.contact) {
      showToast('Silakan isi kontak (email / WhatsApp) Anda.');
      document.getElementById('sender-contact')?.focus();
      return false;
    }
    if (!data.subject) {
      showToast('Silakan pilih perihal pesan.');
      document.getElementById('message-subject')?.focus();
      return false;
    }
    if (!data.message) {
      showToast('Silakan tuliskan pesan Anda.');
      document.getElementById('sender-message')?.focus();
      return false;
    }
    return true;
  };

  // Handler Kirim via WhatsApp
  if (btnSendWA) {
    btnSendWA.addEventListener('click', () => {
      const data = getFormData();
      if (!validateForm(data)) return;

      const waText = 
`Halo Dhafin U.F,
Saya: *${data.name}* (${data.contact})
Perihal: *${data.subject}*

Pesan:
${data.message}

---
_Pesan dikirim melalui Website Portofolio & CV Dhafin U.F_`;

      const encodedMsg = encodeURIComponent(waText);
      const waUrl = `https://wa.me/${USER_CONFIG.whatsapp}?text=${encodedMsg}`;

      showToast('Membuka tautan WhatsApp...');
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Handler Kirim via Email (mailto)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validateForm(data)) return;

      const emailSubject = `[Kontak CV Dhafin] ${data.subject} - ${data.name}`;
      const emailBody = 
`Halo Dhafin U.F,

Nama Pengirim: ${data.name}
Kontak Pengirim: ${data.contact}
Perihal: ${data.subject}

Pesan:
${data.message}

--
Pesan terkirim dari Website CV & Portofolio Dhafin U.F`;

      const mailtoUrl = `mailto:${USER_CONFIG.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      showToast('Membuka aplikasi email Anda...');
      window.location.href = mailtoUrl;
    });
  }

  // -----------------------------------------------------------------
  // 9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // -----------------------------------------------------------------
  const animElements = document.querySelectorAll('.animate-fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animElements.forEach(el => observer.observe(el));
  } else {
    // Fallback untuk browser tanpa IntersectionObserver
    animElements.forEach(el => el.classList.add('revealed'));
  }
});
