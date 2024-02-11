import React from "react";

function List({ transactions }) {
  return (
    <ul>
      {transactions.map((transactions, index) => (
        <li key={index}>
          {transactions.desc}:{transactions.type === "income" ? "+" : "-"}{" "}
          {transactions.amount}
        </li>
      ))}
    </ul>
  );
}
export default List;
