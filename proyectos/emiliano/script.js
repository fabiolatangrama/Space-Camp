function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";
  var dia14 = "Este día llegamos al Space Camp, recibimos una pequeña charla y despues fuimos a dormir. ";
  var dia15 = "Este día casi que no hicimos nada, solo conocer a los crew trainer, y comenzar el cohete. ";
  var dia16 = "Este día fuimos a la gift shop.";
  var dia17 = "Este día tuvimos la primera misión. ";
  var dia18 = "Este día fuimos a un simulador.";
  var dia19 = "Este día tuvimos la segunda misión. ";
  var dia20 = "Este día nos graduamos. ";
  var dia21 = "Este día nos despertamos a las 2 de la mañana y nos devolvimos a Costa Rica. ";

  if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "WhatsApp Image 2024-10-15 at 7.06.23 PM.jpeg"; 
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
  console.log("hola");
  p1 = document.querySelector('input[name="p1"]:checked').value;

  
  p2 = document.querySelector('input[name="p2"]:checked').value;
  p3 = document.querySelector('input[name="p3"]:checked').value;
  puntaje=33.33333333;
  if (p1=="11"){
    alert("bien");
  }
else{
    ("mal");
  }
   puntaje=33.33333333;
    if (p2=="neil"){
      alert("bien");
    }
  else{
      ("mal")
    }
   puntaje=33.33333333;
    if (p3=="laika"){
      alert("bien");
    }
  else{
      ("mal");
    }
}