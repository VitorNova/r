import React from 'react';
import { cn } from '../utils/cn';
import { LeadStatus, LeadStage } from '../types';

interface StatusBadgeProps {
  status: LeadStatus | LeadStage;
  type?: 'status' | 'stage';
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  type = 'status',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  const getStatusConfig = (status: string) => {
    const configs = {
      // Lead Status
      new: { color: 'bg-blue-100 text-blue-800', label: 'Novo' },
      contacted: { color: 'bg-yellow-100 text-yellow-800', label: 'Contatado' },
      qualified: { color: 'bg-purple-100 text-purple-800', label: 'Qualificado' },
      negotiating: { color: 'bg-orange-100 text-orange-800', label: 'Negociando' },
      converted: { color: 'bg-green-100 text-green-800', label: 'Convertido' },
      lost: { color: 'bg-red-100 text-red-800', label: 'Perdido' },
      
      // Lead Stage
      prospect: { color: 'bg-slate-100 text-slate-800', label: 'Prospect' },
      interest: { color: 'bg-blue-100 text-blue-800', label: 'Interesse' },
      consideration: { color: 'bg-yellow-100 text-yellow-800', label: 'Consideração' },
      intent: { color: 'bg-orange-100 text-orange-800', label: 'Intenção' },
      evaluation: { color: 'bg-purple-100 text-purple-800', label: 'Avaliação' },
      purchase: { color: 'bg-green-100 text-green-800', label: 'Compra' }
    };
    
    return configs[status as keyof typeof configs] || { color: 'bg-gray-100 text-gray-800', label: status };
  };

  const config = getStatusConfig(status);

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        sizeClasses[size],
        config.color
      )}
    >
      <span className={cn('status-dot mr-1.5', config.color.replace('text-', 'bg-').replace('100', '500'))} />
      {config.label}
    </span>
  );
};