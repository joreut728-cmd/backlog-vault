function StatusBadge({ status }) {
  const statusStyles = {
    Playing:
      "bg-green-500/20 text-green-300",

    Completed:
      "bg-blue-500/20 text-blue-300",

    Wishlist:
      "bg-yellow-500/20 text-yellow-300",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm ${statusStyles[status]}`}
    >
     {status}
    </span>
  );
}

export default StatusBadge;