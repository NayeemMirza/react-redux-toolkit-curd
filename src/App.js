import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './components/CreateUser';
import Header from './components/Header';
import Users from './components/Users';
import UpdateUser from './components/UpdateUser';
function App() {
  return (
    <>  
      <BrowserRouter>
      < Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={ <Users/> } />
          <Route exact path='/createUser' element={ <CreateUser/> } />
          <Route exact path='/edit/:id' element={ <UpdateUser/> } />
        </Routes> 
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
