import React from "react";
import geoIcon from "../assets/icons/header1.svg";
import letterIcon from "../assets/icons/header2.svg";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/operator.png";
import search from "../assets/images/search.png";

import HeaderCart from "./HeaderCart";

function Header() {
  return (
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
          <button className="btn header__btn header__btn--catalog">
            <span>Каталог</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z"
                stroke="white"
              />
              <path
                d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z"
                stroke="white"
              />
              <path
                d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z"
                stroke="white"
              />
              <path
                d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z"
                stroke="white"
              />
            </svg>
          </button>

          <div className="header__search search">
            <input type="text" placeholder="Поиск..." />
            <div className="search__image">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="header__contacts header-contacts">
            <div className="header-contacts__left contacts">
              <p>+7 (777) 490-00-91</p>
              <p>время работы: 9:00-20:00</p>
              <a href="">Заказать звонок</a>
            </div>
            <div className="header-contacts__right">
              <img src={avatar} alt="" />
            </div>
          </div>
          <button className=" btn header__btn header__btn--price">
            <span>Прайс-лист</span>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.958 6.375H11.1247V2.125H6.87467V6.375H4.04134L8.99967 12.0417L13.958 6.375ZM3.33301 13.4583H14.6663V14.875H3.33301V13.4583Z"
                fill="white"
              />
            </svg>
          </button>
          <HeaderCart />
        </div>
      </div>
    </header>
  );
}

export default Header;
