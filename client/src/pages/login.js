import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";

const Login = () => {
  const googleHandler=()=>{
    window.open("http://localhost:5000/auth/google", "_self");
  }
  const facebookHandler=()=>{
    window.open("http://localhost:5000/auth/gfacebook", "_self");
  }

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={googleHandler}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook"  onClick={facebookHandler} >
            <img src={Facebook} alt="" className="icon"/>
            Facebook
          </div>
          <div className="loginButton github" >
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;