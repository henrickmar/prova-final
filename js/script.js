let cont = 1;

setInterval(function () {
    removerImagem();
    proximaImagem();
}, 2000);

function removerImagem(){
    document.getElementById("slider1").style.display = "none";
    document.getElementById("slider2").style.display = "none";
    document.getElementById("slider3").style.display = "none";
}

function proximaImagem(){
    cont++;
    
    if(cont > 3){
        cont = 1;
    }
    
    let slider = document.getElementById("slider" + cont);
    
    slider.style.display = "flex";
}
