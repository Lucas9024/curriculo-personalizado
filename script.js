const criarContrato = document.getElementById("criarContrato");
const contrato = document.getElementById('contrato')

function alerta(){
    document.getElementById('nomeComplete').innerHTML = document.getElementById('nome').value;
    document.getElementById('email-span').innerHTML = document.getElementById('email').value;

    document.getElementById('telCelular').innerHTML = document.getElementById('celular').value;
    window.contrato();
}

criarContrato.addEventListener('click', alerta);