const misDatosFisicos = {
    nombre: 'Juan',
    edad: 25,
    direccion: {
        calle: 'Calle Ficticia',
        numero: '123',
        ciudad: 'Ciudad de México'
    },
    altura: '1.75 m',
    peso: '70 kg',
    hobby: 'Jugar videojuegos'
};

// Acceder al contenedor div con ID 'perfil'
const perfilDiv = document.getElementById('perfil');

// Crear contenido del perfil usando template strings
const contenidoPerfil = `
    <h2>Perfil de Usuario</h2>
    <p>Nombre: ${misDatosFisicos.nombre || 'Desconocido'}</p>
    <p>Edad: ${misDatosFisicos.edad !== undefined ? misDatosFisicos.edad : 'Desconocida'}</p>
    <p>Dirección:</p>
    <ul>
        <li>Calle: ${misDatosFisicos.direccion?.calle || 'Desconocida'}</li>
        <li>Número: ${misDatosFisicos.direccion?.numero || 'Desconocido'}</li>
        <li>Ciudad: ${misDatosFisicos.direccion?.ciudad || 'Desconocida'}</li>
    </ul>
    <p>Altura: ${misDatosFisicos.altura || 'Desconocida'}</p>
    <p>Peso: ${misDatosFisicos.peso || 'Desconocido'}</p>
    <p>Hobby: ${misDatosFisicos.hobby || 'Desconocido'}</p>
`;