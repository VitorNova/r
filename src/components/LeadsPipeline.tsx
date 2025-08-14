import React from 'react';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { StatusBadge } from './StatusBadge';
import { mockLeads, mockSalespeople } from '../data/mockData';
import { Lead } from '../types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const LeadsPipeline: React.FC = () => {
  const getSalespersonName = (id: string) => {
    return mockSalespeople.find(s => s.id === id)?.name || 'N/A';
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (date: Date) => {
    return format(date, "dd 'de' MMM", { locale: ptBR });
  };

  return (
    <Card variant="glass" className="h-[600px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-silver-900">Pipeline de Leads</h2>
          <p className="text-sm text-silver-600">Acompanhe o progresso dos seus leads</p>
        </div>
        <Button size="sm">
          Novo Lead
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="space-y-4">
          {mockLeads.map((lead: Lead) => (
            <Card 
              key={lead.id} 
              variant="default" 
              hover 
              padding="sm"
              className="border-l-4 border-l-primary-500"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-silver-900">{lead.name}</h3>
                    <div className="flex space-x-2">
                      <StatusBadge status={lead.status} />
                      <StatusBadge status={lead.stage} type="stage" size="sm" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-silver-600">
                    <div>
                      <p className="font-medium">Contato</p>
                      <p>{lead.email}</p>
                      <p>{lead.phone}</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Orçamento</p>
                      <p>
                        {lead.budget 
                          ? `${formatCurrency(lead.budget.min)} - ${formatCurrency(lead.budget.max)}`
                          : 'Não informado'
                        }
                      </p>
                      <p>Score: <span className="font-medium text-primary-600">{lead.score}</span></p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Responsável</p>
                      <p>{getSalespersonName(lead.assignedTo)}</p>
                      <p>
                        {lead.nextFollowUp && (
                          <>
                            Próximo follow-up: {formatDate(lead.nextFollowUp)}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 ml-4">
                  <Button variant="ghost" size="sm" icon={<Phone className="w-4 h-4" />} />
                  <Button variant="ghost" size="sm" icon={<MessageCircle className="w-4 h-4" />} />
                  <Button variant="ghost" size="sm" icon={<Mail className="w-4 h-4" />} />
                </div>
              </div>
              
              {lead.notes.length > 0 && (
                <div className="mt-3 pt-3 border-t border-silver-200">
                  <div className="flex items-center text-sm text-silver-600">
                    <Clock className="w-4 h-4 mr-1" />
                    Última nota: {lead.notes[lead.notes.length - 1].content}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};