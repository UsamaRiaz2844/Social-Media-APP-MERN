import Feed from "../feed/Feed"
import "./login.css"

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
          <div className="loginwrapperLeft">
              <h2 className="loginWrapperLogo">GoSocial</h2>

              <span className="loginWrapperDesc">
              GoSocial helps you connect and share with the people in your life.
                  </span>

              </div>
              <div className="loginWrapperRight">
                  <div className="loginbox">
                      <input  className="inputfields" type="email" placeholder="Enter Your Email" />
                      <input  className="inputfields"type="password" placeholder="Enter Your Password" />
                      <button  className="inputfieldsbutton">Login</button>
                      <span className="forgetpass"> <u> Forget Password?</u></span>
                      <button className="inputfieldsbutton" >Create New Account</button>
                      </div>
                  </div>
          </div>
    </div>
  )
}

export default Login
