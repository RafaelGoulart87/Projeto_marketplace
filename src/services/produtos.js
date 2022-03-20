const produtos = [
  {
    uuid: "183c5c5d-0592-487c-b454-797a773b3921",
    name: "Banana",
    image_url:
      "https://friendlystock.com/wp-content/uploads/2018/06/8-superhero-banana-cartoon-clipart.jpg",
    price: { value: 5.0, unit: "kg" },
  },
  {
    uuid: "5a651a67-4aad-4903-9ebf-31d779b29152",
    name: "Maçã",
    image_url:
      "https://cdn.friendlystock.com/wp-content/uploads/2018/06/4-superhero-apple-cartoon-clipart-600x600.jpg",
    price: { value: 1.2, unit: "kg" },
  },
  {
    uuid: "10cca3a1-fbc0-48db-9a05-9cee305a6c63",
    name: "Laranja",
    image_url:
      "https://friendlystock.com/wp-content/uploads/2018/06/9-superhero-orange-cartoon-clipart.jpg",
    price: { value: 3.5, unit: "kg" },
  },
  {
    uuid: "305ca33c-013a-4f5c-81e0-2a0ab021e144",
    name: "Abacate",
    image_url:
      "https://cdn.friendlystock.com/wp-content/uploads/2018/06/2-superhero-avocado-cartoon-clipart-600x721.jpg",
    price: { value: 7.0, unit: "unidade" },
  },
  {
    uuid: "477cec70-424a-47f2-9f62-a8dcce0704b9",
    name: "Abacaxi",
    image_url:
      "https://friendlystock.com/wp-content/uploads/2018/06/1-superhero-pineapple-cartoon-clipart.jpg",
    price: { value: 6.0, unit: "unidade" },
  },
];

export const getProdutos = () => produtos;
export const getProdutoByUUID = (uuid) =>
  produtos.find((produto) => produto.uuid === uuid);
