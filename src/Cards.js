import React, { useState, useEffect } from "react";

import CardItem from "./CardItem";

export default function Cards() {
  const [text, setText] = useState(1);
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [price, setPrice] = useState(0);

  let [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const [comments, setComments] = useState([
    {
      postId: 2,
      id: 6,
      name: "et fugit eligendi deleniti quidem qui sint nihil autem",
      email: "Presley.Mueller@myrl.com",
      body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
    },
    {
      postId: 2,
      id: 7,
      name: "repellat consequatur praesentium vel minus molestias voluptatum",
      email: "Dallas@ole.me",
      body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
    },
    {
      postId: 2,
      id: 8,
      name: "et omnis dolorem",
      email: "Mallory_Kunze@marie.org",
      body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
    },
    {
      postId: 2,
      id: 9,
      name: "provident id voluptas",
      email: "Meghan_Littel@rene.us",
      body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
    },
    {
      postId: 2,
      id: 10,
      name: "eaque et deleniti atque tenetur ut quo ut",
      email: "Carmen_Keeling@caroline.name",
      body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
    },
  ]);

  const [info, setInfo] = useState([
    {
      id: 1,
      productName: "Смартфон Apple iPhone 11 128GB Black",
      price: 289990,
      oldPrice: 339990,
      rating: 5,
      feedback: 152,
    },
    {
      id: 2,
      productName: "Кондиционер Beko BBFDA-070 (+инст)",
      price: 155555,
      oldPrice: 239990,
      rating: 3,
      feedback: 86,
    },
    {
      id: 3,
      productName: "Наушники Apple AirPods with Charging Case (MV7N2RU/A)",
      price: 55000,
      oldPrice: 80000,
      rating: 5,
      feedback: 38,
    },
  ]);

  return (
    <div>
      <h1>Technodom</h1>
      {info.map((item) => {
        return (
          <CardItem
            key={item.id}
            id={item.id}
            productName={item.productName}
            oldPrice={item.oldPrice}
            price={item.price}
            rating={item.rating}
            feedback={item.feedback}
            setInfo={setInfo}
            info={info}
          ></CardItem>
        );
      })}
      <input
        type="text"
        placeholder="Напишите данные"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>{name}</p>
      <p>{text}</p>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="text"
      ></input>
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder="text"
      ></input>
      <button
        onClick={() =>
          setInfo([
            ...info,
            {
              id: info.length + 1,
              productName: inputValue,
              price: price,
              oldPrice: 339990,
              rating: 5,
              feedback: ["nedune", "meidei"].length,
            },
          ])
        }
      >
        ADD
      </button>
      <button onClick={() => setText(text + 1)}>+</button>
      <button onClick={() => setText(text - 1)}>-</button>
      <button onClick={() => setText(0)}>Delete</button>
      <button onClick={() => setName("")}>DeleteName</button>
    </div>
  );
}
