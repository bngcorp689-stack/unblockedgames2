import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Search, Info, Github } from 'lucide-react';
import gamesData from './games.json';
import { GameCard } from './components/GameCard';
import { GamePlayer } from './components/GamePlayer';
import { AdPlaceholder } from './components/AdPlaceholder';

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return gamesData.filter(game => 
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setSelectedGame(null)}
          >
            <div className="bg-emerald-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Gamepad2 className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">HUB<span className="text-emerald-500">GAMES</span></span>
          </div>

          {!selectedGame && (
            <div className="hidden md:flex items-center relative max-w-md w-full mx-8">
              <Search className="absolute left-3 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search unblocked games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all"
              />
            </div>
          )}

          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-400 hover:text-white transition-colors">
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Ad Banner */}
        <AdPlaceholder slot="top-banner" className="mb-8 w-full" />

        <AnimatePresence mode="wait">
          {selectedGame ? (
            <div key="player" className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <GamePlayer 
                  game={selectedGame} 
                  onBack={() => setSelectedGame(null)} 
                />
              </div>
              <div className="lg:col-span-1 space-y-6">
                <div className="sticky top-24">
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Sponsored</h3>
                  <AdPlaceholder slot="sidebar-1" format="rectangle" className="mb-6" />
                  <AdPlaceholder slot="sidebar-2" format="rectangle" />
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-white">Featured Games</h1>
                  <p className="text-zinc-500 mt-1">Hand-picked unblocked games for you.</p>
                </div>
                
                {/* Mobile Search */}
                <div className="md:hidden relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search games..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {filteredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    onClick={setSelectedGame} 
                  />
                ))}
              </div>

              {filteredGames.length === 0 && (
                <div className="text-center py-20">
                  <div className="bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-zinc-700" />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-300">No games found</h3>
                  <p className="text-zinc-500 mt-2">Try searching for something else.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Ad Banner */}
        <div className="mt-12">
          <AdPlaceholder slot="bottom-banner" className="w-full" />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20 py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-emerald-500 p-1 rounded">
                  <Gamepad2 className="w-5 h-5 text-black" />
                </div>
                <span className="text-lg font-bold">HUBGAMES</span>
              </div>
              <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
                The ultimate destination for unblocked games. Play your favorite titles anywhere, anytime, for free. No downloads, no hassle.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">New Games</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Popular</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">DMCA</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs">
              © 2026 Unblocked Games Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
