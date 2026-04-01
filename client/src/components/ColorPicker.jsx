import React, { useState } from "react";
import { Layout, Check, Palette } from "lucide-react";

const ColorPicker = ({ selectedColor, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

 const colors = [
  { name: "Navy", value: "#1A3E72" },
  { name: "Charcoal", value: "#333333" },
  { name: "Slate", value: "#708090" },
  { name: "Olive", value: "#556B2F" },
  { name: "Burgundy", value: "#800020" },
  { name: "Teal", value: "#008080" },
  { name: "Slate Blue", value: "#483D8B" },
  { name: "Dark Gray", value: "#2F4F4F" },
  { name: "Black", value: "#000000" },
  { name:"white", value:"#ffffff"}
];

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-gray-300 px-2 py-1.5 rounded-md bg-purple-100 shadow-sm hover:bg-gray-50 text-gray-700"
      >
        <Palette size={16} className="text-purple-600 bg-" />
        <span className="font-medium">Color</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md border border-gray-200 shadow-lg p-3 grid grid-cols-5 gap-3 z-10">
          {colors.map((color) => {
            const isSelected = selectedColor === color.value;

            return (
              <div
                key={color.value}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => {
                  onChange(color.value);
                  setIsOpen(false);
                }}
              >
                {/* Color Circle */}
                <div
                  className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-black/25 transition-colors flex items-center justify-center"
                  style={{ backgroundColor: color.value }}
                >
                  {isSelected && (
                    <Check className="text-white w-5 h-5" />
                  )}
                </div>

                {/* Color Name */}
                <p className="text-xs text-gray-600 mt-1 text-center">
                  {color.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;