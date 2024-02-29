import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  
  let navigate = useNavigate();

  const[user,setUser] = useState({
    name:"",
    username:"",
    email:""
  })

  const{name,username,email} = user

  const onInputChange=(event)=>{
    setUser({...user, [event.target.name]:event.target.value})
  }

  const onFormSubmit=async(event)=>{
    event.preventDefault()
    await axios.post("http://localhost:9090/user",user)
    navigate("/")
  }

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "black" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={(event)=>onFormSubmit(event)}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              <strong>Your Name</strong>
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Enter Your Name!"
                              name="name"
                              value={name}
                              onChange={(event)=>onInputChange(event)}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              <strong>Your username</strong>
                            </label>
                            <input
                              type="text"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Enter your username!"
                              name="username"
                              value={username}
                              onChange={(event)=>onInputChange(event)}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              <strong>Your Email</strong>
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Enter your email!"
                              name="email"
                              value={email}
                              onChange={(event)=>onInputChange(event)}
                            />
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                          >
                            Register
                          </button>
                          <Link
                            type="button"
                            className="btn btn-danger btn-lg"
                            to="/"
                          >
                            Cancel
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddUser;
