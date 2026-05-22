'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, GraduationCap, Briefcase, Code, CheckCircle, MapPin, Terminal, Database, Wrench, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const timeline = [
    {
      icon: Briefcase,
      date: 'September 2024 - Present',
      title: 'Senior Software Engineer & Lead',
      company: 'Freelance, Remote',
      description: 'Designing scalable architectures using design patterns, migrating projects from .NET 4.6.2 to .NET Core 7. Developed a Promotion Engine for FMCG promotions. Worked on complete migrations of .NET legacy booking systems to microservices using C# 14, .NET 10. Building a complete ERP solution from scratch on the latest stack (.NET 10, Aspire, microservices, EF, PostgreSQL, n8n, Power Apps). Automated data synchronization with API resulting in 40% reduction in manual integration efforts.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Briefcase,
      date: 'February 2023 - August 2024',
      title: 'Senior Software Engineer & Lead',
      company: 'Raheem Solutions, Lahore, Pakistan',
      description: 'Led optimization of Kulcha, a social app for finding nearby locations, enhancing data load times and location accuracy by 25%. Coordinated with cross-functional teams to ensure seamless integration and deployment on AWS.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      date: 'January 2021 - January 2023',
      title: 'Software Engineer → Senior Software Engineer',
      company: 'Raheem Solutions, Lahore, Pakistan',
      description: 'Joined as Software Engineer and promoted to Senior Software Engineer the same year. Delivered SalesAssist, a cloud-based sales solution, reducing client costs by 30% compared to existing SND systems. Automated report generation using Telerik, cutting down manual report generation time by 50%.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      date: 'June 2017 - December 2020',
      title: 'Software Engineer',
      company: 'Techlogix, Lahore, Pakistan',
      description: 'Worked on an in-house sales and distribution product for Nestlé. Developed a Web API for Nestlé\'s internal sales tool, automating order synchronization and reducing processing time by 35%. Built an automated claims management portal, shifting from an Excel-based system to a web-based platform.',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: GraduationCap,
      date: '2017',
      title: 'Bachelor of Computer Science',
      company: 'Punjab University College of Information Technology, Lahore, Pakistan',
      description: 'GPA: 3.5 | Dean\'s List for four consecutive semesters. Teaching Assistant for courses in Databases, System Programming, and Web Development.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const categoryIcons: Record<string, React.ElementType> = {
    'Backend Technologies': Terminal,
    'Database Management': Database,
    'Cloud & DevOps': Wrench,
  }

  const techCategories = {
    'Backend Technologies': [
      { name: 'C# (up to C# 14)', level: 95 },
      { name: '.NET Core (up to .NET 10)', level: 95 },
      { name: 'ASP.NET / MVC / Web APIs', level: 95 },
      { name: 'Blazor', level: 88 },
      { name: 'Microservices / Aspire', level: 90 },
      { name: 'Entity Framework / Dapper', level: 92 },
      { name: 'MinimalAPIs / FAST Endpoints', level: 88 },
      { name: 'Mediatr / RepR', level: 85 },
    ],
    'Database Management': [
      { name: 'MS SQL', level: 95 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
    'Cloud & DevOps': [
      { name: 'Azure', level: 90 },
      { name: 'AWS', level: 80 },
      { name: 'Service Bus', level: 85 },
      { name: 'RabbitMQ', level: 85 },
      { name: 'Docker', level: 80 },
    ]
  }

  const achievements = [
    { icon: CheckCircle, title: '8+ Years Experience', desc: 'Professional software engineering across multiple companies' },
    { icon: Code, title: '15+ Technologies', desc: 'Mastery of modern .NET and adjacent tech stacks' },
    { icon: Briefcase, title: 'Senior Software Engineer & Lead', desc: 'Currently freelancing' },
    { icon: MapPin, title: 'Lahore, Pakistan', desc: 'Based in Lahore, working across regions' }
  ]

  const certifications = [
    {
      title: '.NET Microservices Architecture',
      issuer: 'Udemy',
      year: '2024',
    },
    {
      title: 'Solution Architecture',
      issuer: 'Udemy',
      year: '2024',
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5" />

      <div className="relative z-10">
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                About <span className="gradient-text-enhanced">Adil Farhan</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
                Experienced Software Engineer with 8+ years in software development, specializing in C# and .NET technologies.
                Proven expertise in transitioning from .NET 3.5 to .NET Core 8, scalable architecture design, and cloud integration.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-16"
              >
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">Adil Farhan</h2>
                  <p className="text-2xl md:text-3xl text-blue-600 font-semibold">Senior Software Engineer &amp; Lead</p>
                  <div className="inline-flex items-center status-available">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Currently Freelancing
                  </div>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                      Based in <strong>Lahore, Pakistan</strong>. Adept at leading teams, mentoring future leaders,
                      and delivering innovative solutions. Certified in <strong>.NET Microservices</strong> and
                      <strong> Solution Architecture</strong>, with a strong focus on optimizing data management and
                      automating processes for impactful business results.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{achievement.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{achievement.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="work-experience" className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-md text-foreground mb-4">Professional Experience</h2>
              <p className="text-muted-foreground">8+ years across freelance work, Raheem Solutions, and Techlogix in Lahore, Pakistan</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0"
                >
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-primary to-blue-600 hidden md:block"></div>
                  )}

                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mr-0 md:mr-8 mb-4 md:mb-0 shadow-professional-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1 card-hover p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-primary text-sm font-semibold bg-primary/10 px-2 py-1 rounded-full">{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    {item.company && (
                      <p className="text-blue-600 font-semibold mb-4 text-lg">{item.company}</p>
                    )}
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-md text-foreground mb-4">Core Skills</h2>
              <p className="text-muted-foreground">Backend, databases, cloud, and architectural expertise</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {Object.entries(techCategories).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="card-hover p-8"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      {(() => { const Icon = categoryIcons[category] || Code; return <Icon className="w-4 h-4 text-primary" aria-hidden="true" /> })()}
                    </div>
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-primary text-sm font-semibold bg-primary/10 px-2 py-1 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-md text-foreground mb-4">Certifications</h2>
              <p className="text-muted-foreground">Professional credentials in architecture and microservices</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert) => (
                <div key={cert.title} className="card-hover p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-8 card p-12"
            >
              <div className="space-y-4">
                <h2 className="heading-md text-foreground">Let&apos;s build something together.</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Open to discussions on enterprise .NET architecture, microservices, ERP solutions, and cloud integration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start a Conversation
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
