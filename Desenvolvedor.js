class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this._linguagem = linguagem;
    };

    get linguagem(){
        return this._linguagem;
    };

    set linguagem(linguagem){
        this._linguagem = linguagem;
    };

    programar(){
        return `Minha linguagem de programação é: ${this.linguagem}`;
    };
};