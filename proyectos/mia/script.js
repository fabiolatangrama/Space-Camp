function calendario(dia){
document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";


var dia14 = "Este día fue cuando llegamos al space camp, llegamos muy temprano por eso nos dejaron dormir, después empezaban las actividades";
var dia15="Este es el día en el que enrealidad llegamos por que llegamos como a las 4:00 de la mañana" ;
var dia16 = "fue el segundo día de actividades también hicimos algunas clases";
var dia17 = "todos los días ibamos a sick bay ese es uno de ellos";
var dia18= "Este día fue mi favorito fuimos al planetario, a la tienda, a G force y a un museo";
var dia19 = "fuimos a la máquina de dar vueltas creo que tamabién los pasos en la luna ";
var dia20 = "Este día fue la graduación, fuimos a la tienda de nuevo e hicimos la actividad de la picsina";
var dia21= "Este fue el día que nos fuimos del space camp";


  if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "cohete.jpg"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "foto1.jpg"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "caminar.jpg"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "amigas.jpg"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "cine.jpg"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "Pasos.jpg"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "graduación.jpg"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "vueltas.jpg"; 
  }
}

function revisar(){
  p1 = document.querySelector('input[name="p1"]:checked').value;
  p2 = document.querySelector('input[name="p2"]:checked').value;
  p3 = document.querySelector('input[name="p3"]:checked').value;

  if (p1 == "sistema"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p2 == "mercurio"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p3 == "alfa"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
}