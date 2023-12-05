import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../redux/features/userDetailSlice';

const UpdateUser = () => {
    const navigate = useNavigate();
    const navigateToPage = () => { navigate('/') }
    const [updateData, setUpdateData] = useState();
    const {users, loading} = useSelector((state) => state.app)
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if(id){
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0])
        }
    }, []);

    const newData = (e) => {
        setUpdateData({...updateData, [e.target.name]: e.target.value})
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate('/')
    } 
  return (
    <div>
        <div className="card mt-3">
          <div className="card-header d-flex justify-content-between">
            <h4>Edit User</h4>
            <button className="btn btn-dark justify-content-end float-end" onClick={navigateToPage}>Back</button>
          </div>
          <div className="card-body">
            <form className="" onSubmit={handleUpdate}>
              <div className="form-group row mb-3">
                <div className="col-sm-6"> 
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" value={updateData && updateData.name} onChange={newData} required />
                </div>
                <div className="col-sm-6">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" value={updateData && updateData.email} onChange={newData} required />
                </div>
              </div> 
              <div className="form-group row mb-3">
                <div className="col-sm-6">
                  <label className="form-label">Age</label>
                  <input type="text" name="age" className="form-control"  value={updateData && updateData.age} onChange={newData} required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Gender</label>
                  <div className="d-flex">
                    <div className="gender-item">
                      <input className="form-check-input" name="gender" value="Male" type="radio" checked={updateData && updateData.gender === 'Male'} onChange={newData} required />
                      <label className="form-check-label ms-2">Male</label>
                    </div>
                    <div className="gender-item ms-3">
                      <input className="form-check-input" name="gender" value="Female" checked={updateData && updateData.gender === 'Female'} onChange={newData} type="radio" />
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
    </div>
  )
}

export default UpdateUser