'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Linkedin,
  Rocket,
  ServerCog,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { LazySkillCard } from '@/components/LazyComponents'
import { skillsData } from '@/components/SkillCard'

const proofStats = [
  { label: 'Years of Experience', value: '8+', icon: CalendarDays },
  { label: 'Companies Worked', value: '4', icon: BriefcaseBusiness },
  { label: 'Projects Delivered', value: '20+', icon: Rocket },
  { label: 'Team Members Led', value: '10+', icon: Users },
]

const techStack = [
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: '.NET',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  },
  {
    name: 'ASP.NET Core',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  },
  {
    name: 'Blazor',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg',
  },
  {
    name: 'SQL Server',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Azure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  },
]

const experienceHighlights = [
  {
    title: 'ERP & Promotion Engine',
    company: 'Freelance',
    period: 'Sep 2024 – Present',
    description:
      'Building a complete ERP solution from scratch on .NET 10, C# 14, Aspire .NET, microservices, EF, and PostgreSQL. Designed a Promotion Engine for FMCG promotions and led migration of legacy .NET booking systems to modern microservices architecture.',
    icon: ServerCog,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Kulcha Social App',
    company: 'Raheem Solutions',
    period: 'Feb 2023 – Aug 2024',
    description:
      'Led optimization of a social app for finding nearby locations, improving data load times and location accuracy by 25%. Coordinated cross-functional teams for seamless AWS integration and deployment.',
    icon: BriefcaseBusiness,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'SalesAssist Platform',
    company: 'Raheem Solutions',
    period: 'Jan 2021 – Jan 2023',
    description:
      'Delivered a cloud-based sales solution reducing client costs by 30% compared to existing SND systems. Automated report generation using Telerik, cutting manual reporting time by 50%.',
    icon: Rocket,
    accent: 'from-emerald-500 to-green-500',
  },
  {
    title: 'Nestlé Sales Tools',
    company: 'Techlogix',
    period: 'Jun 2017 – Dec 2020',
    description:
      'Worked on an in-house sales and distribution product for Nestlé. Developed Web APIs that reduced order processing time by 35%. Built an automated claims management portal replacing Excel-based workflows.',
    icon: ShieldCheck,
    accent: 'from-orange-500 to-amber-500',
  },
]

const timeline = [
  {
    year: '2024+',
    title: 'Senior Software Engineer & Lead',
    description: 'Freelancing on ERP and migration projects using .NET 10, microservices, and a modern cloud stack.',
  },
  {
    year: '2023+',
    title: 'Senior Software Engineer & Lead',
    description: 'Led optimization and cross-functional teams at Raheem Solutions for the Kulcha social app on AWS.',
  },
  {
    year: '2021',
    title: 'Software Engineer → Senior Software Engineer',
    description: 'Joined Raheem Solutions as Software Engineer and was promoted to Senior Software Engineer the same year.',
  },
  {
    year: '2017',
    title: 'Software Engineer',
    description: 'Built Nestlé sales tools and claims management at Techlogix, beginning a career in .NET.',
  },
]

const technologies = Object.keys(skillsData)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-[#020711] dark:text-white">
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden border-b border-slate-200 bg-slate-950 pt-20 text-white sm:pt-24 dark:border-white/10"
      >
        <Image
          src="/adil-farhan-cinematic-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_center]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_38%,rgba(37,99,235,0.16),transparent_34%),linear-gradient(90deg,rgba(2,6,23,0.97)_0%,rgba(2,6,23,0.88)_32%,rgba(2,6,23,0.45)_58%,rgba(2,6,23,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white to-transparent dark:from-[#020711]" />

        <div className="container-custom relative z-10">
          <div className="grid min-h-[calc(100svh-5rem)] items-center gap-8 py-8 sm:min-h-[calc(100vh-6rem)] sm:gap-10 sm:py-10 lg:grid-cols-[0.55fr_0.45fr] lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <div className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.24em] dark:border-blue-400/20 dark:text-blue-300 dark:shadow-[0_0_30px_rgba(37,99,235,0.18)]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
                Senior Software Engineer &amp; Lead
              </div>

              <h1 className="max-w-2xl text-[2.05rem] font-black leading-[1.04] tracking-tight text-white xs:text-[2.35rem] sm:text-5xl lg:text-6xl">
                Building scalable .NET systems and{' '}
                <span className="text-blue-300">enterprise-grade architecture.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-200 md:text-lg">
                Adil Farhan — 8+ years specializing in C# and .NET technologies, scalable architecture design,
                and cloud integration. Leading teams, mentoring future leaders, and delivering innovative solutions.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
                >
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/adil-farhan1453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-blue-300 hover:bg-white/15"
                >
                  Connect on LinkedIn
                  <Linkedin className="ml-3 h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
                {proofStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/[0.075] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                  >
                    <stat.icon className="mb-3 h-5 w-5 text-blue-400" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex max-w-3xl flex-wrap items-center gap-3">
                <span className="w-full text-xs font-semibold uppercase tracking-[0.28em] text-slate-400 sm:mr-2 sm:w-auto">Tech stack</span>
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.075] px-3 py-2 text-sm font-medium text-slate-100 shadow-sm backdrop-blur"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tech.icon} alt="" className="h-5 w-5 object-contain" loading="lazy" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="relative hidden lg:flex lg:min-h-[34rem] lg:justify-end"
            >
              <div className="relative mt-auto w-full max-w-sm">
                <div className="rounded-2xl border border-white/10 bg-slate-950/55 px-5 py-4 shadow-2xl backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">Currently</p>
                  <p className="mt-1 text-sm font-bold text-slate-950 dark:text-white">Senior Software Engineer &amp; Lead</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Freelance · Remote</p>
                </div>

                <div className="absolute -top-20 right-0 rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">8+ Years .NET</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-slate-200 bg-white py-16 text-slate-950 dark:border-white/10 dark:bg-[#03101d] dark:text-white">
        <div className="container-custom">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300">Experience</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl dark:text-white">
                Work across .NET ecosystems.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {experienceHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none dark:hover:border-blue-400/40 dark:hover:bg-white/[0.06]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
                <div className="flex items-start justify-between">
                  <div className={`rounded-2xl bg-gradient-to-br ${item.accent} p-3 shadow-lg shadow-slate-950/10`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mt-7 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-300">{item.company} · {item.period}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] py-20 text-slate-950 dark:bg-slate-950 dark:text-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300">About</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">From legacy .NET to modern microservices.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Experienced Software Engineer with 8+ years in software development. Proven expertise in
              transitioning from .NET 3.5 to .NET Core 8 and beyond, scalable architecture design, and cloud integration.
            </p>
            <p>
              Certified in .NET Microservices and Solution Architecture, with a strong focus on optimizing
              data management and automating processes for impactful business results.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <Link href="/about" className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:hover:border-blue-400 dark:hover:text-blue-300">
                Read My Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-200">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="bg-white py-20 text-slate-950 dark:bg-[#020711] dark:text-white">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300">Timeline</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">A career across companies and challenges.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-300">{item.year}</div>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#f7fafc] py-20 text-slate-950 dark:bg-slate-950 dark:text-white">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300">Skills</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Modern Microsoft stack, practical delivery.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Deep expertise across C#, ASP.NET Core, Blazor, SQL Server, PostgreSQL, Azure, AWS, and supporting cloud and DevOps tools.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.035 }}
                viewport={{ once: true }}
              >
                <LazySkillCard skill={skillsData[tech as keyof typeof skillsData]} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#03101d] py-20 text-white">
        <div className="container-custom">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-8 text-center md:p-12">
            <h2 className="text-3xl font-black md:text-5xl">Let&apos;s connect.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Open to discussions on enterprise .NET architecture, microservices, ERP solutions, and cloud-integrated systems.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
                Get in Touch
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <a
                href="https://www.linkedin.com/in/adil-farhan1453"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/10 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                <Linkedin className="mr-3 h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
