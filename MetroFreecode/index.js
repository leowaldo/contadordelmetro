// document.getElementById("count-el").innerText=5 /* obtengo el elemento por id y le envio como parametro 5 

let saveEl=document.getElementById("save-el")

let countEl= document.getElementById("count-el");

let contador=0;
console.log(saveEl)

function incF(){/* funcion del boton  incremento del contador */
  contador+=1;
  countEl.innerText=contador;
}
function saveF(){ /*funcion del boton guardar */
 let countStr=contador+ " - " 
  saveEl.textContent+=countStr;
  

}
saveF()