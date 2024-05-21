import { Link } from "react-router-dom";

const Navbar = ({user}) => {  
  return (    
    <div className="navbar">
      <Link className="link" to="/">       
          Google Auth     
      </Link>{user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQKaS7LP80SEcKgz9-d_ORjkh1B9hPSUqkeI_mLSnDg&s"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">Sam</li>
          <li className="listItem">
            Logout
          </li>
        </ul> ): (
        <Link className="link" to="login">
          Login
        </Link>
      )}     
    </div>
  );
};

export default Navbar;