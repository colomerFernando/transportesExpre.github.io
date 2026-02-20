// PASAR RUTA AL MODAL
document.querySelectorAll(".reservar-btn").forEach(button => {
    button.addEventListener("click", function () {
        const ruta = this.getAttribute("data-ruta");
        document.getElementById("rutaSelect").value = ruta;
    });
});

// ENVIAR A WHATSAPP
document.getElementById("formReserva").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const ruta = document.getElementById("rutaSelect").value;
    const fecha = document.getElementById("fecha").value;
    const pasajeros = document.getElementById("pasajeros").value;

    const mensaje = `Hola, quiero reservar un boleto:
Nombre: ${nombre}
Teléfono: ${telefono}
Ruta: ${ruta}
Fecha: ${fecha}
Pasajeros: ${pasajeros}`;

    const numeroEmpresa = "+504884152"; // CAMBIAR POR NÚMERO REAL
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});