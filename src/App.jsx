import Navbar from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Placeorder from "./pages/Placeorder"
import Product from "./pages/Product"
import Login from "./pages/Login"
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
