document.addEventListener("DOMContentLoaded", function () {
    // Select all tab links and content sections
    var tabs = document.querySelectorAll("nav ul li a");
    var sections = document.querySelectorAll(".tab-content");
  
    // Loop through each tab link
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
  
        // Remove the active class from all tabs
        for (var j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove("active");
        }
  
        // Remove the active class from all sections
        for (var k = 0; k < sections.length; k++) {
          sections[k].classList.remove("active");
        }
  
        // Add the active class to the clicked tab
        this.classList.add("active");
  
        // Get the section corresponding to the clicked tab
        var sectionId = this.getAttribute("href");
        var activeSection = document.querySelector(sectionId);
        activeSection.classList.add("active");
      });
    }
  
    // Activate the first tab and section by default
    tabs[0].classList.add("active");
    sections[0].classList.add("active");
  });
  