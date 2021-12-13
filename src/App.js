import { useState } from 'react';
import Home from "./Home";
// import { Switch, Route } from "react-router-dom";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 import Login from "./Forms/login/login";
import Register from "./Forms/register/register";
import Homepage from "./homepage/homepage"

import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";


const App = () => {
  const [ user, setLoginUser] = useState({})
  return (
    <>
   <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/services" component={Service}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Login setLoginUser={setLoginUser}/>
        
        <Route component={Error}></Route>
      </Switch>
      </Router>
      
    </>
  );
};

export default App;

