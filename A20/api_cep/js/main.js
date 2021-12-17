'use strict';

const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep').value.replace("-","");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
      //const dados = await fetch(url);
      //const addres = await fetch(url);
      //const dados = await addres.json();
      const endereco = axios.get(url)
        .then((response) => preencherFormulario(response.data))
        .catch((error) => {
          console.log(error)
        }) 
  
  
      /*if (endereco.hasOwnProperty('error')){
        document.getElementById('endereco').value = 'CEP não encontrado!';
      }
      else{
        preencherFormulario(endereco);
      }*/
  
  
    }
    else {
      document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);

       