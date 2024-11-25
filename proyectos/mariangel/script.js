function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";

  

var dia14 = "este dia nos fuimos a el space camp,fue muy cansado ";
var dia15 = " el primer dia no hicimos mucho,solo nos dieron un mini recorrido escuchamos algunas presentaciones. ";
var dia16 = "el segundo dia lanzmos cohetes,cuando lo lanze fue muy divertido. ";
var dia17 = "el tercer dia fuimos al planetario,ese fue mi dia favorito,y ademas porque fuimos a la tienda de regalos  ";
var dia18 = " el cuarto dia recibimos clases de algunos temas de el espacio,las clases fueron muy interesantes.   ";
var dia19 = "el quinto dia fuimos a varios simuladores,estuvieron divertidos.  ";
var dia20 = "el sexto dia fue la graduacion e, incluso hicimos un quiz ";
var dia21 = "el ultimo dia regresamos a Costa Rica.  ";


  
  if (dia.innerText == "14"){
       document.querySelector('.text-calendar').innerText = dia14;
       document.querySelector(".img-calendar").src = "spacecamp1.jpg"; 
    }
    else if (dia.innerText === "15"){
       document.querySelector('.text-calendar').innerText = dia15;
      document.querySelector(".img-calendar").src = "foto78.jpg"; 
    }
    else if (dia.innerText == "16"){
       document.querySelector('.text-calendar').innerText = dia16;
      document.querySelector(".img-calendar").src = "rocket.jpeg"; 
    }
    else if (dia.innerText == "17"){
       document.querySelector('.text-calendar').innerText = dia17;
      document.querySelector(".img-calendar").src = "planetarium.jpg"; 
    }
    else if (dia.innerText == "18"){
       document.querySelector('.text-calendar').innerText = dia18;
      document.querySelector(".img-calendar").src = "class.jpg"; 
    }
    else if (dia.innerText == "19"){
       document.querySelector('.text-calendar').innerText = dia19;
      document.querySelector(".img-calendar").src = "simuladores.jpg"; 
    }
    else if (dia.innerText == "20"){
       document.querySelector('.text-calendar').innerText = dia20;
      document.querySelector(".img-calendar").src = "graduacion123.jpg"; 
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

  if (p1 == "Laika"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }

  if (p2 == "Sally"){
    alert("Bien");
  }
  else{
    alert("Mal")
    
    }
    