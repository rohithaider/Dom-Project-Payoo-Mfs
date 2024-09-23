//getting button
document.getElementById('login-button').addEventListener('click',(e)=>{
    e.preventDefault(); //preventing default behave 

    //getting input from the form
    const phoneNumber = document.querySelector('#phone-number').value;
    const pinNumber = document.querySelector('#pin').value;

    //login validation check

    if(phoneNumber==='5' && pinNumber==='1234'){
        window.location.href= '/home.html'
    }
    else{
        alert('fail');
    }
    
})


