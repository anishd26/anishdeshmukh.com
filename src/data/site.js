// ── Edit your profile, availability, and social links here ──────────────

export const profile = {
  name: 'Anish Deshmukh',
  initials: 'AD', // shown in the avatar circle
  // One short line under your name (the hero tagline)
  tagline: 'Software engineer. I like building things and turning ideas into products.',
  // Set to false to hide the green "available" badge
  available: true,
  availableText: 'Available — open to new projects and collaborations',
  email: 'anishdeshmukh26@gmail.com',
};

// Your narrative intro for the About section — supports inline HTML links.
// Keep it personal and specific (see krishgoel.com for inspiration).
export const about = `
I'm a developer focused on building clean, useful software. I care about good
design, fast tools, and shipping things that people actually use.
<br/><br/>
Replace this with your real story — where you study or work, what you're building,
what you're curious about, and any standout experiences. Feel free to drop
<a href="https://github.com/anishd26">inline links</a> like this.
`;

// Skills shown as pills. Add/remove freely.
export const skills = [
  'TypeScript', 'JavaScript', 'React', 'Node.js',
  'Python', 'HTML', 'CSS', 'Git', 'SQL',
];

// Social / contact links. Order = display order. Remove any you don't use.
export const socials = [
  { label: 'Email', href: 'mailto:anishdeshmukh26@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/anishd26' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anishdeshmukh' },
  { label: 'X / Twitter', href: 'https://x.com/' },
];
