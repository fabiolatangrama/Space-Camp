function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";




var dia14 = " This day we were in the Juan Santamaria International airport ready to get in the airplane and go to Space Camp. (Postdata if your planing to go don't expect to eat good food. ) ";
var dia15 = " At this day any uf us slipped and the break fast as may I tell you is the WORST breakfast of ever ( I have to say this, umm so they were some potato balls and they were adictive . ) ";
var dia16 = " so this day we were doing the mision practice and reading about space history during the night with wilder also we started building the rocket.   ";
var dia17 = " Idk why i dont remember this day bu' i'm writting thisfor you to know.  ";
var dia18 = " this day we did the mision, and the second mission practice.  ";
var dia19 = " This day we were doing the second mission and we did the acuatic activity  ";
var dia20 = "  This day we went to the giftshop and we bought some food and we ate it. "; 
var dia21 = "  this day we were on Costa Rica. ";






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
  pregunta1 = document.querySelector('input[name="pregunta1"]:checked').value;

  pregunta2 = document.querySelector('input[name="pregunta2"]:checked').value;

  pregunta3 = document.querySelector('input[name="pregunta3"]:checked').value;

  correctas = 0;

  if(pregunta1 == "Roscosmos"){
    correctas = correctas + 1;
  }
  if(pregunta2 == "Russia"){
    correctas = correct + 1;
  }
  if(pregunta3 == "beef sandwich"){
    correctas = correct + 1;
  }

  alert("You got: " + correct + "successes");

}