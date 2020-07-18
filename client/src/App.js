import React from "react";
import { Route, Switch,useHistory } from "react-router-dom";

import PrivateRoute from './utils/PrivateRoute';
import BubblePage from './components/BubblePage';
import Navbar from './components/NavBar';
import Contact from './components/Contact';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const {push} = useHistory();

  React.useEffect(()=>{
    if(localStorage.getItem('token')){
      push('/protected');
    } else {
      push('/');
    }
  },[])

  

  return (
      <div className="App">
        <Navbar />
        <div className='main-container'>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/protected" component={BubblePage} />
            <PrivateRoute exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
