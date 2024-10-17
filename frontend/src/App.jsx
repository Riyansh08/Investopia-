
import './App.css'
import HomePage from './landingPage/home/homePage.jsx';
import "./App.css";
import {BrowserRouter , Routes ,  Route} from "react-router-dom";
import Signup from "./landingPage/signup/signup.jsx";
import AboutPage from "./landingPage/about/aboutpage.jsx";
import ProductPage from "./landingPage/products/productpage.jsx";
import PricingPage from "./landingPage/pricing/pricingpage.jsx";
import SupportPage from "./landingPage/support/supportpage.jsx";
import Navbar from './landingPage/navbar.jsx';
import Footer from './landingPage/footer.jsx';
import NotFound from './landingPage/NotFound.jsx';


function App() {
   return (
    <>
 <BrowserRouter>
 <Navbar/>
 <Routes>

<Route path='/' element={<HomePage/>}/>
<Route path='/signup' element={<Signup/>}/>

<Route path='/about' element={<AboutPage/>}/>

<Route path='/product' element={<ProductPage/>}/>

<Route path='/pricing' element={<PricingPage/>}/>

<Route path='/support' element={<SupportPage/>}/>
<Route path='*' element={<NotFound/>}/>



 </Routes>
 <Footer/>
 
 </BrowserRouter>
 
    </>
  )
}

export default App
