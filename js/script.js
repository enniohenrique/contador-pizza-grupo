function inicia() {
    document.getElementById("btn-add").addEventListener("click",function(){
        var lista=document.getElementById("listaElementos");
        var texto=document.getElementById("fnovo");
        
        //if para verificar se o texto está vazio ou preenchido 
        if(texto.value != "") {
            var div=document.createElement("div");      /* Criando uma Div */
            var ul=document.createElement("ul");        /* Criando uma ul */
            var li=document.createElement("li");        /* Criando uma li */
            div.setAttribute("class","elementos");     /* Atribuindo uma class para a div */
            li.textContent=texto.value;     /* Salvando o nome que foi digitado na li */
            lista.appendChild(div);     /* Adicionando a div na lista de elementos do html */
            var cx=document.querySelector("#listaElementos div:last-child");        /* Salvando a  última div de class elementos na variavel cx */
            cx.appendChild(ul);     /* Adicionando a ul dentro do conteudo da cx (A div de class elementos) */
            ul.appendChild(li);     /* Adicionando a li dentro da ul */
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