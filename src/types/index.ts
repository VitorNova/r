export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsappNumber?: string;
  status: LeadStatus;
  stage: LeadStage;
  interestedVehicle?: Vehicle;
  budget?: BudgetRange;
  source: LeadSource;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
  lastContact?: Date;
  nextFollowUp?: Date;
  notes: Note[];
  score: number;
  convertedAt?: Date;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  fipeCode?: string;
  fipePrice?: number;
  dealerPrice?: number;
  color?: string;
  fuel: FuelType;
  transmission: TransmissionType;
  mileage?: number;
  images: string[];
  features: string[];
  condition: VehicleCondition;
  status: VehicleStatus;
}

export interface Note {
  id: string;
  content: string;
  createdAt: Date;
  createdBy: string;
  type: NoteType;
}

export interface Salesperson {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  isActive: boolean;
  performance: PerformanceMetrics;
}

export interface PerformanceMetrics {
  leadsAssigned: number;
  leadsConverted: number;
  conversionRate: number;
  totalSales: number;
  averageDealValue: number;
  responseTime: number; // in minutes
}

export interface ConversionMetrics {
  totalLeads: number;
  qualifiedLeads: number;
  hotLeads: number;
  convertedLeads: number;
  conversionRate: number;
  averageTimeToConversion: number; // in days
  monthlyGrowth: number;
  sourceBreakdown: Record<LeadSource, number>;
}

export interface WhatsAppMessage {
  id: string;
  leadId: string;
  message: string;
  isFromLead: boolean;
  timestamp: Date;
  status: MessageStatus;
}

export interface FipeData {
  code: string;
  make: string;
  model: string;
  year: number;
  fuelType: string;
  price: number;
  month: string;
  year_model: number;
}

// Enums
export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  NEGOTIATING = 'negotiating',
  CONVERTED = 'converted',
  LOST = 'lost'
}

export enum LeadStage {
  PROSPECT = 'prospect',
  INTEREST = 'interest',
  CONSIDERATION = 'consideration',
  INTENT = 'intent',
  EVALUATION = 'evaluation',
  PURCHASE = 'purchase'
}

export enum LeadSource {
  WEBSITE = 'website',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  INSTAGRAM = 'instagram',
  WHATSAPP = 'whatsapp',
  REFERRAL = 'referral',
  WALK_IN = 'walk_in',
  PHONE = 'phone',
  EMAIL = 'email'
}

export enum FuelType {
  GASOLINE = 'gasoline',
  ETHANOL = 'ethanol',
  FLEX = 'flex',
  DIESEL = 'diesel',
  ELECTRIC = 'electric',
  HYBRID = 'hybrid'
}

export enum TransmissionType {
  MANUAL = 'manual',
  AUTOMATIC = 'automatic',
  CVT = 'cvt'
}

export enum VehicleCondition {
  NEW = 'new',
  USED = 'used',
  CERTIFIED = 'certified'
}

export enum VehicleStatus {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  SOLD = 'sold'
}

export enum NoteType {
  CALL = 'call',
  EMAIL = 'email',
  WHATSAPP = 'whatsapp',
  MEETING = 'meeting',
  GENERAL = 'general'
}

export enum MessageStatus {
  SENT = 'sent',
  DELIVERED = 'delivered',
  READ = 'read',
  FAILED = 'failed'
}

export interface BudgetRange {
  min: number;
  max: number;
}