import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/Home";
import { NewPadd } from "./pages/NewPadd";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <header className="flex bg-paddBlueDark h-12 md:h-10 ">
        <img
          src="/logo.svg"
          alt="ScratchPadd"
          className="w-2/5 md:w-1/3 lg:w-1/5 xl:1/6 2xl:2/12"
        />
      </header>
      <AnimatePresence>
        <main className="overflow-hidden w-full h-5/6 p-4 my-auto lg:w-11/12 lg:ml-auto lg:h-full">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/new-padd">
              <NewPadd />
            </Route>
          </Switch>
        </main>
      </AnimatePresence>
    </Router>
  );
}

export default App;
