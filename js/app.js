const personas = [
    new Persona('Tomas', 'Geist'),
    new Persona('Ricardo', 'Arjona')
];


function mostrarPersonas(){
    console.log('se esta ejecutando el metodo');
        let texto = '';
        for(persona of personas){
            texto += `<li>${persona.nombre} ${persona.apellido} </li>`
        }
        document.getElementById('persona').innerHTML = texto;
}

function agregarPersona(){

    const forma = document.forms['forma'];
    let nombre = forma['nombre'];
    let apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value !=''){
    const persona = new Persona(nombre.value, apellido.value);
    console.log(personas)
    personas.push(persona)
    mostrarPersonas();
} else
{ console.log("no hay informacion que agregar")}

}