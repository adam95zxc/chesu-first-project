const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileMenu.classList.remove("show");
  });
});

const themeToggle = document.getElementById("themeToggle");
const userPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const savedTheme = localStorage.getItem("theme") || userPref;

document.body.setAttribute("data-theme", savedTheme);
themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", next);
  themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", next);
});

const fadeElems = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
fadeElems.forEach(el => observer.observe(el));

document.querySelectorAll(".skill").forEach(skill => {
  skill.addEventListener("click", () => {
    const isOpen = skill.classList.contains("open");

    document.querySelectorAll(".skill").forEach(s => {
      s.classList.remove("open");
      s.querySelector(".skill-desc").innerHTML = "";
    });

    if (!isOpen) {
      skill.classList.add("open");

      const expList = JSON.parse(skill.getAttribute("data-experience"));
      const ul = document.createElement("ul");

      expList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });

      skill.querySelector(".skill-desc").appendChild(ul);
    }
  });
});
