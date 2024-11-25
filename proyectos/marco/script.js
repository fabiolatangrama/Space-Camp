function calendario(dia){
  //alert(dia.innerText);
 document.querySelector('.modal-title').innertText = dia.innerText + " de setiembre de 2024";
} 

function revisar(){
  p1 = document.querySelector('input[name="p1"]:checked').value;

  if  p1 == "sistema"){
    alert("Respuesta correcta");
  }
  else{
    alert("Respuesta incorrecta");
  }
}