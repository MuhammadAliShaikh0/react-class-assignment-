import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <div className="form">
            <h2>Login</h2>
            <div className="signupimg">
            <div>
              <img className="img12" src="https://themicrolearningacademy.com/bookbuilder/public/assets/images/login_img.jpg" alt="" />
              <a href="Signup">create an account</a>
            </div>
            <form>
              <input className="loginname" type="namke" placeholder="John Doe " required />
              <input className="loginpassword" type="password" placeholder="Password" required /><br />
              <input type="checkbox" required />Remember me
              <br />
              <button type="submit">Login</button>

              <p>or login with <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-google"></i></p>
            </form>

            </div>
          </div>
        ) : (
          
          <div className="form">
            <h2>Signup</h2>
            <div className="signupimg">
            
            
            <form>
              <input className="signupname" type="text" placeholder="John Doe" required />
              <input  className="signupname" type="email" placeholder="Your Email" required  />
              <input className="signupname" type="password" placeholder="Password" required />
              <input type="password" className="signupname" placeholder="Repeat your Password" required /><br />
              <input type="checkbox" required/> I agree all statements in <a href="#" className="term">Terms of service</a>
              <br />
              <button type="submit">Register</button>
            </form>
            <div>
              <img className="img12" src="https://goatmassswabstesting.com/img/signup-image.jpg" alt="" />
              <a href="login">I am already a member</a>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
