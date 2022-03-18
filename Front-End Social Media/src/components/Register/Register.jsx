import "./Register.css"

function Register() {
  return (
    <div className="login">
      <div className="loginwrapper">
          <div className="loginwrapperLeft">
              <h2 className="loginWrapperLogo">GoSocial</h2>

              <span className="loginWrapperDesc">
              GoSocial helps you connect and share with the people in your life.
                  </span>

              </div>
              <div className="loginWrapperRight">
                  <div className="loginbox">
                      <input  className="inputfields" type="text" placeholder="Username" />
                      <input  className="inputfields" type="email" placeholder="Email" />
                      <input  className="inputfields"type="password" placeholder="Create Your Password" />
                      <input  className="inputfields"type="password" placeholder="Enter Password Again" />
                      <button  className="inputfieldsbutton">register</button>
                     
                      <button className="inputfieldsbutton" >Already Have An Acount? Login </button>
                      </div>
                  </div>
          </div>
    </div>
  )
}

export default Register
