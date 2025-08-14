import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { MetricsCards } from '../components/MetricsCards';
import { LeadsPipeline } from '../components/LeadsPipeline';
import { WhatsAppWidget } from '../components/WhatsAppWidget';
import { FipeCalculator } from '../components/FipeCalculator';
import { ConversionChart } from '../components/ConversionChart';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-grid">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex flex-col min-h-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-silver-900 mb-2">
                Dashboard Automotivo
              </h1>
              <p className="text-silver-600">
                Gerencie seus leads, conversões e vendas em tempo real
              </p>
            </div>

            {/* Metrics Cards */}
            <div className="mb-8">
              <MetricsCards />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Leads Pipeline - Takes 2 columns */}
              <div className="lg:col-span-2">
                <LeadsPipeline />
              </div>
              
              {/* WhatsApp Widget */}
              <div>
                <WhatsAppWidget />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Conversion Chart */}
              <div>
                <ConversionChart />
              </div>
              
              {/* FIPE Calculator */}
              <div>
                <FipeCalculator />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;