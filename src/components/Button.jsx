function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  const styles = {
    primary:
      "rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500",

    secondary:
      "rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-violet-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles[variant]}
    >
      {children}
    </button>
  );
}

export default Button;