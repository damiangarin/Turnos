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

const persona = document.querySelector(".persona")

const checkearTurno = () => {
    // buscar dni en pacientes[{}]
    const turno = pacientes.find(paciente => paciente.dni === inputDni.value)
    if (turno) {        
        persona.innerText = turno.asignado === true ? 'Turno asignado' : 'Turno no asignado'    
    }else {
        persona.innerText = 'DNI no registrado'
    }
}


