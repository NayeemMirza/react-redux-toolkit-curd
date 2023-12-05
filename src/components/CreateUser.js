import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/features/userDetailSlice';
import { useNavigate } from 'react-router-dom'; 


const CreateUser = () => { 
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [users, setUsers] = useState({});

  const getUserData = (e) =>{
    setUsers({...users, [e.target.name] : e.target.value});
  }

  //submit function
  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
    navigate('/')
  }
   
  const navigateToPage = () => {
      navigate('/')
  }

  return (

    <>  
        <div className="card mt-3">
          <div className="card-header d-flex justify-content-between">
            <h4>Add User</h4>
            <button className="btn btn-dark justify-content-end float-end" onClick={navigateToPage}>Back</button>
          </div>
          <div className="card-body">
            <form className="" onSubmit={handleSubmit}>
              <div className="form-group row mb-3">
                <div className="col-sm-6"> 
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" required onChange={getUserData} />
                </div>
                <div className="col-sm-6">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" required onChange={getUserData} />
                </div>
              </div> 
              <div className="form-group row mb-3">
                <div className="col-sm-6">
                  <label className="form-label">Age</label>
                  <input type="text" name="age" className="form-control"  required onChange={getUserData} />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Gender</label>
                  <div className="d-flex">
                    <div className="gender-item">
                      <input className="form-check-input" name="gender" value="Male" type="radio" required onChange={getUserData} />
                      <label className="form-check-label ms-2">Male</label>
                    </div>
                    <div className="gender-item ms-3">
                      <input className="form-check-input" name="gender" value="Female" type="radio" onChange={getUserData} />
                      <label className="form-check-label ms-2">Female</label>
                    </div>
                  </div>
                </div>
              </div> 

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div> 
    </>
  )
}

export default CreateUser;