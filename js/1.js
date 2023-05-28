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
   "МЫ НЕ КАК ВСЕ, МЫ ЛУЧШЕ!",
   "АННА ЕФРЕМОВА - СКОВАННЫЕ ОДНОЙ ЦЕПЬЮ",
   "СБЕЖАТЬ СЛОЖНО, ВЫЖИТЬ НЕВОЗМОЖНО",
   "ТЫ ДАЛЕКО НЕ ТЕРМИНАТОР",
   "ПИШЕМ ИНТЕРЕСНЫЕ МЕХАНЫ",
   "ЖИЗНЬ ПРЕВЫШЕ ВСЕГО",
   "ЭТО RP ИЛИ RPG?",
   "МЫ ЗАПРЕЩАЕМ НАРУШАТЬ ПРАВИЛА",
   "ОБЕЩАЕМ ВЫПОЛНИТЬ ОБЕЩАНОЕ",
   ];
$('#message').hide();
nextMsg(0);

var images = ['-3.png','-4.png','-7.png','6ae896327902eff3.png']
var slider = document.querySelector('#slider')
var img = slider.querySelector('img')
var i = 1;
window.setInterval(function() {
    img.src = 'images/' + images[i];
    i++;
    if(i == images.length) {
        i=0;
    }
}, 10000)

function play()
{
    var a = Math.random()*2;
    a= Math.floor(a);

    if(a==1)
    {
        
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='muzic/anna-efremova-skovannye-odnoj-cepyu-beholder-ost_(mp3IQ.net).mp3' type='audio/ogg'></audio>";
    }
    if(a==0)
    {
        
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='muzic/Epi_-_Vojjna_musmore.com_1.mp3' type='audio/ogg'></audio>";
    }
}


