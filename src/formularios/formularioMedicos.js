import {} from'./validacionFormularioMedico.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFotografia){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let registroMedico=etiquetaRegistro.value
    let correoMedico=etiquetaCorreo.value
    let sedeMedico=etiquetaSede.value
    let horarioMedico=etiquetaHorario.value
    let descripcionMedico=etiquetaDescripcion.value
    let fotografiaMedico=etiquetaFotografia.value

    //debemos almacenar todos los valores del formulario en una sola variable
    //OBJETO: ALMACENAR VARIOS DATOS EN 1 SOLO ESPACIO DE MEMORIA
    let datosFormularioMedico={
        nombre:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        registro:registroMedico,
        correo:correoMedico,
        sede:sedeMedico,
        horario:horarioMedico,
        decripcion:descripcionMedico,
        foto:fotografiaMedico,
    }
    console.log(datosFormularioMedico)


}