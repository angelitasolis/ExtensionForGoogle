
import React from 'react';

interface InputAreaProps {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }
  export function InputArea({ label, placeholder = "", value, onChange }: InputAreaProps) {
    return (
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700">{label}</label>
        <textarea
          className="border-2 border-gray-300 p-2 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }