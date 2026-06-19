# InterviewAce - AI-Powered Interview Preparation Platform

A modern, professional React 19 + Vite + Tailwind CSS SaaS dashboard for AI-powered interview preparation.

## 🚀 Features

- **Resume Upload & Analysis** - Upload your resume (PDF) and get AI-powered skills analysis
- **AI Interview Generation** - Generate realistic interview questions based on your profile
- **Interactive Interview Session** - Practice in a simulated interview environment with real-time timer
- **Performance Analytics** - Detailed performance reports with charts and insights
- **Dark Mode Support** - Complete dark mode implementation with theme persistence
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop
- **Mock API Layer** - Realistic async service layer ready for real API integration

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Charts:** Recharts 2
- **Icons:** Lucide React
- **Routing:** React Router DOM 7
- **HTTP Client:** Axios
- **State Management:** React Context API
- **Date Utilities:** date-fns

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components (23 files)
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   ├── FileUploader.jsx
│   ├── ScoreCircle.jsx
│   ├── DataTable.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── InterviewTimer.jsx
│   ├── QuestionCard.jsx
│   └── ...charts & more
├── pages/              # Page components (9 files)
│   ├── LandingPage.jsx
│   ├── DashboardPage.jsx
│   ├── ResumePage.jsx
│   ├── AnalysisPage.jsx
│   ├── InterviewSetupPage.jsx
│   ├── InterviewSessionPage.jsx
│   ├── ResultsPage.jsx
│   ├── ReportsPage.jsx
│   └── SettingsPage.jsx
├── layouts/            # Layout templates (3 files)
│   ├── MainLayout.jsx
│   ├── LandingLayout.jsx
│   └── InterviewLayout.jsx
├── context/            # Context providers (4 files)
│   ├── ThemeContext.jsx
│   ├── AuthContext.jsx
│   ├── InterviewContext.jsx
│   └── ResumeContext.jsx
├── hooks/              # Custom hooks (4 files)
│   ├── useTheme.js
│   ├── useAuth.js
│   ├── useInterview.js
│   └── useResume.js
├── services/           # Mock API services (4 files)
│   ├── authService.js
│   ├── resumeService.js
│   ├── interviewService.js
│   └── reportService.js
├── utils/              # Utilities & constants (4 files)
│   ├── constants.js
│   ├── mockData.js
│   ├── formatters.js
│   └── validators.js
├── App.jsx             # Main app with routing
├── index.css           # Global styles + Tailwind
└── main.jsx            # Entry point
```

## 🎨 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Hero section with features and how it works |
| `/dashboard` | Dashboard | Stats, charts, and quick actions |
| `/resume` | Resume Upload | Drag-drop file upload with progress |
| `/analysis` | Resume Analysis | Skills, strengths, weaknesses, career paths |
| `/interview/setup` | Interview Setup | Role, difficulty, and question selection |
| `/interview` | Interview Session | Main interview with timer and navigator |
| `/results` | Results | Score, feedback, and performance charts |
| `/reports` | Reports | Table of previous interview sessions |
| `/settings` | Settings | Profile, theme, notifications |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd InterviewAce

# Install dependencies (using --legacy-peer-deps for React 19 compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 📊 Components Overview

### Core Components
- **Button** - Multiple variants (primary, secondary, outline, danger)
- **Card** - Reusable card container with hover effects
- **Badge** - Status indicator with variants
- **Modal** - Dialog component
- **LoadingSpinner** - Loading indicator
- **ThemeToggle** - Dark/light mode toggle

### Interactive Components
- **FileUploader** - Drag-and-drop resume upload
- **ProgressBar** - Linear progress indicator
- **ScoreCircle** - Circular progress display
- **DataTable** - Sortable, searchable table
- **InterviewTimer** - Countdown timer with alerts

### Chart Components
- **PerformanceTrendChart** - Line chart for score trends
- **SkillDistributionChart** - Pie chart for skills
- **PerformanceByTopicChart** - Bar chart by topic
- **SkillScoresChart** - Horizontal bar chart

### Interview Components
- **QuestionCard** - Question display with progress
- **QuestionNavigator** - Question selector sidebar
- **AnswerTextArea** - Answer input with auto-save
- **InterviewTimer** - Interview countdown timer

### Layout Components
- **Navbar** - Top navigation with user menu
- **Sidebar** - Left sidebar with navigation
- **MainLayout** - Main app layout with sidebar
- **LandingLayout** - Landing page layout

## 🎯 State Management

### Context Providers
1. **ThemeContext** - Dark mode toggle
   - `isDark` - Current theme state
   - `toggleTheme()` - Toggle dark/light mode

2. **AuthContext** - User authentication
   - `user` - Current user data
   - `isAuthenticated` - Auth state
   - `login()`, `logout()`, `updateProfile()`

3. **InterviewContext** - Interview session
   - `questions` - Array of questions
   - `currentQuestionIndex` - Current position
   - `answers` - User answers
   - `startInterview()`, `saveAnswer()`, `submitInterview()`

4. **ResumeContext** - Resume data
   - `name`, `skills`, `strengths`, `missingSkills`
   - `uploadResume()`, `setResumeAnalysis()`

## 🔄 Service Layer

All services simulate realistic async API calls with delays:

### authService
- `login(email, password)` - User login
- `logout()` - User logout
- `getProfile()` - Fetch user profile
- `updateProfile(updates)` - Update user info

### resumeService
- `uploadResume(file)` - Upload PDF resume
- `analyzeResume(file)` - AI analysis of resume
- `getResumeAnalysis()` - Get cached analysis
- `deleteResume()` - Delete resume

### interviewService
- `generateQuestions(role, difficulty, count)` - Generate questions
- `saveAnswer(questionId, answer)` - Auto-save answer
- `submitInterview(answers, metadata)` - Submit interview
- `evaluateAnswer(question, answer)` - Get feedback

### reportService
- `getReports(filters)` - Fetch reports with filtering
- `getReportDetails(reportId)` - Get single report
- `generatePDF(reportId)` - Export as PDF
- `deleteReport(reportId)` - Delete report
- `getStatistics()` - Get aggregate stats

## 🎨 Styling

### Color Palette
- **Primary:** Indigo (#6366F1)
- **Secondary:** Slate (multiple shades)
- **Success:** Green
- **Warning:** Amber
- **Error:** Red

### Custom Tailwind Classes
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button
- `.btn-danger` - Danger button
- `.card` - Card component
- `.badge` - Badge component
- `.input-field` - Form input
- `.section-title` - Section heading
- `.text-gradient` - Gradient text

### Dark Mode
- Dark mode uses CSS class strategy
- Applied to `<html>` element
- Persisted in localStorage
- Smooth transitions between modes

## 🔐 Mock Data

The application includes comprehensive mock data:
- 12+ sample interview questions per role and difficulty
- Resume with 12 detected skills
- 5 previous interview reports
- Performance trends and charts
- Mock user profile
- Suggested career paths

## 📱 Responsive Design

- **Mobile** (375px+) - Full responsive with stacked layout
- **Tablet** (768px+) - Two-column layouts where appropriate
- **Desktop** (1024px+) - Full multi-column layouts
- **Large** (1280px+) - Optimized spacing and widths

## ⚙️ Customization

### Adding New Interview Questions
Edit `src/utils/mockData.js`:
```javascript
export const mockInterviewQuestions = {
  'your-role': {
    'difficulty-level': [
      'Your question here...',
      // ... more questions
    ]
  }
}
```

### Modifying Color Scheme
Edit `tailwind.config.js` and update the colors in the theme.extend section.

### Adding New Chart Types
Create a new component in `src/components/` using Recharts library and import it in the relevant page.

## 🚀 Deployment

### Build Steps
```bash
npm run build
```

The build output will be in the `dist/` folder, ready to deploy to any static hosting service.

### Environment Variables (when using real API)
Create `.env.local`:
```
VITE_API_URL=https://your-api-url.com
VITE_API_KEY=your-api-key
```

## 🛣️ Roadmap

- [ ] Replace mock services with real API endpoints
- [ ] Add PDF export for reports (html2pdf integration)
- [ ] User authentication with JWT
- [ ] Backend integration (Node.js/Express)
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] WebSocket for real-time feedback
- [ ] Video recording for answers
- [ ] AI-powered answer evaluation
- [ ] Mobile app (React Native)

## 📝 Notes

- All data is currently stored in Context API and localStorage
- Mock services simulate realistic delays (300-2000ms)
- No backend API required - fully functional standalone
- Ready for real API integration with minimal changes to service layer
- Production build is fully optimized and minified

## 📄 License

MIT License - Feel free to use this project as a template for your own applications.

## 🤝 Support

For questions or issues, refer to the code comments and component documentation within each file.

---

**Built with ❤️ for Interview Preparation Excellence**
