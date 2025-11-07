import Navbar from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Contact from "./pages/Contact"
import Cart from "./pages/cart"
import Orders from "./pages/orders"
import Placeorder from "./pages/placeorder"
import Product from "./pages/product"
import Login from "./pages/login"
import Collection from "./pages/Collection"
import Footer from "./components/Footer"
import "./index.css"
import Searchbar from "./components/Searchbar"

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Searchbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/placeorder" element={<Placeorder/>}/>
        <Route path="/product/:ProductId" element={<Product />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </div>

    </>
  )
}

export default App
