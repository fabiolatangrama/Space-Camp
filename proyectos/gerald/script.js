function calendario(dia){
  document.querySelector('.modal-title').innerText =   dia.innerText + " de setiembre de 2024";

  var dia14 = "Este día llegamos, nos instalamos y organizamos nuestras pertenencias";
console.log(dia);

  if (dia.innerText == '14'){
     document.querySelector('.modal-body').innerText = dia14;
  }

 
}



function revisar(){
  p1 = document.querySelector('input[name="p1"]:checked').value;
  p2 = document.querySelector('input[name="p2"]:checked').value;
  p3 = document.querySelector('input[name="p3"]:checked').value;

  if (p1 == "Laika"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p2 == "TON 618"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p3 == "Alfa Centauri"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
}