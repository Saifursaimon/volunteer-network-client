import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
  const {Register,googleLogIn} = useContext(AuthContext)

  const handleRegister = (event) => {
    event.preventDefault()

    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)

    Register(email,password)
    .then(res => {
      const user = res.user
      console.log(user)
    })
    .catch(error => console.log(error))

  }


  
  const handleGoogleLogIn = () => {
    googleLogIn()
    .then(res => console.log(res.user))
    .catch(error => console.log(error))
  }

    return (
        <div className="hero w-3/4 lg:w-1/2  mx-auto mt-16 mb-10 border-2 border-gray-300 p-3 rounded-xl">
        <div className="card-body">
        <h1 className="text-5xl font-bold mb-5 text-center">Register</h1>
          <form onSubmit={handleRegister}> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered w-full" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered w-full" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered w-full" />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary"   value="Register" />
              </div>
          </form>

          <span className='text-center mt-4'>or</span>
          <hr/>
          <div className=' mx-auto'>
              <button onClick={handleGoogleLogIn} className='btn btn-ghost'>Google</button>
          </div>
          <p>Already have an account? <Link to='/login' className=' text-blue-500 font-semibold'>Log in</Link></p>
        </div>
      </div>
    );
};

export default Register;