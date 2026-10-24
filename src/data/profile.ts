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
  name: 'Sarthak Jain',

  // Professional headline (shown in the hero)
  headline: 'Aspiring Data Analyst | Turning Data into Insights',

  // Short introduction (shown in the hero)
  intro:
    'Hi, I\'m Sarthak, with an interest in both data analytics and performance marketing. I enjoy working with data using SQL, Excel, and Power BI to identify trends, build dashboards, and generate actionable insights. Alongside analytics, I\'m interested in digital advertising, campaign performance analysis, and understanding marketing metrics such as CTR, CPC, CPA, and ROAS. I aim to combine analytical thinking with marketing insights to understand business performance and support data-driven decisions.',

  // Your social / contact links
  // Replace the "" with your real URLs. Leave "" to hide a link.
  social: {
    github: 'https://github.com/sarthaksj23',
    linkedin: 'https://linkedin.com/in/sarthak-jain-1a09a8247',
    resume: 'https://drive.google.com/file/d/1CVcwz4PRVIdb6NomWIf3RHcXBjeAvYkC/view?usp=sharing',
    email: 'sarthaksarthak1995@gmail.com',
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
      category: 'Performance Marketing',
      skills: ['Google Ads', 'Meta Ads', 'GA4', 'Meta Business Suite', 'Looker Studio', 'Campaign Performance Analysis'],
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'AI Tools'],
    },
  ],
};
