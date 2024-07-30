const ColorLegend = ({ color, children }: { color: string; children: any }) => {
  const colorClasses: { [key: string]: string } = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    white: "bg-white",
  };

  return (
    <div className="flex gap-3 w-fit">
      <div
        className={`mt-1.5 h-5 rounded-md aspect-square ${
          colorClasses[color] || "bg-gray-500"
        }`}
      />

      <div className="[&>p]:!mb-4">{children}</div>
    </div>
  );
};

export default ColorLegend;
