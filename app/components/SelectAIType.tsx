import React from 'react';

interface SelectAITypeProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectAIType({ value, onChange }: SelectAITypeProps) {
  return (
    <div className="flex flex-col space-y-2">
       <label htmlFor="aiTypeSelect" className="text-gray-700">Selected AI Type:</label>
      <select
        id="aiTypeSelect" 
        className="border-2 border-gray-300 p-2 rounded-md"
        value={value}
        onChange={onChange}
      >
        <option value="chatgpt">ChatGPT</option>
        <option value="gemini">Gemini</option>
      </select>
    </div>
  );
}
