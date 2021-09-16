import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: "white",
    fontSize: "10px",
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
    fontSize: "15px",
  },
  spacer: {
    paddingLeft: "300px",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/">
            <img width="40%" src={logo} alt="logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            MTD Bank
          </Typography>
          <Button className={classes.button}>About Us </Button>
          <Button className={classes.button}>Product </Button>
          <Button className={classes.button}>Package </Button>
          <Button className={classes.button}>Contact </Button>
          <div className={classes.spacer}></div>
          <Link to="/login" className="header__link ">
            <div className="header__option">
              <span className="header__lineOne">Hello</span>
              <span className="header__lineTwo">Sign In</span>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
