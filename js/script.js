function inicia() {

    document.getElementById("btn-add").addEventListener("click",function(){
        var lista=document.getElementById("listaElementos");
        var texto=document.getElementById("fnovo");
        
        //if para verificar se o texto está vazio ou preenchido 
        if(texto.value != "") {
            var div=document.createElement("div");      /* Criando a Div que vai segurar os itens em um elemento só*/
            var div2=document.createElement("div");      /* Criando uma Div que será o display da contagem de fatias */
            var buttonAumentar=document.createElement("button");        /* Criando um botão de +*/
            var buttonDiminuir=document.createElement("button");        /* Criando um botão de -*/
            var pAumentar = "+";      
            var pDiminuir = "-";
            var pDisplay = 0;

            div.setAttribute("class","elementos");     /* Atribuindo uma class para a div */
            div2.setAttribute("id","display");     /* Atribuindo uma class para a div2 */
            buttonAumentar.setAttribute("class","btn-aumentar");     /* Atribuindo uma class para o botão */
            buttonAumentar.setAttribute("onclick","soma()");        /* Colocando uma função dentro do botão */
            buttonDiminuir.setAttribute("class","btn-diminuir");     /* Atribuindo uma class para o botão */
            buttonDiminuir.setAttribute("onclick","subtrai()");     /* Colocando uma função dentro do botão */
            div.textContent=texto.value;     /* Salvando o nome que foi digitado dentro da div que vai conter os elementos */

            lista.appendChild(div);     /* Adicionando a div na lista de elementos do html */
            var cx=document.querySelector ("#listaElementos div:last-child");        /* Salvando a  última div de class elementos na variavel cx */
            div.appendChild(buttonDiminuir);        /* Adicionando o botão dentro da div */
            div.appendChild(div2);     /* Adicionando a div na lista de elementos do html */
            div.appendChild(buttonAumentar);        /* Adicionando o botão dentro da div */

            buttonAumentar.textContent=pAumentar;       /* Colocando o + no Botão */
            buttonDiminuir.textContent=pDiminuir;       /* Colocando o - texto no Botão */
            div2.textContent=pDisplay;      /* Colocando o N° 0 dentro do display */
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


function soma() {
    var display = document.getElementById('display').innerHTML;     /* Pegando o valor que está dentro do ClassName 'display do html */
    document.getElementById('display').innerHTML = eval(display) + 1;   
}

function subtrai() {
    /* Se o contador for maior que 0, pode diminui. Caso contrário, o valor vai continuar em 0, pois se não ficaria negativo */
    if(document.getElementById('display').innerHTML > 0)
        {
        var display = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = eval(display) - 1;
    } 
    else {
        document.getElementById('display').innerHTML = 0;
    }
}

window.addEventListener("load",inicia);

