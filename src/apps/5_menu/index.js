import React, { useState } from 'react';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './source/data';
import "./source/index.css";

const currentCategories = new Set(items.map((x) => x.category));

const allCategories = ["all", ...currentCategories];

function MenuApp() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    let newItems;

    if (category === "all") {
      newItems = items;
    } else {
      newItems = items.filter((x) => x.category === category);
    }

    setMenu(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  )
}

export default MenuApp;
