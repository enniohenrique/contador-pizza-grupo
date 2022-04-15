function inicia() {
    document.getElementById("btn-add").addEventListener("click",function(){
        var lista=document.getElementById("listaElementos");
        var texto=document.getElementById("fnovo");
        
        //if para verificar se o texto está vazio ou preenchido 
        if(texto.value != "") {
            var li=document.createElement("li");
            li.textContent=texto.value;
            lista.appendChild(li);            
            texto.value="";
            texto.focus();
        }
        //Caso esteja vazio, nada será adicionado 
        else {
            texto.value="";
            texto.focus();
        }        
    });
}

window.addEventListener("load",inicia);