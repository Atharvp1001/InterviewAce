export const mockResumeData = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  skills: [
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'PostgreSQL',
    'Git',
    'REST APIs',
    'Docker',
    'AWS',
    'Tailwind CSS',
    'MongoDB',
    'GraphQL',
  ],
  suggestedRole: 'Full Stack Developer',
}

export const mockStrengths = [
  'Strong foundation in Python and JavaScript',
  'Experience with modern web frameworks (React, Node.js)',
  'Good understanding of database design (SQL and NoSQL)',
  'Familiar with DevOps tools and cloud services',
  'Version control and collaborative development experience',
]

export const mockMissingSkills = [
  'Kubernetes',
  'Microservices Architecture',
  'System Design at Scale',
  'Advanced SQL Optimization',
  'CI/CD Pipeline Configuration',
]

export const mockSuggestedRoles = [
  {
    id: 1,
    role: 'Full Stack Developer',
    matchScore: 95,
    description: 'Perfect match for your skill set',
  },
  {
    id: 2,
    role: 'Backend Developer',
    matchScore: 88,
    description: 'Strong backend fundamentals',
  },
  {
    id: 3,
    role: 'Frontend Developer',
    matchScore: 82,
    description: 'Solid frontend experience',
  },
]

export const mockInterviewQuestions = {
  'python-dev': {
    easy: [
      'What are the key differences between Python 2 and Python 3?',
      'Explain list comprehension in Python.',
      'What is a decorator in Python?',
      'How do you handle exceptions in Python?',
      'Explain the difference between append() and extend() methods.',
    ],
    medium: [
      'Design a cache system with LRU eviction policy.',
      'Explain multithreading vs multiprocessing in Python.',
      'How would you optimize a function that processes large datasets?',
      'Describe the GIL (Global Interpreter Lock) and its implications.',
      'Design a rate limiter service.',
    ],
    hard: [
      'Design a distributed task queue system.',
      'How would you build a real-time notification system?',
      'Explain async/await and how it differs from threading.',
      'Design a recommendation engine for an e-commerce platform.',
      'How would you handle database sharding at scale?',
    ],
  },
  'backend-dev': {
    easy: [
      'What is the difference between REST and SOAP?',
      'Explain the concept of microservices.',
      'What is a database index and why is it important?',
      'Describe the ACID properties.',
      'What is caching and why is it important?',
    ],
    medium: [
      'Design a scalable chat application backend.',
      'How would you handle user authentication and authorization?',
      'Explain horizontal vs vertical scaling.',
      'Design a payment processing system.',
      'How would you implement a message queue system?',
    ],
    hard: [
      'Design a distributed caching layer using Redis.',
      'How would you build a real-time analytics dashboard?',
      'Explain consistency models in distributed systems.',
      'Design a highly available and fault-tolerant system.',
      'How would you optimize database queries at scale?',
    ],
  },
}

export const mockDashboardStats = {
  interviewsCompleted: 12,
  averageScore: 78,
  skillsDetected: 14,
  improvementAreas: 5,
}

export const mockPerformanceData = [
  { month: 'Jan', score: 65 },
  { month: 'Feb', score: 72 },
  { month: 'Mar', score: 68 },
  { month: 'Apr', score: 75 },
  { month: 'May', score: 78 },
  { month: 'Jun', score: 82 },
]

export const mockSkillDistribution = [
  { name: 'Python', value: 95 },
  { name: 'JavaScript', value: 87 },
  { name: 'React', value: 85 },
  { name: 'Node.js', value: 82 },
  { name: 'SQL', value: 79 },
]

export const mockReports = [
  {
    id: 1,
    date: '2024-06-15',
    role: 'Python Developer',
    score: 82,
    duration: 28,
    difficulty: 'Medium',
    questionCount: 10,
  },
  {
    id: 2,
    date: '2024-06-10',
    role: 'Backend Developer',
    score: 76,
    duration: 35,
    difficulty: 'Hard',
    questionCount: 10,
  },
  {
    id: 3,
    date: '2024-06-05',
    role: 'Full Stack Developer',
    score: 79,
    duration: 32,
    difficulty: 'Medium',
    questionCount: 10,
  },
  {
    id: 4,
    date: '2024-05-28',
    role: 'Python Developer',
    score: 71,
    duration: 25,
    difficulty: 'Easy',
    questionCount: 5,
  },
  {
    id: 5,
    date: '2024-05-20',
    role: 'Backend Developer',
    score: 75,
    duration: 30,
    difficulty: 'Medium',
    questionCount: 10,
  },
]

export const mockInterviewResults = {
  score: 82,
  totalQuestions: 10,
  correct: 8,
  partial: 2,
  incorrect: 0,
  duration: 28,
  strengths: [
    'Excellent problem-solving approach',
    'Clear code structure and comments',
    'Good understanding of data structures',
    'Confident communication',
  ],
  weaknesses: [
    'Could optimize time complexity',
    'Missing edge case handling',
    'Could explain design decisions better',
  ],
  recommendations: [
    'Practice more on algorithm optimization',
    'Focus on edge case testing',
    'Improve explanation clarity during interviews',
    'Work on time management during coding',
  ],
}

export const mockQuestionBreakdown = [
  {
    id: 1,
    question: 'What are the key differences between Python 2 and Python 3?',
    userScore: 8,
    maxScore: 10,
    feedback: 'Good answer with clear examples. Could mention more about the print function.',
  },
  {
    id: 2,
    question: 'Explain list comprehension in Python.',
    userScore: 9,
    maxScore: 10,
    feedback: 'Excellent explanation with multiple examples.',
  },
  {
    id: 3,
    question: 'Design a cache system with LRU eviction policy.',
    userScore: 7,
    maxScore: 10,
    feedback: 'Good design approach. Missing some optimization details.',
  },
  {
    id: 4,
    question: 'How would you optimize a function that processes large datasets?',
    userScore: 8,
    maxScore: 10,
    feedback: 'Covered main points. Could discuss parallel processing.',
  },
  {
    id: 5,
    question: 'Describe the GIL (Global Interpreter Lock) and its implications.',
    userScore: 6,
    maxScore: 10,
    feedback: 'Partially correct. Missing details about workarounds.',
  },
]

export const mockPerformanceByTopic = [
  { topic: 'Data Structures', score: 85 },
  { topic: 'Algorithms', score: 78 },
  { topic: 'System Design', score: 72 },
  { topic: 'Coding', score: 88 },
  { topic: 'Testing', score: 75 },
]

export const mockSkillScores = [
  { skill: 'Python', score: 85 },
  { skill: 'Problem Solving', score: 78 },
  { skill: 'Communication', score: 82 },
  { skill: 'Code Quality', score: 80 },
  { skill: 'Design Thinking', score: 72 },
]
