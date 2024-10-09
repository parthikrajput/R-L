document.querySelectorAll("li > a").forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const subMenu = this.nextElementSibling;

    if (subMenu) {
      const isOpen = subMenu.style.display === "flex";

      subMenu.style.display = isOpen ? "none" : "flex";
      subMenu.style.height = isOpen ? "0" : "auto";
    }
  });
});

document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector("nav").classList.add("open");
});

document.querySelector(".close-icon").addEventListener("click", function () {
  document.querySelector("nav").classList.remove("open");
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header .h-wrapper");
  header.classList.toggle("sticky", window.scrollY > 40);
});

document.querySelectorAll('.indurtries-box[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetID = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      const yOffset = -100;
      const yPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with ID "${targetID}" not found.`);
    }
  });
});

window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");

  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
document.getElementById("back-to-top").addEventListener("click", function () {
  var scrollToTop = function () {
    var currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - 20);
      setTimeout(scrollToTop, 5);
    }
  };

  scrollToTop();
  return false;
});

document.addEventListener("DOMContentLoaded", function () {
  function activateTab(tabsContainer, tabName) {
    const tabLinks = tabsContainer.querySelectorAll(".tab-link");
    const tabPanes = tabsContainer.querySelectorAll(".tab-pane");

    tabLinks.forEach((link) => link.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    tabsContainer
      .querySelector(`.tab-link[href="${tabName}"]`)
      .classList.add("active");
    tabsContainer.querySelector(tabName).classList.add("active");
  }
  document.querySelectorAll(".tabs").forEach((tabsContainer) => {
    const firstTabLink = tabsContainer.querySelector(".tab-link");
    if (firstTabLink) {
      activateTab(tabsContainer, firstTabLink.getAttribute("href"));
    }

    tabsContainer.querySelectorAll(".tab-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        activateTab(tabsContainer, this.getAttribute("href"));
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  function toggleAnswer(item) {
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".icon svg path");
    const isVisible = answer.style.display === "block";

    faqItems.forEach((faq) => {
      faq.querySelector(".faq-answer").style.display = "none";
      faq
        .querySelector(".icon svg path")
        .setAttribute(
          "d",
          "M20.5836 7.3989C20.3166 7.14347 19.9546 7 19.5773 7C19.1999 7 18.838 7.14347 18.571 7.3989L11.9829 13.7095L5.3947 7.3989C5.12476 7.15797 4.76774 7.0268 4.39884 7.03304C4.02993 7.03927 3.67796 7.18242 3.41707 7.43232C3.15617 7.68222 3.00673 8.01937 3.00022 8.37273C2.99371 8.72609 3.13065 9.06807 3.38217 9.32663L10.9766 16.6011C11.2436 16.8565 11.6055 17 11.9829 17C12.3602 17 12.7221 16.8565 12.9891 16.6011L20.5836 9.32663C20.8502 9.07089 21 8.72422 21 8.36276C21 8.00131 20.8502 7.65464 20.5836 7.3989Z"
        );
    });

    if (!isVisible) {
      answer.style.display = "block";
      icon.setAttribute(
        "d",
        "M20.5836 16.6011C20.3166 16.8565 19.9546 17 19.5773 17C19.1999 17 18.838 16.8565 18.571 16.6011L11.9829 10.2905L5.3947 16.6011C5.12476 16.842 4.76774 16.9732 4.39884 16.967C4.02993 16.9607 3.67796 16.8176 3.41707 16.5677C3.15617 16.3178 3.00673 15.9806 3.00022 15.6273C2.99371 15.2739 3.13065 14.9319 3.38217 14.6734L10.9766 7.3989C11.2436 7.14347 11.6055 7 11.9829 7C12.3602 7 12.7221 7.14347 12.9891 7.3989L20.5836 14.6734C20.8502 14.9291 21 15.2758 21 15.6372C21 15.9987 20.8502 16.3454 20.5836 16.6011Z"
      );
    }
  }

  if (faqItems.length > 0) {
    faqItems[0].querySelector(".faq-answer").style.display = "block";
    faqItems[0]
      .querySelector(".icon svg path")
      .setAttribute(
        "d",
        "M20.5836 16.6011C20.3166 16.8565 19.9546 17 19.5773 17C19.1999 17 18.838 16.8565 18.571 16.6011L11.9829 10.2905L5.3947 16.6011C5.12476 16.842 4.76774 16.9732 4.39884 16.967C4.02993 16.9607 3.67796 16.8176 3.41707 16.5677C3.15617 16.3178 3.00673 15.9806 3.00022 15.6273C2.99371 15.2739 3.13065 14.9319 3.38217 14.6734L10.9766 7.3989C11.2436 7.14347 11.6055 7 11.9829 7C12.3602 7 12.7221 7.14347 12.9891 7.3989L20.5836 14.6734C20.8502 14.9291 21 15.2758 21 15.6372C21 15.9987 20.8502 16.3454 20.5836 16.6011Z"
      );
  }

  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", function () {
      toggleAnswer(item);
    });
  });
});
