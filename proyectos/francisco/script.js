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


}

function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";

  var dia14 = "Nos despedimos de nuestro país, junto a nuestros papás, para hacer escala hacia Atlanta, Georgia. Cenamos en el aeropuerto de Atlanta y nos fuimos hacia el aeropuerto de Huntsville, Alabama.";
  var dia15 = "Llegamos en el bus que nos llevaron desde el aeropuerto de Alabama hacia la sede del space camp, nos dieron una merienda y aproximadamente a la 1:30 am empezamos a hacer el check-in, después de hacer el check-in fuimos a nuestros habitats y dormimos, pasamos lo que quedó del día almorzando, descubriendo sobre la sede y viendo un plan de actividades. ";
  var dia16 = "Nos levantamos y nos asignaron un grupo en el space camp, dividiendo a los chicos en edades. A mi me asignaron el equipo llamado Luna, nos enseñaron nuestros cuartos y empezamos a pasar nuestros artículos, aprendimos sobre cohetes, sistemas de propulsión, clima, geología y sonidos en el espacio, nos enseñaron sobre proyectos de la nasa como Gemini y Mercurio. Finalmente recibimos charlas de seguridad y que hacer en caso de alguna emergencia, lugares de evacuación, pasos a seguir, entre otros. ";
  var dia17 = "Visitamos el planetario con un show interactivo, en el cual se realizó un viaje en el propio planetario en el cual vimos estrellas, constelaciones, agurejos negros y galaxias. Nos hablaron sobre los planetas, atmósferas, lunas, climas entre otros. Fuimos a un bosque que era como una imitación del Área 51, que era sobre actividades en el bosque para simular misiones en otros planetas y fomentar el trabajo en equipo. Finalmente, me dieron la oportunidad de llamar a mi mamá y le conte lo que había hecho. lo que más me gustó de este día fue lanzar un mini cohete a escala que construimos en equipo. ";
  var dia18 = "Hicimos unos estiramientos que se hacen a diferentes horas como hacen los austronautas para que sus músculos no se atrofien. Jugamos como exploradores en el museo y nos pusimos a investigar la variedad de cosas que habían. Visitamos aproximadamente 4 veces el simulador de G-Force y se nos instruyó sobre las situaciones y emergencias médicas que pueden suceder en el espacio y como los astronautas toman precausiones para esto. Como ultimo, visitamos la exhibición llamada Science on Orbit donde logramos conocer como viven los astronautas en la Estación Espacial Internacional, contandonos como se juntaban con otras agencias como JAXA ESA, CSA, entre otros. ";
  var dia19 = "Conocimos la nueva generación de cohetes que la NASA ha estado construyendo, enseñandonos sobre el proyecto Artemis, donde viajarán por primera vez dos mujeres y una la cual fue parte del programa del Space Camp. Nos pusieron a hacer una actividad contra reloj, que era de realizar una estructura con tubos de PVC, fomentando el trabajo en equipo. Finalmente, nos enteramos de como eran las exploraciónes al espacio antes de los transbordadores, los instrumentos que se utilizaban y como el clima afectaba el trabajo de los astronautas. Utilizamos el software Stellarium para ver las 88 constelaciónes por fechas, características y sus significados con respecto a la mitología, explicandolos y siendo una actividad bastante interesante. Aprendimos sobre compañías privadas que ofrecen servicios a la NASA, el futuro del turismo espacial y legislatura que existe para el Espacio. Diseñamos el nuevo modelo de la futura Estación Espacial Internacional, lo presentamos como si fuera una licitación, enseñando nuestras propias reglas y soluciones, enseñandoselas a los demás equipos. Para culminar, nos montamos en la silla multi-axis que daba vueltas y nos preguntaban cosas, nuevamente nos montamos en el G-Force.";
  var dia20 = "Tuvo lugar la ceremonia de graduación en la que se nos otorgó un diploma por una participación exitosa en el campamento. yo, personalmente, recibí la medala de -Right Stuff Award-, este es un premio en reconocimiento individual otorgado de parte del campamento al estudiante sobresaliente por su liderazgo y buen ejemplo hacia sus compañeros, por determinación, apoyo, colaboración, saber actuar en momentos bajo presión con tranquilidad. Este premio se me fue asignado por el personal del Space Camp. Nos dormimos bastante temprano, como a las 7pm de Alabama ya que al día siguiente ibamos a hacer escala para Atlanta y seguidamente ir hacia Costa Rica.";
  var dia21 = "Nos levantaron a la 1am para prepararnos y ir a la buseta que nos llevaria directamente al aeropuerto de Huntsville, donde esperamos aproximadamente 1 hora y media para que todos los campistas de Costa Rica hicieran check-in, después de eso pasamos por seguridad y logramos ingresar al avión que haría escala hacia Atlanta. En Atlanta, nos tomamos una foto con el capitan del avión, regalandonos a cada uno una tarjeta holográfica sobre el avión y sus detalles, seguidamente, desayunamos/almorzamos en el aeropuerto de Atlanta, que, curiosamente, es uno de los aeropuertos más grandes de todos los Estados Unidos, seguidamente nos dirijimos hacia la puerta donde se encontraría nuestro avión hacia Costa Rica. En Costa Rica, ya todos se querían ir, pero nos tocó esperar, finalmente, logramos pasar todos y volver con nuestros papás.";



  if (dia.innerText == "14"){
     document.querySelector('.text-calendar').innerText = dia14;
     document.querySelector(".img-calendar").src = "Aeropuerto fran SJO.jpg"; 
  }
  else if (dia.innerText === "15"){
     document.querySelector('.text-calendar').innerText = dia15;
    document.querySelector(".img-calendar").src = "Foto2.jpg"; 
  }
  else if (dia.innerText == "16"){
     document.querySelector('.text-calendar').innerText = dia16;
    document.querySelector(".img-calendar").src = "Team Luna.jpg"; 
  }
  else if (dia.innerText == "17"){
     document.querySelector('.text-calendar').innerText = dia17;
    document.querySelector(".img-calendar").src = "CamisaMadridTrabajo.jpg"; 
  }
  else if (dia.innerText == "18"){
     document.querySelector('.text-calendar').innerText = dia18;
    document.querySelector(".img-calendar").src = "Foto5.jpg"; 
  }
  else if (dia.innerText == "19"){
     document.querySelector('.text-calendar').innerText = dia19;
    document.querySelector(".img-calendar").src = "En Nave buscando cosas.jpg"; 
  }
  else if (dia.innerText == "20"){
     document.querySelector('.text-calendar').innerText = dia20;
    document.querySelector(".img-calendar").src = "RightStuffConKaine.jpg"; 
  }
  else if (dia.innerText == "21"){
     document.querySelector('.text-calendar').innerText = dia21;
    document.querySelector(".img-calendar").src = "Foto8.jpg"; 
  }
  
}