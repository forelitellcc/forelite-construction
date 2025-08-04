
const translations = {
  "en": {
    "about_title": "About Us",
    "about_text": "We are a young and growing construction company based in New York City. At FORELITE, we may be new to the industry, but our commitment to quality, responsibility, and customer satisfaction is what sets us apart. Every project we take on — whether big or small — we treat it as if it were our own. We believe in honesty, hard work, and continuous improvement. Your trust is our greatest motivation. Let us prove that fresh energy can deliver great results."
  },
  "ua": {
    "about_title": "Про нас",
    "about_text": "Ми — молода та зростаюча будівельна компанія з Нью-Йорка. FORELITE — нове ім’я в галузі, але ми вже зараз ставимо якість, відповідальність і задоволення клієнтів на перше місце. Кожен проєкт — великий чи малий — ми виконуємо, як для себе. Ми віримо в чесність, наполегливу працю та постійний розвиток. Ваша довіра — наша найбільша мотивація. Дозвольте нам довести, що свіжа енергія здатна на великі результати."
  },
  "ru": {
    "about_title": "О нас",
    "about_text": "Мы — молодая и развивающаяся строительная компания из Нью-Йорка. FORELITE — новое имя в отрасли, но мы уже выделяемся качеством, ответственностью и заботой о клиентах. Каждый проект — большой или маленький — мы выполняем как для себя. Мы верим в честность, труд и постоянное развитие. Ваше доверие — наша главная мотивация. Позвольте нам доказать, что свежая энергия приносит отличные результаты."
  },
  "cz": {
    "about_title": "O nás",
    "about_text": "Jsme mladá a rostoucí stavební společnost se sídlem v New Yorku. FORELITE je nové jméno v oboru, ale naším závazkem ke kvalitě, odpovědnosti a spokojenosti zákazníků vynikáme. Ke každému projektu — velkému i malému — přistupujeme jako k vlastnímu. Věříme v poctivost, tvrdou práci a neustálé zlepšování. Vaše důvěra je naší největší motivací. Dokažme, že čerstvá energie přináší skvělé výsledky."
  },
  "pl": {
    "about_title": "O nas",
    "about_text": "Jesteśmy młodą i rozwijającą się firmą budowlaną z Nowego Jorku. FORELITE to nowa nazwa w branży, ale już teraz wyróżniamy się jakością, odpowiedzialnością i dbałością o klienta. Każdy projekt — duży czy mały — traktujemy jak swój własny. Wierzymy w uczciwość, ciężką pracę i ciągłe doskonalenie. Twoje zaufanie jest naszą największą motywacją. Pozwól nam udowodnić, że świeża energia przynosi świetne rezultaty."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  const about = document.getElementById("about-text");
  if (about && translations[lang].about_text) {
    about.textContent = translations[lang].about_text;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang || "en";
  setLanguage(lang);
});
