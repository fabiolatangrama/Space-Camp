function calendario(dia){
document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";


var dia14 = "Este día fue cunado nos fuimos pero no pudimos hacer nada cuando llegamos ya que era muy tade";
var dia15= "Este día nos levantamos y desayunamos y despues nos fuimos a dormir otra vez ya que al día anterior llegamos tarde";
var dia16 = "El día Lunes pudimos conocer a nustra guia de la tarde y era muy graciosa y divertida pasamos el dia aprendiendo cosas nuevas";
var dia17 = "El Martes pudimos conocer a nuestra guia de la mañana y tambien era muy graciosa, ese dia fue el dia que fuimos a hacer buseo y fue increible";
var dia18= "Este dia empesamos con una mision y terminamos el día llendoa un aula para poder empesar a construir nustro futuro coete";
var dia19 = "En la maña hizimos practicas para una mision que ibamos a tener en la tarde, desoues de que hiziesemos la mision de la tarde empesamos a conocer sobre la histria del Space Camp y la NASA, ademas sobre el espacio; despues de todo eso fuimos al aula otra vez y continuamos con el coete";
var dia20 = "Este fue el ultimo dia en el Space Camp y fue muy divertido ya que logramos completar una mision de 3h y fue muy divertido, pero tambien lanzamos el coete y el huevo que estaba dentro de el sobrevivio y fue increible";
var dia21= "Este dia fue cundo nos estabamos debolviendo; en mi opinion esta experiencia bale la pena ir ya que es muy divertida";



  if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "Ida.png"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "Llegada.png"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "fotografia.png"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "Buseo.png"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "Traje espacial.png"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "Charlas.png"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "Graduacion.png"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "Regreso.png"; 
  }
}

function revisar(){
   p1=document.querySelector('input[name="p1"]:checked').value;
   p2=document.querySelector('input[name="p2"]:checked').value;
   p3=document.querySelector('input[name="p3"]:checked').value;

  if (p1 == "Neil"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p2 == "Buseo"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p3 == "Canjrego"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
}