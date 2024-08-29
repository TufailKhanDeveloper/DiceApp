import './App.css';
import Home from './Components/Home/Home';
import Play from './Components/play/play';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/play' element={<Play/>} />

    </Routes>
  );
}

export default App;
