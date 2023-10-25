import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {

      const {createUser} = useContext(AuthContext);

      const handleSignUp = event => {
            event.preventDefault();
            const form =  event.target; 
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name, email, password); 

            createUser(email, password)
            .then(result =>{
                  const user = result.user;
                  console.log(user);
            })
            .catch(error => console.log(error))

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
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    <span className="label-text">Confirm Password</span>
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
                    value="Sign up"
                  />
                </div>
              </form>
              <p>
                Alrady have and account{" "}
                <Link className="text-orange-600 text-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
