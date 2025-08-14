import React from 'react';
import { Users, UserCheck, TrendingUp, DollarSign } from 'lucide-react';
import { Card } from './Card';
import { mockMetrics } from '../data/mockData';

const metrics = [
  {
    name: 'Total de Leads',
    value: mockMetrics.totalLeads,
    change: '+12%',
    changeType: 'positive',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Leads Qualificados',
    value: mockMetrics.qualifiedLeads,
    change: '+8%',
    changeType: 'positive',
    icon: UserCheck,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Taxa de Conversão',
    value: `${mockMetrics.conversionRate}%`,
    change: '+2.1%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    name: 'Leads Quentes',
    value: mockMetrics.hotLeads,
    change: '+15%',
    changeType: 'positive',
    icon: DollarSign,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  }
];

export const MetricsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.name} variant="glass" hover className="animate-fadeIn">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-silver-600 mb-1">
                {metric.name}
              </p>
              <p className="text-2xl font-bold text-silver-900">
                {metric.value}
              </p>
              <p className={`text-sm ${
                metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              } flex items-center mt-1`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {metric.change} este mês
              </p>
            </div>
            <div className={`p-3 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};