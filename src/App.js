import React from "react";
import Categories from "./components/Categories";

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
          <section className="catalog">
            <div className="catalog__container">
              <div class="catalog__header">
                <h1 className="catalog__title">Косметика и гигиена</h1>
                <Sort />
              </div>
              <Categories />
            </div>
          </section>
        </main>
        <footer className="footer"></footer>
      </div>
    </>
  );
}

export default App;
