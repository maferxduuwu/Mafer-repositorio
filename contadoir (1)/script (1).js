function contador(){
    let segundos = +document.querySelector('#segundos').value;
    setTimeout(finalizar, segundos * 1000);
    //setTimeout(finalizar, );//

}

function finalizar(){
   // alert('tiempo cumplido');//
    document.querySelector('#salida').textContent = 'on';
    let alarma = document.querySelector('#alarma');
    alarma.play();

}
function reiniciar(){
    location.reload();
}