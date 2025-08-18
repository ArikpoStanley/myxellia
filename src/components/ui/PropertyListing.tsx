'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORY_CONFIG } from '@/lib/constants/index';
import { PropertyListing } from '@/lib/types';
import { classNames } from '@/lib/utils/index';

interface PropertyListingCardProps {
  property: PropertyListing;
  onClick?: (property: PropertyListing) => void;
  autoSlideInterval?: number;
}

export const PropertyListingCard: React.FC<PropertyListingCardProps> = ({ 
  property, 
  onClick,
  autoSlideInterval = 5000
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const categoryConfig = CATEGORY_CONFIG[property.category];
  const images = property.images || [];

  // Auto-slide functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval]);

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className="relative rounded-xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
      onClick={() => onClick?.(property)}
    >
      {/* Background Image with Animation */}
      <div className="aspect-[5/3.5] relative">
        <AnimatePresence mode="wait">
          {images.length > 0 && (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].alt}
                fill
                className="object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={currentImageIndex === 0}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Dark Overlay - Enhanced for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
        
        {/* Navigation Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => handleDotClick(index, e)}
                className={classNames(
                  'w-1.5 h-1.5 rounded-full transition-all duration-300 hover:scale-125',
                  currentImageIndex === index 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className=" font-semibold">
            <span>{categoryConfig.label}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-1 drop-shadow-sm">{property.title}</h3>
        </div>
      </div>
    </div>
  );
};