var hora_real = window.document.getElementById('relogio_real');
var minutos_real = window.document.getElementById('minutos_real');
var segundos_real = window.document.getElementById('segundos_real');

function hora_atualizador() {
    var color_pagina = window.document.getElementById('body_color');

    var hora = new Date();
    hora = hora.getHours();

    var minutos = new Date();
    minutos = minutos.getMinutes();

    var segundos = new Date();
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

    if (hora < 10) {
        hora_real.innerHTML = '0' + hora;
    }else{
        hora_real.innerHTML = hora;
    }


    if (hora > 4 && hora < 18) {
        document.getElementsByClassName('img_alternation')[0].innerHTML = '<img src="https://i.pinimg.com/originals/d8/dc/3a/d8dc3a2fd41076ec9e52eea65ac62da0.png" alt="Dia" width = "50px">'

    }else{
        document.getElementsByClassName('img_alternation')[0].innerHTML = '<img src="https://i0.wp.com/imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Lua-PNG.png?fit=500%2C500&ssl=1" alt="Lua" width = "50px">'
        
    }
}

setInterval (()=>{
    hora_atualizador();
},1000)
