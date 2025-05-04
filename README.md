# NGO Connect - Donation Management Platform

NGO Connect is a centralized, secure, and transparent donation platform that connects NGOs with donors (individuals, corporates, and institutions), ensuring full transparency and impact tracking.

## Features

### For NGOs
- **Secure Registration & KYC Verification**: Complete verification with 12A, 80G, PAN, and other documents
- **Profile Management**: Manage organization information, causes, and donation needs
- **Donation Tracking**: Monitor received donations and generate reports
- **Impact Stories**: Share the impact of donations through stories and photos
- **Fund Utilization Reports**: Upload reports to maintain transparency

### For Donors
- **Find Verified NGOs**: Search for NGOs by location, cause, or compliance status
- **Multiple Donation Options**: Donate money, goods, or volunteer time
- **Secure Payment Gateway**: Make donations through various payment methods
- **Tax Benefits**: Download 80G certificates for tax deductions
- **Impact Tracking**: See how your donations are making a difference
- **Badges & Gamification**: Earn badges and join donation challenges

### For Administrators
- **NGO Verification**: Review and approve NGO applications
- **Donation Monitoring**: Track donations and detect suspicious activities
- **Platform Management**: Manage users, NGOs, and system settings
- **Generate Reports**: Create analytical reports on platform activity

## Tech Stack

- **Frontend**: Next.js with React
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js with JWT and OTP
- **Payment Gateway**: Razorpay integration
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/ngo-connect.git
cd ngo-connect
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ngo-connect/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── (auth)/           # Authentication pages
│   │   ├── dashboard/        # Dashboard pages for NGOs, Donors, and Admins
│   │   └── api/              # API routes
│   ├── components/           # Reusable components
│   │   ├── ui/               # UI components
│   │   └── layout/           # Layout components
│   └── lib/                  # Utility functions and shared logic
└── public/                   # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- NGO Onboarding: ngo@ngoconnect.org
- Donor Support: support@ngoconnect.org
- Legal Help: legal@ngoconnect.org
