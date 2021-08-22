import React from "react";

export default function CategoryListItem({ title, active, setSelected, id }) {
  return (
    <li
      className={`category-list-item ${active && "active"}`}
      onClick={() => setSelected(id)}
    >
      <span className="underlined">{title}</span>
    </li>
  );
}
