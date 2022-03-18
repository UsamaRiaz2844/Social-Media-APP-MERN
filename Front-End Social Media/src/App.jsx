import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/profile/Profile";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home.jsx";



export default function App() {
 
  return <div> 
 <BrowserRouter>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile/:username" element={<Profile/>} />



      </Routes>

 </BrowserRouter>

  </div>;
};

