# SIMS - Student Information Management System

[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A comprehensive web-based Student Information Management System designed for degree colleges to streamline academic administration and enhance educational management.

## 🚀 Features

### Core Modules
- **👥 Multi-Role Dashboard** - Admin, Teacher, Student, Parent & Super Admin interfaces
- **📊 Attendance Management** - Real-time tracking with analytics and reporting
- **🎓 Academic Management** - Course, subject, and class administration
- **📝 Assignment System** - Create, submit, and grade assignments
- **💰 Fee Management** - Payment tracking with QR code integration
- **📅 Event Calendar** - Schedule and manage academic events
- **📚 Digital Library** - Resource management and access control
- **💬 Messaging System** - Internal communication platform
- **📋 Examination Module** - Exam scheduling and result management

### Advanced Features
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🔐 Role-Based Access Control** - Secure authentication and authorization
- **📈 Analytics Dashboard** - Visual charts and performance metrics
- **🔔 Announcement System** - Institution-wide notifications
- **📄 Report Generation** - Comprehensive academic reports
- **🏥 Leave Management** - Digital leave application system

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, Vite |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React, React Icons |
| **Charts** | Recharts |
| **Build Tool** | Vite with HMR |
| **Deployment** | Vercel |

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/PaluruSubbaNarasaiah/Sims-Degree.git
   cd Sims-Degree
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── pages/
│   ├── admin/          # Admin dashboard and modules
│   ├── teacher/        # Teacher interface
│   ├── student/        # Student portal
│   ├── parent/         # Parent dashboard
│   └── superadmin/     # Super admin controls
├── routes/             # Application routing
├── assets/             # Static assets
└── components/         # Shared UI components
```

## 🎯 User Roles & Permissions

| Role | Capabilities |
|------|-------------|
| **Super Admin** | System configuration, admin management |
| **Admin** | Full academic administration, user management |
| **Teacher** | Class management, attendance, assignments, grading |
| **Student** | View attendance, submit assignments, access resources |
| **Parent** | Monitor child's progress, fee payments, communication |

## 🚀 Deployment

The application is configured for deployment on Vercel with the included `vercel.json` configuration.

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

## 📊 Key Metrics

- **255+ Files** - Comprehensive module coverage
- **50,000+ Lines** - Robust codebase
- **5 User Roles** - Complete stakeholder coverage
- **15+ Modules** - Full academic lifecycle management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨💻 Author

**Paluru Subba Narasaiah**
- GitHub: [@PaluruSubbaNarasaiah](https://github.com/PaluruSubbaNarasaiah)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the lightning-fast build tool
- All contributors and testers

---

<div align="center">
  <strong>Built with ❤️ for educational institutions</strong>
</div>