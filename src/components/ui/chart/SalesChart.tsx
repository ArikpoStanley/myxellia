import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '@/lib/types';
import { formatYAxisValue } from '@/lib/utils';
import Icon from '../../shared/Icon';

export interface SalesChartProps {
  data: ChartDataPoint[];
}

export const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  return (
    <div className="flex-1">
      <div className="relative h-44 pl-5 bg-white overflow-hidden">
        {/* Chart Navigation - Positioned at middle of chart with proper spacing */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 px-2 py-1.5 rounded-full bg-[#F5F5F5] transition-colors">
          <Icon name='chevronLeft' size='lg' />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 px-2 py-1.5 rounded-full bg-[#E4E4E4] transition-colors">
          <Icon name='chevronRight' size='lg' />
        </button>
        
        {/* Right inner shadow */}
        <div className="absolute right-8 top-0 bottom-8 w-3 bg-gradient-to-l from-gray-100 via-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute left-15 top-0 bottom-8 w-[1px] border z-10 pointer-events-none"></div>
        
        {/* Chart Container */}
        <div className="h-full pr-10">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barCategoryGap="20%"
            >
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 10,
                  fill: '#6B7280',
                  fontWeight: 400
                }}
                dy={-5}
                height={30}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 10,
                  fill: '#6B7280',
                  fontWeight: 400
                }}
                tickFormatter={formatYAxisValue}
                domain={[0, 70_000_000]}
                tickCount={8}
                allowDecimals={false}
                interval={0}
                type="number"
                width={40}
              />

              <Bar 
                dataKey="inflow" 
                fill="#5B5FFF"
                barSize={3}
              />
              <Bar 
                dataKey="mrr" 
                fill="#10B981" 
                barSize={3}
              />
              <Bar 
                dataKey="commission" 
                fill="#EF4444" 
                barSize={3}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};