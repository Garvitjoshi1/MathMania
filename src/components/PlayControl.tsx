// src/components/PlayControl.tsx (New Content)

import React from 'react';
import { motion } from 'framer-motion';

interface PlayControlProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const PlayControl: React.FC<PlayControlProps> = ({ label, min, max, step, value, onChange }) => {
  return (
    <motion.div 
      className="p-4 bg-background-dark border border-border-subtle rounded-lg shadow-inner-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex justify-between items-center mb-2">
        {/* Elegant, high-contrast label */}
        <span className="text-secondary-text text-sm uppercase tracking-wider">{label}</span>
        {/* High-contrast value display, optionally using accent color */}
        <span className="text-lg font-mono font-semibold text-accent-main">{value.toFixed(2)}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-border-subtle rounded-full appearance-none cursor-pointer range-lg"
      />
    </motion.div>
  );
};

export default PlayControl;

// You'll need to define custom styles for the slider (range-lg) in tokens.css 
// to make it look truly premium (e.g., custom thumb, no border, accent color track).