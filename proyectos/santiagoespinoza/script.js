function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";

  var dia14 = " Fue el dia en el que viajamos estuvo aburrido pero hice unos amigos.";
  
  var dia15 = " Fue el primer dia en el  space camp estuvo aburrido pero nos registramos en las habitaciones vimos la reglas etc.";
  
  var dia16 = " Fue el primer dia del actividades estuvo divertido hicimos la practica de la mision estuvo chuzo.";
  
  var dia17 = " Este dia hicimos la mision varias personas lo arruinaron pero estuvo vien interesante.";
  
  var dia18 = "Fuimos a la piscina y armamos un cubo el agua estaba caliente tambien hicimos un experimento. ";
  
  var dia19 = "Fuimos al planetarium y esuvo bien divertido ";
  var dia20 = "Este dia empacamos nos graduamos y fuimos a una ultima clase ";
  
  var dia21 = "Nos levantamos a las 2 de la mañana y nos fuimos al aeropuerto ";

  if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "dia1.jpeg"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "dia2.jpeg"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "dia3.jpeg"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "dia4.jpeg"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "dia5.jpeg"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "dia6.jpeg"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "dia7.jpeg"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "dia8.jpeg"; 
  }
}


function revisar(){
  pregunta1 = document.querySelector('input[name="pregunta1"]:checked').value;

  pregunta2 = document.querySelector('input[name="pregunta2"]:checked').value;

  pregunta3 = document.querySelector('input[name="pregunta3"]:checked').value;

  correctas = 0;

  if(pregunta1 == "jupiter"){
    correctas = correctas + 1;
  }
  if(pregunta2 == "laniakea"){
    correctas = correctas + 1;
  }
  if(pregunta3 == "8"){
    correctas = correctas + 1;
  }

  alert("Usted obtuvó: " + correctas + " aciertos");

}