import CardProduct from "../Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Super",
    price: "1000.000",
    image: "/images/shoes.png",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
           Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 2,
    name: "Sepatu Biasa",
    price: "100.000",
    image: "/images/shoes.png",
    description: `Lorem ipsum dolor sit amet, quit minim labore adipisicing minim sint cillum`,
  },
  {
    id: 3,
    name: "Sepatu Gaul",
    price: "100.000",
    image: "/images/shoes.png",
    description: `Ini adalah sepatu tergaul sedunia`,
  }
]

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5 gap-2">
      {
        products.map((product) => (
          <CardProduct>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))
      }
    </div>
  )
}

export default ProductsPage;
