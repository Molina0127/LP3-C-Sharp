'use strict';

const limparFormulario = (dados) => {
  document.getElementById('endereco').value = "";
  document.getElementById('bairro').value = "";
  document.getElementById('cidade').value = "";
  document.getElementById('estado').value = "";
}

const preencherFormulario = (dados) => {
  document.getElementById('endereco').value = dados.logradouro;
  document.getElementById('bairro').value = dados.bairro;
  document.getElementById('cidade').value = dados.localidade;
  document.getElementById('estado').value = dados.uf;
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
  limparFormulario();

  const cep = document.getElementById('cep').value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  if (cepValido(cep)){
    //const dados = await fetch(url);
    //const addres = await fetch(url);
    //const dados = await addres.json();
    const dados = axios.get(url)
      .then((response) => preencherFormulario(response.data))
      .catch((error) => {
        console.log(error)
      }) 


    /*if (dados.hasOwnProperty('error')){
      document.getElementById('endereco').value = 'CEP não encontrado!';
    }
    else{
      preencherFormulario(dados);
    }*/


  }
  else {
    document.getElementById('endereco').value = 'CEP incorreto!';
  }
 
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

