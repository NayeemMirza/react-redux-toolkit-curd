import React from 'react'
import { useSelector } from 'react-redux'

const ViewDetail = ({id, showPopup, setShowPopup}) => {
  const allUsers = useSelector((state) => state.app.users)
  const selectedUser = allUsers.filter(user => user.id === id) 
  return (
    <div className='userDetailBox'>
      <div className="modal position-fixed d-block" tabindex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">User Detail</h5>
              <button type="button" className="btn-close" onClick={() => setShowPopup(false)}></button>
            </div>
            <div className="modal-body">
              <div className="card"> 
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                        <tr> 
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th> 
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>  
                            <td>{selectedUser[0].name}</td>
                            <td>{selectedUser[0].email}</td>
                            <td>{selectedUser[0].age}</td>
                            <td>{selectedUser[0].gender}</td> 
                        </tr>   
                    </tbody>
                  </table>
                </div>
              </div> 
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewDetail