export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubLink: string
  liveLink: string
  webAppLink?: string
  featured: boolean
  isMyProduct?: boolean
  year: string
  metrics?: Record<string, string>
  features?: string[]
  architecture?: string[]
  highlights?: string[]
  category: string
}

export const projects: Project[] = []

export const getFeaturedProjects = (): Project[] => projects.filter((p) => p.featured)
export const getOtherProjects = (): Project[] => projects.filter((p) => !p.featured)
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)
export const getAllProjectSlugs = (): string[] => projects.map((p) => p.slug)
