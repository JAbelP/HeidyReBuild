interface SectionDividerProps {
  center?: boolean;
  color?: "red" | "white";
  className?: string;
}

export default function SectionDivider({
  center = false,
  color = "red",
  className = "",
}: SectionDividerProps) {
  const colorClass = color === "white" ? "bg-white opacity-60" : "bg-brand-red";
  const alignClass = center ? "mx-auto" : "";

  return (
    <div className={`w-20 h-1 ${colorClass} ${alignClass} ${className}`} />
  );
}
