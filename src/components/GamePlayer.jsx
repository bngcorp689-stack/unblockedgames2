import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Maximize2, RefreshCw } from 'lucide-react';

export const GamePlayer = ({ game, onBack }) => {
  const iframeRef = React.useRef(null);

  const reloadGame = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Games</span>
        </button>
        
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-white hidden md:block">{game.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={reloadGame}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
              title="Reload Game"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
              title="Fullscreen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex-1 bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl min-h-[60vh]">
        <iframe
          ref={iframeRef}
          src={game.url}
          className="w-full h-full border-0"
          allow="fullscreen; autoplay; encrypted-media"
          title={game.title}
        />
      </div>
      
      <div className="mt-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
        <h3 className="text-lg font-semibold text-white mb-2">How to Play {game.title}</h3>
        <p className="text-zinc-400 leading-relaxed">
          Enjoy {game.title} unblocked on our platform. Use the controls provided in the game window. 
          If the game doesn't load, try refreshing the page or clicking the reload button above.
        </p>
      </div>
    </motion.div>
  );
};
