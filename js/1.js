var d = document;// СУКА ЕБАННАЯ НЕ ТРОГАЙ ОНО ОЧЕНЬ НУЖНО
var image_count = 4; // Тут сколько картинок всего чтобы не ломался код
var interval = 10000; // Время картинки
var time_out = 10; // Сколько будет идти переход
var i = 0; // КТО ТРОНЕТ ОТ ЕБЛАН
var timeout; // ЭТО НЕ ТРОГАТЬ СУКИ ЕБАННЫЕ
var opacity = 100; // НЕЛЬЗЯ ФУ ИДИ ОТСЮДА

function change_image() {
 opacity--;
 var j = i + 1;
 var current_image = 'img_' + i;
 if (i == image_count) j = 1;
 var next_image = 'img_' + j;
 d.getElementById(current_image).style.opacity = opacity/100;
 d.getElementById(current_image).style.filter = 'alpha(opacity=' + opacity + ')';
 d.getElementById(next_image).style.opacity = (100-opacity)/100;
 d.getElementById(next_image).style.filter = 'alpha(opacity=' + (100-opacity) + ')';
 timeout = setTimeout("change_image()", time_out);
 if (opacity==1) {
  opacity = 100;
  clearTimeout(timeout);
 }
}

setInterval (function() {i++; if (i>image_count) i=1; change_image();}, interval);
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
    "Добро пожаловать",
    "Мы не делаем как все, мы делаем лучше!",
    "Скованные одной цепью, связанные одной целью.",
    "Сбежать сложно, выжить после этого ещë сложнее",
    "Ты далеко не терминатор",
    "Пишем интересные механы",
    "Атмосфера превыше всего",
   "Это RP или RPG?",
   "Мы вам запрещаем нарушать правила",
   "Обещаем пообещать выполнить обещаное",
   "♫ Анна Ефремова - Скованные одной цепью",
    ];

$('#message').hide();

nextMsg(0);