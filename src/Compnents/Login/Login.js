import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

  const {LogIn,googleLogIn} = useContext(AuthContext)

  const navigate =useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleLogIn = (event) => {
    event.preventDefault()

    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)

    LogIn(email,password)
    .then(res => {
      const user = res.user
      console.log(user)
      navigate(from, {replace:true})
    })
    .catch(error => console.log(error))

  }

  const handleGoogleLogIn = () => {
    googleLogIn()
    .then(res => {
      console.log(res.user)
      navigate(from, {replace:true})
    })
    .catch(error => console.log(error))
  }

    return (
        <div className="hero w-3/4 lg:w-1/2  mx-auto mt-16 mb-10 border-2 border-gray-300 p-3 rounded-xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold mb-5 text-center">Login</h1>
        <form onSubmit={handleLogIn}>
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
            <input type="submit" className="btn btn-primary"   value="Login" />
        </div>
        </form>
        <span className='text-center mt-4'>or</span>
        <hr/>
        <div className=' mx-auto'>
            <button onClick={handleGoogleLogIn} className='btn btn-ghost'>Google</button>
        </div>
        <p>Don't have an account? <Link to='/register' className=' text-blue-500 font-semibold'>Register</Link></p>
      </div>
    </div>
    );
};

export default Login;