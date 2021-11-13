var nome = document.getElementById ('nome');
var sobrenome = document.getElementById ('sobrenome');
var email = document.getElementById ('email');
var valor = document.getElementById ('valor');
var telefone = document.getElementById ('telefone');
var enviar = document.getElementById ('enviar');
var confirma = document.getElementById ('confrimaçao')



enviar.addEventListener ('click',function (){
 
     if (nome.value === "" || sobrenome.value === ""){
            alert ('preencha');
        }
})

function alerta(){
    
    if (nome.value === "" || sobrenome.value === ""|| email.value===""||valor.value===""||telefone.value===""){
        alert ('preencha todos os campos');
    }
}
enviar.addEventListener('submit', alerta);

    enviar.disabled = true;

function confirmaa() {
    if (this.checked === true){
      enviar.disabled = false;
    }
    else {
       enviar.disabled = true;
    }
}

 confrimaçao.addEventListener('change',confirmaa);

 
 



 


