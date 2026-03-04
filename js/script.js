document.addEventListener('DOMContentLoaded', () => {
    const listaServicios = document.getElementById('lista-servicios');
    if (listaServicios) {
        cargarServicios();
    }

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (evento) => {
            evento.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (nombre && email && mensaje) {
                document.getElementById('success-msg').style.display = 'block';
                form.reset();
            } else {
                alert("Por favor, rellena todos los campos.");
            }
        });
    }
});

function saludo_al_pulsar() {
    alert("Hola clase Mirad la consola con f12");
    console.log("--------------------------------");
    console.log(" SALUDO :");
    console.log("Bienvenidos al entrenamiento");
    console.log("--------------------------------");
}

function showTab(evt, tabId) {
    const contents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    const buttons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function cargarServicios() {
    const contenedor = document.getElementById('lista-servicios');

    fetch('data/servicios.json')
        .then(res => res.json())
        .then(datos => {
            contenedor.innerHTML = '';
            datos.forEach(servicio => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <div class="card-info">
                        <h3>${servicio.titulo}</h3>
                        <p>${servicio.descripcion}</p>
                    </div>
                `;
                contenedor.appendChild(card);
            });
        })
        .catch(err => {
            console.error('Error cargando servicios:', err);
            contenedor.innerHTML = '<p>Error al cargar las clases.</p>';
        });
}
