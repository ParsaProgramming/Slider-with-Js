let $ = document;
let dots = $.querySelectorAll(".dot");
let pictures = $.querySelectorAll(".slider img");
let prevIcon = $.querySelector(".prev i");
let nextIcon = $.querySelector(".next i");
let index = 0;
// the delay of the Interval
let DelayTime = 3000;

pictures[index].classList.add("active");
dots[index].classList.add("active");

// automatic slider
setInterval(function () {
  index++;
  if (index < 0) {
    index = 3;
  } else if (index > 3) {
    index = 0;
  }
  SettingPhoto();
}, DelayTime);

function DotActivation() {
  for (let j = 0; j < dots.length; j++) {
    dots[j].classList.remove("active");
  }
  dots[index].classList.add("active");
}

function SettingPhoto() {
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].classList.remove("active");
  }
  pictures[index].classList.add("active");
  DotActivation();
}

function Goback() {
  index -= 1;

  if (index < 0) {
    index = 3;
    SettingPhoto();
  } else {
    SettingPhoto();
  }
}

function Goforward() {
  index += 1;

  if (index > 3) {
    index = 0;
    SettingPhoto();
  } else {
    SettingPhoto();
  }
  console.log(index);
}

prevIcon.addEventListener("click", Goback);
nextIcon.addEventListener("click", Goforward);
