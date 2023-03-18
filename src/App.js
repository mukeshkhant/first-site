import './App.css';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Table from './pages/Table';

function App() {    
  return (
    <div>
       <Router>
          <Header/>           
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/Table' element={< Table />}></Route>
              <Route exact path='/About' element={< About />}></Route>
              <Route exact path='/Contact' element={< Contact />}></Route>     
            </Routes>                  
          <Footer/>          
        </Router>
    </div>
  );
}

export default App;
