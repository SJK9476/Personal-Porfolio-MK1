import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

function newDateTime() {
  const currentDate = dayjs().format("dddd,<br> D/MM/YYYY");
  const currentTime = dayjs().format("HH:mm A");

  document.querySelector(".js-current-date").innerHTML = currentDate;

  document.querySelector(".js-current-time").innerHTML =
    currentTime + "<br>GMT";
}

setInterval(newDateTime, 1000);

const dropdown = document.querySelector(".js-nav-dropdown");

const menuBars = document.querySelector(".js-menu-burger");

menuBars.addEventListener("click", () => {
  if (dropdown.classList.contains("hidden")) {
    menuBars.innerHTML = '<i class="fa-solid fa-x"></i>';
    dropdown.classList.remove("hidden");
  } else {
    menuBars.innerHTML = '<i class="fa-solid fa-bars">';
    dropdown.classList.add("hidden");
  }
});
