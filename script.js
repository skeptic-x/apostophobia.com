const definitions = {
  en: "<strong>Apostophobia</strong> (n.)<br><br>The irrational fear, hatred or punishment of people who leave their religion.",
  ar: "<strong>أبوستوفوبيا</strong> (اسم)<br><br>الخوف أو الكراهية أو العقاب غير العقلاني للأشخاص الذين يتركون دينهم.",
  fr: "<strong>Apostophobie</strong>  (n.f.)<br><br>La peur, la haine ou la punition irrationnelle des personnes qui quittent leur religion.",
  fa: "<strong>اپوستوفوبیا</strong><br><br>ترس، نفرت یا مجازات غیرمنطقی افرادی که دین خود را ترک می‌کنند.",
  de: "<strong>Apostophobie</strong>  (f)<br><br>Die irrationale Angst, der Hass oder die Bestrafung von Menschen, die ihre Religion verlassen.",
  ur: "<strong>اپوسٹو فوبیا</strong><br><br>وہ غیر منطقی خوف، نفرت یا سزا جو مذہب چھوڑنے والوں کے خلاف ہو۔",
  hi: "<strong>अपोस्टोफोबिया</strong> (संज्ञा)<br><br>जो लोग अपना धर्म छोड़ते हैं उनके प्रति अव्यवहारिक डर, नफरत या सज़ा।"
};

document.getElementById("language-selector").addEventListener("change", function () {
  const selectedLang = this.value;
  document.getElementById("definition-text").innerHTML = definitions[selectedLang];
});

window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");
  if (window.scrollY > 50) {
    logo.style.height = "40px";
  } else {
    logo.style.height = "80px";
  }
});

// Logo click to scroll to top
document.getElementById('logo').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling with offset for mobile
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = window.innerWidth <= 768 ? 200 : 120;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
