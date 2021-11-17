function enviarReserva() { 

    let fecha = document.getElementById("date").value;
    let hora = document.getElementById("time").value;
    let numero = document.getElementById("number").value;

    let mensaje = `Hola, necesito una reserva para el dia ${ fecha } a las ${ hora }, es para ${ numero } personas`;

    enviarMensajeWhatsApp(mensaje);
}

function enviarMensajeWhatsApp(mensaje){
    location.href = `https://api.whatsapp.com/send?phone=+573233618213&text=${ mensaje }`
}

function domicilio(){
    let msj = "Hola quiero un domicilio por favor";
    enviarMensajeWhatsApp(msj);
}

function contacto(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensajes = document.getElementById("dejarMensajes").value;  
    
    let mensaje = `Mensaje: ${mensajes}. Enviado por ${nombre}. Responder a ${email}`;
    

    enviarMensajeWhatsApp(mensaje);
}

//menu

function clickMenu(){
    let clases = document.getElementById("menu-mobile").classList;
    if (clases.contains("hide") === true){
        document.getElementById("menu-mobile").classList.remove("hide");
    }else{
        document.getElementById("menu-mobile").classList.add("hide")
    }

}







