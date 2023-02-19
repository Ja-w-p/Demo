function getElement(e) {
  return document.querySelector(e);
}
const video = getElement("video");
const theme = getElement("body");
const light = getElement(".sunAndMoon");
const githubIMG = getElement(".github");
const lastWord = getElement("#eighth");
const animation = getElement(".animation");
const timeList = document.querySelectorAll("span");
let flag = 0;

//時間軸列表
function videoTo(sec) {
  video.currentTime = sec;
}

for (let i = 0; i < timeList.length; i++) {
  timeList[i].addEventListener("click", () => {
    timeList[i].style.color = "#6f00d2";
  });
}

//theme
function lightSwitch() {
  if (flag === 0) {
    theme.className = "dark";
    light.src = "./icons/nature_moon_stars_night_icon_141120.svg";
    githubIMG.src = "./icons/foldervioletgithub_93345.svg";
    flag = 1;
  } else {
    theme.className = "light";
    light.src = "./icons/-sun_86819.svg";
    githubIMG.src = "./icons/folderorangegithub_93236.svg";
    flag = 0;
  }
}

lastWord.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease ; opacity:0;pointer-events:none;";
});
