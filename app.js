
function crearTarea(titulo,descripcion){
    let tarea=document.createElement('td');
    tarea.setAttribute('class','tarea');
    tarea.innerHTML=`<div id="tituloTarea">${titulo}</div><div id="descripcionTarea">${descripcion}</div>`;
    return tarea;
}
function crearCheck(){
    let celda=document.createElement('td');
    let check=document.createElement('input');
    check.setAttribute('type','checkbox');
    check.addEventListener('change',(event)=>{
        if(event.target.checked)
            event.target.nextSibling.innerText="Completado";
        else
            event.target.nextSibling.innerText="No Completado";
    });
    celda.appendChild(check);
    /*
    celda.innerHTML+="<label>No Completado</label>"
    */
    let label=document.createElement('label');
    label.innerText="No Completado";
    celda.appendChild(label);
    return celda;
}
function anadirTarea(){
    let text=document.getElementById('nuevaTarea').value;   
    let descripcion=document.getElementById('descripcionNuevaTarea').value;
    if(text===""){
        alert("Pongale Titulo a la Tarea");
        return;
    }
    let row=document.createElement('tr');
    row.appendChild(crearTarea(text,descripcion));
    row.appendChild(crearCheck());
    console.log(row.lastChild);
    document.getElementById("list").appendChild(row);
    document.getElementById('nuevaTarea').value="";
    document.getElementById('descripcionNuevaTarea').value="";
}


document.getElementById('botonTarea').addEventListener('click',anadirTarea);
