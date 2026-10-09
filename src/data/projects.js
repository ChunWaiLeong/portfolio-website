const projects = [
  {
    title: 'ServiceHub',
    description: 'A full-stack appointment and service-booking platform built with React, ASP.NET Core, and PostgreSQL, featuring role-based access, business availability management, timezone-aware scheduling, and concurrency-safe bookings.',
    techStack: ['React', 'TypeScript', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'Azure', 'Vercel', 'JWT'],
    features: [
      'Role-based authentication for Customers and Business Owners',
      'Timezone-aware availability, working hours, and temporary closure management',
      'Concurrency-safe booking system with PostgreSQL conflict protection',
    ],
    githubUrl: 'https://github.com/ChunWaiLeong/ServiceHub',
    liveUrl: 'https://service-hub-gray-omega.vercel.app',
  },
  {
    title: 'JobQuest',
    description: 'A full-stack ASP.NET Core MVC job portal featuring role-based authentication, resume uploads, job application workflows, and administrative management tools.',
    techStack: ['ASP.NET Core MVC', 'Entity Framework Core', 'C#', 'SQL Server', 'Bootstrap'],
    features: [
      'Role-based authentication for Job Seekers, HR, and Admin',
      'Resume upload and job application tracking system',
      'Factory Method and Strategy pattern implementation',
    ],
    githubUrl: 'https://github.com/ChunWaiLeong/JobQuest.Web',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive developer portfolio built with React, TypeScript, and Tailwind CSS, showcasing projects, experience, and technical skills.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    features: [
      'Responsive design across desktop and mobile',
      'Component-based React architecture',
      'Automated deployment with Vercel',
    ],
    githubUrl: 'https://github.com/ChunWaiLeong/portfolio-website',
  },
  {
    title: 'Shift Scheduler',
    description: 'An employee scheduling system built with Vue.js, PHP, and MySQL.',
    techStack: ['Vue.js 3', 'Bootstrap', 'PHP', 'MySQL'],
    features: [
      'Drag-and-drop shift scheduling',
      'Employee and shift management',
      'Backend persistence with MySQL',
    ],
    githubUrl: 'https://github.com/ChunWaiLeong/Shift-Scheduler',
  },
  {
    title: 'SwinAdventure',
    description: 'A solo C# console adventure game focused on object-oriented programming.',
    techStack: ['C#', 'OOP', 'Console App'],
    features: [
      'Command-based player interaction',
      'Inventory and item management',
      'Location movement system',
    ],
    githubUrl: 'https://github.com/ChunWaiLeong/SwinAdventure',
  },
]

export default projects
