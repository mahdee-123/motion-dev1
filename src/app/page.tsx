export default function Home() {
  return (
    // h-svh ensures no scroll even with address bar
    <main className="h-svh w-full flex flex-col overflow-hidden bg-background">
      
      {/* Scrollable Content Area (jodi thake) */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Tomar main app content ekhane thakbe */}
        <h1>Aether App Content</h1>
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="h-16 border-t border-white/10 flex items-center justify-around bg-background-secondary">
        <button>Home</button>
        <button>Search</button>
        <button>Settings</button>
      </nav>

    </main>
  );
}