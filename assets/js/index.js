let valorPesosChilenos = document.querySelector('#pesosCPL');
let MonedaAConvertir = document.querySelector('#convertidorMoneda');
let boton = document.querySelector('#buscar');
let total = document.querySelector('#total');

boton.addEventListener('click', async function () {

    let valorCPL = valorPesosChilenos.value
    let valorMoneda = await obtenerValorMoneda(MonedaAConvertir.value);
    console.log(valorMoneda);
    let resultado = parseFloat(valorCPL/valorMoneda).toFixed(2); 
    total.innerHTML = resultado;
    cargarGrafico(MonedaAConvertir.value)
})



async function obtenerValorMoneda(tipoMoneda) {
    try {

        const res = await fetch('https://mindicador.cl/api/');
        const data = await res.json();
        return data[tipoMoneda].valor;
       
    } catch (e) {
        alert(e.message);
    }
}

    