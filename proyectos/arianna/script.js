function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";

  dia14 = "Este día lo pasamos viajando. Visitamos el aeropuerto de Atlanta y el de Huntsville.";
  día15 = "Este día llegamos al campamento y desecansamos d"

}

function revisar(){
  p1 = document.querySelector('input[name="p1"]:checked').value;

  if (p1 == "sistema"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
}