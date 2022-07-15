var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  var charIndex = 0;
  var maxCharIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML += text[charIndex];
    if (charIndex == maxCharIndex) {
      clearInterval(typeInterval);
      setTimeout(function () {
        deleting(textIndex, text);
      }, sBetweenWord * 1000);
    } else {
      charIndex += 1;
    }
  }, sPerChar * 1000);
}

function deleting(textIndex, text) {
  var minCharIndex = 0;
  var charIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML = text.substr(0, charIndex);
    if (charIndex == minCharIndex) {
      clearInterval(typeInterval);
      textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
      setTimeout(function () {
        typing(textIndex, textArr[textIndex]);
      }, sBetweenWord * 1000);
    } else {
      charIndex -= 1;
    }
  }, sPerChar * 1000);
}
// New event listener:
window.addEventListener("load", function () {
  setTimeout(function () {
    // Hide the address bar:
    window.scrollTo(0, 1);
  }, 0);
});

function about() {
  let tekbruhabout = document.querySelector(".contentbody");

  tekbruhabout.innerHTML = `<head>  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/></head><div class="contentbody about">
  <div class="articletext abouttext">
  I'm a Full Stack Developer with an expertise in <span>Javascript</span>, <span>jQuery</span>, <span>HTML</span> and <span>CSS</span>. I can also work with major frameworks like <span>Vue and Vuetify</span> and <span>node.Js</span>. I have worked on projects ranging from online stores, social networking sites, to gamification engines for the past two years. I am always looking for new opportunities and challenges.
          </div>
  <div class="articletext abouttext2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            ducimus quos voluptate porro architecto eligendi vero ipsum possimus
            animi natus perferendis inventore quisquam soluta, omnis nemo
            laborum quibusdam? Maxime, aspernatur.
          </div>
  </div>`;
}
