import React from "react";

import "./scss/app.scss";

import geoIcon from "./assets/icons/header1.svg";
import letterIcon from "./assets/icons/header2.svg";
import logo from "./assets/images/logo.png";
import avatar from "./assets/images/operator.png";
import search from "./assets/images/search.png";

function App() {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <div className="header__top">
              <div className="header__left-block left-block">
                <div className="left-block__item ">
                  <img className="left-block__image" src={geoIcon} />
                  <div className="left-block__wrapper">
                    <b>г. Кокчетав, ул. Ж. Ташенова 129Б </b>
                    <p>(Рынок Восточный)</p>
                  </div>
                </div>
                <div className="left-block__item">
                  <img className="left-block__image" src={letterIcon}></img>
                  <div className="left-block__wrapper">
                    <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a>
                    <p>На связи в любое время</p>
                  </div>
                </div>
              </div>
              <nav className="header__navigation navigation">
                <ul className="navigation__body menu">
                  <li className="menu__item">
                    <a className="menu__link" href="">
                      О компании
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="">
                      Доставка и оплата
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="">
                      Возврат
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="">
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__bottom">
              <img src={logo} alt="" />
              <button className="header__btn header__btn--catalog">Каталог</button>

              <div className="header__search search">
                <input type="text" />
                <img className="search__image" src={search} alt="" />
              </div>
              <div className="header__contacts header-contacts">
                <div className="header-contacts__left">
                  <p>+7 (777) 490-00-91</p>
                  <p>время работы: 9:00-20:00</p>
                  <span>Заказать звонок</span>
                </div>
                <div className="header-contacts__right">
                  <img src={avatar} alt="" />
                </div>
              </div>
              <button className="header__btn header__btn--price">Прайс-лист</button>
            </div>
          </div>
        </header>
        <main className="main"></main>
        <footer className="footer">asdasd</footer>
      </div>
    </>
  );
}

export default App;
