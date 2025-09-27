let livro = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
};

let chaves = Object.keys(livro);
console.log("Chaves:", chaves);

let valores = Object.values(livro);
console.log("Valores:", valores);

let entradas = Object.entries(livro);
console.log("Entradas:", entradas);