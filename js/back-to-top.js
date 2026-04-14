document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.innerHTML = "↑";
  btn.id = "back-to-top";
  btn.title = "Voltar ao topo";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
