import { Component } from 'react';
import   "./../css/header.css"
import { NavLink } from 'react-router-dom';
import logo from "./../images/logo.jpg"

 class Heading extends Component{
      render()
      {
      return (
      <>
     
        <div  className="nav">

        <div className="Right">
         <NavLink className="navlink" to="/login"><button className="btn btn-outline-danger">Signin</button></NavLink>
       </div>

        <div className="Left">
         <NavLink className="navlink" to="/"></NavLink>
         <NavLink className="navlink" to="/user">Student</NavLink>
         <NavLink className="navlink" to="/admin">Admin</NavLink>
        </div>
      
       </div>

      <div  className="navi">
     <div className="Righti">
    <img src={logo} alt="learning" className="logo"/>
   </div>

 <div className="Lefti">
 <NavLink className="navlinki" to="/"></NavLink>
 <NavLink className="navlinki" to="/home">Home</NavLink>
 <NavLink className="navlinki" to="/mocktest">Mock Test</NavLink>
 <NavLink className="navlinki" to="/profile">Performance</NavLink>
 <NavLink className="navlinki" to="/register">Register</NavLink>
</div>
</div>
 </>

    )
      }
  }

  export default Heading;