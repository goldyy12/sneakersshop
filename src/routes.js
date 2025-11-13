import Homepage from "./components/Homepage";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";
import ErrorPage from "./components/ErrorPage";

const routes = (cart, setCart) => [
  {
    path: "/",
    element: <Homepage cart={cart} setCart={setCart} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ShopPage",
    element: <ShopPage cart={cart} setCart={setCart} />,
  },
  {
    path: "/CartPage",
    element: <CartPage cart={cart} setCart={setCart} />,
  },
];
export default routes;
