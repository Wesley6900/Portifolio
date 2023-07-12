var hora_real = window.document.getElementById('relogio_real');
var minutos_real = window.document.getElementById('minutos_real');
var segundos_real = window.document.getElementById('segundos_real');

var alternar = window.document.getElementById('alterar');

function hora_atualizador() {
    var hora = new Date;
    hora = hora.getHours()

    var minutos = new Date;
    minutos = minutos.getMinutes();

    var segundos = new Date;
    segundos = segundos.getSeconds();

    hora_real.innerHTML = hora;
    minutos_real.innerHTML = minutos;

    if (segundos < 10) {
        segundos_real.innerHTML = '0' + segundos;
    }else{
        segundos_real.innerHTML = segundos;
    }

    if (minutos < 10) {
        minutos_real.innerHTML = '0' + minutos;
    }else{
        minutos_real.innerHTML = minutos;
    }


    if (hora > 4 && hora < 18) {
        alternar.style.marginRight = '-30px';
    }else if(hora > 18 && hora < 5){
        alternar.style,marginRight = '0px';
    }
}

setInterval (()=>{
    hora_atualizador();
},1000)