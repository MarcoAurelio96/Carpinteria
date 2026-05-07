import SkeletonCard from "@/components/SkeletonCard";

export default function LoadingProyectos() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-20">
      <div className="h-12 bg-industrial/10 rounded w-1/3 mx-auto mb-12 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}