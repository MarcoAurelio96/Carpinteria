export default function LoadingDetalle() {
  return (
    <main className="w-full max-w-5xl mx-auto px-8 py-20 animate-pulse">
      
      <div className="h-6 w-32 bg-industrial/20 rounded mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="h-125 w-full bg-industrial/30 rounded-xl"></div>

        <div className="w-full">
          <div className="h-12 w-3/4 bg-industrial/20 rounded mb-6"></div>
          
          <div className="space-y-3 mb-8 w-full">
            <div className="h-4 w-full bg-industrial/20 rounded"></div>
            <div className="h-4 w-full bg-industrial/20 rounded"></div>
            <div className="h-4 w-4/5 bg-industrial/20 rounded"></div>
          </div>

          <div className="bg-madera-100 p-6 rounded-lg space-y-4 w-full">
            <div className="h-6 w-1/2 bg-madera-500/20 rounded mb-4"></div>
            <div className="h-4 w-full bg-industrial/20 rounded"></div>
            <div className="h-4 w-4/5 bg-industrial/20 rounded"></div>
            <div className="h-4 w-3/4 bg-industrial/20 rounded"></div>
          </div>
        </div>
      </div>

    </main>
  );
}