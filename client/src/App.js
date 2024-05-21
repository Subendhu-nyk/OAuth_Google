import Navbar from "./components/UI/navbar";
import './App.css'
import Home from "./pages/home";
import Post from "./pages/posts";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const user=true;
  return (
    <BrowserRouter> 
    <>
    <Navbar user={user}/>    
    <Routes>
        <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to='/'/> :<Login/>} />   
            <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />} />       
    </Routes>    
    </>
    </BrowserRouter>
  );
}

export default App;
