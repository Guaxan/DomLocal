var inputElement = document.getElementById('entrada'); // pega elemento do input
var salvarButton = document.getElementById('salvar'); // pega elemento do botão salvar
var excluirButton = document.getElementById('excluir'); // pega elemento do botão excluir

salvarButton.addEventListener('click', function () {  //funcao para pegar o clique no botao salvar
    var valorInput = inputElement.value; // pega o valor do input
    if (valorInput.trim() !== '') {    // verifica se o valor do input nao esta vazio
        localStorage.setItem('valorSalvo', valorInput); // salva o valor do input no localStorage
        alert('Valor salvo com sucesso!');  //Se tiver, mensagem de certo
    } else {
        alert('Por favor, digite algo antes de salvar.') //Se estiver vazio, solicita texto
    }
});

excluirButton.addEventListener('click', function () { //funcao para pegar o clique no botao excluir
    localStorage.removeItem('valorSalvo'); // remove o valor salvo do localStorage
    alert('Valor excluído com sucesso!'); //Se tiver, mensagem de certo
});

window.addEventListener('load', function () { //funcao para pegar o clique no botao excluir
    var valorSalvo = localStorage.getItem('valorSalvo'); // pega o valor salvo do localStorage
    if (valorSalvo) { // verifica se o valor salvo nao esta vazio
        inputElement.value = valorSalvo; // atribui o valor salvo ao input
    }
    
});
