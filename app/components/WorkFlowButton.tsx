

interface WorkflowButtonProps {
  label: string;
  onClick: () => void; 
}

export function WorkflowButton({ label, onClick }: WorkflowButtonProps) {
  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
