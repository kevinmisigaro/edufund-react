import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './public/Landing';
import Students from './public/Students';
import Donors from './public/Donors';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} exact />
        <Route path="/students" element={<Students/>} exact />
        <Route path="/donors" element={<Donors/>} exact />
      </Routes>
    </div>
  );
}

export default App;
