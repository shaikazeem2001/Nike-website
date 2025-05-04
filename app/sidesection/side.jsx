import React from "react";
import './side.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Filters</h2>
      
      {/* Category Section */}
      <div className="sidebar-section">
        <h3 className="sidebar-heading">Category</h3>
        <label><input type="checkbox" /> Sneakers</label>
        <label><input type="checkbox" /> Running Shoes</label>
        <label><input type="checkbox" /> Basketball</label>
      </div>

      {/* Price Section */}
      <div className="sidebar-section">
        <h3 className="sidebar-heading">Price</h3>
        <label><input type="radio" name="price" /> Under $100</label>
        <label><input type="radio" name="price" /> $100 - $200</label>
        <label><input type="radio" name="price" /> $200+</label>
      </div>

      {/* Size Section */}
      <div className="sidebar-section">
        <h3 className="sidebar-heading">Size</h3>
        <div className="size-options">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>11</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
