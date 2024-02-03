const allLink = document.querySelectorAll(".link");

allLink.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("active");
  });

  link.addEventListener("mouseleave", () => {
    link.classList.remove("active");
  });
});

const dropdownlinks = document.querySelectorAll(".dropdown-link");

dropdownlinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("active");
  });

  link.addEventListener("mouseleave", () => {
    link.classList.remove("active");
  });
});

// humberger

const sideNav = document.getElementById("sideNav");
const menuBtn = document.getElementById("menu");
const crossBtn = document.getElementById("cross");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sideNav.classList.add("translate-x-0");
  sideNav.classList.add("opacity-100");
  // sideNav.classList.remove("opacity-0")
});

crossBtn.addEventListener("click", (e) => {
  sideNav.classList.remove("translate-x-0");
  sideNav.classList.remove("opacity-100");
  // sideNav.classList.add("opacity-0");
});

// view all

const allimg = document.querySelectorAll(".allimg");
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
const view3 = document.getElementById("view3");
const view4 = document.getElementById("view4");

allimg.forEach((img) => {
  img.addEventListener("mouseover", () => {
    if (img.id === "1") {
      view1.classList.add("opacity-100");
      view1.classList.remove("opacity-0");
    } else if (img.id === "2") {
      view2.classList.add("opacity-100");
      view2.classList.remove("opacity-0");
    } else if (img.id === "3") {
      view3.classList.add("opacity-100");
      view3.classList.remove("opacity-0");
    } else if (img.id === "4") {
      view4.classList.add("opacity-100");
      view4.classList.remove("opacity-0");
    }
  })

  img.addEventListener("mouseleave", () => {
    if (img.id === "1") {
      view1.classList.remove("opacity-100");
      view1.classList.add("opacity-0");
    } else if (img.id === "2") {
      view2.classList.remove("opacity-100");
      view2.classList.add("opacity-0");
    } else if (img.id === "3") {
      view3.classList.remove("opacity-100");
      view3.classList.add("opacity-0");
    } else if (img.id === "4") {
      view4.classList.remove("opacity-100");
      view4.classList.add("opacity-0");
    }
  })
})

/* const allImgElements = document.querySelectorAll(".allimg");
const viewAllButtons = document.querySelectorAll(".view-all-button");

allImgElements.forEach((img, index) => {
  img.addEventListener("mouseover", () => {
    viewAllButtons[index].style.opacity = "1";
  });

  img.addEventListener("mouseout", () => {
    viewAllButtons[index].style.opacity = "0";
  });
}); */