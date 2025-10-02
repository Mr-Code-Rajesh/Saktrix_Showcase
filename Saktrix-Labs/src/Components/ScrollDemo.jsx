import ScrollArea from "./ScrollArea";

export default function ScrollDemo() {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6">Components</h2>

      <ScrollArea className="h-[60vh] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/60 dark:bg-black/40">
        {/* long list / demos */}
        <div className="space-y-6">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="p-4 rounded-lg bg-white dark:bg-gray-900/40 shadow">
              <h3 className="font-semibold">Demo item #{i + 1}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Short description here.</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
