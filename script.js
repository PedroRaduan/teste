var login_email = 'raduanjulia@gmail.com';
var email = '';
var senha;
var login_senha = 05022013;
function login(){
    email = document.getElementById('email').value;
    senha = document.getElementById('password').value;
    if(email == ''| senha == ''){
        document.getElementById('texto_email').innerHTML = 'Preencha os campos';
    }
    else{

        if(email == login_email && senha == '05022013'){
            window.location = 'curso.html';
        }
        else{
            document.getElementById('texto_email').innerHTML = 'Preencha os campos corretamente'
        }

    }


}



window.sr = ScrollReveal({ reset: true});

sr.reveal('.content', { duration : 1500});





