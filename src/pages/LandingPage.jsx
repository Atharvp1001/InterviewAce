import { ArrowRight, FileText, Zap, Brain, BarChart3, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { FEATURES, HOW_IT_WORKS_STEPS } from '../utils/constants'

const featureIcons = {
  FileText,
  Zap,
  Brain,
  BarChart3,
  TrendingUp,
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white dark:from-secondary-950 to-secondary-50 dark:to-secondary-900">
      <header className="fixed top-0 w-full bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md z-40 border-b border-secondary-200 dark:border-secondary-800">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-secondary-900 dark:text-white">InterviewAce</h1>
          <div className="flex items-center gap-4">
            <Link to="/resume" className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 transition-colors">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl md:text-5xl mb-4">
              AI-Powered Interview <span className="text-gradient">Preparation</span>
            </h2>
            <p className="section-subtitle text-xl max-w-2xl mx-auto">
              Upload your resume and get AI-generated interview questions tailored to your skills. Practice, get feedback, and ace your interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/resume">
                <Button variant="primary" size="lg" className="flex items-center gap-2">
                  Upload Resume
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/interview/setup">
                <Button variant="outline" size="lg">
                  Start Interview
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-400 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="20" cy="20" r="10" fill="white" />
                <circle cx="80" cy="50" r="15" fill="white" />
                <circle cx="30" cy="80" r="12" fill="white" />
                <circle cx="70" cy="30" r="8" fill="white" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Brain size={64} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Intelligent Interview Simulation</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="section-title text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map(feature => {
              const Icon = featureIcons[feature.icon]
              return (
                <Card key={feature.id} hoverable>
                  <Icon size={32} className="text-primary-600 mb-4" />
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="section-title text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div key={step.id} className="relative">
                <Card>
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400">{step.description}</p>
                </Card>
                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-600 to-primary-400 py-20">
          <div className="max-w-4xl mx-auto px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ace Your Interview?</h2>
            <p className="text-lg opacity-90 mb-8">Start practicing today and boost your confidence for real interviews.</p>
            <Link to="/resume">
              <Button variant="secondary" size="lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>

        <footer className="bg-secondary-900 dark:bg-black text-secondary-100 py-12">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <p>&copy; 2024 InterviewAce. All rights reserved.</p>
            <p className="text-sm text-secondary-400 mt-2">AI-powered interview preparation platform</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
