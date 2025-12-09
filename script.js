const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const userPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const savedTheme = localStorage.getItem('theme') || userPref;
body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('show');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('show');
  });
});

const fadeElems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

fadeElems.forEach(el => observer.observe(el));



const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const skillInfo = {
  html: {
    title: "HTML / CSS / JavaScript",
    text: "Верстка, адаптив, Flex/Grid, анимации, современные стандарты, грамотная структура, чистый код. Уверенное владение JavaScript."
  },
  react: {
    title: "React",
    text: "Создание SPA, работа с хуками, компонентами, маршрутизацией, состояние, оптимизация рендера."
  },
  uiux: {
    title: "UI/UX дизайн",
    text: "Удобные интерфейсы, прототипирование, дизайн-системы, логика пользовательских сценариев, визуальная эстетика."
  },
  opt: {
    title: "Оптимизация сайтов",
    text: "Lighthouse, повышение скорости, работа с Core Web Vitals, оптимизация изображений, минимизация кода."
  },
  api: {
    title: "Работа с API",
    text: "REST, JSON, интеграции, fetch/axios, асинхронность, авторизация, обработка ошибок."
  }
};

document.querySelectorAll(".skill").forEach(skill => {
  skill.addEventListener("click", () => {
    const id = skill.getAttribute("data-skill");

    modalTitle.textContent = skillInfo[id].title;
    modalText.textContent = skillInfo[id].text;

    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === modal) modal.style.display = "none";
});
