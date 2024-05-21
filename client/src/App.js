import Navbar from "./components/UI/navbar";
import './App.css'
import Home from "./pages/home";
import Post from "./pages/posts";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
    <>
    <Navbar/>    
    <Routes>
        <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login />} />   
            <Route path="/post/:id" element={<Post/>} />       
    </Routes>    
    </>
    </BrowserRouter>
  );
}

export default App;
