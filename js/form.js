var botaoAdicionar = document.querySelector("#adicionar-paciente"); // Botão começa aqui fazendo a função de iniciar
botaoAdicionar.addEventListener("click", function (event) { // sempre que alguem "click" vai ativar a função toda
    console.log("Oi, cliquei no botão");
    event.preventDefault(); // aqui tira o evento padrão que seria resetar a pagina.

    var form = document.querySelector("#form-adiciona") // aqui pega os dados do formulario com querySelector
    // extraindo info do paciente
    var paciente = obtemPacienteDoFormulario(form); // obtem os dados do paciente em questão / retorna paciente completo


    // cria tr a td do paciente

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    // adicionando o paciente na tabela


    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente); // faz a função de criar tr
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);



}

function exibeMensagensErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form) { // função de obter, com objeto ela adquire os dados pelos name dos inputs

    var paciente = { // bota o formulario.nome do input.(value = valor)
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value) // faz ja a conta do imc que esta numa função
    }
    return paciente; // retorna o paciente na integra
};

function montaTr(paciente) { // cria um tr no html
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); // dps de criar tr, 


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Nome é inválido")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");

    }
    if (!validaAltura(paciente.altura)) {

        erros.push("Altura é invalida");
    }
    if (paciente.gordura.length == 0) {
        erros.push("Gordura é inválida");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ficar em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ficar em branco");
    }

    return erros;
}