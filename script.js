const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// Função para criptografar
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

// Função para aplicar criptografia
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    
    return stringEncriptada;
}

// Função para descriptografar
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

// Função para aplicar descriptografia
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    
    return stringDesencriptada;
}
function copiarTexto() {
    const textoParaCopiar = document.querySelector(".mensagem");
    textoParaCopiar.select();
    textoParaCopiar.setSelectionRange(0, 99999); // Para dispositivos móveis

    try {
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    } catch (err) {
        console.error('Erro ao copiar o texto: ', err);
    }
}

