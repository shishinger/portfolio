import "./css/style.css";
const btn = document.querySelector(".up"),
  container = document.documentElement;
  
document.addEventListener("scroll", () => {
  let scrollPercentage = (container.scrollTop / (container.scrollHeight - container.clientHeight)) * 100;
  document.querySelector(".bar").style.width = `${scrollPercentage}%`;

  if (container.scrollTop > 250) {
    btn.style.transform = "scale(1)"
  } else {
    btn.style.transform = "scale(0)"
  }
})
btn.addEventListener("click", () => {
  container.scrollIntoView({
    behavior: "smooth"
  });
})