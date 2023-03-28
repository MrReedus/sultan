import React from "react";

import Header from "./components/Header";
import Sort from "./components/Sort";

import "./scss/app.scss";

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const list = ["название", "цена"];

  return (
    <>
      <div className="wrapper">
        <Header />

        <main className="main">
          <h1>Косметика и гигиена</h1>
          <Sort />
        </main>
        <footer className="footer"></footer>
      </div>
    </>
  );
}

export default App;
