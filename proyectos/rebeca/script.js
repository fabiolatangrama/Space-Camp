
var dia14 = "";
var dia15= "";
var dia16 = "";
var dia17 = "";
var dia18= "";
var dia19 = "";
var dia20 = "";
var dia21= "";
var dis22 = "";



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