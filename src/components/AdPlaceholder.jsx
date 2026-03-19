import React from 'react';

export const AdPlaceholder = ({ slot, format = 'auto', className = '' }) => {
  return (
    <div 
      className={`bg-zinc-900/50 border border-zinc-800 flex items-center justify-center overflow-hidden rounded-lg ${className}`}
      style={{ minHeight: format === 'rectangle' ? '250px' : '90px' }}
    >
      <div className="text-center p-4">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-2">Advertisement</span>
        <div className="text-zinc-600 font-mono text-xs">
          Ad Slot: {slot}
          <br />
          Format: {format}
        </div>
        {/* Actual AdSense code would go here:
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
        */}
      </div>
    </div>
  );
};
