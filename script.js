// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Add click event listener
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document.querySelectorAll(".stat-box").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Contact Us Form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset();
        } else {
          alert("Yikes! Something went wrong.");
        }
      })
      .catch(() => {
        alert("Network error! Please try again later.");
      });
  });

document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openTrailer");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("trailerVideo");
  const closeBtn = document.querySelector(".close-video");

  if (openBtn && modal && iframe && closeBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
      iframe.src = "https://www.youtube.com/embed/L2Eb2DlpvcM?autoplay=1";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      iframe.src = "";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        iframe.src = "";
      }
    });
  }
});
