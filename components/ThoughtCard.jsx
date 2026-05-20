export default function ThoughtCard({ title, date, content }) {
  return (
    <div className="border rounded-xl p-4">
      <div className="flex items-start justify-between gap-4 pb-2">
        <h3 className="text-xl tracking-tight">{title}</h3>
        <p className="text-sm">{date}</p>
      </div>
      <p className="text-base">{content}</p>
    </div>
  );
}
