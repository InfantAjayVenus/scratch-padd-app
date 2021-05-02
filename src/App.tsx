import React from "react";
import { Helmet } from "react-helmet";
import { EuiIcon, EuiButtonIcon } from "@elastic/eui";
import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from './pages/Home';
import Editor from './pages/Editor';
import "./App.scss";

function App() {
  return (
    <>
      <Helmet>
        <title>Scratch Padd - A Notes taking app for learners </title>
      </Helmet>
      <header className="header">
        <EuiIcon
          type="logo.svg"
          color="ghost"
          title="Scratch Padd"
          className="title"
        />
        <EuiButtonIcon
          iconType="user"
          display="fill"
          iconSize="l"
          color="text"
          className="avatar"
        />
      </header>
      <Router>
        <nav className="navigation">
          {/*This part holds the menu items of the app*/}
          <ul>
            <li>
              <Link to="/">
                <EuiButtonIcon
                  iconType="home"
                  iconSize="l"
                  title="Home"
                  className="button "
                />
              </Link>
            </li>
            <li>
              <Link to="/newpadd">
                <EuiButtonIcon
                  iconType="plusInCircle"
                  iconSize="l"
                  title="Add New Padd"
                  className="button"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <section className="body">
        <Switch >
          <Route exact path="/"><Home /></Route>
        </Switch>
        <Switch >
          <Route exact path="/newpadd"><Editor /></Route>
        </Switch>

        </section>
      </Router>
      <footer>
        {/*
        This contains the meta badges
        1. save status
        2. editor preview
        3. line number
        4. vim modes
      */}
      </footer>
    </>
  );
}

export default App;
