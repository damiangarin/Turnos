const pacientes = [
    {
    dni: '31981992',
    asignado: true
    },
    {
    dni: '31981993',
    asignado: false
    },
]

const contenedorAsignado = document.querySelector(".asignados")
const inputDni = document.querySelector("#inputDni")

const persona = document.createElement("p")
contenedorAsignado.appendChild(persona)

const checkearTurno = () => {
    // buscar dni en pacientes[{}]
    const turno = pacientes.find(paciente => paciente.dni === inputDni.value).asignado
    // persona.innerText = pacientes[0].asignado === true ? 'Turno asignado' : 'Turno no asignado'
    persona.innerText = turno === true ? 'Turno asignado' : 'Turno no asignado'
}


