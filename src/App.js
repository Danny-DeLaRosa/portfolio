import './App.css';
import Fetch from './components/Fetch';
import Home from './pages/Home';
import { Route, Routes } from'react-router-dom';

function App() {
  return (
    <div> 
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
