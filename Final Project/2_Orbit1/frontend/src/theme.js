function toggleTheme() {
  const root = document.documentElement;
  const isLightMode = root.classList.contains("light-mode");
  //add or remove light-mode class onclick
  if (isLightMode) {
    root.classList.remove("light-mode");
    sessionStorage.setItem("theme", "dark");
  } else {
    root.classList.add("light-mode");
    sessionStorage.setItem("theme", "light");
  }
}
//load saved theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = sessionStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
  }
  else{
    document.documentElement.classList.remove("light-mode");
  }
})


