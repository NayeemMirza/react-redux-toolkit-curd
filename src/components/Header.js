import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom' 
import { searchUser } from '../redux/features/userDetailSlice';
const Header = () => {
  const allUsers = useSelector((state) => state.app.users);
  const [searchData, setSearchData] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(searchData))
  }, [searchData])


  return ( 
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">RTK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Users <span className="badge bg-success">{allUsers.length}</span></Link>
                </li>   
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search User" aria-label="Search" onChange={(e) => setSearchData(e.target.value)} /> 
            </form>
            </div>
        </div>
    </nav>
      </>
  )
}

export default Header