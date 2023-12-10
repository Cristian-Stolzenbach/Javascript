precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
// programar aca boton mas
cantidadAumentada = Number(cantidad.innerHTML);
cantidadAumentada = cantidadAumentada + 1;
cantidad.innerHTML = cantidadAumentada;
valor = document.querySelector(".valor-total");
if (cantidadAumentada <= 0) {
  valor.innerHTML = 0;
} 
else {
  valor.innerHTML = cantidadAumentada * precio;
}
