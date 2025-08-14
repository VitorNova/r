import { Lead, Vehicle, Salesperson, ConversionMetrics, LeadStatus, LeadStage, LeadSource, FuelType, TransmissionType, VehicleCondition, VehicleStatus, NoteType } from '../types';

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    email: 'carlos.silva@email.com',
    phone: '+55 11 99999-1234',
    whatsappNumber: '+55 11 99999-1234',
    status: LeadStatus.QUALIFIED,
    stage: LeadStage.CONSIDERATION,
    source: LeadSource.WHATSAPP,
    assignedTo: 'salesperson-1',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
    lastContact: new Date('2024-01-19'),
    nextFollowUp: new Date('2024-01-22'),
    score: 85,
    budget: { min: 80000, max: 120000 },
    notes: [
      {
        id: 'note-1',
        content: 'Cliente interessado em SUV, preferencialmente Honda CR-V',
        createdAt: new Date('2024-01-19'),
        createdBy: 'salesperson-1',
        type: NoteType.WHATSAPP
      }
    ]
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '+55 11 88888-5678',
    whatsappNumber: '+55 11 88888-5678',
    status: LeadStatus.NEGOTIATING,
    stage: LeadStage.INTENT,
    source: LeadSource.FACEBOOK,
    assignedTo: 'salesperson-2',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-21'),
    lastContact: new Date('2024-01-21'),
    nextFollowUp: new Date('2024-01-23'),
    score: 92,
    budget: { min: 60000, max: 90000 },
    notes: [
      {
        id: 'note-2',
        content: 'Interessada no Toyota Corolla 2023, aguardando aprovação do financiamento',
        createdAt: new Date('2024-01-21'),
        createdBy: 'salesperson-2',
        type: NoteType.CALL
      }
    ]
  },
  {
    id: '3',
    name: 'João Oliveira',
    email: 'joao.oliveira@email.com',
    phone: '+55 11 77777-9012',
    status: LeadStatus.NEW,
    stage: LeadStage.PROSPECT,
    source: LeadSource.WEBSITE,
    assignedTo: 'salesperson-1',
    createdAt: new Date('2024-01-21'),
    updatedAt: new Date('2024-01-21'),
    score: 45,
    budget: { min: 40000, max: 70000 },
    notes: []
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    phone: '+55 11 66666-3456',
    whatsappNumber: '+55 11 66666-3456',
    status: LeadStatus.CONTACTED,
    stage: LeadStage.INTEREST,
    source: LeadSource.GOOGLE,
    assignedTo: 'salesperson-3',
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-20'),
    lastContact: new Date('2024-01-20'),
    nextFollowUp: new Date('2024-01-24'),
    score: 68,
    budget: { min: 100000, max: 150000 },
    notes: [
      {
        id: 'note-3',
        content: 'Primeira conversa realizada, demonstrou interesse em veículos premium',
        createdAt: new Date('2024-01-20'),
        createdBy: 'salesperson-3',
        type: NoteType.CALL
      }
    ]
  }
];

export const mockVehicles: Vehicle[] = [
  {
    id: 'vehicle-1',
    make: 'Honda',
    model: 'CR-V',
    year: 2023,
    fipeCode: '038014-1',
    fipePrice: 185000,
    dealerPrice: 189000,
    color: 'Branco Perola',
    fuel: FuelType.GASOLINE,
    transmission: TransmissionType.CVT,
    mileage: 15000,
    images: [
      '/images/honda-crv-1.jpg',
      '/images/honda-crv-2.jpg'
    ],
    features: ['Central Multimídia', 'Ar Condicionado', 'Direção Elétrica', 'Airbags', 'ABS'],
    condition: VehicleCondition.USED,
    status: VehicleStatus.AVAILABLE
  },
  {
    id: 'vehicle-2',
    make: 'Toyota',
    model: 'Corolla',
    year: 2023,
    fipeCode: '018053-2',
    fipePrice: 142000,
    dealerPrice: 145000,
    color: 'Prata',
    fuel: FuelType.FLEX,
    transmission: TransmissionType.CVT,
    mileage: 8000,
    images: [
      '/images/toyota-corolla-1.jpg',
      '/images/toyota-corolla-2.jpg'
    ],
    features: ['Toyota Safety Sense', 'Central Multimídia', 'Ar Condicionado Digital', 'Banco de Couro'],
    condition: VehicleCondition.USED,
    status: VehicleStatus.AVAILABLE
  }
];

export const mockSalespeople: Salesperson[] = [
  {
    id: 'salesperson-1',
    name: 'Roberto Mendes',
    email: 'roberto.mendes@dealership.com',
    phone: '+55 11 99998-1111',
    avatar: '/avatars/roberto.jpg',
    isActive: true,
    performance: {
      leadsAssigned: 45,
      leadsConverted: 12,
      conversionRate: 26.7,
      totalSales: 1680000,
      averageDealValue: 140000,
      responseTime: 8
    }
  },
  {
    id: 'salesperson-2',
    name: 'Fernanda Lima',
    email: 'fernanda.lima@dealership.com',
    phone: '+55 11 99998-2222',
    avatar: '/avatars/fernanda.jpg',
    isActive: true,
    performance: {
      leadsAssigned: 38,
      leadsConverted: 15,
      conversionRate: 39.5,
      totalSales: 2100000,
      averageDealValue: 140000,
      responseTime: 5
    }
  },
  {
    id: 'salesperson-3',
    name: 'Marcus Ferreira',
    email: 'marcus.ferreira@dealership.com',
    phone: '+55 11 99998-3333',
    avatar: '/avatars/marcus.jpg',
    isActive: true,
    performance: {
      leadsAssigned: 52,
      leadsConverted: 18,
      conversionRate: 34.6,
      totalSales: 2520000,
      averageDealValue: 140000,
      responseTime: 12
    }
  }
];

export const mockMetrics: ConversionMetrics = {
  totalLeads: 135,
  qualifiedLeads: 89,
  hotLeads: 23,
  convertedLeads: 45,
  conversionRate: 33.3,
  averageTimeToConversion: 18,
  monthlyGrowth: 12.5,
  sourceBreakdown: {
    [LeadSource.WEBSITE]: 35,
    [LeadSource.FACEBOOK]: 28,
    [LeadSource.GOOGLE]: 22,
    [LeadSource.WHATSAPP]: 18,
    [LeadSource.INSTAGRAM]: 15,
    [LeadSource.REFERRAL]: 12,
    [LeadSource.WALK_IN]: 3,
    [LeadSource.PHONE]: 2,
    [LeadSource.EMAIL]: 0
  }
};