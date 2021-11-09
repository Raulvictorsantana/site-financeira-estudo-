var nome = document.getElementById ('nome');
var sobrenome = document.getElementById ('sobrenome');
var email = document.getElementById ('email');
var valor = document.getElementById ('valor');
var telefone = document.getElementById ('telefone');
var enviar = document.getElementById ('enviar');


/*enviar.addEventListener ('click',function (){
 
     if (nome.value === "" || sobrenome.value === ""){
            alert ('preencha');
        }
});
*/
function alerta(){
    
    if (nome.value === "" || sobrenome.value === ""|| email.value===""||valor.value===""||telefone.value===""){
        alert ('preencha todododo');
    }
}
enviar.addEventListener('click', alerta);

