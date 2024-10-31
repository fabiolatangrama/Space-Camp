function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";
  
var dia14 = " este dia que tambien fue el primero solo estubimos en los aviones  ";
var dia15 = " llegamos al space camp y nos reunimos con los maestros y los alumnos pero no hicimos nada interesante";
var dia16 = " fuimos a unos juegos de electricida y tambien en el Gforce  ";
var dia17 = " fuimos a un museo y tambien tubimos muchas clases  ";
var dia18 = " fuimos al museo de saturno 5 y vimos un cohete de verdad y literalmente toque radiaccion ";
var dia19 = "  en este dia tubimos nuestra primera mision ";
var dia20 = "segunda mision,graduacion y quiz   ";
var dia21 = "  dia de regreso a casa ";

if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "foto1.jpg"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "foto8.jpg"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "foto3.jpg"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "foto4.jpg"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "foto5.jpg"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "foto6.jpg"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "foto7.jpg"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "foto2.jpg"; 
  }
}

function revisar(){
  p1 = document.querySelector('input[name="p1"]:checked').value;
  p2 = document.querySelector('input[name="p2"]:checked').value;
  p3 = document.querySelector('input[name="p3"]:checked').value;

  if (p1 == "via"){
    alert("1. Bien");
  }
  else{
    alert("1. Mal")
  }
  if (p2 == "jupiter"){
    alert("2. Bien");
  }
  else{
    alert("2. Mal")
  }
  if (p3 == "neil"){
    alert("3. Bien");
  }
  else{
    alert("3. Mal")
  }
}