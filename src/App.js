import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPosts from "./views/AddPosts";
import HomeLogin from "./views/HomeLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/addpost">
          <AddPosts />
        </Route>
        <Route path="/homelogin">
          <HomeLogin />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
