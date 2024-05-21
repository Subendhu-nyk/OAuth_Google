
const Navbar = () => {  
  return (
    <div className="navbar">
      <span className="logo">        
          Google Auth     
      </span>
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
        </ul>      
    </div>
  );
};

export default Navbar;