import React from 'react';
import './App.scss';

function App() {
  return (
    <>
      <header>Scratch Padd</header>
      <main>
        <nav>
        {/*This part holds the menu items of the app*/}
        </nav>
        <aside>
        {/*
            This Part holds the content of each menu.
            It pops as a model, spanning whole viewport in mobile and width decreases as screen width expands.
        */}
        </aside>
        <section>
        {/*
          This contains the contents of the app
          1. editor
          2. Pads list
          3. Pad content
        */}
        </section>
      </main>
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
