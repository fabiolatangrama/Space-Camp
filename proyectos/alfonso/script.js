function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";



  
var dia14 = "   ";
var dia15 = "   ";
var dia16 = "   ";
var dia17 = "   ";
var dia18 = "   ";
var dia19 = "   ";
var dia20 = "   ";
var dia21 = "   ";





  
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