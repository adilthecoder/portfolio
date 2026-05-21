'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'

interface SkillCardProps {
  skill: {
    name: string
    icon: string
    experience: string
    level: 'Expert' | 'Advanced' | 'Intermediate'
    description: string
    keyFeatures: string[]
    relatedTech: string[]
    useCases: string[]
  }
}

const skillsData = {
  'C#': {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    experience: '8+ Years',
    level: 'Expert' as const,
    description: 'Deep expertise in C# (up to C# 14) for enterprise application development, microservices, and modern backend systems.',
    keyFeatures: [
      'Object-Oriented Programming',
      'SOLID Principles',
      'Async/Await Patterns',
      'LINQ Expressions',
      'Design Patterns',
      'Clean Architecture',
    ],
    relatedTech: ['.NET Core', 'ASP.NET', 'Entity Framework', 'Blazor'],
    useCases: [
      'Enterprise Backend Systems',
      'Microservices',
      'API Development',
      'Legacy System Migration',
    ],
  },
  '.NET Core': {
    name: '.NET Core',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    experience: '8+ Years',
    level: 'Expert' as const,
    description: 'Expert in .NET Core / .NET (up to .NET 10) for building scalable web APIs, microservices, and enterprise applications.',
    keyFeatures: [
      'Web API Development',
      'Microservices Architecture',
      'Minimal APIs & FAST Endpoints',
      '.NET Aspire',
      'Migration from Legacy .NET',
      'Mediatr & RepR Patterns',
    ],
    relatedTech: ['C#', 'Entity Framework', 'SQL Server', 'PostgreSQL'],
    useCases: [
      'Enterprise Web Applications',
      'RESTful API Development',
      'Microservices',
      'ERP Solutions',
    ],
  },
  'ASP.NET': {
    name: 'ASP.NET',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    experience: '8+ Years',
    level: 'Expert' as const,
    description: 'Extensive experience with ASP.NET MVC, Web APIs, and modern ASP.NET Core for production-grade applications.',
    keyFeatures: [
      'MVC Applications',
      'Web APIs',
      'RESTful Services',
      'Authentication & Authorization',
      'Middleware',
      'Dependency Injection',
    ],
    relatedTech: ['C#', '.NET Core', 'Entity Framework', 'Blazor'],
    useCases: [
      'Web Applications',
      'API Backends',
      'Enterprise Portals',
      'Booking Systems',
    ],
  },
  'Blazor': {
    name: 'Blazor',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg',
    experience: '4+ Years',
    level: 'Advanced' as const,
    description: 'Building interactive web UIs using Blazor Server and WebAssembly with C# end-to-end.',
    keyFeatures: [
      'Blazor Server',
      'Blazor WebAssembly',
      'Component-based Architecture',
      'Data Binding',
      'State Management',
      'Authentication',
    ],
    relatedTech: ['C#', '.NET Core', 'Entity Framework'],
    useCases: [
      'Single Page Applications',
      'Interactive Dashboards',
      'Enterprise Web Apps',
    ],
  },
  'Entity Framework': {
    name: 'Entity Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    experience: '8+ Years',
    level: 'Expert' as const,
    description: 'Expert in Entity Framework Core with extensive experience in Code First and Database First approaches.',
    keyFeatures: [
      'Code First Migrations',
      'LINQ Query Expressions',
      'Repository Pattern',
      'Unit of Work Pattern',
      'Entity Relationships',
      'Performance Optimization',
    ],
    relatedTech: ['.NET Core', 'C#', 'SQL Server', 'PostgreSQL'],
    useCases: [
      'ORM Data Access',
      'Database Migrations',
      'Data Layer Abstraction',
    ],
  },
  'SQL Server': {
    name: 'SQL Server',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    experience: '8+ Years',
    level: 'Expert' as const,
    description: 'Extensive experience with SQL Server for enterprise database design, T-SQL programming, and performance tuning.',
    keyFeatures: [
      'Database Design & Architecture',
      'T-SQL Programming',
      'Stored Procedures',
      'Performance Optimization',
      'Indexing & Query Tuning',
      'Backup & Recovery',
    ],
    relatedTech: ['Entity Framework', '.NET Core', 'Dapper'],
    useCases: [
      'Enterprise Database Solutions',
      'Data Analytics & Reporting',
      'Transaction Processing',
    ],
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    experience: '4+ Years',
    level: 'Advanced' as const,
    description: 'Experienced in PostgreSQL database design, optimization, and administration for enterprise applications and ERP solutions.',
    keyFeatures: [
      'Database Design & Modeling',
      'Complex Query Optimization',
      'Stored Procedures & Functions',
      'Indexing Strategies',
      'Transaction Management',
      'Performance Tuning',
    ],
    relatedTech: ['SQL Server', 'Entity Framework', '.NET Core'],
    useCases: [
      'Enterprise Data Storage',
      'ERP Solutions',
      'Analytics & Reporting',
    ],
  },
  'Azure': {
    name: 'Azure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    experience: '5+ Years',
    level: 'Advanced' as const,
    description: 'Experienced in Microsoft Azure cloud services for application deployment, Service Bus, and managed services.',
    keyFeatures: [
      'App Service Deployment',
      'Azure SQL Database',
      'Service Bus',
      'Azure Functions',
      'Storage Services',
      'DevOps Integration',
    ],
    relatedTech: ['.NET Core', 'SQL Server', 'Docker'],
    useCases: [
      'Cloud Application Hosting',
      'Messaging & Queueing',
      'Scalable Web Services',
    ],
  },
  'AWS': {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    experience: '3+ Years',
    level: 'Advanced' as const,
    description: 'AWS deployment and integration experience including cross-functional coordination on cloud-hosted projects.',
    keyFeatures: [
      'EC2 & ECS',
      'S3 Storage',
      'RDS Databases',
      'CloudWatch',
      'IAM & Security',
      'Deployment Pipelines',
    ],
    relatedTech: ['.NET Core', 'Docker', 'Node.js'],
    useCases: [
      'Cloud Hosting',
      'Cross-team Deployments',
      'Scalable APIs',
    ],
  },
  'RabbitMQ': {
    name: 'RabbitMQ',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
    experience: '3+ Years',
    level: 'Advanced' as const,
    description: 'Asynchronous messaging with RabbitMQ for decoupled microservices and event-driven architectures.',
    keyFeatures: [
      'Message Queueing',
      'Pub/Sub Patterns',
      'Event-driven Architecture',
      'Reliable Delivery',
      'Dead Letter Queues',
    ],
    relatedTech: ['.NET Core', 'Microservices', 'Azure Service Bus'],
    useCases: [
      'Microservices Communication',
      'Event Streaming',
      'Background Job Processing',
    ],
  },
  'MongoDB': {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    experience: '3+ Years',
    level: 'Advanced' as const,
    description: 'NoSQL document database experience for flexible schemas and location-aware applications.',
    keyFeatures: [
      'Document Modeling',
      'Aggregation Pipelines',
      'Indexing',
      'GeoSpatial Queries',
      'Replication',
    ],
    relatedTech: ['Node.js', 'Express', 'Next.js'],
    useCases: [
      'Location-based Apps',
      'Flexible Schemas',
      'Real-time Data',
    ],
  },
  'Docker': {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    experience: '4+ Years',
    level: 'Advanced' as const,
    description: 'Containerization using Docker for development, deployment, and microservices orchestration.',
    keyFeatures: [
      'Container Creation',
      'Docker Compose',
      'Multi-stage Builds',
      'Image Optimization',
      'Container Networking',
    ],
    relatedTech: ['Azure', 'AWS', '.NET Core'],
    useCases: [
      'Application Deployment',
      'Development Environment',
      'Microservices',
    ],
  },
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-green-600 bg-green-100 dark:bg-green-900/30'
      case 'Advanced': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30'
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30'
    }
  }

  return (
    <>
      <motion.div
        className="group relative tech-pill-enhanced magnetic-hover cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setShowPopup(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2 }}
      >
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping z-10"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

        <span className="relative z-10 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300 flex items-center">
          <span className="mr-2 w-5 h-5 flex items-center justify-center">
            {skill.icon.startsWith('http') ? (
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={20}
                height={20}
                className="w-5 h-5"
                loading="lazy"
              />
            ) : (
              <span className="text-lg">{skill.icon}</span>
            )}
          </span>
          {skill.name}
        </span>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-white/10 dark:border-slate-700/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {skill.icon.startsWith('http') ? (
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          width={48}
                          height={48}
                          className="w-12 h-12"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-4xl">{skill.icon}</span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{skill.name}</h2>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {skill.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-slate-800/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
                <div className="space-y-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      Key Features &amp; Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {skill.keyFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 border border-blue-200/20 dark:border-blue-700/20"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                      <ArrowRight className="w-5 h-5 mr-2 text-green-500" />
                      Common Use Cases
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {skill.useCases.map((useCase, index) => (
                        <div
                          key={index}
                          className="p-2 rounded-lg bg-purple-50/50 dark:bg-purple-900/10 border border-purple-200/20 dark:border-purple-700/20"
                        >
                          <span className="text-sm text-slate-700 dark:text-slate-300">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      Related Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.relatedTech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { skillsData }
