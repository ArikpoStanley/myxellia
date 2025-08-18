import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { classNames, formatPercentage, getMetricColor } from "@/lib/utils";
import { SalesMetric } from '@/lib/types';

interface MetricsCardProps {
  metrics: SalesMetric[];
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ metrics }) => {
  return (
    <div className="grid gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={classNames(
            "flex items-center justify-between p-4 rounded-lg",
            getMetricColor(metric.color) // e.g. bg-blue-100 text-blue-800
          )}
        >
          <div>
            <p className="text-lg font-semibold">{metric.value}</p>
            <p className="text-sm text-gray-500">{metric.label}</p>
          </div>

          <div className="flex items-center space-x-1">
            {/* Conditional arrow rendering */}
            {metric.isPositive ? (
              <ArrowUp className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDown className="h-4 w-4 text-red-500" />
            )}
            <span className="text-sm font-medium">
              {formatPercentage(metric.percentage, metric.isPositive)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
