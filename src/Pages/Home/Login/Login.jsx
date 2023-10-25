import { useContext } from "react";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2' ;
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);

  const handleLogin = event => {
    event.preventDefault();
    const form =  event.target; 
            const email = form.email.value;
            const password = form.password.value;
            console.log( email, password);
            signIn(email, password)
            .then(result =>{
              const user = result.user;
               console.log(user);
               Swal.fire({
                title: 'Login Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            })
            .catch(error => console.log(error));
  }
  return (
    <div>
      <div className="hero min-h-screen bg-gradient ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
          <img
            src="https://i.ibb.co/Qdmr9LH/register-e58071de.png"
            alt=""
          />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p>New to shopping-shop <Link className="text-orange-600 text-bold" to="/register">Sign up</Link> </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
