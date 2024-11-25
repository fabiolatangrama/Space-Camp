function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";

  var dia14 = "Este día lo pasamos viajando. Visitamos el aeropuerto de Atlanta y el de Huntsville.";
  var dia15 = "Este día llegamos al campamento y descanzamos del viaje. Jugamos juegos de mesa y nos dieron las charlas introductorias al campamento.";
  var dia16 = "Este día tuvimos algunas charlas y pudimos hacer buceo. Además, tuvimos nuestra primera misión";
  var dia17 = "Este día tuvimos nuestra segunda misión. Además, pudimos visitar el observatorio y tuvimos una charla sobre las constelaciones.";
  var dia18 ="En este día, visitamos el campus del Aviation Challenge y tuvimos actividades de trabajo en equipo. Además, tuvimos la preparación para nuestra misión de 3 horas. ";
  var dia19 = "En este día, tuvimos nuestra misión de 3 horas. Además, realizamos la actividad del Pamper Pole. Y, por último, volamos los cohetes que habíamos construído a lo largo de la semana.";
  var dia20 = "En este día, no tuvimos muchas actividades, porque el campamento cerraba sus puertas a medio día. En este día nos subimos en el simulador de G-Force y fuimos a la tienda del campamento. Además, lo más importante fue la graduación.";
  var dia21 = "En este día, regresamos a Costa Rica. Nos fuimos del campamento a las 2 de la mañana y regresamos a Costa Rica a las 12 de la tarde.";


  if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector("#img1").src = "Foto1.jpg"; 
     document.querySelector("#img2").src = "Foto11.jpg"; 
     document.querySelector("#img3").src = "Foto12.jpg"; 
  }
  else if (dia.innerText === "15"){
    document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector("#img1").src = "Foto2.jpg";
    document.querySelector("#img2").src = "Foto21.jpg"; 
    document.querySelector("#img3").src = "Foto22.jpg"; 
  }
  else if (dia.innerText == "16"){
    document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector("#img1").src = "Foto3.jpg"; 
     document.querySelector("#img2").src = "Foto31.jpg"; 
     document.querySelector("#img3").src = "Foto32.jpg"; 
  }
  else if (dia.innerText == "17"){
    document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector("#img1").src = "Foto4.jpg"; 
     document.querySelector("#img2").src = "Foto41.jpg"; 
     document.querySelector("#img3").src = "Foto 42.jpg"; 
  }
  else if (dia.innerText == "18"){
    document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector("#img1").src = "Foto5.jpg"; 
     document.querySelector("#img2").src = "Foto51.jpg"; 
     document.querySelector("#img3").src = "Foto52.jpg"; 
  }
  else if (dia.innerText == "19"){
    document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector("#img1").src = "Foto6.jpg"; 
     document.querySelector("#img2").src = "Foto61.jpg"; 
     document.querySelector("#img3").src = "Foto62.jpg"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector("#img1").src = "Foto7.jpg"; 
     document.querySelector("#img2").src = "Foto71.jpg"; 
     document.querySelector("#img3").src = "Foto72.jpg"; 
  }
  else if (dia.innerText == "21"){
    document.querySelector("#img1").src = "Foto8.jpg"; 
     document.querySelector("#img2").src = "Foto81.jpg"; 
     document.querySelector("#img3").src = "Foto82.jpg"; 
  }
 
}


function revisar(){
  p1 = document.querySelector('input[name="p1"]:checked').value;
  p2 = document.querySelector('input[name="p2"]:checked').value;
  p3 = document.querySelector('input[name="p3"]:checked').value;
  p4 = document.querySelector('input[name="p4"]:checked').value;
  p5 = document.querySelector('input[name="p5"]:checked').value;

  if (p1 == "Via"){
    alert("La respuesta 1 es correcta");
  }
  else{
    alert("La respuesta 1 es incorrecta")
  }
  if (p2 == "Venus"){
    alert("La respuesta 2 es correcta");
  }
  else{
    alert("La respuesta 2 es incorrecta")
  }
  if (p3 == "Roman"){
    alert("La respuesta 3 es correcta");
  }
  else{
    alert("La respuesta 3 es incorrecta")
  }
  if (p4 == "Neil"){
    alert("La respuesta 4 es correcta");
  }
  else{
    alert("La respuesta 4 es incorrecta")
  }
  if (p5 == "Laika"){
    alert("La respuesta 5 es correcta");
  }
  else{
    alert("La respuesta 5 es incorrecta")
  }
}