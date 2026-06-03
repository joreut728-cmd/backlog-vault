function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl shadow-lg">
        🎮
      </div>

      <div>
        <h1 className="text-xl font-bold text-violet-400">
          Backlog Vault
        </h1>

        <p className="text-xs text-slate-500">
          Your Gaming Library
        </p>
      </div>

    </div>
  );
}

export default Logo;