import React from "react";

import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import ProductBlock from "./components/ProductBlock";

import products from "./assets/products.json";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

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
              <div className="categories">
                <Categories />
              </div>

              <div class="flex-wrapper">
                <Filter />
                <div class="catalog__items products">
                  {products.map((obj) => (
                    <ProductBlock {...obj} />
                  ))}
                </div>
              </div>
              <Pagination />
              <p className="catalog__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis
                iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
                pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper
                enim, malesuada.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
