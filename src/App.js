import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './public/Landing';
import Students from './public/Students';
import Donors from './public/Donors';
import Login from './public/auth/Login';
import Register from './public/auth/Register';
import DashboardHome from './dashboard/DashboardHome';
import StudentFundraisers from './dashboard/StudentFundraisers';
import StudentDonations from './dashboard/StudentDonations';
import AccountSettings from './dashboard/AccountSettings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/donors" element={<Donors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<DashboardHome/>}>
          <Route path='fundraisers' element={<StudentFundraisers/>} />
          <Route path='donations' element={<StudentDonations/>} />
          <Route path='settings' element={<AccountSettings/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
