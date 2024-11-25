function calendario(dia){
document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";


var dia14 = "My group arrived at the Huntsville airport at night after a 35-minute flight from Atlanta, we arrived and after passing security we went to get our suitcases while we waited a few hours in some seats, many of us began to explore and others simply lay down on the floor, It certainly was fun. After a while a buceta arrived for us very late at dawn to take us to the Space Camp facilities. We arrived and they gave us a snack to get ready and go to sleep";
var dia15= "They got us up to meet in the green area and go to breakfast, it was funny, everyone just got up to go to eat, we went and stood in line because the lines are divided for people with allergies. Then we went to take a bath to get ready to play some board games that they had set up, and after that we moved to another room because on the first day they had placed us in a huge room shared with the rest of the smaller Space Camps, already that day They accommodated us in rooms of 7. After going to lunch, Paige, our Meridiani team leader, took us to a corner with a TV and a variety of armchairs to give us a class on different data and explanations of how things worked in space. She became close to the entire team and we liked her very much in addition to making the classes very entertaining. Then we attended our first rocket projectile class, it was based on creating a rocket with materials that we could buy with credits and pass two tests in the field.";
var dia16 = "";
var dia17 = "";
var dia18= "";
var dia19 = "";
var dia20 = "";
var dia21= "";

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