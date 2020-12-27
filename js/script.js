const url = 'https://economia.awesomeapi.com.br/json/all';

document.querySelector('select').addEventListener('click',function(){
    let select = document.querySelector('select').value;

    if(select === "Euro"){
        document.getElementById('dolar').style.display = 'none'
        document.getElementById('euro').style.display = 'block'

        document.querySelector('.resultado h2').innerHTML = 'R$ 0.00'
        document.getElementById('euro').value = '';

    }else if(select === "Dolar"){
              
        document.getElementById('dolar').style.display = 'block'
        document.getElementById('euro').style.display = 'none'
        document.querySelector('.resultado h2').innerHTML = 'R$ 0.00'
        document.getElementById('dolar').value = '';
        

       
    }
})

function dolar(){
    let h2 = document.querySelector('.resultado h2');
    document.getElementById('dolar').addEventListener('keyup',function(){

        fetch(url).then((res)=>{
            res.json().then((dados)=>{
            let valueDolar = document.getElementById('dolar').value;
              let r =  (dados.USD.bid * valueDolar).toFixed(2) 

              h2.innerHTML = `R$ ${r}`
            })
        })

        
    })
}

dolar()


function euro(){
    let h2 = document.querySelector('.resultado h2');
    document.getElementById('euro').addEventListener('keyup', function(){

        fetch(url).then((res)=>{
            res.json().then((dados)=>{
                let valueEuro = document.getElementById('euro').value;
                let r = (dados.EUR.bid * valueEuro).toFixed(2)
                h2.innerHTML = `R$ ${r}`
            })
        })
    })


}

euro()

