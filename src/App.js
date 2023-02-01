import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Cpanel from './components/Cpanel';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        <Routes>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Login />}/>
          <Route path='/cpanel' element={<Cpanel />}/>
        </Routes>
        <br />
        <Footer />
      </div>
    </Router>
  );
};




export default App;
