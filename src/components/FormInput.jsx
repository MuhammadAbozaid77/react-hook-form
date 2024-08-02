export default function FormInput({ label, error, inputName, children }) {
  return (
    <div className="flex justify-center items-start flex-col mb-3">
      <label htmlFor={`${inputName}`}>{label}</label>
      {children}
      <span className="text-red-500">{error}</span>
    </div>
  );
}
