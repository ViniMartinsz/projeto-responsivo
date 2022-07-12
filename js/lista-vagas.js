/* PARTE 1 */
// Rota/Endpoint da API de Vagas
let urlVagas = 'http://localhost:3000/vagas';

// Elemento a ser "preenchido"
const selectVagas = document.querySelector("#vaga");
/* PARTE 2 */
// Consumo de dados assíncrono a partir da API
fetch(urlVagas)
    .then( resposta => resposta.json() )
    .then( dados => {
        selectVagas.innerHTML = "<option></option>";

        for( let vaga of dados ){
            let opcao = document.createElement('option');
            opcao.textContent = vaga.titulo;
            opcao.value = vaga.id;
            selectVagas.appendChild(opcao)
        }
    } );    

   