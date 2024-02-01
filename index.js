document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      navLinks.forEach((l) => l.classList.remove("active"));

      const currentLink = event.currentTarget;
      currentLink.classList.add("active");

      setTimeout(() => {
        currentLink.classList.remove("active");
      }, 1000);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const image1 = document.querySelector("#img1");
  const image2 = document.querySelector("#img2");
  const image3 = document.querySelector("#img3");

  const images = [image1, image2, image3];

  images.forEach((image) => {
    image.addEventListener("mouseover", (event) => {
      images.forEach((i) => i.classList.remove("active-img"));
      const currentImage = event.currentTarget;
      currentImage.classList.add("active-img");
    });
  });
});

document.addEventListener("mousemove", (event) => {
  const height = circle.offsetHeight;
  const width = circle.offsetWidth;

  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  circle.style.left = event.pageX - width / 2 - scrollX + "px";
  circle.style.top = event.pageY - height / 2 - scrollY + "px";

  if (
    event.target.tagName === "img1" ||
    event.target.tagName === "img2" ||
    event.target.tagName === "img3"
  ) {
    circle.classList.add("big");
  } else {
    circle.classList.remove("big");
  }

  setTimeout(() => {
    circle.style.left = event.pageX - width / 2 - scrollX + "px";
    circle.style.top = event.pageY - height / 2 - scrollY + "px";
  }, 20);
});


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function createSkillCardModal() {
    const modal = document.createElement("div");
    const header = document.createElement("header");
    const img = document.createElement("img");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const span = document.createElement("span");
    const ul = document.createElement("ul");
    const knowledgeItems = ["Element1", "Element2", "Element3"];

    const technologyTitles = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Python", "Vue.js"];
    const technologyImages = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
    ];

    const randomIndex = getRandomIndex(technologyTitles);

    modal.className = "skill-card";
    header.className = "skill-card__header";
    img.className = "skill-card__icon";
    section.className = "skill-card__body";
    h2.className = "skill-card__title";
    span.className = "skill-card__duration";
    ul.className = "skill-card__knowledge";

    img.src = technologyImages[randomIndex];
    img.alt = `${technologyTitles[randomIndex]} Logo`;
    h2.textContent = technologyTitles[randomIndex];
    span.textContent = `Description ${technologyTitles[randomIndex]}`; 

    header.appendChild(img);
    section.appendChild(h2);
    section.appendChild(span);
    knowledgeItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    section.appendChild(ul);
    modal.appendChild(header);
    modal.appendChild(section);

    return modal;
}

const btn = document.getElementById("add-cards");
btn.addEventListener("click", () => {
    const wrapper = document.getElementById("modal-wrapper");
    const modal = createSkillCardModal();
    wrapper.appendChild(modal);

});

