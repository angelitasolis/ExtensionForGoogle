

interface SubmitButtonProps {
  label: string;
}

export function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      type="submit"
    >
      {label}
    </button>
  );
}