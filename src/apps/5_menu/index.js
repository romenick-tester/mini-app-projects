import React, { useState } from 'react';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './source/data';
import "./source/index.css";

function MenuApp() {
  const [menu, setMenu] = useState(items);

  const filterItems = (category) => {

    switch (category) {
      case "breakfast":
        const breakfastItems = items.filter((item) => item.category === "breakfast");
        setMenu(breakfastItems);
        return;

      case "lunch":
        const lunchItems = items.filter((item) => item.category === "lunch");
        setMenu(lunchItems);
        return;

      case "dinner":
        const dinnerItems = items.filter((item) => item.category === "dinner");
        setMenu(dinnerItems);
        return;

      case "shakes":
        const shakesItems = items.filter((item) => item.category === "shakes");
        setMenu(shakesItems);
        return;

      default:
        setMenu(items);
        return;
    }
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menu} />
      </section>
      hello</main>
  )
}

export default MenuApp;
