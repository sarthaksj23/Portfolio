import type { Profile } from '@/types';

// ============================================================================
//  YOUR PROFILE INFORMATION
//  --------------------------------------------------------------------------
//  This file holds all your personal information in one place.
//  Edit the values below to update your name, headline, intro, skills, and
//  contact links across the entire website. You do NOT need to touch any
//  other files to change your personal info.
//
//  Anything in [BRACKETS] is a placeholder — replace it with your real info.
//  If a social link is left empty (""), its button will not appear.
// ============================================================================

export const profile: Profile = {
  // Your full name (shown in the navbar, hero, and footer)
  name: '[Your Name]',

  // Professional headline (shown in the hero)
  headline: 'Aspiring Data Analyst | Turning Data into Insights',

  // Short introduction (shown in the hero)
  intro:
    'I am an aspiring data analyst passionate about cleaning, exploring, and visualizing data to uncover insights that drive better decisions. I work with SQL, Python, Excel, and BI tools to turn raw data into clear, actionable stories.',

  // Your social / contact links
  // Replace the "" with your real URLs. Leave "" to hide a link.
  social: {
    github: 'https://github.com/[your-username]',
    linkedin: 'https://linkedin.com/in/[your-username]',
    resume: '/files/[your-resume].pdf',
    email: 'your.email@example.com',
  },

  // Your technical skills, grouped by category
  // Add or remove groups and skills as needed
  skillGroups: [
    {
      category: 'Languages & Querying',
      skills: ['SQL', 'Python', 'PostgreSQL', 'MySQL'],
    },
    {
      category: 'Data Analysis & Visualization',
      skills: ['Excel', 'Power BI', 'Tableau', 'Pandas', 'NumPy'],
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
    },
  ],
};
