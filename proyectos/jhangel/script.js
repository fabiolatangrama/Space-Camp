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

  var dia14 = " este fue el dia que llegamos a las 4 de la manana ";
  var dia15 = "fue el primer dia que hicimos algo interesante  ";
  var dia16 = "este dia fuimos a practicar a como hacer la mision  ";
  var dia17 = "fue el dia que hicimos la mision ";
  var dia18 = "este dia fuimos a la picina  ";
  var dia19 = "este dia fuimos al planetarium ";
  var dia20 = "este dia fue la graduacion y las fotos en grupo ";
  var dia21 = "fue el dia que nos fuimos nos levantamos a las 2 de la manana y nos fuimos a las 3 de la mananaa  ";

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