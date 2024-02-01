const allLink = document.querySelectorAll(".link");

allLink.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.classList.add("active")
    })

    link.addEventListener("mouseleave", () => {
        link.classList.remove("active")
    })
})

const dropdownlinks = document.querySelectorAll(".dropdown-link");

dropdownlinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.classList.add("active");
    });

    link.addEventListener("mouseleave", () => {
      link.classList.remove("active");
    });
})

// humberger

const sideNav = document.getElementById("sideNav");
const menuBtn = document.getElementById("menu")
const crossBtn = document.getElementById("cross")

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sideNav.classList.add("translate-x-0")
  sideNav.classList.add("opacity-100");
  // sideNav.classList.remove("opacity-0")
})

crossBtn.addEventListener("click", (e) => {
  sideNav.classList.remove("translate-x-0");
  sideNav.classList.remove("opacity-100");
  // sideNav.classList.add("opacity-0");
})