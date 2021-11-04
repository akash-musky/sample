import { Component } from 'react';
import Headers from "../components/header"
import Footer from "../components/footer"
import "./../css/home.css"
import student1 from "./../images/student1.jpg"
class Home extends Component{

render()
    {
    
        return(
            <>
            <Headers/>
            <img src={student1} alt="Loading!" className="back-img"/>
            <Footer/>
            </>
            )
    }

}

export default Home;