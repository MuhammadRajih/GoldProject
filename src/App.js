import './App.css';
import Main from './pages/Main';
import CariMobil from './pages/Carimobil';
import HasilCari from './pages/HasilPencarian';
import DetailMobil from './pages/DetailMobil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/CariMobil' element={<CariMobil />}></Route>
          <Route exact path='/HasilCari' element={<HasilCari />}></Route>
          <Route exact path="/DetailMobil/:id" element={<DetailMobil />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
