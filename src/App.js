import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyBooking from "./Pages/Dashboard/MyBooking/MyBooking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Services from "./Pages/Services/Services";
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import ManageBookings from './Pages/Dashboard/ManageBookings/ManageBookings';
import ManageServices from './Pages/Dashboard/ManageServices/ManageServices';
import AddServices from './Pages/Dashboard/AddServices/AddServices';
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Payment from "./Pages/Dashboard/Payment/Payment";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/:serviceId' element={<PrivateRoute><ServiceDetail /></PrivateRoute>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path='/dashboard/myBooking' element={<MyBooking />} />
              <Route path='/dashboard/payment/:bookingId' element={<Payment />} />
              <Route path='/dashboard/addReview' element={<AddReview />} />
              <Route path='/dashboard/manageBookings' element={<ManageBookings />} />
              <Route path='/dashboard/manageServices' element={<ManageServices />} />
              <Route path='/dashboard/makeAdmin' element={<MakeAdmin />} />
              <Route path='/dashboard/addServices' element={<AddServices />} />


            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
