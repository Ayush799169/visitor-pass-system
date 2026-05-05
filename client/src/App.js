 
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Login from "./pages/Login";
 import Register from "./pages/Register";
 import Dashboard from "./pages/Dashboard";
 import AddVisitor from "./pages/AddVisitor";
 import VisitorList from "./pages/VisitorList";
 import Appointment from "./pages/Appointment";
 import PassPage from "./pages/PassPage";
 import CheckPage from "./pages/CheckPage";

 function App() {
   return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-visitor" element={<AddVisitor />} />
        <Route path="/visitors" element={<VisitorList />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/pass" element={<PassPage />} />
        <Route path="/check" element={<CheckPage />} />
      </Routes>
    </BrowserRouter>
  );
 }

  export default App;
