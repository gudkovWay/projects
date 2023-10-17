// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://youtu.be/pCKDrDvaOKE?si=20HxQCl0h_6coZM6";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "480",
    width: "860",
    videoId: "pCKDrDvaOKE?si=20HxQCl0h_6coZM6",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

// Phone Mask
mask("[data-tel-input]");

// Modal send data

const button = document.querySelector(".reservationButton");
const closeButton = document.querySelector(".reservation__close");
const wrapper = document.querySelector(".reservation__modal");

button.addEventListener("click", function (event) {
  event.preventDefault();
  wrapper.classList.add("reservation__active");
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.remove("reservation__active");
});

// myTricks: axios lib for send date from all form to telegram with HTML style
const TOKEN = "";
const CHAT_ID = "-";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.querySelector("#tg").addEventListener("submit", function (event) {
  event.preventDefault();

  let message = `<b>Форма передала данные</b>\n`;
  message += `<b>Имя: ${this.name.value}</b>\n`;
  message += `<b>Телефон: ${this.phone.value} </b>\n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
  wrapper.classList.remove("reservation__active")
});
