import Navbar from "./components/UI/navbar";
import './App.css'
import Home from "./pages/home";
import Post from "./pages/posts";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

console.log(user)
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
