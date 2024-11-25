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
}
function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";
  
  var dia14 = " El 14 de setiembre pasamos todo el día viajando. Pasamos por el aeropuerto de Atlanta y Huntsville. ";
  
  var dia15 = " El 15 de setiembre casi solo dormimos porque llegamos a las 2:00 am ( hora de Huntsville) de ese día al campus del Space Camp.";
  
  var dia16 = " El 16 de setiembre nos enseñaron los diferentes lugares que había en el campus y también nos dijeron con que personas nos tocaba para realizar las actividades del día."; 
  
  var dia17 = " El 17 de setiembre empezamos con las actividades y nos enseñaron nuestro rol en la primera misión, me acuerdo que mi rol era PAYCOM.";
  
  var dia18 = " El 18 de setiembre realizamos actividades como simular que sentían los astronautas cuando despegaban en un cohete e hicimos la primera misión.";
  
  var dia19 = " El 19 de setiembre nos preparamos para la segunda misión, y realizamos la actividad en el agua.";
  
  var dia20 = " El 20 de setiembre hicimos la segunda misión y lanzamos el cohete que construimos ese día.";
  
  var dia21 = " El 21 de setiembre nos levantamos a las 2:00 am (hora de Huntsville) para llegar al aeropuerto tempreno ya que el avión salía a las 6:30 am, ese día también fue solo de viajar.";

  if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "Foto 1.JPG"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "Foto 2.jpg"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "Foto 3.JPG"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "Foto 4.jpg"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "Foto 5.jpg"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "Foto 6.JPG"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "Foto 7.jpg"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "Foto 8.JPG"; 
  }
}