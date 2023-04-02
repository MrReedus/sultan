import React from "react";
function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const categories = [
    "Уход за телом",
    "Уход за руками",
    "Уход за лицом",
    "Уход за волосами",
    "Средства для загара",
    "Средства для бритья",
    "Подарочные наборы",
    "Гигиеническая продукция",
    "Гигиена полости рта",
    "Бумажная продукция",
  ];

  return (
    <ul>
      {categories.map((value, index) => {
        return (
          <li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ""}>
            <a>{value}</a>
          </li>
        );
      })}
    </ul>
  );
}
export default Categories;
