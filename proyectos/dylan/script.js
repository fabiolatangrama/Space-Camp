function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";

  dia14 = "Este día lo pasamos viajando. Visitamos el aeropuerto de Atlanta y el de Huntsville.";
  día15 = "Este día llegamos al campamento y desecansamos d"

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
  if (p2 == "Yuri"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p3 == "teoria de la relatividad"){
    alert("Bien");
  }
  else{
    alert("Mal");
  }
  if (p4 == "No se sabe a ciencia cierta")
    alert("Bien");
  else{
    alert("Mal");
  }
  if (p5 == "James Webb"){
  alert("Bien");
  }
  else{
    alert("Mal");
  }
}