
//imprime un mensaje de alerta cuando se presiona alguna de los botones
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByClassName('myButton');  // Selecciona todos los botones con la clase 'myButton'

    // Recorre todos los botones y añade un event listener a cada uno
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            alert('Trabajo en progreso');
        });
    }
});

//muestra las opciones en el banner 
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".mainHeader__menuBtn");
    const nav = document.querySelector(".mainHeader__nav");

    menuBtn.addEventListener("click", function() {
        nav.classList.toggle("open");
        menuBtn.classList.toggle("open"); // Esto aplica la transformación de las líneas
    });
});


//cambia el tamaño del header cuando se hace scroll hacia abajo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("mainH").style.height = "6.5rem";
    } else {
      document.getElementById("mainH").style.height = "8.25rem";
    }
  }
