import { Component } from 'react';
import Headers from "./../components/header"
import Footer from "./../components/footer"
import "./../css/home.css"

 import  travel from "../images/traveller.jpg"
class Profile extends Component{

    render()
        {
    
            return(
                <>
                <Headers/>
                 <img  src={travel} alt="Traveling Is Hurting." className="travel"/>
                 <Footer/>
                </>
            )
        }
    }

export default Profile