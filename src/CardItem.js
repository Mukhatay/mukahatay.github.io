import React, { useState, userData } from "react";
import Users from "./Users";

export default function CardItem({
  info,
  setInfo,
  id,
  productName,
  price,
  oldPrice,
  rating,
  feedback,
}) {
  function notify() {
    alert(`Товар под номером ${id} был добаавлен в корзину`);
  }

  return (
    <div>
      <h2>Названия: {productName} </h2>
      <p>
        Цена: {price}{" "}
        <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>{" "}
      </p>
      <p>Rating: {rating}</p>
      <p>Отзывы: {feedback}</p>

      <button
        onClick={() => {
          notify();
        }}
      >
        В Корзину
      </button>
      <button onClick={() => setInfo(info.filter((item) => item.id !== id))}>
        Delete
      </button>
      <Users posts={userData}></Users>
    </div>
  );
}
