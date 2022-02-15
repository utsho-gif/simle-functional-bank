// making button validation
document.getElementById('login-btn').addEventListener('click', function(){
    if(document.getElementById('user-email').value == 'abc@def.com' && document.getElementById('user-pass').value == 'secret'){
        window.location.href = 'banking.html';
    }
    else{
        document.getElementById('contain').appendChild(document.createElement('h3')).innerText = 'Invalid';
    }
})


// adding money

