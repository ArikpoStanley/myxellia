import React, { useRef, useEffect } from 'react';
import Icon from '@/components/shared/Icon';
import { budgetFeatures } from '@/lib/data';

interface BudgetModalProps {
  onClose: () => void;
}

export const BudgetModal: React.FC<BudgetModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-[12px] p-0 w-full max-w-[435px] shadow-2xl relative overflow-hidden"
      >
        {/* Header with gradient background */}
        <div className="bg-[url('/images/media.png')] min-h-[213px] text-white bg-fill"></div>

        {/* Content */}
        <div className="py-6 px-10">
          {/* Feature items */}
          <div className="space-y-7 mb-5">
            {budgetFeatures.map((feature) => (
              <div key={feature.id} className="flex items-start gap-2">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Icon name={feature.icon} size="md" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-[16px] leading-[100%]">{feature.title}</h3>
                  <p className="text-xs text-[#606060] leading-[100%]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-2">
            <button 
              onClick={onClose}
              className="bg-[#18181B] w-full hover:bg-[#19181B] text-white py-2 rounded-full font-medium text-lg transition-colors"
            >
              Create Budget
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};