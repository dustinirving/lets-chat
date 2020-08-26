import React from 'react'

const styles = {
  forma: {
    width: "400px",
    marginTop: "5%"
  },
  conta: {
    width: "auto",
    height: "auto"
  }
}

const Login = () => {
  return (
    <div className="container" style={styles.conta}>
      <div className="row">
        <div className="col-12 d-flex justify-content-center animated fadeInRight">
          <div className="card cloudy-knoxville-gradient" style={styles.forma}>

            <h5 className="card-header success-color white-text text-center py-4">
              <strong>Sign in</strong>
            </h5>

        
            <div className="card-body px-lg-5 pt-0">

              <form className="text-center" action="#!">

                <div className="md-form">
                  <input type="email" id="materialLoginFormEmail" className="form-control"/>
                  <label for="materialLoginFormEmail">E-mail</label>
                </div>

            
                <div className="md-form">
                  <input type="password" id="materialLoginFormPassword" className="form-control"/>
                  <label for="materialLoginFormPassword">Password</label>
                </div>

                <div className="d-flex justify-content-around">
                  <div>
              
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
                      <label className="form-check-label" for="materialLoginFormRemember">Remember me</label>
                    </div>
                  </div>
                  <div>
                  
                    <a href="">Forgot password?</a>
                  </div>
                </div>


                <button className="btn btn-outline-success btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>


                <p>Not a member?
                  <a href="">Register</a>
                </p>


                <p>or sign in with:</p>
                <a type="button" className="btn-floating btn-fb btn-sm">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a type="button" className="btn-floating btn-tw btn-sm">
                  <i className="fab fa-twitter"></i>
                </a>
                <a type="button" className="btn-floating btn-li btn-sm">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a type="button" className="btn-floating btn-git btn-sm">
                  <i className="fab fa-github"></i>
                </a>

              </form>


            </div>

          </div>
        </div>
      </div>
 
    </div>
  )
}

export default Login
