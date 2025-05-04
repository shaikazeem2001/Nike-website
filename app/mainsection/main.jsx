import React from "react";
import "./main.css";

const Main = () => {
  const shoes = [
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/nike-2.webp", name: "Nike Air Zoom", price: "$220" },
    { img: "/shoe-img.webp", name: "Nike React Vision", price: "$150" },
    { img: "/nike-2.webp", name: "Nike Free RN", price: "$170" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/shoe-img.webp", name: "Nike Air Max DNS", price: "$190" },
    { img: "/nike-2.webp", name: "Nike Air Zoom", price: "$220" },
    { img: "/shoe-img.webp", name: "Nike React Vision", price: "$150" },
    { img: "/nike-2.webp", name: "Nike Free RN", price: "$170" },
  ];

  return (
    <section className="main-content-section">
      {shoes.map((shoe, index) => (
        <div key={index} className="card">
          <img className="shoe-css" src={shoe.img} alt="shoe" />
          <h1 className="text-red-500 font-bold">Available in SNKRS</h1>
          <h2 className="text-xl font-semibold">{shoe.name}</h2>
          <p className="text-gray-500">Men's Shoes</p>
          <p className="text-gray-500">1 Color</p>
          <h3 className="text-lg font-bold">{shoe.price}</h3>
        </div>
      ))}
    </section>
  );
};

export default Main;
