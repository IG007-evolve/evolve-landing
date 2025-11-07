export default function SectionHeading({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl font-semibold text-center tracking-tight ${className}`}
    >
      {title}
    </h2>
  );
}
