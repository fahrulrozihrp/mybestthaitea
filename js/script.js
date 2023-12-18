// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
// ketika humburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// mencegah naik keatas saat hamburger-menu di klik
$(document).ready(function () {
  $("#hamburger-menu").click(function (event) {
    event.preventDefault(); // Mencegah perilaku default
  });
});

// Memilih semua elemen <a> di dalam elemen dengan kelas "navbar-nav"
var semuaTautan = document.querySelectorAll(".navbar .navbar-nav a");

// Menetapkan event listener untuk setiap elemen <a>
semuaTautan.forEach(function (tautan) {
  tautan.onclick = function () {
    // Toggle kelas "active" pada elemen dengan kelas "navbar-nav"
    navbarNav.classList.toggle("active");
  };
});
