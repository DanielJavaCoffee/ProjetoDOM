class Gerente extends Funcionario {
    
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this._departamento = departamento;
    };

    gerenciar(){
        return `${this.nome} está gerenciando o departamento ${this.departamento}.`;
    };

    get departamento(){
        return this._departamento;
    };

    set departamento(departamento){
        this._departamento = departamento;
    };
};
