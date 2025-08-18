import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { MetricsCardProps } from "./SalesOverview";
import { classNames, formatPercentage, getMetricColor } from "@/lib/utils";

export const MetricsCard: React.FC<MetricsCardProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className="bg-white px-4 py-3 rounded-[12px] border border-[#E4E4E4] flex flex-col justify-center"
        >
          <div className={classNames('text-lg font-bold mb-2', getMetricColor(metric.color))}>
            {metric.value}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-semibold text-[#3D3D3D]">
              {metric.label}
            </span>
            <div className="flex items-center space-x-1">
              {/* Conditional arrow rendering */}
              {metric.isPositive ? (
                <ArrowUp size={10} className={`${index === 2? 'bg-[#14B8A6]' : 'bg-[#12B76A]'} text-white rounded-full`} />
              ) : (
                <ArrowDown size={10} className="text-white bg-[#F04438] rounded-full" />
              )}
              <span className={classNames(
                'text-[10px] font-medium',
                !metric.isPositive ? 'text-[#F04438]' : index === 2? 'text-[#14B8A6]' : 'text-[#12B76A]'
              )}>
                {formatPercentage(metric.percentage, metric.isPositive)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};