import Header from "./components/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Content from "./pages/Content";
import Home from "./pages/Home";
import axios from "axios";
import {useState,useEffect} from "react"


const App = () => {
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
      <Header/>
      <Routes>
      <Route path="/" element = {<Home info = {info}/>}/>
      <Route path="/Content" element = {<Content info = {info}/>}/>
      <Route path="/Contacts" element = {<Contacts info = {info}/>}/>
      <Route path="/About" element = {<About info = {info}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
