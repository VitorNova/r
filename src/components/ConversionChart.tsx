import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, Users, Award } from 'lucide-react';
import { Card } from './Card';
import { mockMetrics } from '../data/mockData';

const monthlyData = [
  { month: 'Jan', leads: 28, conversions: 8 },
  { month: 'Fev', leads: 32, conversions: 12 },
  { month: 'Mar', leads: 35, conversions: 14 },
  { month: 'Abr', leads: 41, conversions: 16 },
  { month: 'Mai', leads: 38, conversions: 15 },
  { month: 'Jun', leads: 45, conversions: 18 }
];

const sourceData = Object.entries(mockMetrics.sourceBreakdown).map(([source, value]) => ({
  name: getSourceLabel(source),
  value,
  color: getSourceColor(source)
}));

function getSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    website: 'Website',
    facebook: 'Facebook',
    google: 'Google',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    referral: 'Indicação',
    walk_in: 'Loja',
    phone: 'Telefone',
    email: 'Email'
  };
  return labels[source] || source;
}

function getSourceColor(source: string): string {
  const colors: Record<string, string> = {
    website: '#3b82f6',
    facebook: '#1877f2',
    google: '#4285f4',
    whatsapp: '#25d366',
    instagram: '#e4405f',
    referral: '#8b5cf6',
    walk_in: '#f59e0b',
    phone: '#ef4444',
    email: '#64748b'
  };
  return colors[source] || '#64748b';
}

export const ConversionChart: React.FC = () => {
  return (
    <Card variant="glass" className="h-[600px] flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-silver-900">Métricas de Conversão</h2>
          <p className="text-sm text-silver-600">Performance de vendas e análise de fontes</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-primary-600" />
            <div>
              <p className="text-sm text-silver-600">Taxa de Conversão</p>
              <p className="text-xl font-bold text-primary-600">{mockMetrics.conversionRate}%</p>
            </div>
          </div>
        </div>
        <div className="bg-white/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-silver-600">Tempo Médio</p>
              <p className="text-xl font-bold text-green-600">{mockMetrics.averageTimeToConversion}d</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {/* Monthly Performance Chart */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-silver-900 mb-3">Performance Mensal</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.3)" />
                <XAxis 
                  dataKey="month" 
                  stroke="#64748b"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Bar 
                  dataKey="leads" 
                  fill="#60a5fa" 
                  name="Leads"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="conversions" 
                  fill="#2563eb" 
                  name="Conversões"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Source Distribution */}
        <div>
          <h3 className="text-lg font-semibold text-silver-900 mb-3">Distribuição por Fonte</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Pie Chart */}
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      borderRadius: '8px',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {sourceData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-silver-700">{item.name}</span>
                  </div>
                  <span className="font-medium text-silver-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};