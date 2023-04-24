import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Login } from './pages/login';
import { Landing } from './pages/landing';
import { SignUp } from './pages/signup';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute } from './components/protectedRoute';
import { Party } from './pages/Party_Room';
import { Gallery } from './pages/gallery'; 
import { VIP } from './pages/VIP'; 

function App() {
  return (
    <>
    <ToastContainer/>
        <Routes>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/" element = {<Landing/>}/>
      <Route path = "/signup" element = {<SignUp/>}/> 
      <Route path = "/gallery" element = {<Gallery/>}/>
      <Route path = "/party" element = {<Party/>}/>
      <Route path = "/vip" element = {<VIP/>}/>
      <Route element={<ProtectedRoute session={Cookies.get("Session_Event")}/>}>
        <Route/>
      </Route>
        </Routes> 
   


    </>
  );
}

export default App;
