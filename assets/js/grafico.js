

async function cargarGrafico(moneda) {
    const res = await fetch("https://mindicador.cl/api/"+moneda)
    const valores = await res.json()
     valores.serie.splice(10,21)

     const ctx = document.getElementById('myChart').getContext('2d');
     let chartStatus = Chart.getChart("myChart");
     if (chartStatus != undefined) {
         chartStatus.destroy();
     }

    let yAxys = valores.serie.map((valor)=>{
        return valor.valor
    
    })


    let xAxys = valores.serie.map((valor)=>{
        return valor.fecha
    
    })
    console.log(xAxys)

    const data = {
        labels: xAxys,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: yAxys,
        }]
    };
        
    const config = {
        type: 'line',
        data: data,
        options: {}
    };
    
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );


}

cargarGrafico("dolar")






async function euro() {
  
}