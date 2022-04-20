// Definicion de varibale que referencian a los ids del archivo html
let valor = document.getElementById('valor');
let salario = document.getElementById('salario');
let zona = document.getElementById('zona');
let descuento = document.getElementById('descuento');
let comision = document.getElementById('comision');
let Total = document.getElementById('total')
let calcular = document.getElementById('calcular');

nombre.onfocus= ()=> {
mensnombre.innerHTML = "<b> * El nombre </b> es obligatorio";

}
nombre.onblur = function (){
mensnombre.innerText = ""
}
//con el metodo de addeventlistener
valor.addEventListener('focus', ()=>{
mensvalor.textContent = "* El valor de la venta es obligatorio";
}
)
valor.addEventListener ('blur',function (){
mensvalor.innerText ="";
})
salario.onfocus= ()=> {
menssalario.innerHTML = "<b> * El salario basico </b> es obligatorio";

}
salario.onblur = function (){
menssalario.innerText = ""
}
zona.onchange = () => {
  switch (zona.value) {
    case "norte":
      descuento.textContent = 2 / 100;

      break;
    case "sur":
      descuento.innerText = 3 / 100;

      break;
    case "oriente":
      descuento.textContent = 4 / 100;
      break;
    case "occidente":
      descuento.innerText = 5 / 100;
      break;



  }
}

calcular.addEventListener('click', () => {
  let mporcent = parseFloat(valor.value) * parseFloat(descuento.textContent);
  comision.value = mporcent;
  let nporc = parseFloat(comision.value) + parseFloat(salario.value)
  total.value = nporc;
})