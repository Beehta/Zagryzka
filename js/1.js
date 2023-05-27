var images = ['-3.png','-4.png','-7.png','-10.png']
var slider = document.querySelector('#slider')
var img = slider.querySelector('img')
var i = 1;
img.src = 'images/' + images[0];
window.setInterval(function() {
    img.src = 'images/' + images[i];
    i++;
    if(i == images.length) {
        i=0;
    }
}, 10000)
var audio = new Audio(); // Создаём новый элемент Audio
audio.src = "muzic/anna-efremova-skovannye-odnoj-cepyu-beholder-ost_(mp3IQ.net).mp3"; // Указываем путь к звуку 
audio.autoplay = true; // Автоматически запускаем

function nextMsg(i) {
    if (messages.length == i) {
        i = 0;
    }
    $('#message').html(messages[i]).fadeIn(500).delay(5000).fadeOut(500, function() {
        nextMsg(i + 1);
    });
};
var messages = [
   "ДОБРО ПОЖАЛОВАТЬ",
   "МЫ НЕ ДЕЛАЕМ КАК ВСЕ, МЫ ДЕЛАЕМ ЛУЧШЕ!",
   "АННА - СКОВАННЫЕ ОДНОЙ ЦЕПЬЮ",
   "СБЕЖАТЬ СЛОЖНО, ВЫЖИТЬ НЕ ВОЗМОЖНО",
   "ТЫ ДАЛЕКО НЕ ТЕРМИНАТОР",
   "ПИШЕМ ИНТЕРЕСНЫЕ МЕХАНЫ",
   "ВЫЖИВАЕМОСТЬ ПРЕВЫШЕ ВСЕГО",
   "ЭТО RP ИЛИ RPG?",
   "МЫ ЗАПРЕЩАЕМ НАРУШАТЬ ПРАВИЛА",
   "ОБЕЩАЕМ ПООБЕЩАТЬ ВЫПОЛНИТЬ ОБЕЩАНОЕ",
   ];

$('#message').hide();

nextMsg(0);
