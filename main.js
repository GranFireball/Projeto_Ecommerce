// const nomeProduto = "Casaco Branco";
// const marca = "Zara";
// const preco = 70;
// const nomeArquivoImagem = "product-1.jpg";

// const produto1 = {
//     id: 1,
//     nome: "Casaco Branco",
//     marca: "Zara",
//     preco: 70,
//     nomeArquivoImagem: "product-1.jpg"
// }

// const produto2 = {
//     id: 2,
//     nome: "Sobretudo Azul Marinho",
//     marca: "Zara",
//     preco: 110,
//     nomeArquivoImagem: "product-2.jpg"
// }

import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";



renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();

