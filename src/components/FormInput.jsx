function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 focus:border-violet-500 focus:outline-none"
      />
    </div>
  );
}

export default FormInput;