
 
function encriptar(){

    
        
           var texto =document.getElementById("inputTexto").value;
    
           var txtCifrado=texto
           .replace('e', 'enter')
           .replace('i', 'imes')
           .replace('a', 'ai')
           .replace('o', 'ober')
           .replace('u', 'ufat');

         document.getElementById("imgDerecho").style.display = "none" ;
         document.getElementById("textomunheco1").style.display = "none" ;
         document.getElementById("textarea").innerHTML= txtCifrado ;
         document.getElementById("cop").style.display = "show";
         document.getElementById("cop").style.display = "inherit";

         
        

    return txtCifrado;

    
    

    
}

function desencriptar(){

     
    
         var texto =document.getElementById("inputTexto").value;
         var txtCifrado=texto
          .replace('enter', 'e')
          .replace('imes', 'i')
          .replace('ai', 'a')
          .replace('ober', 'o')
          .replace('ufat', 'u');
      
         document.getElementById("imgDerecho").style.display = "none" ;
         document.getElementById("textomunheco1").style.display = "none" ;
         document.getElementById("textarea").innerHTML= txtCifrado ;
         document.getElementById("cop").style.display = "show";
         document.getElementById("cop").style.display = "inherit";

         
         
         
    return txtCifrado
    

}

function copiar() {
    textoencriptado=document.getElementById("textarea");
    textoencriptado.select();
    document.execCommand('copy');
    alert("texto copiado exitosamente")


    
}    
   
    


