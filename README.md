# Automotive Dealership Dashboard - CRM & Lead Management

A modern, professional automotive dealership dashboard interface built with React and TypeScript. Features a comprehensive CRM system with lead management, WhatsApp integration, FIPE price calculator, and advanced conversion metrics tracking.

## 🚗 Features

### Core CRM Functionality
- **Lead Management Pipeline**: Complete customer journey tracking from prospect to conversion
- **Customer Database**: Comprehensive lead profiles with contact information, budget, and preferences
- **Status Tracking**: Real-time lead status and stage management with visual indicators
- **Follow-up Management**: Automated reminders and scheduled follow-up tracking

### Integrated Tools
- **WhatsApp Integration**: Live chat widget with conversation history and active lead management
- **FIPE Price Calculator**: Real-time vehicle price lookup using FIPE table data
- **Conversion Metrics**: Advanced analytics with charts showing performance trends
- **Sales Dashboard**: Key performance indicators and conversion rate tracking

### Modern UI/UX
- **Glass Morphism Design**: Beautiful frosted glass effects throughout the interface
- **Blue & Silver Theme**: Professional automotive industry color scheme
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Real-time Updates**: Live notifications and status updates

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom glass morphism effects
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React for modern iconography
- **Build Tool**: Vite for fast development and building
- **State Management**: React hooks and context
- **Date Handling**: date-fns for internationalization

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd automotive-dealership-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📊 Dashboard Components

### Main Dashboard
- **Metrics Cards**: Key performance indicators with growth trends
- **Lead Pipeline**: Customer journey visualization with status tracking
- **WhatsApp Widget**: Integrated messaging system
- **Conversion Charts**: Monthly performance and source analysis

### Lead Management
- Detailed lead profiles with contact information
- Budget tracking and vehicle preferences
- Automated scoring system
- Follow-up scheduling and reminders
- Activity history and notes

### WhatsApp Integration
- Real-time message display
- Active lead conversations
- Quick action buttons for calls and emails
- Online status indicator

### FIPE Calculator
- Vehicle search by make and model
- Real-time price lookup
- Detailed vehicle specifications
- Price comparison tools

### Analytics & Metrics
- Conversion rate tracking
- Source performance analysis
- Monthly trend visualization
- Lead quality scoring

## 🎨 Design Features

### Glass Morphism Effects
The dashboard uses modern glass morphism design principles:
- Translucent backgrounds with backdrop blur
- Subtle borders and shadows
- Layered visual hierarchy
- Smooth hover transitions

### Color Scheme
- **Primary Blue**: Professional automotive branding
- **Silver Tones**: Modern, premium feel
- **Accent Colors**: Status indicators and call-to-actions
- **Glass Effects**: Transparency and depth

### Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Touch-friendly interfaces
- Optimized for various screen sizes

## 📈 CRM Features

### Lead Scoring
Automatic lead scoring based on:
- Budget alignment
- Response time
- Engagement level
- Vehicle interest specificity

### Pipeline Management
- Visual stage progression
- Drag-and-drop functionality (expandable)
- Automated stage transitions
- Conversion tracking

### Follow-up System
- Scheduled reminder system
- Activity logging
- Communication history
- Performance tracking

## 🔧 Customization

### Adding New Features
The modular component structure makes it easy to add new features:
1. Create new components in `/src/components/`
2. Add corresponding types in `/src/types/`
3. Update mock data in `/src/data/mockData.ts`
4. Integrate into the dashboard layout

### Styling Customization
- Update colors in `tailwind.config.js`
- Modify glass effects in `src/index.css`
- Customize component variants in individual component files

## 🔄 Data Integration

Currently uses mock data for demonstration. To integrate with real APIs:

1. **Lead Management**: Replace mock data with API calls
2. **WhatsApp Integration**: Implement WhatsApp Business API
3. **FIPE Calculator**: Connect to FIPE API endpoints
4. **CRM Backend**: Integrate with your existing CRM system

## 📱 Mobile Optimization

The dashboard is fully responsive with:
- Collapsible sidebar navigation
- Touch-optimized interactions
- Adaptive grid layouts
- Mobile-specific UI patterns

## 🎯 Business Benefits

- **Increased Conversion Rates**: Visual pipeline management and lead scoring
- **Improved Customer Experience**: WhatsApp integration and quick response tools
- **Data-Driven Decisions**: Comprehensive analytics and reporting
- **Streamlined Operations**: Automated follow-ups and centralized lead management
- **Professional Image**: Modern, premium interface design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏆 Professional Use

This dashboard is designed for professional automotive dealerships and can be customized for:
- Car dealerships of all sizes
- Motorcycle dealers
- Heavy equipment sales
- Fleet management companies
- Auto financing companies

The modern design and comprehensive feature set make it suitable for both small dealerships and large automotive groups.