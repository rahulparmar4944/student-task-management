import { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  //state declaration
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  // Login

  const validate = () => {
    const newErrors = {}

    if(!formData.name.trim()){
      newErrors.name = "Full name is required."
    }
    else if(formData.name.length <= 3){
      newErrors.name = "Minimum 3 character required."
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is required."
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      newErrors.email = "Invalid Email format"
    }

    if(!formData.phone.trim()){
      newErrors.phone = "Phone Number is required."
    }
    else if(!/^[0-9]{10}$/.test(formData.phone)){
      newErrors.phone = "Phone Must be in 10 digit."
  }

  if(!formData.password.trim()){
      newErrors.password = "Phone Number is required."
    }
    else if(formData.password.length <= 6){
      newErrors.password = " Minimum 6 character required."
  }
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0;
}

  const handleInputChange = (e) => {
    //console.log(e.target.name,e.target.value)

    //e.target.name = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

     setErrors({
    ...errors,
    [e.target.name]: ""
  })

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      localStorage.setItem('authData',JSON.stringify(formData))
      alert("Successfull registration...!")
      navigate("/login")
  }
  };

  // useEffect(()=>{
  //   console.log(formData)
  // },[formData])

  // Design
  return (
    // Name Field
    <div className="form-container">
      <h1 className="form-title">REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your full name"
            onChange={handleInputChange}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            placeholder="Enter your Phone"
            onChange={handleInputChange}
          />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          {errors.password && <span className="error-msg">{errors.password}</span>}
        </div>

        <button type="submit" className="btn-primary">
          Register
        </button>
      </form>

      <p className="link-text">
        Already have an account? <Link to="/Login">Login Heve</Link>
      </p>
    </div>
  );
};

export default Register;
