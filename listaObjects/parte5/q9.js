let carrinhoDeCompras =[
    {
        item1 :{

            produto: {
                nome : 'Camisa',
                preco : 50
            },
            quantidade: 2
        },
        item2 :{
            produto: {
                nome: 'Arroz',
                preco: 20
        },
        quantidade: 1
        }
    }
]

console.log("Nome do Produto do Item 1: "+carrinhoDeCompras[0].item1.produto.nome);
console.log("Preço do Produto do Item 2: "+carrinhoDeCompras[0].item2.produto.preco);