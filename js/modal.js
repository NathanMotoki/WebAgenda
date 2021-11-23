function popupToggle() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

const popupTitulo = document.querySelector(".popup-titulo");
const popupData = document.querySelector(".popup-data");
const popupTexto = document.querySelector(".popup-msg");

const popup = document.getElementById('popup');

function cadastrar() {
    if (popupTitulo.value=="") {
        return window.alert("Lembretes Precisam de Título!")
    } else {
        return cards();
    }

}

var aux = 0;

function cards() {

    var card = document.querySelector(".card-info");
    var tituloInfo = popupTitulo.value;
    var dataInfo = popupData.value;
    var textoInfo = popupTexto.value;
    
    var cardTitulo = document.createTextNode(tituloInfo);
    var cardInfo = document.createTextNode(dataInfo);
    var cardTexto = document.createTextNode(textoInfo);


    var div = document.createElement('div');

    div.setAttribute('class', 'card');
    div.setAttribute('onclick', 'clicar()');

    card.appendChild(div)
    div.appendChild(cardTitulo);
    div.appendChild(document.createElement('br'));
    div.appendChild(cardInfo);
    div.appendChild(document.createElement('br'));
    div.appendChild(cardTexto);
    
    popupTitulo.value = " ";
    popupData.value = " ";
    popupTexto.value = " ";
    popup.classList.toggle('active');
    div.style.visibility = "visible";

    aux++;
    console.log(aux)
}


function clicar() {
    var cardSelect = document.querySelector(".card");
    const popupTituloDel = document.querySelector(".popup-titulo-delete");
    const popupDataDel = document.querySelector(".popup-data-delete");
    const popupTextoDel = document.querySelector(".popup-msg-delete");

    const popupDel = document.getElementById('popup-delete');

    popupTituloDel.value = titulo;

    popupDel.classList.toggle('active');
}



