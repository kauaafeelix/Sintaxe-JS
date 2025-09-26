let dadosPessoais ={
    nome: "Kauã Felix",
    idade: 18
};

let dadosProfissionais ={
    cargo: "Desenvolvedor",
    empresa: "WEG"
};

let funcionarioCompleto={
    ...dadosPessoais,
    ...dadosProfissionais
};

console.log(funcionarioCompleto);