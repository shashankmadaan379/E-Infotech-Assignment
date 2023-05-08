import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import UpdatePassword from "./pages/UpdatePassword";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<PrivateRoute />} />
        <Route path="/error" element={<Error />} />
        <Route path="/update" element={<UpdatePassword />} />
      </Routes>
    </>
  );
}

export default App;
