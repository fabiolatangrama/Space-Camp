function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";

  
var dia14 = " Llegamos  como a las 3 de la mañana disfrute ahblamndo con mis amigos.  ";
var dia15 = "  Nos contaron un poco de informacionpra que aprendiaremos sobre el espacio. ";
var dia16 = " Tubimos la primera mision.  ";
var dia17 = " Tubimos la actividad de gravedad 0  ";
var dia18 = " Fuimos a la pisina.  ";
var dia19 = " hicimos los cohetes y los lanzamos.  ";
var dia20 = " Tubimos la segunda mision fue mi favorita.  ";
var dia21 = "Fuimos al g force y me diverti mucho con mis compañeros. Tambie tubimos la grduacion donde me cantaron cumplaños porqu era mi cumple.  ";






if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "primer dia.jpg"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "dia2.jpg"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "3 dia.jpg"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "gravedad0.jpg"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "picina.jpg"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "lanzamientos de cohetes.jpg"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "mission 2.jpg"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "cumple!!!.jpg"; 
  }
}
function revisar(){
  p1 = document.querySelector('input[name="pregunta1"]:checked').value;
  p2 = document.querySelector('input[name="pregunta2"]:checked').value;
  p3 = document.querySelector('input[name="pregunta3"]:checked').value;

  if (p1 == "mercurio"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p2 == "Albert"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p3 == "5000"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
}