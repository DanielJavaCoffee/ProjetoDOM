class Funcionario {

    constructor(nome, idade, cargo){
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
    };

    seApresentar(){
        return `Funcionario: ${this.nome}. Idade: ${this.idade}. Cargo: ${this.cargo}`;
    };
    
    trabalhar(){
        return `Trabalho no cargo de: ${this._cargo}`;
    };

    get nome(){
        return this._nome;
    };

    set nome(nome){
        this._nome = nome;
    };

    get idade(){
        return this._idade;
    };

    set idade(idade){
        this._idade = idade;
    };

    get cargo(){
        return this._cargo;
    };

    set cargo(cargo){
        this._cargo = cargo;
    };
};
