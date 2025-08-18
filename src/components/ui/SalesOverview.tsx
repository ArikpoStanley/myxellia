import React, { useState } from 'react';
import { ChartDataPoint, SalesMetric } from '@/lib/types';
import { MetricsCard } from './MetricsCard';
import { SalesChart } from './chart/SalesChart';
import { SalesOverviewHeader } from './SalesOverviewHeader';
import { TIME_PERIODS } from '@/lib/constants';

export interface SalesOverviewProps {
  dateRange: string;
  metrics: SalesMetric[];
  chartData: ChartDataPoint[];
  onViewTransactions: () => void;
}

export const SalesOverview: React.FC<SalesOverviewProps> = ({
  dateRange,
  metrics,
  chartData,
  onViewTransactions
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<typeof TIME_PERIODS[number]>('1 Year');

  return (
    <div className="bg-white rounded-[16px] border border-[#E4E4E4]">
      {/* Header Section */}
      <SalesOverviewHeader
        dateRange={dateRange}
        selectedPeriod={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
        onViewTransactions={onViewTransactions}
      />

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-end flex-col lg:flex-row gap-4">
          {/* Chart Area */}
          <SalesChart data={chartData} />

          {/* Metrics Section */}
          <div className="flex-1">
            <MetricsCard metrics={metrics} />
          </div>
        </div>
      </div>
    </div>
  );
};