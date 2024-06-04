// Модальное окно header

Swal.mixin({
  title: "Хочешь работать со мной?",
  text: "Позвони мне или напиши на мою почту!",
  icon: "question",
  confirmButtonText: `<a href="tel:+79871452718">Позвонить</a>`,
  confirmButtonColor: "#34547A",
  showDenyButton: true,
  denyButtonText: `<a href="mailto:experents23@gmail.com">Написать</a>`,
  denyButtonColor: "#34547A",
  focusDeny: true,
  showCancelButton: true,
  cancelButtonText: "Отмена"
}).bindClickHandler("data-swal-template");

// Видеоплеер

let playButton = document.querySelector(`#video__play`);
let playVideo = document.querySelector(`#video__main`);

playButton.onclick = function() {
  playVideo.setAttribute(`controls`, `controls`);
  playVideo.play();
  playButton.remove();
}