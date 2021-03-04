import React, { useState } from 'react';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './source/data';
import "./source/index.css";

function MenuApp() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menu} />
      </section>
      hello</main>
  )
}

export default MenuApp;
