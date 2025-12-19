// Function to scroll to the team section when read more is clicked
function scrollMyBtnIntoView() {
  const teamSection = document.querySelector(".team-section");
  if (teamSection) {
    teamSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Add click event listener to the read more button
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".readmorebutton");
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", scrollMyBtnIntoView);
  }
});
