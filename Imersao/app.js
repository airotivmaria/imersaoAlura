function pesquisar(){
    //obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";//inicializa uma string vazia para armazenar resultados

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let titulo = "";
    let descricao ="";
    let tags = "";

    //verifica se o valor do campo de pesquisa está vazio - feedback para o usuario
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Digite algo para a pesquisa.</p>"
        return
    }

    //intera sobre cada dado da lista de dados
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || (descricao.includes(campoPesquisa)) || (tags.includes(campoPesquisa))){
            //cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `
        }
    };
    //atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
    // verifica se tem resultados, em caso de não é exibido essa mensagem - feedback para o usuario
    if (!resultados) {
        section.innerHTML = "<p>Informação não encontrada.</p>"
        return

    };
}
