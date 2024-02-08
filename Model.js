function salvar() {
    try {
        var nome = document.getElementById('nome').value;
        var idade = document.getElementById('idade').value;
        var cargo = document.getElementById('cargo').value;
        var departamento = document.getElementById('departamento').value;
        var linguagem = document.getElementById('linguagem').value;

        if (nome === '' || idade === '' || cargo === '' || departamento === '') {
            console.log(linguagem.value);
            alert('Por favor, preencha todos os campos antes de salvar.');
        } else {
            if (document.getElementById('flexRadioDefault1').checked) {
                const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
                alert("Desenvolvedor cadastrado com sucesso! " + desenvolvedor.seApresentar());
                alert(desenvolvedor.programar());
            } else if (document.getElementById('flexRadioDefault2').checked) {
                exebirErro(linguagem);
                const gerente = new Gerente(nome, idade, cargo, departamento);
                alert("Gerente cadastrado com sucesso! " + gerente.seApresentar());
                alert(gerente.gerenciar());
            };
        };
    } catch (error) {
        alert('Erro: ' + error.message);
    };
};

function exebirErro(linguagem){
    if (linguagem.trim() !== '') {
        throw new Error('Gerente não deve possuir Linguagem de programação.');
    };
};