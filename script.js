
const translations = {
  "en": { "about_text": `<p>We are a young and growing construction company based in New York City.</p><p>At FORELITE, we may be new to the industry, but our commitment to quality, responsibility, and customer satisfaction is what sets us apart.</p><p>Every project we take on — whether big or small — we treat it as if it were our own.</p><p>We believe in honesty, hard work, and continuous improvement.</p><p>Your trust is our greatest motivation.</p><p>Let us prove that fresh energy can deliver great results.</p>` },
  "ua": { "about_text": `<p>Ми — молода та зростаюча будівельна компанія з Нью-Йорка.</p><p>FORELITE — нове ім’я в галузі, але ми вже зараз ставимо якість, відповідальність і задоволення клієнтів на перше місце.</p><p>Кожен проєкт — великий чи малий — ми виконуємо, як для себе.</p><p>Ми віримо в чесність, наполегливу працю та постійний розвиток.</p><p>Ваша довіра — наша найбільша мотивація.</p><p>Дозвольте нам довести, що свіжа енергія дає чудові результати.</p>` },
  "ru": { "about_text": `<p>Мы — молодая и развивающаяся строительная компания из Нью-Йорка.</p><p>В FORELITE мы новички в отрасли, но наше стремление к качеству, ответственности и удовлетворению клиентов делает нас особенными.</p><p>Каждый проект — большой или маленький — мы выполняем так, как если бы он был нашим собственным.</p><p>Мы верим в честность, усердный труд и постоянное развитие.</p><p>Ваше доверие — наша главная мотивация.</p><p>Позвольте нам доказать, что свежая энергия приносит отличные результаты.</p>` },
  "cz": { "about_text": `<p>Jsme mladá a rostoucí stavební společnost se sídlem v New Yorku.</p><p>Ve FORELITE jsme sice noví v oboru, ale náš závazek ke kvalitě, odpovědnosti a spokojenosti zákazníků nás odlišuje od ostatních.</p><p>Každý projekt — velký nebo malý — bereme, jako by byl náš vlastní.</p><p>Věříme v poctivost, tvrdou práci a neustálé zlepšování.</p><p>Vaše důvěra je naší největší motivací.</p><p>Nechte nás dokázat, že čerstvá energie přináší skvělé výsledky.</p>` },
  "pl": { "about_text": `<p>Jesteśmy młodą i rozwijającą się firmą budowlaną z siedzibą w Nowym Jorku.</p><p>W FORELITE dopiero zaczynamy w branży, ale nasze zaangażowanie w jakość, odpowiedzialność i satysfakcję klientów wyróżnia nas spośród innych.</p><p>Każdy projekt — duży czy mały — traktujemy tak, jakby był naszym własnym.</p><p>Wierzymy w uczciwość, ciężką pracę i ciągłe doskonalenie.</p><p>Twoje zaufanie jest naszą największą motywacją.</p><p>Pozwól nam udowodnić, że świeża energia przynosi świetne rezultaty.</p>` },
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
