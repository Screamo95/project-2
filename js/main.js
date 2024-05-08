// Видеоплеер

let playButton = document.querySelector(`#video__play`);
let playVideo = document.querySelector(`#video__main`);

playButton.onclick = function() {
  playVideo.setAttribute(`controls`, `controls`);
  playVideo.play();
  playButton.remove();
}