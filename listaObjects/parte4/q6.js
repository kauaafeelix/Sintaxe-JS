let lanche ={
    nome: 'X-Burger',
    preco : 15.00,
    ingredientes : ['Pão', 'Hambúrguer', 'Queijo', 'Alface', 'Tomate']
}

console.log ("O lanche "+lanche.nome+ " custa R$"+lanche.preco);

lanche.preco = 17.50;

lanche.vegano = false;

console.log (lanche);