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
import NewFundraiser from './dashboard/NewFundraiser';
import FundraiserSuccess from './dashboard/FundraiserSuccess';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FundraiserDetails from './public/FundraiserDetails';
import StudentFundraiserDetails from './dashboard/StudentFundraiserDetails';
import AllFundraisers from './public/AllFundraisers';
import AboutUs from './public/AboutUs';
import Notifications from './dashboard/Notifications';
import { Provider } from 'jotai';
import EditFundraiser from './dashboard/EditFundraiser';
import Events from './public/Event';
import GreenEarth from './public/events/GreenEarth';

function App() {
  return (
    <Provider>
      <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/donors" element={<Donors/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='fundraiser/:id' element={<FundraiserDetails/>} />
        <Route path="/allfundraisers" element={<AllFundraisers/>} />
        <Route path='/events/greenview' element={<GreenEarth />} />
        <Route path='/dashboard' element={<DashboardHome/>}>
          <Route path='fundraisers' element={<StudentFundraisers/>} />
          <Route path='donations' element={<StudentDonations/>} />
          <Route path='settings' element={<AccountSettings/>} />
          <Route path='newfundraiser' element={<NewFundraiser/>} />
          <Route path="funddetails/:id" element={<StudentFundraiserDetails />} />
          <Route path='fundraisersuccess' element={<FundraiserSuccess/>} />
          <Route path='notifications' element={<Notifications/>} />
          <Route path="editfund/:id" element={<EditFundraiser />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
    </Provider>
  );
}

export default App;
