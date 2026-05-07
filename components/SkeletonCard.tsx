export default function SkeletonCard() {
  return (
    <div className="border border-industrial/10 rounded-xl overflow-hidden shadow-sm animate-pulse">
      <div className="bg-industrial/10 h-64 w-full" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-industrial/10 rounded w-3/4" />
        <div className="h-4 bg-industrial/10 rounded w-full" />
        <div className="h-10 bg-industrial/10 rounded w-full mt-4" />
      </div>
    </div>
  );
}