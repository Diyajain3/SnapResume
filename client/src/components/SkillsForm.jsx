import { Plus, Sparkles, X } from 'lucide-react';
import React, { useState } from 'react';

const SkillsForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState("");

  const addNewSkill = () => {
    if (
      newSkill.trim() &&
      !data.some(skill => skill.toLowerCase() === newSkill.trim().toLowerCase())
    ) {
      onChange([...data, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewSkill();
    }
  };

  return (
    <div className="space-y-4">

      {/* Header */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          Skills
        </h3>
        <p className="text-sm text-gray-500">
          Add your Technical and Soft Skills
        </p>
      </div>

      {/* Input + Button */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a skill (e.g, JavaScript, Project Management)"
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button
          onClick={addNewSkill}
          disabled={!newSkill.trim()}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Skills List */}
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="ml-1 hover:bg-purple-200 rounded-full p-0.5 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">
          <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300" />
          <p>No skills added yet</p>
        </div>
      )}

      {/* Tip Section */}
      <div className="bg-purple-50 p-3 rounded-lg">
        <p className="text-sm text-purple-800">
          <strong>Tip:</strong> Add 8–12 relevant skills. Include both technical
          skills (programming languages, tools) and soft skills (leadership,
          communication).
        </p>
      </div>

    </div>
  );
};

export default SkillsForm;