const definitions = {
  en: "Apostophobia (n.): The irrational fear, hatred or punishment of people who leave their religion.",
  ar: "أفوفوبيا (اسم): الخوف أو الكراهية أو العقاب غير العقلاني للأشخاص الذين يتركون دينهم.",
  fr: "Apostophobie (n.f.): La peur, la haine ou la punition irrationnelle des personnes qui quittent leur religion.",
  fa: "اپوستوفوبیا: ترس، نفرت یا مجازات غیرمنطقی افرادی که دین خود را ترک می‌کنند.",
  de: "Apostophobie (f): Die irrationale Angst, der Hass oder die Bestrafung von Menschen, die ihre Religion verlassen.",
  ur: "اپوسٹو فوبیا: وہ غیر منطقی خوف، نفرت یا سزا جو مذہب چھوڑنے والوں کے خلاف ہو۔",
  hi: "अपोस्टोफोबिया (संज्ञा): जो लोग अपना धर्म छोड़ते हैं उनके प्रति अव्यवहारिक डर, नफरत या सज़ा।"
};

document.getElementById("language-selector").addEventListener("change", function () {
  const selectedLang = this.value;
  document.getElementById("definition-text").textContent = definitions[selectedLang];
});

window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");
  if (window.scrollY > 50) {
    logo.style.height = "40px";
  } else {
    logo.style.height = "80px";
  }
});
