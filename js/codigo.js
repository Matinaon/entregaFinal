
fetch('js/datos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {

        let contenedor = document.querySelector('#contenedor-proyectos');

        datos.forEach(proyecto => {

            contenedor.innerHTML += `
          <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <img src="${proyecto.imagen}" 
                         alt="${proyecto.nombre}" 
            
                         class="img-fluid">

                         <p>${proyecto.nombre}
                </div>
            `;

        });

    });
