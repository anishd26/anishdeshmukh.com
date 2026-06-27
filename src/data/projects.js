// ── Your projects ──────────────────────────────────────────────────────
// `featured: true` shows the project on the home page (top 3 are used).
// `image` is optional — drop a screenshot in public/projects/ and reference
// it like '/projects/my-app.png'. If omitted, a placeholder is shown.

export const projects = [
  {
    name: 'Project One',
    year: '2026',
    description:
      'A short description of what this project does, the problem it solves, and your role.',
    tags: ['React', 'TypeScript', 'Vite'],
    website: 'https://example.com',
    source: 'https://github.com/anishd26',
    image: '', // e.g. '/projects/project-one.png'
    featured: true,
  },
  {
    name: 'Project Two',
    year: '2025',
    description:
      'Another project. Mention the interesting technical bits and what you learned.',
    tags: ['Python', 'FastAPI'],
    website: '',
    source: 'https://github.com/anishd26',
    image: '',
    featured: true,
  },
  {
    name: 'Project Three',
    year: '2025',
    description:
      'Replace these with your real projects. Each one can have a live link and source.',
    tags: ['Astro', 'CSS'],
    website: 'https://anishdeshmukh.com',
    source: 'https://github.com/anishd26/anishdeshmukh.com',
    image: '',
    featured: true,
  },
  {
    name: 'Project Four',
    year: '2024',
    description: 'A non-featured project — appears only on the Projects page.',
    tags: ['Node.js'],
    website: '',
    source: 'https://github.com/anishd26',
    image: '',
    featured: false,
  },
];
