//adding money
document.querySelector('#add-money').addEventListener('click',(e)=>{
    e.preventDefault();

    //extracting values
    const inputMoney = parseFloat(document.getElementById('input-add-money').value);
    const inputPin = document.getElementById('input-pin').value;

    //simple validation

    if(inputPin==='1234'){
    const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    const newBalance = currentBalance+inputMoney;
    //setting new balance to the balance on the top
    document.getElementById('current-balance').innerText=newBalance;
    
    
    


    }else{
        alert('Failed')
    }

    
})
//cash out 
document.querySelector('#cash-out').addEventListener('click',(e)=>{
    e.preventDefault();

    //extracting values
    const inputMoney = parseFloat(document.getElementById('input-cash-out-money').value);
    const inputPin = document.getElementById('input-cash-out-pin').value;
    console.log(inputMoney,inputPin)

    //simple validation

    if(inputPin==='1234'){
    const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    const newBalance = currentBalance-inputMoney;
    //setting new balance to the balance on the top
    document.getElementById('current-balance').innerText=newBalance;
    
    
    


    }else{
        alert('Failed')
    }

    
})



