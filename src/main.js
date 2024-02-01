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