// app/routes/index.tsx
import React, { useState } from 'react';
import { InputArea } from '~/components/InputArea';
import { SelectAIType } from '~/components/SelectAIType';
import { WorkflowButton } from '~/components/WorkFlowButton';
import { SubmitButton } from '~/components/SubmitButton';

export default function Index() {
  const [aiType, setAiType] = useState<string>('chatgpt');
  const [query, setQuery] = useState<string>('');
  
  const handleAIChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAiType(event.target.value);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí manejas la lógica de envío del formulario, posiblemente interactuando con una API o algo similar
    console.log({ aiType, query });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <SelectAIType value={aiType} onChange={handleAIChange} />
      <InputArea label="Your Query" placeholder="Enter your query here" value={query} onChange={handleQueryChange} />
      {/* Asumiendo que quieres usar WorkflowButton para algo específico, aquí un ejemplo de cómo podrían incorporarse */}
      <div className="flex gap-2">
        <WorkflowButton label="Flow 1" onClick={() => console.log("Flow 1")} />
        <WorkflowButton label="Flow 2" onClick={() => console.log("Flow 2")} />
        <WorkflowButton label="Flow 3" onClick={() => console.log("Flow 3")} />
        <WorkflowButton label="Flow 4" onClick={() => console.log("Flow 4")} />
      </div>
      <SubmitButton label="Submit" />
    </form>
  );
}
