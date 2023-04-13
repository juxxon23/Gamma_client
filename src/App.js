import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Cpanel from './components/Cpanel';
import POSservice from './components/POSservice';


function App() {
  /*Actualizar unicamente el Scontainer con el servicio. */
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Login />}/>
          <Route path='/cpanel' element={<Cpanel />}/>
          <Route path='/pos' element={<POSservice />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};




export default App;
