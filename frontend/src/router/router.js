import { BrowserRouter, Route } from "react-router-dom";
import Login from "../user/login";
import Signup from "../user/signup";
import Home from "./../user/home"
import Profile from "../user/profile";
import Mocktest from "./../questions/mocktest.js"

import { Component } from "react";

class Router extends Component{

render()
{
return(
<>
 <BrowserRouter>
 <Route path="/" component={Home} exact/>
 <Route path="/home" component={Home} exact/>
 <Route path="/register" component={Signup} exact/>
 <Route path="/login" component={Login} exact/>
 <Route path="/profile"   component={Profile} exact/>
 <Route path="/mocktest" component={Mocktest} exact/>

</BrowserRouter>
</>
) 
}
}
export default Router;