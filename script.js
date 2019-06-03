let recurso = document.getElementById('recurso');
let att = document.createAttribute('placeholder')
att.value= '#';
recurso.setAttributeNode(att);
att.value = window.location.href;



let req = new XMLHttpRequest();
document.querySelector('#enviar').addEventListener('click',()=>{
    req.open('GET','index.html',true) //input.value
    req.send(null); // le pasamos null en este caso ya que queremos cargar toda la pagina pero funcionaria sin parametro. Aunque se supone que es comun usar el null
    req.onload = fnCallback; // asociamos un callback al eventlistener. El orden no importa se podria declarar en otros sitios dentro de la function asociada al event listener.
    
})

function fnCallback(){
    if (req.readyState ===4 || req.status == 200) {      //4 = operacion completada // 200 si la comunicación ha podido establecerse (404 si la página no se encuentra)
                                                        // request status == en vez de === porque puede que devuelva un string , el ready state siempre devuelve un numero
        document.getElementById('contenidos').innerHTML = req.responseText;



}   }