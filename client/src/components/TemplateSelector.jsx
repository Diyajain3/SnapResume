import { Check, Layout } from 'lucide-react';
import React, { useState } from 'react';

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "A timeless resume layout with structured sections, ideal for corporate and traditional roles."
    },
    {
      id: "modern",
      name: "Modern",
      preview: "A sleek and stylish design with bold headings and a contemporary layout for a fresh look."
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "A simple layout with space for a profile image, perfect for personal branding and creative roles."
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "A clean and distraction-free design focusing purely on content and readability."
    }
  ];

  return (
    <div className="relative inline-block">
      
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-gray-300 px-2 py-1.5 rounded-md bg-blue-100 shadow-sm hover:bg-gray-50 text-gray-700 transition"
      >
        <Layout size={16} className="text-blue-600" />
        <span className="max-sm:hidden font-medium">Template</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden">
          
          {templates.map((template) => {
            const isSelected = selectedTemplate === template.id;

            return (
              <div
                key={template.id}
                onClick={() => {
                  onChange(template.id);
                  setIsOpen(false);
                }}
                className={`relative p-4 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                {/* Check Icon */}
                {isSelected && (
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-1 pr-6">
                  <h4 className={`font-semibold ${
                    isSelected ? "text-blue-700" : "text-gray-800"
                  }`}>
                    {template.name}
                  </h4>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {template.preview}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600"></div>
                )}
              </div>
            );
          })}

        </div>
      )}
    </div>
  );
};

export default TemplateSelector;