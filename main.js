const Funcionario = require('./Funcionario');
const Gerente = require('./Gerente');
const Desenvolvedor = require('./Desenvolvedor');

const gerente1 = new Gerente("João", 35, "Gerente de Projetos", "TI");
const desenvolvedor1 = new Desenvolvedor("Maria", 28, "Desenvolvedor Júnior", "JavaScript");

// Chamando métodos
console.log(gerente1.seApresentar());
console.log(gerente1.trabalhar());
console.log(gerente1.gerenciar());
gerente1.c

console.log(desenvolvedor1.seApresentar());
console.log(desenvolvedor1.trabalhar());
console.log(desenvolvedor1.programar());

var calculadora = {
    soma: function(a, b) {
      return a + b;
    },
    subtracao: function(a, b) {
      return a - b;
    }
};

console.log(calculadora.soma(5, 5));
