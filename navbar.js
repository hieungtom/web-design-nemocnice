//responzivni menu
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("active");
});

//vyhledavani
const searchTrigger = document.getElementById("search-trigger");
const searchContainer = document.getElementById("search-container");
const menuContainer = document.getElementById("menu-container");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const navLogo = document.getElementById("nav-logo");

searchTrigger.addEventListener("click", function () {
  if (searchContainer.classList.contains("active")) {
    if (searchInput.value.length === 0) {
      searchContainer.classList.toggle("active");
      menuContainer.classList.toggle("hidden");
      navLogo.classList.toggle("hidden");
    } else {
      searchForm.submit();
    }
  } else {
    if (menu.classList.contains("active")) {
      menu.classList.toggle("active");
    }
    searchContainer.classList.toggle("active");
    menuContainer.classList.toggle("hidden");
    navLogo.classList.toggle("hidden");
    setTimeout(function () {
      searchInput.focus();
    }, 100);
  }
});

searchForm.addEventListener("submit", function (event) {
  if (searchInput.value.length === 0) {
    event.preventDefault();
  }
});
