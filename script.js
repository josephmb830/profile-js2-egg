// Definir una función con un parámetro predeterminado
function imprimirTemplate(id = 'pre3') {
    // Definir datos personales
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
    
    // Crear un template string con los datos personales
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

    // Seleccionar el elemento `<pre>` por su `id`
    const preElement = document.getElementById(id);
    
    // Asignar el template string al contenido del elemento `<pre>`
    preElement.innerHTML = contenidoPerfil;
}

// Llamar a la función sin un parámetro para imprimir en `pre3`
imprimirTemplate();

// imprimirTemplate('pre1'); // Imprime en `pre1`
// imprimirTemplate('pre2'); // Imprime en `pre2`
// imprimirTemplate('pre4'); // Imprime en `pre4`