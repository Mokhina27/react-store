import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";

export const router = createHashRouter([
    { path: '/', element: <Home/> },
    { path: '/login', element: <Login/> },
    { path: '/register', element: <Register/> },
    { path: '/profile', element: <Profile/> },
    { path: '/shop', element: <Shop/> },
    { path: '/cart', element: <Cart/> },
    { path: '/about', element: <About/> },
    { path: '/contact', element: <Contact/> },
    { path: '/product/:id', element: <Product/> },
])