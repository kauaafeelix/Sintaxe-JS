// 23 - Crie uma função chamada "gerarSenha" que recebe um número como parâmetro e retorna uma
// senha aleatória com esse número de caracteres.

function gerarSenha(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }
    return senha;
}
console.log(gerarSenha(10));
