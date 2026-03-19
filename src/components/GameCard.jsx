import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export const GameCard = ({ game, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
      onClick={() => onClick(game)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-emerald-500 p-3 rounded-full shadow-xl">
            <Play className="w-6 h-6 text-black fill-current" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-zinc-100 font-medium truncate">{game.title}</h3>
        <p className="text-zinc-500 text-xs mt-1">Unblocked & Free</p>
      </div>
    </motion.div>
  );
};
