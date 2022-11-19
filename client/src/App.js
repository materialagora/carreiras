 
import React   from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"
import Nav from "./components/Nav/Nav";
 
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";

import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
function App() {
 
  return (
    <BrowserRouter> 
    <div className="app" >
       <Logo />
       <Nav />
       <Routes />
       <Footer />
    
     
    </div>
    </BrowserRouter>
  );
}

export default App;
