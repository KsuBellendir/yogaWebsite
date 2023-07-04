import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Practice from'./pages/Practice/Practice';
import Contact from './pages/Contact/Contact';
import Price from './pages/Price/Price';
import About from './pages/About/About';
import './font/Pacifico-Regular.ttf'




function App() {
  return (
    <>
    <Router> 
      <Navbar/>
     <Routes>
      <Route path='/'  element={ <Home/> }/>
      <Route path='/about'  element={ <About/> }/>
      <Route path='/practice'  element={ <Practice/> }/>
      <Route path='/contact'  element={ <Contact/> }/>
      <Route path='/price'  element={ <Price/> }/>
    </Routes> 
    </Router>
    </>
  );
}

export default App;
