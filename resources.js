const shapes = document.querySelectorAll(".shape");
const tabs = document.querySelectorAll(".tab");
const card = document.getElementById("resource-card");

// Show/hide tab buttons on hover
shapes.forEach((shape) => {
  shape.addEventListener("mouseenter", () => {
    const tabBox = shape.querySelector(".tabs");
    tabBox.classList.remove("hidden");
  });
  shape.addEventListener("mouseleave", () => {
    const tabBox = shape.querySelector(".tabs");
    tabBox.classList.add("hidden");
  });
});

// Show static resource card when tab is clicked
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    card.classList.remove("hidden");
  });
});
