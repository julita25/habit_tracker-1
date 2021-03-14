import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Button,
  Input,
  AppBar,
  Avatar,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import "./header.css"

function Header() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  console.log("user", user);
  return (
<div className="head">
    <div className="container">
      {user ? <h3>{user.name}</h3> : ""}
      <Toolbar />
      {user ? (
        <Button onClick={logout}>LogOut</Button>
      ) : (
        <Button className= "btn-sign" component={Link} to="/auth">
          Sign-In
        </Button>
      )}
    </div>
    <br/>
    <div className= "title">Enter your habits here</div>
</div>
  );
}

export default Header;
