// Obtener elementos del DOM
const modal = document.getElementById("modal-pago");
const btnComprar = document.getElementById("btn-comprar");
const btnCerrar = document.getElementById("cerrar-modal");
const btnCopiar = document.getElementById("btn-copiar");
const textoAlias = document.getElementById("texto-alias").innerText;
const mensajeCopiado = document.getElementById("mensaje-copiado");

// Abrir el modal al hacer clic en "Añadir al Carrito"
btnComprar.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar el modal al hacer clic en la "X"
btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera de la ventana blanca
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Copiar el alias al portapapeles
btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(textoAlias).then(() => {
        mensajeCopiado.style.opacity = "1";
        setTimeout(() => {
            mensajeCopiado.style.opacity = "0";
        }, 2500);
    });
});