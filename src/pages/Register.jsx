import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    // Name Field
      <div className="form-container">
        <h1 className="form-title">REGISTER</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your full name"
            />
          </div>  

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

           <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input 
              type="Password" 
              id="Password"
              name="Password"
              placeholder="Enter your password"
            />
          </div>

    <button type="submit" className="btn-primary">Register</button>

        </form>

        <p className="link-text">
          Already have an account? <Link to="/Login">Login Heve</Link>
        </p>
      </div>
  );
};

export default Register;
