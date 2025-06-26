// src/components/ProductShared/ViewToggle.jsx
import React from "react";
import { FaThLarge, FaTh, FaBars } from "react-icons/fa";

function ViewToggle({ currentView, onChange }) {
  const buttons = [
    { type: "grid", icon: <FaThLarge /> },
    { type: "smallGrid", icon: <FaTh /> },
    { type: "list", icon: <FaBars /> },
  ];

  return (
    <div className="flex gap-3 items-center">
      {buttons.map(btn => (
        <button
          key={btn.type}
          onClick={() => onChange(btn.type)}
          className={`p-2 border rounded-sm ${
            currentView === btn.type
              ? "bg-black text-white"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
}

export default ViewToggle;
