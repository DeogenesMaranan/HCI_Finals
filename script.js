function updateFavicon() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.getElementById('favicon');
    favicon.href = isDarkMode ? 'assets/favicon-white.png' : 'assets/favicon-black.png';
  }
  
  updateFavicon();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
  
  document.getElementById("burger-menu").addEventListener("click", function() {
    var popupMenu = document.getElementById("popup-menu");
    popupMenu.classList.toggle("open");
    popupMenu.classList.remove("close");
  });
  
  document.getElementById("close-menu").addEventListener("click", function() {
    var popupMenu = document.getElementById("popup-menu");
    popupMenu.classList.remove("open");
    popupMenu.classList.add("close");
  });
  
  document.getElementById("switch-to-signup").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  });
  
  document.getElementById("switch-to-login").addEventListener("click", function() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  });
  
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
  }
  
  function applyColorblindMode() {
    const colorblindMode = document.getElementById('colorblind').value;
    const body = document.body;
    let overlay = document.querySelector('.colorblind-overlay');
    
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.classList.add('colorblind-overlay');
      document.body.appendChild(overlay);
    }
  
    overlay.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
  
    switch (colorblindMode) {
      case 'protanopia':
        overlay.classList.add('protanopia');
        break;
      case 'deuteranopia':
        overlay.classList.add('deuteranopia');
        break;
      case 'tritanopia':
        overlay.classList.add('tritanopia');
        break;
      default:
        overlay.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        break;
    }
  }
  
  function changeLanguage() {
    const language = document.getElementById('language').value;
    if (language === 'tl') {
      document.documentElement.lang = 'tl';
      document.title = 'Wellness Haven';
      document.querySelector('header nav ul li:nth-child(1) a').textContent = 'Mga Forum';
      document.querySelector('header nav ul li:nth-child(2) a').textContent = 'Kontak';
      document.querySelector('header nav ul li:nth-child(3) a').textContent = 'Tungkol';
      document.getElementById('get-started-btn').textContent = 'Magsimula';
      document.querySelector('#popup-menu ul li:nth-child(1) a').textContent = 'Mga Forum';
      document.querySelector('#popup-menu ul li:nth-child(2) a').textContent = 'Kontak';
      document.querySelector('#popup-menu ul li:nth-child(3) a').textContent = 'Tungkol';
      document.querySelector('#popup-menu ul li:nth-child(6) a').textContent = 'Magsimula';
      document.querySelector('.content-title').textContent = 'Maligayang pagdating sa';
      document.querySelector('.name').textContent = 'WELLNESS';
      document.querySelector('.name').nextElementSibling.textContent = 'HAVEN';
      document.querySelector('.contents p').textContent = 'Ang iyong go-to space para sa holistic health at well-being. Dito, kami ay sumusuporta sa iyong paglalakbay patungo sa isang mas malusog at balanseng buhay gamit ang mga resources at tools para sa fitness, mindfulness, nutrition, at marami pang iba. Magtagumpay tayo nang magkasama!';
      document.getElementById('get-started-btn2').textContent = 'Magsimula';
      document.querySelector('#login-form h2').textContent = 'Mag-login';
      document.querySelector('#signup-form h2').textContent = 'Mag-sign Up';
      document.querySelector('#switch-to-signup').textContent = 'Wala pang account? Mag-sign up';
      document.querySelector('#switch-to-login').textContent = 'May account na? Mag-login';
      document.querySelector('#contact-feedback h2').textContent = 'Kontak';
      document.querySelector('.contact ul li:nth-child(1) strong').textContent = 'Email:';
      document.querySelector('.contact ul li:nth-child(2) strong').textContent = 'Telepono:';
      document.querySelector('.contact ul li:nth-child(3) strong').textContent = 'GitHub:';
      document.querySelector('.contact ul li:nth-child(4) strong').textContent = 'LinkedIn:';
      document.querySelector('.feedback h2').textContent = 'Feedback';
      document.querySelector('.feedback p').textContent = 'Pinahahalagahan namin ang iyong feedback upang mapabuti ang aming serbisyo!';
      document.querySelector('.feedback button').textContent = 'I-submit ang Feedback';
      document.querySelector('#about-author h2').textContent = 'Tungkol sa Website at Author';
      document.querySelector('.author-info h3').textContent = 'Tungkol sa Author';
      document.querySelector('.website-info h3').textContent = 'Paano Nagsimula ang Website';
      document.querySelector('.author-info p').textContent = 'Ang lumikha ng website na ito, si Deogenes Gregorio S. Maranan, ay isang masugid na estudyante ng computer science na may malalim na interes sa cybersecurity at software development. Sa kanyang hangarin na magtayo ng makulay at makapangyarihang mga proyekto, sinimulan ni Deogenes ang website na ito upang tuklasin at ibahagi ang kanyang kaalaman, at makipagtulungan sa iba pang mga kasamahan sa larangan ng teknolohiya.';
      document.querySelector('.website-info p').textContent = 'Ang website ay naisip bilang isang proyekto upang ipakita ang mga kasanayan at kaalaman ng kanyang lumikha, si Deogenes. Nagsimula ito mula sa hangaring pagsamahin ang interes sa cybersecurity at development, at magbigay ng plataporma para sa personal at kolaboratibong trabaho. Ang ideya na nagsimula bilang isang simpleng konsepto ay lumago upang maging isang lugar ng pagkatuto, pagbabahagi, at pakikisalamuha sa iba pang mga mahihilig sa teknolohiya.';
      document.querySelector('footer').textContent = 'Maranan, Deogenes Gregorio S. 2024';
    } else {
      document.documentElement.lang = 'en';
      document.title = 'Wellness Haven';
      document.querySelector('header nav ul li:nth-child(1) a').textContent = 'Forums';
      document.querySelector('header nav ul li:nth-child(2) a').textContent = 'Contact';
      document.querySelector('header nav ul li:nth-child(3) a').textContent = 'About';
      document.getElementById('get-started-btn').textContent = 'Get Started';
      document.querySelector('#popup-menu ul li:nth-child(1) a').textContent = 'Forums';
      document.querySelector('#popup-menu ul li:nth-child(2) a').textContent = 'Contact';
      document.querySelector('#popup-menu ul li:nth-child(3) a').textContent = 'About';
      document.querySelector('#popup-menu ul li:nth-child(6) a').textContent = 'Get Started';
      document.querySelector('.content-title').textContent = 'Welcome to';
      document.querySelector('.name').textContent = 'WELLNESS';
      document.querySelector('.name').nextElementSibling.textContent = 'HAVEN';
      document.querySelector('.contents p').textContent = 'Your go-to space for holistic health and well-being. Here, we support your journey to a healthier, balanced life with resources and tools for fitness, mindfulness, nutrition, and more. Let\'s thrive together!';
      document.getElementById('get-started-btn2').textContent = 'Get Started';
      document.querySelector('#login-form h2').textContent = 'Login';
      document.querySelector('#signup-form h2').textContent = 'Sign Up';
      document.querySelector('#switch-to-signup').textContent = 'Don\'t have an account? Sign up';
      document.querySelector('#switch-to-login').textContent = 'Already have an account? Login';
      document.querySelector('#contact-feedback h2').textContent = 'Contact';
      document.querySelector('.contact ul li:nth-child(1) strong').textContent = 'Email:';
      document.querySelector('.contact ul li:nth-child(2) strong').textContent = 'Phone:';
      document.querySelector('.contact ul li:nth-child(3) strong').textContent = 'GitHub:';
      document.querySelector('.contact ul li:nth-child(4) strong').textContent = 'LinkedIn:';
      document.querySelector('.feedback h2').textContent = 'Feedback';
      document.querySelector('.feedback p').textContent = 'We value your feedback to improve our services!';
      document.querySelector('.feedback button').textContent = 'Submit Feedback';
      document.querySelector('#about-author h2').textContent = 'About the Website & Author';
      document.querySelector('.author-info h3').textContent = 'About the Author';
      document.querySelector('.website-info h3').textContent = 'How the Website Began';
      document.querySelector('.author-info p').textContent = 'The creator of this website, Deogenes Gregorio S. Maranan, is a passionate computer science student with a deep interest in cybersecurity and software development. Driven by his desire to build impactful and engaging projects, Deogenes created this site to explore, share his knowledge, and collaborate with others in the field of technology.';
      document.querySelector('.website-info p').textContent = 'The website was conceived as a project to showcase the skills and knowledge of its creator, Deogenes. What began as a simple concept grew into a platform for learning, sharing, and collaborating with others interested in technology.';
      document.querySelector('footer').textContent = 'Maranan, Deogenes Gregorio S. 2024';
    }
  }
  