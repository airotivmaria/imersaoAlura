function pesquisar(){
    //obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";//inicializa uma string vazia para armazenar resultados

    //intera sobre cada dado da lista de dados
    for (let dado of dados){
        //cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }
    //atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
