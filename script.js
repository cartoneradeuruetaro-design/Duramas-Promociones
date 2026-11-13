document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del formulario principal de cotización
    const formCotizacion = document.getElementById('form-cotizacion');
    
    if (formCotizacion) {
        formCotizacion.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const poblacion = document.getElementById('poblacion').value.trim();
            const asesor = document.getElementById('atendido-por').value;
            const producto = document.getElementById('producto-select').value;
            const mensaje = document.getElementById('mensaje').value.trim() || "Sin detalles adicionales";

            // Validar selección de asesor
            let numeroDestino = "524432722109"; // Sra. Alicia por defecto
            let nombreAsesor = "Sra. Alicia";

            if (asesor === "Carlos") {
                numeroDestino = "524431980853";
                nombreAsesor = "Sr. Carlos";
            }

            // Construir mensaje formateado para WhatsApp
            const textoWhatsApp = `Hola ${nombreAsesor}, mi empresa es *${nombre}*.%0A%0A` +
                                  `📍 *Destino/Obra:* ${poblacion}%0A` +
                                  `📌 *Producto requerido:* ${producto}%0A` +
                                  `📝 *Especificaciones:* ${mensaje}%0A%0A` +
                                  `📞 *Teléfono de contacto:* ${telefono}`;

            // Abrir enlace de WhatsApp en nueva pestaña
            window.open(`https://wa.me/${numeroDestino}?text=${textoWhatsApp}`, '_blank');
        });
    }

    // 2. Cotización rápida por producto individual en el catálogo
    const botonesCotizarItems = document.querySelectorAll('.btn-cotizar-item');
    
    botonesCotizarItems.forEach(boton => {
        boton.addEventListener('click', function() {
            const productoNombre = this.getAttribute('data-producto');
            const textoWhatsApp = `Hola Sra. Alicia, solicito cotización formal e información del producto: *${productoNombre}*.`;
            window.open(`https://wa.me/524432722109?text=${textoWhatsApp}`, '_blank');
        });
    });

});