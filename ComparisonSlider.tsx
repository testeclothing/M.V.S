import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, GripVertical } from 'lucide-react';

interface ComparisonSliderProps {
  image: string;
  aspectRatio?: string;
  labelBefore?: string;
  labelAfter?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  image, 
  aspectRatio = 'aspect-[16/9]',
  labelBefore = "Warehouse (Raw)",
  labelAfter = "Ocean (Synthesized)",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${aspectRatio} overflow-hidden cursor-col-resize select-none bg-gray-100 rounded-lg`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background - Color) */}
      <img 
        src={image} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Label After */}
      <div className="absolute top-6 right-6 z-10 pointer-events-none">
        <span className="text-dark text-[10px] font-bold tracking-widest uppercase bg-neon px-3 py-1 rounded-sm shadow-sm">
            {labelAfter}
        </span>
      </div>

      {/* Before Image (Clipped - Grayscale/Bad) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden will-change-[width]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={image} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover max-w-none grayscale brightness-75 contrast-125"
          style={{ width: '100%' }}
        />
        
        {/* Label Before */}
        <div className="absolute top-6 left-6 z-10 pointer-events-none">
             <span className="text-white text-[10px] font-bold tracking-widest uppercase bg-dark px-3 py-1 rounded-sm shadow-sm">
                {labelBefore}
            </span>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-neon z-20 flex items-center justify-center shadow-[0_0_20px_rgba(204,243,129,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl border border-gray-100">
            <GripVertical className="w-5 h-5 text-dark" />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;