import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewPadd } from "./pages/NewPadd";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <header className="flex bg-paddLight h-12 md:h-10 lg:justify-end shadow rounded-b-lg">
=======
      <header className="flex h-12 md:h-10 lg:justify-end shadow rounded-b-lg">
>>>>>>> 4720011 (WIP [home] feat: Fetch and List)
        <img
          src="/logo.svg"
          alt="ScratchPadd"
          className="w-2/5 md:w-1/3 lg:w-1/5 xl:1/6 2xl:2/12"
        />
      </header>
      <Navbar />
      <main className="overflow-x-hidden w-full h-5/6 p-4 my-auto lg:w-19/20 lg:ml-auto lg:h-full">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new-padd">
            <NewPadd />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
