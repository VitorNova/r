import React, { useState } from 'react';
import { Calculator, Search, Car, Calendar, Fuel } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

interface FipeResult {
  make: string;
  model: string;
  year: number;
  fuelType: string;
  price: number;
  code: string;
}

const mockFipeData: FipeResult[] = [
  {
    make: 'Honda',
    model: 'CR-V EXL 2.0 16V 4WD',
    year: 2023,
    fuelType: 'Gasolina',
    price: 185420,
    code: '038014-1'
  },
  {
    make: 'Toyota',
    model: 'Corolla XEI 2.0 Flex',
    year: 2023,
    fuelType: 'Flex',
    price: 142300,
    code: '018053-2'
  },
  {
    make: 'Volkswagen',
    model: 'T-Cross Highline 1.0 TSI',
    year: 2023,
    fuelType: 'Gasolina',
    price: 96800,
    code: '059142-8'
  }
];

export const FipeCalculator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<FipeResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const filteredVehicles = mockFipeData.filter(vehicle =>
    vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <Card variant="glass" className="h-[600px] flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <Calculator className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-silver-900">FIPE Calculator</h2>
          <p className="text-sm text-silver-600">Consulte preços de tabela FIPE</p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-silver-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por marca ou modelo..."
              className="w-full pl-10 pr-3 py-2 border border-silver-200 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <Button 
            onClick={handleSearch}
            loading={isSearching}
            icon={<Search className="w-4 h-4" />}
          >
            Buscar
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-auto">
        {searchTerm ? (
          <div className="space-y-3">
            {filteredVehicles.map((vehicle) => (
              <Card
                key={vehicle.code}
                variant="default"
                hover
                padding="sm"
                className={`cursor-pointer transition-all ${
                  selectedVehicle?.code === vehicle.code 
                    ? 'ring-2 ring-primary-500 bg-primary-50' 
                    : ''
                }`}
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Car className="w-4 h-4 text-silver-600" />
                      <h3 className="font-semibold text-silver-900">
                        {vehicle.make} {vehicle.model}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-silver-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{vehicle.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Fuel className="w-3 h-3" />
                        <span>{vehicle.fuelType}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-silver-500 mt-1">
                      Código FIPE: {vehicle.code}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary-600">
                      {formatCurrency(vehicle.price)}
                    </p>
                    <p className="text-xs text-silver-500">Tabela FIPE</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calculator className="w-12 h-12 text-silver-400 mx-auto mb-4" />
            <p className="text-silver-600">
              Digite o nome de uma marca ou modelo para consultar o preço FIPE
            </p>
          </div>
        )}
      </div>

      {/* Selected Vehicle Details */}
      {selectedVehicle && (
        <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h3 className="font-semibold text-primary-900 mb-2">Veículo Selecionado</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-primary-700">Preço FIPE</p>
              <p className="text-xl font-bold text-primary-900">
                {formatCurrency(selectedVehicle.price)}
              </p>
            </div>
            <div className="space-y-1">
              <p><span className="font-medium">Ano:</span> {selectedVehicle.year}</p>
              <p><span className="font-medium">Combustível:</span> {selectedVehicle.fuelType}</p>
              <p><span className="font-medium">Código:</span> {selectedVehicle.code}</p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};