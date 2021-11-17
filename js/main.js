const perimetroCuadrado  = document.querySelector(".box-main_btn_perimetro");
const areaCuadrado = document.querySelector(".box-main_btn_area");

const perimetroTriangulo = document.querySelector("#perimetro_triangulo");
const areaTriangulo = document.querySelector("#area_triangulo");

const perimetroCirculo=document.getElementById('perimetro_circulo')
const areaCirculo=document.getElementById('area_circulo')
const diametroCirculo=document.getElementById('diametro_circulo')


const inputCuadrado = document.getElementById("side");
const inputTriangulo1 = document.getElementById("side1");
const inputTriangulo2 = document.getElementById("side2");
const inputTriangulo3 = document.getElementById("side3");
const inputTrianguloBase = document.getElementById("sideBase");
const inputTrianguloAltura = document.getElementById("sideAltura");
const inputCirculo = document.getElementById("sideCirculo");


let miVariableArea = "Area";
let miVariablePerimetro = "Perimetro";
let miVariableDiametro = "Diametro";

let miFiguraCuadrado = "Cuadrado";
let miFiguraTriangulo = "Triangulo";
let miFiguraCirculo = "Circulo";
let miValor;


// CUADRADO  PERIMETRO
perimetroCuadrado.addEventListener("click", (e) => {
  e.preventDefault;
  //perimetroCuadrado.classList.add("perimetro-cuadrado");
  miValor = parseInt(inputCuadrado.value)* 4;
  let template = `El ${miVariablePerimetro} del ${miFiguraCuadrado} es : ${miValor}`;
  let respuesta = document.querySelector("h2");
  respuesta.innerHTML += template;
});

// CUADRADO  AREA
areaCuadrado.addEventListener("click", (e) => {
  e.preventDefault;
  areaCuadrado.classList.add("area-cuadrado");
  miValor = parseInt(inputCuadrado.value)* parseInt(inputCuadrado.value);
  let template = `El ${miVariableArea} del ${miFiguraCuadrado} es : ${miValor}`;
  let respuesta = document.querySelector("h2");
  respuesta.innerHTML += template;
});

// TRIANGULO  PERIMETRO
perimetroTriangulo.addEventListener("click", (e) => {
  e.preventDefault;
  
  miValor =
    parseInt(inputTriangulo1.value) + parseInt(inputTriangulo2.value) + parseInt(inputTriangulo3.value);
  let template = `El ${miVariablePerimetro} del ${miFiguraTriangulo} es : ${miValor}`;
  let respuesta = document.querySelector("h2");
  respuesta.innerHTML += template;
});
// TRIANGULO  AREA
areaTriangulo.addEventListener("click", (e) => {
    e.preventDefault;    
    miValor =
      parseInt(inputTrianguloBase.value) * parseInt(inputTrianguloAltura.value) ;
    let template = `El ${miVariableArea} del ${miFiguraTriangulo} es : ${miValor}`;
    let respuesta = document.querySelector("h2");
    respuesta.innerHTML += template;
  });
  // CIRCULO  PERIMETRO
perimetroCirculo.addEventListener("click", (e) => {
    e.preventDefault;
    
    miValor =
      parseInt(inputCirculo.value) * 2 * Math.PI;
    let template = `El ${miVariablePerimetro} del ${miFiguraCirculo} es : ${miValor}`;
    let respuesta = document.querySelector("h2");
    respuesta.innerHTML += template;
  });
   // CIRCULO  AREA
areaCirculo.addEventListener("click", (e) => {
    e.preventDefault;
    
    miValor =
      parseInt(inputCirculo.value)* parseInt(inputCirculo.value)* Math.PI;
    let template = `El ${miVariableArea} del ${miFiguraCirculo} es : ${miValor}`;
    let respuesta = document.querySelector("h2");
    respuesta.innerHTML += template;
  });
   // CIRCULO  DIAMETRO
diametroCirculo.addEventListener("click", (e) => {
    e.preventDefault;
    
    miValor =
      parseInt(inputCirculo.value) *2;
    let template = `El ${miVariableDiametro} del ${miFiguraCirculo} es : ${miValor}`;
    let respuesta = document.querySelector("h2");
    respuesta.innerHTML += template;
  });