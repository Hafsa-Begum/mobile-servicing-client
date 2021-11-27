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
import Payment from "./Pages/Payment/Payment";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";

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
            <Route path='/payment' element={<Payment />} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path='/dashboard/myBooking' element={<MyBooking />} />
              <Route path='/dashboard/addReview' element={<AddReview />} />
              <Route path='/dashboard/manageBookings' element={<AdminRoute><ManageBookings /></AdminRoute>} />
              <Route path='/dashboard/manageServices' element={<AdminRoute><ManageServices /></AdminRoute>} />
              <Route path='/dashboard/makeAdmin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path='/dashboard/addServices' element={<AdminRoute><AddServices /></AdminRoute>} />


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
