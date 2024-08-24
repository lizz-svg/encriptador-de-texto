document.addEventListener('DOMContentLoaded', function() {
    const encriptarBoton = document.getElementById('encriptadorBoton');
    const desencriptarBoton = document.getElementById('desencriptadorBoton');
    const botonCopiar = document.getElementById('botonCopiar');
    const inputTexto = document.getElementById('inputTexto');
    const mensaje = document.querySelector('.mensaje');
    const instruccion = document.querySelector('.instruccion');
    const logo = document.getElementById('logo');
    
    
    // Función para encriptar texto
    function encriptarTexto(texto) {
        let textoEncriptado = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        return textoEncriptado;
    }

    // Función para desencriptar texto
    function desencriptarTexto(texto) {
        let textoDesencriptado = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        return textoDesencriptado;
        
    }

    // Actualizar el resultado en la pantalla
    function actualizarResultado(texto) {
        const outputSection = document.querySelector('.output__section');
        const imgOutput = outputSection.querySelector('.img__output');
        const mensajeElemento = outputSection.querySelector('.mensaje');
        const instruccionElemento = outputSection.querySelector('.instruccion');
        
        if (texto) {
            imgOutput.style.display = 'none';
            mensajeElemento.textContent = texto;
            instruccionElemento.textContent = '';
            mensajeElemento.style.textAlign = "left";
        } else {
            imgOutput.style.display = 'block';
            mensajeElemento.innerHTML = '<strong>Ningún mensaje fue encontrado</strong>';
            instruccionElemento.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
        }
    }

    // Encriptar al hacer clic en el botón "Encriptar"
    encriptarBoton.addEventListener('click', function() {
        const texto = inputTexto.value;
        if (texto) {
            const textoEncriptado = encriptarTexto(texto);
            actualizarResultado(textoEncriptado);
        }
    });

    // Desencriptar al hacer clic en el botón "Desencriptar"
    desencriptarBoton.addEventListener('click', function() {
        const texto = inputTexto.value;
        if (texto) {
            const textoDesencriptado = desencriptarTexto(texto);
            actualizarResultado(textoDesencriptado);
        }
    });
    

    // Copiar al portapapeles al hacer clic en el botón "Copiar"
    botonCopiar.addEventListener('click', function() {
        const textoParaCopiar = document.querySelector('.mensaje').textContent;
        if (textoParaCopiar) {
            navigator.clipboard.writeText(textoParaCopiar).then(() => {
                alert('Texto copiado al portapapeles');
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        }
    });
    
        // Añadir evento de clic al logo para refrescar la página
        logoLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            location.reload();
    });
});