const $btnSend = document.querySelector('[data-btn="send"]')
const $name = document.querySelector('[data-form="name"]');
const $cep = document.querySelector('[data-form="cep"]');
const $form = document.querySelector('[data-form="form"]');
const $list = document.querySelector('[data-info="list"]');


const url = "https://viacep.com.br/ws/01001000/json/";


const getCep = async (  url ) => {
  
  const response = await fetch( url);

  const data = await response.json()
  

  return data; 
}

const view = ( cep, logradouro, localidade, bairro, uf ) => { 
  const list = `<li${cep}</li>
                <li>${logradouro}</li>
                </li>${localidade}</li>
                <li>${bairro}</li>
                <li>${uf}</li>`

  return $list.append( list );
}
                

$btnSend.addEventListener("click", ( e ) => {
  e.preventDefault();

  getCep( url ).then(  ( data )  => console.log( data.cep, data.logradouro, data.localidade, data.bairro, data.uf ) )
  
});


