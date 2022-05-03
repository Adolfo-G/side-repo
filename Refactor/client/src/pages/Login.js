import React from "react";

const Login = () => {

  return (
    <section className='loginBody'>
      <div className='container py-3 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>

          <div className='card text-black' style='border-radius: 1rem;'>
            <div className='card-body p-5 text-center'>

              <div className='mb-md-5 mt-md-4 pb-5'>

                <form className="login-form">
                  <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
                  <h5 className='text-black-50 mb-4'>Please enter your login and
                    password!</h5>

                  <div className='form-outline form-white mb-4'>
                    <label className='form-label' for='email-login'>Email</label>
                    <input
                      type='email'
                      id='email-login'
                      className='form-control form-control-lg'
                    />
                  </div>

                  <div className='form-outline form-white mb-4'>
                    <label className='form-label' for='password-login'>Password</label>
                    <input
                      type='password'
                      id='password-login'
                      className='form-control form-control-lg'
                    />
                  </div>

                  <button className="flowButton" type='submit'>Login</button>
                </form>
              </div>

              <div className='mb-md-5 mt-md-4 pb-5'>
                <h6>Don't have an account?</h6>
                <form className='signup-form'>
                  <h2 className='fw-bold mb-2 text-uppercase'>Sign Up</h2>
                  <div className='form-outline form-white mb-4'>
                    <label className='form-label' for='name-signup'>Username</label>
                    <input
                      type='text'
                      id='name-signup'
                      className='form-control form-control-lg'
                    />
                  </div>
                  <div className='form-outline form-white mb-4'>
                    <label className='form-label' for='email-signup'>Email</label>
                    <input
                      type='text'
                      id='email-signup'
                      className='form-control form-control-lg'
                    />
                  </div>
                  <div className='form-outline form-white mb-4'>
                    <label className='form-label' for='password-signup'>Password</label>
                    <input
                      type='password'
                      id='password-signup'
                      className='form-control form-control-lg'
                    />
                  </div>

                  <button className="flowButton" type='submit'>Sign Up</button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Login;
