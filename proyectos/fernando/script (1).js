function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";

  var dia14 = "El primer dia fue el Sabado 14 de Septiembre, este dia fuimos al aeropuerto Juan Santamaria y el de Atlanta, eso fue todo lo que hicimos este dia";
  
  var dia15 = "El segundo dia fue el Domingo 15 de Septiembre, este dia fue cuando llegamos al Space Camp, nos hicieron las introducciones, nos armaron los equipos, entre otros. El equipo que me toco fue el 'Meridiani' compuesto de 14 personas";

  var dia16 = "El tercer dia fue el Lunes 16 de Septiembre, este dia empezamos a armar un pequeño cohete de carton, tambien hicimos nuestra primera mision y nos conocimos mas entre todos  "

  var dia17 = "El cuarto dia fue el Martes 17 de Septiembre, este dia fue la actividad de buseo que no me dejaron hacer desafortunadamente, tambien hicimos la practica para la segunda mision y empezamos a armar el cohete";

  var dia18 = "El quinto dia fue el Miercoles 18 de Septiembre, este dia fue la segunda mision, la actividad del Area 51 que fueron unas cuantas actividades, la actividad del simulador del Mach 1 y terminamos de armar el cohete";

  var dia19 = "El sexto dia fue el Jueves 19 de Septiembre, este dia tuvimos la tercera mision, que era de 3 horas, la actividad del lanzamiento de los cohetes y tambien nos empezamos a preparar para la graduacion";

  var dia20 = "El septimo dia fue el Viernes 20 de Septiembre, este dia tuvimos otra actividad en el Area 51 y nuestra graduacion y terminamos de empacar";

  var dia21 = "El octavo dia fue el Sabado 21 de Septiembre, este dia fue el dia que nos fuimos devuelta a Costa Rica";

  if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "Foto1.jpg"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "Foto2.jpg"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "Foto3.jpg"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "Foto4.jpg"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "Foto5.jpg"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "Foto6.jpg"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "Foto7.jpg"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "Foto8.jpg"; 
  }
  
  }

function revisar(){
  p1 = document.querySelector('input[name="pregunta1"]:checked').value;

  if (p1 == "via lactea"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }


}