let lectura;
let arreglo = [];
let cadena;  
let string;


    
function encriptador(elemento){
    arreglo = [];
    limpiarsalida('#salida');
    lectura = document.querySelector(elemento).value;
    for(let i = 0; i < (lectura.length);i++){
        arreglo.push(lectura[i]);
    }
    console.log(arreglo)
    for(let i = 0; i < (arreglo.length);i++){
        if (arreglo[i] == "a"){
            arreglo[i] = "ai";
        }else if (arreglo[i] === "e"){
                arreglo[i] = "enter";
                }else if (arreglo[i] === "i"){
                        arreglo[i] = "imes";
                        }else if (arreglo[i] === "o"){
                                arreglo[i] = "ober"; 
                                } else if(arreglo[i] === "u"){
                                    arreglo[i] = "ufat";
                                        }
    }
    
    printsalida('#salida');
    putoff();    
}

function desencriptador(elemento){
    arreglo = [];
    limpiarsalida('#salida');
    string = document.querySelector(elemento).value;
    for(let i = 0; i < (string.length);i++){
        arreglo.push(string[i]);
    }
    console.log(arreglo);
    for(let i = 0; i < (arreglo.length-1);i++){
        
        if(i <= string.length-1){
            if(arreglo[i] === "a"){
                if(arreglo[i+1] === "i"){
                    arreglo[i]="a";
                    arreglo.splice(i+1,1);
                }
            }
        }
        
        if(i+4 <= string.length-1){
            if(arreglo[i] === "e"){
                if(arreglo[i+1] === "n"){
                    if(arreglo[i+2] === "t"){
                        if(arreglo[i+3] === "e"){
                            if(arreglo[i+4] === "r"){
                                arreglo[i]="e";
                                arreglo.splice(i+1,4);
                            }
                        }
                    }
                }      
            }
        }
        
        if(i+3 <= string.length-1){
            if(arreglo[i] === "i"){
                if(arreglo[i+1] === "m"){
                    if(arreglo[i+2] === "e"){
                        if(arreglo[i+3] === "s"){
                                arreglo[i]="i";
                                arreglo.splice(i+1,3);
                        }
                    }
                }      
            }
        
            if(arreglo[i] === "o"){
                if(arreglo[i+1] === "b"){
                    if(arreglo[i+2] === "e"){
                        if(arreglo[i+3] === "r"){
                            arreglo[i]="o";
                            arreglo.splice(i+1,3);
                        }
                    }
                }
            }   

            if(arreglo[i] === "u"){
                if(arreglo[i+1] === "f"){
                    if(arreglo[i+2] === "a"){
                        if(arreglo[i+3] === "t"){
                            arreglo[i]="u";
                            arreglo.splice(i+1,3);
                        }
                    }
                }
            }      
        }
    }
    
    printsalida('#salida');
    putoff(); 
}

function condicionesiniciales(){
    document.querySelector('#Encriptar').removeAttribute("disabled");
    document.querySelector('#Desencriptar').removeAttribute("disabled");
    document.querySelector('#copy').setAttribute("disabled", "true");
    limpiarsalida('#lectura');
    copiar('#salida');
}

function putoff(){
    document.querySelector('#Encriptar').setAttribute("disabled", "true");
    document.querySelector('#Desencriptar').setAttribute("disabled", "true");
    document.querySelector('#copy').removeAttribute("disabled");
}

function printsalida(Elemento){
    document.querySelector(Elemento).value = arreglo.join('');
}

function limpiarsalida(Elemento){
    document.querySelector(Elemento).value ='';
}


function copiar(elemento){
    let textcopy = document.querySelector(elemento);
    navigator.clipboard.writeText(textcopy.value);
}