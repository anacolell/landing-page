import React from "react";

export default function CategoryListItem({
  title,
  activeCard,
  setSelected,
  id,
}) {
  return (
    <li
      className={`category-list-item ${activeCard && "activeCard"}`}
      onClick={() => setSelected(id)}
    >
      <span className="underlined">{title}</span>
    </li>
  );
}
