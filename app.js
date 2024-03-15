const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".btn-copiar");
const restricao = document.querySelector(".restricao");
const aviso = document.querySelector(".mensagem-aviso");
const imgBusca = document.querySelector(".img-busca");

mensagem.addEventListener("input", checkTextArea);
checkTextArea();

function checkTextArea() {
    if (mensagem.value.trim() === "") {
        mensagem.style.backgroundImage = "url('img/img.png')";
        btnCopiar.style.display = "none";
        mensagem.style.display = "none";
        imgBusca.style.display = "block";
        aviso.style.display = "block";
    } else {
        mensagem.style.backgroundImage = "none";
        btnCopiar.style.display = "block";
        mensagem.style.display = "block";
        imgBusca.style.display = "none";
        aviso.style.display = "none";

    }
}

function btnEncriptar() {
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    checkTextArea();
    textArea.value = "";
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringEncriptada = stringEncriptada.toLowerCase();
    stringEncriptada = stringEncriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(stringEncriptada);
    for(let i = 0; i < matrizCodigo.length; i++) { 
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return(stringEncriptada);
}

function bntDesencriptar() {
    const textoDesencriptado = descriptografar(textArea.value);
    mensagem.value = textoDesencriptado;
    checkTextArea();
    textArea.value = "";
}

function descriptografar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringDesencriptada = stringDesencriptada.toLowerCase();
    stringDesencriptada = stringDesencriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }


    return(stringDesencriptada);
}

function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value).then(() => {
        alert('Copiado para a área de tranferência');
    })
}