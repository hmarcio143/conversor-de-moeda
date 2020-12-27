const url = 'https://economia.awesomeapi.com.br/json/all';


document.querySelector('input').addEventListener('keyup',function(){

    let select = document.querySelector('select').value

    if(select === 'Dolar'){
        dolar();
    }else if(select === 'Euro'){

        euro();
    } 
})



function dolar(){
    let input = document.querySelector('input').value;

    fetch(url).then((res)=>{

        res.json().then((dados)=>{
            let taxa = dados.USD.bid;
            document.querySelector('h2').innerHTML = (input * taxa).toFixed(2);
            
        })
    })
}

function euro(){
    let input = document.querySelector('input').value;

    fetch(url).then((res)=>{

        res.json().then((dados)=>{

             let taxa = dados.EUR.bid;
             document.querySelector('h2').innerHTML = (input * taxa).toFixed(2);
            
        })
    })
}

