/* Se guardan las referencias para cada elemento del formulario */
/* Se obtienen por medio de su Id puesto en el html*/
const form = document.getElementById('formula');
const nombre2 = document.getElementById('nombres');
const apellidos2 = document.getElementById('apellidos');
const correo2 = document.getElementById('Correo');
const redes2 = document.getElementById('redes_usuario');
const descri2 = document.getElementById('descripcion');
var boton = document.getElementById('boton_1');
var boton_cont = document.getElementById('desplegarBtn');

boton_cont.addEventListener('click', function() {
    if (lista.style.display === 'none' || lista.style.display === '') {
        lista.style.display = 'block';
    } else {
        lista.style.display = 'none';
    }
});

boton.addEventListener('click', e => {  /*Agregamos un error sin evento en el html */
    e.preventDefault(); /*Aqui llamamos a este metodo en el evento para evitar que el formulario se envie sin validar las entradas*/

    validacionInputs(); /*Llamado al evento de validacion de los inputs */
    // Verifica si todos los campos tienen la clase 'success', lo que indica que son válidos
    const camposValidos = document.querySelectorAll('.success');
    if (camposValidos.length === 5) { // Ajusta este número al número total de campos en tu formulario
        // Todos los campos son válidos, entonces envía el formulario
        form.submit();
    }
});

/*Validacion de los valores en los campos */
const valNombre = nombre2 => {
    const nom = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    return nom.test(String(nombre2).toLowerCase())
}

const valApellido = apellidos2 => {
    const ape = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    return ape.test(String(apellidos2).toLowerCase())
}

const valEmail = correo2 => {
    const cor = /^[a-zA-Z0-9._-]+@(gmail\.com|outlook\.com|hotmail\.com|alumno\.buap\.mx)$/;
    return cor.test(String(correo2).toLowerCase())
}

/*****************************************************************************/

const setError = (element, message) =>{ /*Funcion que recibe un elemento html y un mensaje de error como parametro */
    const controlInput = element.parentElement; /*Segun sea el elemento obtendremos su padre que es el control de entrada y guardamos su referencia*/
    const muestraError = controlInput.querySelector('.error'); /*guardamos para la validacion de error */

    muestraError.innerText = message; /*Establecemos el texto interno de nuestro error */
    controlInput.classList.add('error');/*Agregamos la clase del error a nuestro control de entrada*/
    controlInput.classList.remove('success'); /*eliminamos la clase de exito si esta presente */
}

const setSuccess = element =>{ 
    const controlInput = element.parentElement; /*SEgun sea el elemento obtendremos su padre que es el control de entrada y guardamos su referencia*/
    const muestraError = controlInput.querySelector('.error'); /*guardamos para la validacion de error */

    muestraError.innerText = ''; /*Establecemos el texto interno de nuestro error */
    controlInput.classList.add('success');
    controlInput.classList.remove('error'); 
}

const validacionInputs = () => { //Evento de validacion de los inputs
    /*obtenemos el valor de todos los datos de entrada */
    const valorNombre = nombre2.value.trim();
    const valorApelidos = apellidos2.value.trim();
    const valorCorreo = correo2.value.trim()
    const valorRedes = redes2.value.trim();
    const valorDescrip = descri2.value.trim();

    if(valorNombre === ''){
        setError(nombre2, 'El campo es requerido');
    }
    else{
        if(!valNombre(valorNombre)){
            setError(nombre2, 'El nombre no es valido, no puede tener caracteres especiales ni números');
        }else{
            setSuccess(nombre2);
        }
    }

    if(valorApelidos === ''){
        setError(apellidos2, 'El campo es requerido');
    }
    else {
        if(!valApellido(valorApelidos)){
            setError(apellidos2, 'El nombre no es valido, no puede tener caracteres especiales ni números');
        }else{
            setSuccess(apellidos2);
        }
    }

    if(valorCorreo === ''){
        setError(correo2, 'El campo es requerido');
    }
    else{
        if(!valEmail(valorCorreo)){
            setError(correo2, 'El correo no es valido, Ej. algo@dominio.com');
        }else{
            setSuccess(correo2);
        }
    } 

    if(valorRedes === ''){
        setError(redes2, 'El campo es requerido');
    }
    else{
        setSuccess(redes2);
    }

    if(valorDescrip === ''){
        setError(descri2, 'El campo es requerido');
        descri2.style.borderColor='red';
        descri2.style.backgroundColor='#ffeeee';
    }
    else{
        setSuccess(descri2);
        descri2.style.borderColor='green';
        descri2.style.backgroundColor='#e1f7e2';
    }
}