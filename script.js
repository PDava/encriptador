const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

// e - enter
// i - imes
// a - ai
// o - ober
// u - ufat

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const replace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muneco.classList.add("oculto");
    ingresoTexto.value = "";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {

    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto");
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none"; 
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();

}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function encriptar(newText) {
            for(let i=0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][0])) {
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newText
        }    
    }else {
        alert("Ingrese texto a encriptar")
        reset();
    }
    /* const textoEncriptado = encriptar(texto); */
    replace(encriptar(texto))

});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText) {
            for(let i = 0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][1])){
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText;
        };
    }else {
        alert("Ingrese texto a desencriptar")
        reset();
    }
    /* const textoDesencriptado = desencriptar(texto); */
    replace(desencriptar(texto))

});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado");
    reset();
})
