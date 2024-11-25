function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";
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