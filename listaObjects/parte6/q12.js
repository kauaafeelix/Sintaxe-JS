let configuracoes ={
    tema: "dark",
    idioma : 'pt-br'
};

let novasConfiguracoes = {
    ...configuracoes
};

novasConfiguracoes.tema = "light";

console.log(configuracoes);
console.log(novasConfiguracoes);