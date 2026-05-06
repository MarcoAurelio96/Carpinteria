export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-20">
      
      <div className="flex justify-center mb-12">
        <div className="h-12 w-80 bg-industrial/20 animate-pulse rounded-md"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {[1, 2, 3].map((i) => (
          <div key={i} className="border border-industrial/20 rounded-xl overflow-hidden shadow-sm">
            
            <div className="h-64 w-full bg-industrial/30 animate-pulse"></div>
            
            <div className="p-6 space-y-4">
              <div className="h-8 bg-industrial/20 animate-pulse rounded-md w-3/4"></div>
              <div className="h-4 bg-industrial/20 animate-pulse rounded-md w-full"></div>
              <div className="h-4 bg-industrial/20 animate-pulse rounded-md w-5/6"></div>
              <div className="h-4 bg-industrial/20 animate-pulse rounded-md w-1/3 pt-4"></div>
            </div>

          </div>
        ))}

      </div>
    </main>
  );
}