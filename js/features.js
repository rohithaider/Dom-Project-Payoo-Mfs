document.getElementById('cash-out-button').addEventListener('click',(e)=>{
    document.getElementById('cash-in-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden');
})
document.getElementById('cash-in-button').addEventListener('click',(e)=>{
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('cash-in-form').classList.remove('hidden');
})

