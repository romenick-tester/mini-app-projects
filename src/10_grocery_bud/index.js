import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

import "./index.css";

function GroceryBud() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ msg: "", type: "", show: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert("Please enter a value!", "danger", true)
    } else if (name && isEditing) {
      //deal with edit
    } else {
      showAlert("new item added!", "success", true);
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      }

      setList([...list, newItem]);
      setName("");
    }
  }

  function showAlert(msg = "", type = "", show = false) {
    setAlert({ msg, type, show });
  };

  function clearList() {
    showAlert("empty list", "danger", true);
    setList([]);
  }

  function removeItem(id) {
    showAlert("item removed!", "danger", true);
    const filteredItems = list.filter((item) => item.id !== id);
    setList(filteredItems);
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default GroceryBud;