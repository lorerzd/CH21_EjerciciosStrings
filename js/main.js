//Ejercicios Strings

let btnEnviar = document.getAnimations("btnEnviar");
let idTimeout;

    btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    let validos = 0;
    
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";
    // console.log(exampleFormControlTextarea1.value.length);
    // console.log("["+
    //     exampleFormControlTextarea1.value.replaceAll(" ","")
    //   +"]"
    
    // );
    
    // console.log(exampleFormControlTextarea1.value.c.length);
    
    if (exampleFormControlTextarea1.Value.trim().replaceAll(" ","").length< 20){

        alertError.innerHTML = "El mensaje debe contener 20 caracteres o más"
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
        exampleFormControlTextarea1.style.dorder = "solid red 1px";

    } else {
        exampleFormControlInput1.style.dorder = "solid green 1px";
        validos ++;
    }

    if (exampleFormControlInput1.value.match(emailRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML += "El correo no es valido";
        exampleFormControlInput1.style.border = "solid red 1px";
        
    } else {
        exampleFormControlInput1.style.dorder = "solid green 1px";
        validos ++;
    }
    
    let RFCRegex = /^ [A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    ///^ [A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    if (exampleFormControlInput2.value.match(RFCRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML += "El RFC no es valido";
        exampleFormControlInput2.style.border = "solid red 1px";
        
    } else {
        exampleFormControlInput2.style.dorder = "solid green 1px";
        validos ++;
    }

    if ((idTimeout=undefined)&&(idTimeout !=null)){
        clearTimeout(idTimeout);
    }

    if (validos == 3) {
        idTimeout = setTimeout(function(){
            exampleFormControlTextarea1.style.dorder ="";
            exampleFormControlInput1.style.dorder ="";
            exampleFormControlInput2.style.dorder ="";

        }, 3000);
        console.log(idTimeout);
    }

});


