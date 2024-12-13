import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="flex justify-between p-1">
            <p>{title}</p>
            <div className="space-x-1">
              <button className="text-green-400">
                <FaEdit />
              </button>
              <button className="text-red-500" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
