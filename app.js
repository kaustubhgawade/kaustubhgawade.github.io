// background dots
document.addEventListener("DOMContentLoaded", dots);
function dots() {
  const gap = 50;

  const bodyWidth = document.body.clientWidth;
  const bodyHeight = document.body.clientHeight;

  const numDotsHorizontal = Math.ceil(bodyWidth / gap);
  const numDotsVertical = Math.ceil(bodyHeight / gap);

  const container = document.querySelector(".background");

  for (let i = 0; i < numDotsHorizontal; i++) {
    for (let j = 0; j < numDotsVertical; j++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.left = `${i * gap}px`;
      dot.style.top = `${j * gap}px`;
      container.appendChild(dot);
    }
  }
}
window.onresize = ()=> (dots());


// ------------------------------------------------------------------
// status
const dt = new Date();
let currentHour = dt.getHours();
if (currentHour >= 0 && currentHour <= 6) {
  document.getElementById("symbol").style.backgroundColor = "var(--red-color)";
  document.getElementById("description").textContent = "Offline";
}

// ------------------------------------------------------------------
// on webpage load animation
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  setTimeout(() => {
    container.classList.add("show");
  }, 100);
});

// ------------------------------------------------------------------
// certificates animation
let openCertificate = document.querySelectorAll(".open-certi");
for (const eachBtn of openCertificate) {
  eachBtn.addEventListener("click", () => {
    let certificateImg = eachBtn.parentElement.parentElement.nextElementSibling;
    let imgHeight = certificateImg.offsetHeight;

    let element = eachBtn.parentElement.parentElement.parentElement;
    let height = element.offsetHeight;
    let targetHeight = imgHeight + 53;
    let speed = 10;

    let animation = setInterval(function () {
      if (height >= targetHeight) {
        clearInterval(animation);
      } else {
        height += speed;
        element.style.height = height + "px";
      }
    }, 20);
  });
}
let closeCertificate = document.querySelectorAll(".close-certi");
for (const eachBtn of closeCertificate) {
  eachBtn.addEventListener("click", () => {
    let element = eachBtn.parentElement.parentElement.parentElement;
    const originalHeight = element.offsetHeight;
    if (originalHeight > 65) {
      let height = element.offsetHeight;
      let targetHeight = 50;
      let speed = 15;

      let animation = setInterval(function () {
        if (height <= targetHeight) {
          clearInterval(animation);
        } else {
          height -= speed;
          element.style.height = height + "px";
        }
      }, 10);
    }
  });
}
