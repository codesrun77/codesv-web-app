# CodesV Website

This is the codebase for the CodesV website, a digital platform for creating web pages with features like NFC cards, AI assistance, and more.

## Features

- **Bilingual Support**: Full Arabic and English language support
- **User Authentication**: Secure login and registration system
- **Admin Dashboard**: Comprehensive admin panel with analytics
- **Email System**: Automated email confirmation and notifications
- **Payment Integration**: Stripe payment processing
- **NFC Cards**: Digital business card creation and management
- **Multi-Profile Support**: Users can manage multiple profiles
- **Real-time Analytics**: Dashboard with user engagement metrics

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI components
- **Backend**: Supabase (PostgreSQL, Authentication, Real-time)
- **Email**: React Email templates with multiple providers
- **Payments**: Stripe integration
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Supabase account
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/codesrun77/codesv-web-app.git
cd codesv-web-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Configure your environment variables in `.env`:
- Supabase URL and API keys
- Stripe keys
- Email service credentials
- Other service configurations

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:7777`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/          # Admin-specific components
│   ├── shared/         # Shared components
│   └── ui/             # Base UI components
├── pages/              # Page components
│   ├── admin/          # Admin dashboard pages
│   └── dashboard/      # User dashboard pages
├── lib/                # Utility libraries
├── hooks/              # Custom React hooks
├── stores/             # State management
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## Key Features

### Bilingual Support
The application supports both Arabic and English languages with:
- RTL/LTR layout switching
- Complete UI translation
- Language-specific content management

### Admin Dashboard
- User management and analytics
- Email template management
- Payment and subscription tracking
- System configuration

### Email System
- Automated welcome emails
- Email confirmation flow
- Custom email templates
- Multiple email service providers

### Security Features
- Row Level Security (RLS) with Supabase
- CSRF protection
- Secure authentication flow
- Input validation and sanitization

## Deployment

### Vercel Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Vercel:
```bash
npm run deploy
```

### Environment Configuration

Make sure to configure all environment variables in your deployment platform:
- Database credentials
- API keys
- Service configurations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is proprietary software. All rights reserved.

## Support

For support and questions, please contact the development team.