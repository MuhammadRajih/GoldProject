import logo from './logo.svg';
import './App.css';
import Main from './pages/main';
import Navigasi from './components/Navigasi';
import CariMobil from './pages/Carimobil';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/CariMobil' element={<CariMobil />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
