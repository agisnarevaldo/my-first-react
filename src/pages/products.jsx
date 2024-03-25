import { Fragment, useState } from "react";
import CardProduct from "../Fragments/CardProduct";
import Button from "../Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Super",
    price: 1000000,
    image: "/images/shoes.png",
    description: `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
           Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
  },
  {
    id: 2,
    name: "Sepatu Biasa",
    price: 100000,
    image: "/images/shoes.png",
    description: `Lorem ipsum dolor sit amet, quit minim labore adipisicing minim sint cillum`,
  },
  {
    id: 3,
    name: "Sepatu Gaul",
    price: 100000,
    image: "/images/shoes.png",
    description: `Ini adalah sepatu tergaul sedunia`,
  }
]

const email = localStorage.getItem("email");

const ProductsPage = () => {

  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    setCart([
      ...cart,
      {
        id,
        qty: 1
      }
    ])
  }
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  }

  return (
    <Fragment>
      <nav
        className="flex justify-end items-center bg-blue-600 text-white h-10 px-10 py-7"
      >
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </nav>
      <div className="flex justify-center p-5">
        <div className="w-3/4 flex flex-wrap gap-2">
          {
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}></CardProduct.Header>
                <CardProduct.Body name={product.name}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  id={product.id}
                  price={product.price}
                  handleAddToCart={handleAddToCart}
                >
                </CardProduct.Footer>
              </CardProduct>
            ))
          }
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {
              cart.map((item) => (
                <li key={item}>{item.id}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductsPage;
