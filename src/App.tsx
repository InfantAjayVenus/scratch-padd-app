import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
         <header className="flex bg-paddBlueDark h-12 md:h-10 ">
          <img src="/logo.svg" alt="ScratchPadd" className="w-2/5 md:w-1/3 lg:w-1/5 xl:1/6 2xl:2/12" />
        </header>
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
