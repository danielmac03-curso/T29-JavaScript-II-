setDate()

setInterval(function(){
    setDate()
}, 1000)

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

function setDate(){
    var reloj = document.getElementById("reloj");
    var date = new Date();
    reloj.innerHTML = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
}

