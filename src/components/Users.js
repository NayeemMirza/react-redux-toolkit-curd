import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from '../redux/features/userDetailSlice';
import Spinner from '../components/Spinner'  ;
import ViewDetail from './ViewDetail';
const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const { users, loading, searchData } = useSelector((state) => state.app)
    const navigateToPage = () => {
        navigate('/createUser')
    }

    useEffect(() => {
        dispatch(showUser());
      }, []);

    if(loading){
        console.log(users)
        return (< Spinner />)
    }
    const selectUser = users.filter(user => user.id === id)
  return ( 
    <>  
    {
        showPopup && < ViewDetail id={id} showPopup={showPopup} setShowPopup={setShowPopup} /> 
    }
    
        <div className="card mt-3">
            <div className="card-header">
                <h4>User List
                    <button className="btn btn-dark justify-content-end float-end" onClick={navigateToPage}>Add User</button>
                </h4>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Aaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && 
                            users.filter((ele) => {
                                if(searchData.length === 0){
                                    return ele;
                                } else {
                                    return ele.name.toLowerCase().includes(searchData.toLowerCase());
                                }
                            })
                            .map((user, index) => (
                                <tr key={user.id}> 
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => [setId(user.id), setShowPopup(true)]}>View</button>
                                      <Link className="btn btn-primary ms-2" to={`/edit/${user.id}`}>Edit</Link>
                                        <button className="btn btn-danger ms-2" onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                                    </td>
                                </tr> 
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div> 
    </>
  )
}

export default Users