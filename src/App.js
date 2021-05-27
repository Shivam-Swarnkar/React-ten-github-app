import React, { useState } from "react"
import './App.css';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// Router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

// Toastify
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Firebase
import firebase from "firebase/app";
import "firebase/auth";

// Components
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import PageNotFound from "./Pages/PageNotFound"
import UserContext from "./context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import firebaseConfig from "./Config/firebaseConfig";

// Firebase init

firebase.initializeApp(firebaseConfig)

const App = () => {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
