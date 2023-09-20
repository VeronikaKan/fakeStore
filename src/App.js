import Header from "./components/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Content from "./pages/Content";
import Home from "./pages/Home";
import axios from "axios";
import {useState,useEffect} from "react"


const App = () => {
  const [basketProducts,setBasketProducts] = useState(JSON.parse(localStorage.getItem("product")) || [])
  console.log(basketProducts);
  const [info, setInfo] = useState ([])
 useEffect(()=>{
  const getData = async () => {
    let {data} = await axios('https://fakestoreapi.com/products')
     setInfo(data)
    // console.log(data);
  }
  getData()
 },[])
  return (
    <>
    <Router>
      <Header basketProducts = {basketProducts}/>
      <Routes>
      <Route path="/" element = {<Home info = {info}/>}/>
      <Route path="/Content" element = {<Content basketProducts = {basketProducts} setBasketProducts = {setBasketProducts}/>}/>
      <Route path="/Basket" element = {<Basket basketProducts = {basketProducts} setBasketProducts = {setBasketProducts}/>}/>
      <Route path="/About" element = {<About info = {info}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
