const nombre = 'Juan';
const edad = 25;
const profesion = 'Desarrollador';
const ubicacion = 'Ciudad de México';
const hobby = 'Jugar videojuegos';

const perfilTemplate = `
    <p>Nombre: ${nombre}</p>
    <p>Edad: ${edad}</p>
    <p>Profesión: ${profesion}</p>
    <p>Ubicación: ${ubicacion}</p>
    <p>Hobby: ${hobby}</p>
`;

// Definir isOnline con valor inicial false
let isOnline = false;

// Preguntar al usuario si está conectado
const respuesta = prompt("¿Estás conectado? (Responde con SI o NO)");

// Verificar la respuesta del usuario
if (respuesta.toUpperCase() === "SI" && !isOnline) {
    isOnline = true;
}

// Seleccionar el div con el ID 'profile'
const profileDiv = document.getElementById('profile');

// Controlar la visibilidad de profileDiv
if (isOnline) {
    // Si el usuario está conectado, muestra el template
    console.log("El usuario está conectado. Mostrando el 'template'.");
    profileDiv.innerHTML = perfilTemplate;
    profileDiv.style.display = "block"; // Mostrar el div
} else {
    // Si el usuario no está conectado, oculta el template
    console.log("El usuario no está conectado. El 'template' será ocultado.");
    profileDiv.innerHTML = ''; // Limpiar el contenido del div
    profileDiv.style.display = "none"; // Ocultar el div
}