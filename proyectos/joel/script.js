function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";
  
  var dia14 = " primer dia llegamos y fue muy divertido conoci nuevos amigos.  ";
var dia15 = " nos llevaron  a un lugar donde que eran como aulas y aprendimos demasiado  ";
var dia16 = " fuimos a la tienda y  a el planetarium fue increible.  ";
var dia17 = " fuimos a un tanque donde nadamos y tuvimos que hacer un reto de armar un cubo en 15 minutos  ";
var dia18 = " nos llevaron a el museo y vi el saturno V el verdadero y la capsula de el  apolo 16.  ";
var dia19 = " hicimos um quiz y mi equipo quedo de segundo lugar.  ";
var dia20 = "  hicimos la mision de el shuttle fue muy fue divertido. ";
var dia21 = "  fue el dia de la graduacion mi amigo jhangel y yo usamos el traje de aviation y fue demasiado emocionante.";

if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "space camp 9.jpg"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "spacecamp2.jpg"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "space camp 8.jpg"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "space camp 5.jpg"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "space camp.jpg"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "space camp 11.jpg"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "space camp 7.jpg"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "space camp 10.jpg"; 
  }
}

function revisar(){
  p1 = document.querySelector('input[name="p1"]:checked').value;
  p2 = document.querySelector('input[name="p2"]:checked').value;
  p3 = document.querySelector('input[name="p3"]:checked').value;

  if (p1 == "alexei lenov"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }

  if (p2 == "miss able and miss baker"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }

  if (p3 == "beef sandwich"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  }