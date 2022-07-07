
function crearTarea(titulo,descripcion){
    let tarea=document.createElement('td');
    tarea.setAttribute('class','tarea');
    tarea.innerHTML=`<div class="visble"><div class="tituloTarea">${titulo}</div><div class="descripcionTarea">${descripcion}</div></div>
        <div class="invisible"><input type="text" placeholder="Descripcion de la Tarea"><br><textarea placeholder="Titulo de la Tarea"></textarea></div>
    `;
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
function cambiarEditarGuardar(lapiz, guardar){
    let tarea=lapiz.parentNode.parentNode.firstChild;
    if(lapiz.className==="visible"){
        lapiz.className="invisible";
        guardar.className="visible";
        tarea.firstElementChild.className="invisible";
        tarea.lastElementChild.className="visible";
    }
    else{
        lapiz.className="visible";
        guardar.className="invisible";
        tarea.firstElementChild.className="visible";
        tarea.lastElementChild.className="invisible";
    }
}
function editarTarea(event){
    let lapiz=event.target;
    let guardar=lapiz.nextSibling;
    cambiarEditarGuardar(lapiz,guardar);
    let tarea=lapiz.parentNode.parentNode.firstChild;
    let titulo=tarea.firstElementChild.firstElementChild.firstChild;
    let descripcion=tarea.firstElementChild.lastElementChild.firstChild;
    // innerText is for IE DOM, textContent is for the rest of the compliant DOM APIs such as Mozillas.
    // no funciona con innerText
    tarea.lastElementChild.firstElementChild.value=titulo.textContent;
    if(descripcion!=null)
        tarea.lastElementChild.lastElementChild.value=descripcion.textContent;
}
function guardarTarea(event){
    let guardar=event.target;
    let lapiz=guardar.previousSibling;
    cambiarEditarGuardar(lapiz,guardar);
    let tarea=lapiz.parentNode.parentNode.firstChild;
    let titulo=tarea.lastElementChild.firstElementChild.value;
    if(titulo==""){
        alert("Pongale Titulo a la Tarea");
        return;
    }
    let descripcion=tarea.lastElementChild.lastElementChild.value;
    tarea.firstElementChild.firstElementChild.firstChild.textContent=titulo;
    if(tarea.firstElementChild.lastElementChild.hasChildNodes()){
        tarea.firstElementChild.lastElementChild.firstChild.textContent=descripcion;
    }
    else{
        tarea.firstElementChild.lastElementChild.appendChild(document.createTextNode(descripcion));
    }
}
function crearEditar(){
    let celda=document.createElement('td');
    let lapiz=document.createElement('input');
    lapiz.setAttribute('type','button');
    lapiz.className='visible';
    let guardar=lapiz.cloneNode(false);
    guardar.setAttribute('value','Guardar');
    guardar.className='invisible';
    guardar.addEventListener('click',guardarTarea);
    lapiz.setAttribute('value','Editar');
    lapiz.addEventListener('click',editarTarea);
    celda.appendChild(lapiz);
    celda.appendChild(guardar);
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
    row.appendChild(crearEditar());
    document.getElementById("list").appendChild(row);
    document.getElementById('nuevaTarea').value="";
    document.getElementById('descripcionNuevaTarea').value="";
}


document.getElementById('botonTarea').addEventListener('click',anadirTarea);
