import React from 'react';
import { classNames } from '@/lib/utils';
import { TIME_PERIODS } from '@/lib/constants';

export interface SalesOverviewHeaderProps {
  dateRange: string;
  selectedPeriod: typeof TIME_PERIODS[number];
  onPeriodChange: (period: typeof TIME_PERIODS[number]) => void;
  onViewTransactions: () => void;
}

export const SalesOverviewHeader: React.FC<SalesOverviewHeaderProps> = ({
  dateRange,
  selectedPeriod,
  onPeriodChange,
  onViewTransactions
}) => {
  return (
    <div className="px-5 pb-2 pt-5 border-b-2 border-gray-200">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h2 className="text-xl text-[#191919] mb-1">Sales Overview</h2>
          <p className="text-xs text-[#606060]">Showing overview {dateRange}</p>
        </div>
        
        <button
          onClick={onViewTransactions}
          className="px-8 py-3 text-xs text-[#191919] border border-[#E4E4E4] rounded-full transition-colors"
        >
          View Transactions
        </button>
      </div>

      {/* Time Period Selector */}
      <div className="flex gap-3 w-full justify-end">
        {TIME_PERIODS.map((period) => (
          <button
            key={period}
            onClick={() => onPeriodChange(period)}
            className={classNames(
              'px-5 py-2 text-sm text-[#3D3D3D] rounded-[8px] transition-colors',
              selectedPeriod === period
                ? 'bg-[#F5F5F5] font-semibold'
                : 'hover:bg-[#F5F5F5]'
            )}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};