export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  link?: string;
  github?: string;
}

export type Experience = {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export type Education = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export type Skill = {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel de administración.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    github: 'https://github.com/usuario/ecommerce',
    link: 'https://demo-ecommerce.com'
  },
  {
    id: 2,
    title: 'Dashboard Analítico',
    description: 'Dashboard interactivo con gráficos y visualización de datos en tiempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'Redux'],
    category: 'frontend',
    github: 'https://github.com/usuario/dashboard',
    link: 'https://demo-dashboard.com'
  },
  {
    id: 3,
    title: 'API REST Microservicios',
    description: 'API escalable con arquitectura de microservicios, autenticación JWT y documentación Swagger.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Redis'],
    category: 'backend',
    github: 'https://github.com/usuario/api-microservices'
  },
  {
    id: 4,
    title: 'Red Social',
    description: 'Red social con sistema de posts, likes, comentarios y mensajería en tiempo real.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    technologies: ['React', 'Next.js', 'Socket.io', 'MongoDB', 'AWS'],
    category: 'fullstack',
    github: 'https://github.com/usuario/social-network',
    link: 'https://demo-social.com'
  },
  {
    id: 5,
    title: 'Sistema de Autenticación',
    description: 'Sistema robusto de autenticación con OAuth2, 2FA y gestión de roles y permisos.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    technologies: ['Node.js', 'PostgreSQL', 'JWT', 'Passport.js'],
    category: 'backend',
    github: 'https://github.com/usuario/auth-system'
  },
  {
    id: 6,
    title: 'Landing Page Animada',
    description: 'Landing page moderna con animaciones fluidas y diseño responsive.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    category: 'frontend',
    github: 'https://github.com/usuario/landing-page',
    link: 'https://demo-landing.com'
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    position: 'Desarrollador Full Stack Senior',
    company: 'Tech Company SA',
    period: '2022 - Presente',
    description: 'Desarrollo de aplicaciones web escalables y mantenimiento de sistemas legacy.',
    achievements: [
      'Lideré equipo de 5 desarrolladores en proyecto de migración de sistema monolítico a microservicios',
      'Reduje tiempo de carga de aplicación en 40% mediante optimización de queries y caché',
      'Implementé CI/CD pipeline que redujo tiempo de deployment en 60%'
    ]
  },
  {
    id: 2,
    position: 'Desarrollador Frontend',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Creación de interfaces de usuario modernas y responsive para diversos clientes.',
    achievements: [
      'Desarrollé 15+ proyectos web para clientes internacionales',
      'Implementé sistema de design system reutilizable que aceleró desarrollo en 30%',
      'Mejoré accesibilidad web logrando WCAG 2.1 nivel AA en todos los proyectos'
    ]
  },
  {
    id: 3,
    position: 'Desarrollador Backend Junior',
    company: 'StartUp XYZ',
    period: '2019 - 2020',
    description: 'Desarrollo de APIs REST y mantenimiento de bases de datos.',
    achievements: [
      'Desarrollé API REST para gestión de usuarios con autenticación JWT',
      'Optimicé consultas SQL reduciendo tiempo de respuesta en 50%',
      'Colaboré en implementación de sistema de notificaciones push'
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Ingeniería en Sistemas Computacionales',
    institution: 'Universidad Tecnológica',
    period: '2015 - 2019',
    description: 'Especialización en desarrollo de software y arquitectura de sistemas.'
  },
  {
    id: 2,
    degree: 'Certificación Full Stack Developer',
    institution: 'Online Academy',
    period: '2020',
    description: 'Programa intensivo de desarrollo web full stack con React y Node.js.'
  },
  {
    id: 3,
    degree: 'AWS Certified Solutions Architect',
    institution: 'Amazon Web Services',
    period: '2021',
    description: 'Certificación en diseño de arquitecturas escalables en AWS.'
  }
];

export const skills: Skill[] = [
  { id: 1, name: 'React', level: 95, category: 'frontend' },
  { id: 2, name: 'TypeScript', level: 90, category: 'frontend' },
  { id: 3, name: 'Next.js', level: 85, category: 'frontend' },
  { id: 4, name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { id: 5, name: 'Vue.js', level: 75, category: 'frontend' },
  { id: 6, name: 'Node.js', level: 90, category: 'backend' },
  { id: 7, name: 'Express', level: 85, category: 'backend' },
  { id: 8, name: 'PostgreSQL', level: 80, category: 'backend' },
  { id: 9, name: 'MongoDB', level: 85, category: 'backend' },
  { id: 10, name: 'Docker', level: 75, category: 'tools' },
  { id: 11, name: 'Git', level: 90, category: 'tools' },
  { id: 12, name: 'AWS', level: 70, category: 'tools' },
  { id: 13, name: 'REST APIs', level: 90, category: 'other' },
  { id: 14, name: 'GraphQL', level: 75, category: 'other' }
];
