import React from "react";
import { FaTrash } from "react-icons/fa";

const List = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="flex justify-between p-1">
            <p>{title}</p>
            <button className="text-red-500" onClick={() => removeItem(id)}>
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
