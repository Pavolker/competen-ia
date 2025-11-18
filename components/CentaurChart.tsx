import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { COMPETENCIES } from '../constants';

interface CentaurChartProps {
  scores: Record<string, number>;
}

const CentaurChart: React.FC<CentaurChartProps> = ({ scores }) => {
  const data = COMPETENCIES.map((comp) => ({
    subject: comp.title,
    A: scores[comp.id] || 0,
    fullMark: 3,
  }));

  const renderCustomAxisTick = ({ payload, x, y, textAnchor, stroke, radius }: any) => {
    return (
      <g className="recharts-layer recharts-polar-angle-axis-tick">
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          className="recharts-text recharts-polar-angle-axis-tick-value"
          textAnchor={textAnchor}
          fill="#475569"
          fontSize={10}
          fontWeight={600}
        >
          {payload.value.split(' ').map((word: string, index: number) => (
            <tspan x={x} dy={index === 0 ? 0 : 12} key={index}>
              {word}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full h-[450px] bg-white rounded-2xl shadow-sm p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={renderCustomAxisTick}
          />
          <PolarRadiusAxis angle={30} domain={[0, 3]} tick={false} axisLine={false} />
          <Radar
            name="Competência"
            dataKey="A"
            stroke="#4f46e5"
            strokeWidth={3}
            fill="#6366f1"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CentaurChart;