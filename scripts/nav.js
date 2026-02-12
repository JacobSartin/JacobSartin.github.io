// Shared navigation component
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navHTML = `
    <nav>
      <div class="nav-links">
        <a href="index.html" class="${currentPage === "index.html" ? "active" : ""}">Home</a>
        <a href="skills.html" class="${currentPage === "skills.html" ? "active" : ""}">Skills</a>
        <a href="projects.html" class="${currentPage === "projects.html" ? "active" : ""}">Projects</a>
        <a href="about.html" class="${currentPage === "about.html" ? "active" : ""}">About</a>
      </div>
      <div class="social-links">
        <a
          class="link"
          href="https://www.linkedin.com/in/jacob-sartin"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a class="link" href="https://github.com/JacobSartin" target="_blank">
          <i class="fa-brands fa-github"></i>
          <span>GitHub</span>
        </a>
      </div>
    </nav>
  `;

  // Insert nav as first child of body
  document.body.insertAdjacentHTML("afterbegin", navHTML);

  // Restore focus if navigating from another page
  const shouldFocusNav = sessionStorage.getItem("focusNav");
  if (shouldFocusNav === "true") {
    sessionStorage.removeItem("focusNav");
    const activeLink = document.querySelector(".nav-links a.active");
    if (activeLink) {
      activeLink.focus();
    }
  }

  // Store intent to focus nav on next page load when clicking nav links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      sessionStorage.setItem("focusNav", "true");
    });
  });
});
