const textRegistrarse = document.getElementById("registrarse-texto");
const textIniciarSesion = document.getElementById("iniciar-sesion-texto");
const formIniciarSesion = document.querySelector(".iniciar-sesion-form");
const formRegistrarse = document.querySelector(".registrarse-form");

textRegistrarse.addEventListener("click", () => {
  formIniciarSesion.classList.add("hide");
  formRegistrarse.classList.remove("hide");
});
textIniciarSesion.addEventListener("click", () => {
    formRegistrarse.classList.add("hide");
    formIniciarSesion.classList.remove("hide");
});