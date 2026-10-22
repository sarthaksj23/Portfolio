import type { Project } from '@/types';

// ============================================================================
//  PROJECT DATA FILE  —  READ THIS FIRST
//  --------------------------------------------------------------------------
//  This is the ONLY file you need to edit to add, update, or remove projects.
//  The website automatically builds project cards and detail pages from this
//  file. You never need to change the website's layout or design.
//
//  ── HOW TO ADD A NEW PROJECT ──────────────────────────────────────────────
//  1. Copy an existing project object below (the entire { ... } block).
//  2. Paste it at the end of the `projects` array (inside the [ ] brackets).
//  3. Change the "slug" to something unique, e.g. "sales-performance-2024".
//  4. Fill in your title, description, tools, and category.
//  5. Fill in any optional sections you have content for.
//     Leave optional sections OUT or empty — the website hides them.
//  6. That's it. The project appears in the gallery automatically.
//
//  ── HOW TO REPLACE A SAMPLE PROJECT ───────────────────────────────────────
//  1. Find the sample project below (it has "isSample: true").
//  2. Edit its fields with your real project content.
//  3. Remove "isSample: true" or set it to false.
//  4. Keep the same "slug" if you want existing links to keep working,
//     or change it if you want a new URL.
//
//  ── HOW TO DELETE A PROJECT ───────────────────────────────────────────────
//  1. Delete the entire { ... } object for that project from the array.
//  2. Remove the comma after the previous project if it was the last one.
//  3. The project disappears from the gallery and navigation automatically.
//
//  ── WHAT EACH FIELD DOES ──────────────────────────────────────────────────
//  slug:             Unique ID & web address (e.g. "netflix-analysis").
//                    Only lowercase letters, numbers, and hyphens.
//  title:            Project name (shown on cards and detail page).
//  shortDescription: 1–2 sentence summary (shown on the card).
//  thumbnail:        Image URL for the card. Use /public/... or a full URL.
//  tools:            List of tools used (e.g. ["SQL", "PostgreSQL"]).
//                    These power the technology filter on the Projects page.
//  category:         One category, e.g. "SQL Analysis", "Excel", "Python".
//                    Categories power the category filter.
//  featured:         true = appears on the Home page. Omit or false = no.
//
//  OPTIONAL SECTIONS (omit or leave empty to hide them):
//  overview, businessProblem, objectives, dataset, dataCleaning,
//  methodology, code, dashboards, keyFindings, recommendations,
//  files, githubUrl, references, limitations.
//
//  ── DASHBOARDS ────────────────────────────────────────────────────────────
//  Each dashboard entry has a "type":
//    "powerbi":    Set embedUrl to the Power BI embed URL.
//    "tableau":    Set embedUrl to the Tableau embed URL.
//    "external":   Set externalUrl to a dashboard link. Shows a button.
//    "screenshot": Set screenshotUrl to an image. Shows a static preview.
//
//  ── FILES ─────────────────────────────────────────────────────────────────
//  Each file entry has: name, type (e.g. "SQL", "PDF"), description, url.
//  The url can be a relative path (e.g. "/files/analysis.sql") or a full URL
//  (e.g. a GitHub raw link). If url is empty, the file will be hidden.
//
//  ── IMPORTANT ─────────────────────────────────────────────────────────────
//  • Never invent results, findings, or dashboard URLs.
//  • Mark sample/placeholder content with isSample: true.
//  • Public dashboards may expose underlying data — never publish
//    sensitive or confidential data.
// ============================================================================

export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // SAMPLE PROJECT 1 — Netflix Data Analysis (SQL)
  // Replace this with your real project when ready.
  // ---------------------------------------------------------------------------
  
{
  slug: 'netflix-content-analysis',
  title: 'Netflix Content Analysis',
  shortDescription:
    'Analyzed Netflix catalogue data using SQL and Power BI to explore content types, ratings, genres, countries, and release trends.',
  thumbnail: '/files/netflix-logo.png',
  tools: ['SQL', 'Excel', 'Power BI'],
  category: 'SQL Analysis',
  featured: true,

  overview:
    'An end-to-end data analytics project involving data profiling, SQL-based cleaning, dataset preparation, and Power BI visualization to understand the composition of Netflix’s content catalogue.',

  businessProblem:
    'Understanding the composition of a streaming platform’s catalogue can help stakeholders evaluate its content mix and identify patterns across genres, ratings, countries, and release years. This project explores these patterns using Netflix catalogue metadata.',

  objectives: [
    'Analyze the distribution of Movies and TV Shows.',
    'Examine content ratings and genre/category distribution.',
    'Explore country-wise content representation.',
    'Analyze release-year and content-addition trends.',
    'Prepare a cleaned dataset for visualization and reporting.'
  ],

  dataset:
    'Netflix catalogue dataset containing title information, content type, director, cast, country, date added, release year, rating, duration, genre/category, and description. The project files contain 8,807 original records.',

  dataCleaning:
    'Performed data profiling and cleaning using SQL, created intermediate and final cleaned datasets, and prepared CSV and Excel versions for analysis. Some missing values were inferred from patterns in other records; these assumptions and row deletions require validation.',

  methodology:
    'Inspected the original dataset, compared dataset versions, used SQL scripts for cleaning and investigation, generated summary tables, and used Power BI for catalogue analysis and visualization.',

  code: [
    {
      language: 'sql',
      label: 'Initial profiling and cleaning',
      code: '-- See the project SQL file for the complete queries.'
    },
    {
      language: 'sql',
      label: 'Follow-up cleaning',
      code: '-- Includes additional cleaning and data preparation.'
    },
    {
      language: 'sql',
      label: 'Staging and investigation',
      code: '-- See the project SQL file for the investigation queries.'
    }
  ],

  dashboards: [
    {
      type: 'powerbi',
      embedUrl: 'https://app.powerbi.com/view?r=YOUR_EMBED_URL',
      caption:
        'Netflix catalogue analysis dashboard. Open the PBIX file in Power BI Desktop to review the report.'
    }
  ],

  keyFindings: [
    'The original dataset contains 8,807 records.',
    'The supplied final cleaned dataset contains 8,390 records.',
    'The final dataset includes both Movies and TV Shows.',
    'The analysis explores content ratings, genre/category mentions, country representation, release years, and dates added.',
    'The final dataset has 417 fewer records than the original, so the deletion logic needs validation before final reporting.'
  ],

  recommendations: [
    'Validate row deletions and document the reason for each exclusion.',
    'Review inferred missing values before using them in business conclusions.',
    'Resolve unparsed date-added values before presenting time-based trends.',
    'Use Power BI visuals to communicate content mix, ratings, genres, countries, and release trends.',
    'Avoid making popularity or revenue claims because the dataset does not contain viewership or revenue metrics.'
  ],

  files: [
    {
      name: '01-initial-profiling-and-cleaning.sql',
      type: 'SQL',
      description: 'Initial data profiling and cleaning queries.',
      url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/sql/01-initial-profiling-and-cleaning.sql'
    },
    {
      name: '02-follow-up-cleaning.sql',
      type: 'SQL',
      description: 'Additional cleaning and data preparation queries.',
      url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/sql/02-follow-up-cleaning.sql'
    },
    {
      name: '03-staging-and-investigation.sql',
      type: 'SQL',
      description: 'Staging and data investigation queries.',
      url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/sql/03-staging-and-investigation.sql'
    },
    {
      name: 'netflix-cleaned-final.xlsx',
      type: 'Excel',
      description: 'Final cleaned dataset in Excel format.',
      url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/data/working-files/netflix-cleaned-final.xlsx'
    },
    {
      name: 'netflix-visualization.pbix',
      type: 'Power BI',
      description: 'Power BI report file for opening in Power BI Desktop.',
      url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/power-bi/netflix-visualization.pbix'
    },
    {
      name: 'netflix-project-review-report.pdf',
      type: 'PDF',
      description: 'Project findings, data-quality review, limitations, and next steps.',
      url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/documentation/netflix-project-review-report.pdf'
    }
  ],

  references: [
    'https://www.kaggle.com/datasets/shivamb/netflix-shows'
  ],

  limitations: [
    'The dataset describes catalogue metadata, not actual viewership, popularity, revenue, or customer engagement.',
    'The final dataset contains 417 fewer records than the original; deletion rules need verification.',
    'Some missing values were inferred and should not be treated as verified facts.',
    'Some date-added values require parsing and validation.',
    'The supplied Power BI dashboard has not been independently audited.'
  ]
},


  // ---------------------------------------------------------------------------
  // SAMPLE PROJECT 2 — NYC Motor Vehicle Collision Analysis (Excel)
  // Replace this with your real project when ready.
  // ---------------------------------------------------------------------------
  {
    slug: 'nyc-collision-analysis',
    title: 'NYC Motor Vehicle Collision Analysis',
    shortDescription:
      'Excel-based data profiling and cleaning of NYC motor vehicle collision data with data quality checks and exploratory analysis.',
    thumbnail:
      'https://images.pexels.com/photos/4062988/pexels-photo-4062988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tools: ['Excel'],
    category: 'Excel',
    featured: true,
    isSample: true,

    overview:
      '[Placeholder] This project uses Microsoft Excel to profile, clean, and analyze New York City motor vehicle collision data. The analysis focuses on data quality assessment, exploratory analysis, and identifying patterns in collision frequency and contributing factors.',

    businessProblem:
      '[Placeholder] A city transportation department wants to understand where and when motor vehicle collisions are most frequent and what factors contribute to them, to inform road safety initiatives.',

    objectives: [
      '[Placeholder] Profile the dataset for completeness and quality.',
      '[Placeholder] Clean inconsistent and missing data.',
      '[Placeholder] Explore temporal patterns (by hour, day, month).',
      '[Placeholder] Identify high-frequency boroughs and intersections.',
      '[Placeholder] Analyze contributing factors to collisions.',
    ],

    dataset:
      '[Placeholder] The dataset is the NYC Motor Vehicle Collisions dataset, available from NYC Open Data. It includes fields such as crash date, crash time, borough, zip code, latitude, longitude, number of injuries, number of deaths, and contributing factors. Replace with your actual data source.',

    dataCleaning:
      '[Placeholder] Data cleaning steps included: removing rows with missing crash dates, standardizing time formats, filling or flagging missing borough values, validating geographic coordinates, and removing exact duplicates. Excel features used: Remove Duplicates, Text to Columns, Find & Replace, and conditional formatting for outlier detection.',

    methodology:
      '[Placeholder] The analysis used Excel features including: PivotTables for summarizing collisions by borough and time, charts for visualizing trends, formulas (COUNTIF, SUMIF, AVERAGEIF) for aggregation, and conditional formatting to highlight high-risk areas.',

    code: [],

    dashboards: [
      {
        type: 'screenshot',
        screenshotUrl:
          'https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption:
          '[Placeholder] Excel dashboard screenshot. Replace with your actual dashboard screenshot or embed.',
      },
    ],

    keyFindings: [
      '[Placeholder] Replace with your actual finding, e.g. "Collisions are most frequent during evening rush hours."',
      '[Placeholder] Replace with a second finding, e.g. "Brooklyn has the highest number of reported collisions."',
    ],

    recommendations: [
      '[Placeholder] Replace with a real recommendation based on your findings.',
    ],

    files: [
      {
        name: 'nyc_collision_analysis.xlsx',
        type: 'Excel',
        description: '[Placeholder] Main Excel workbook with analysis and charts.',
        url: '',
      },
      {
        name: 'data_cleaning_notes.pdf',
        type: 'PDF',
        description: '[Placeholder] Documentation of cleaning steps.',
        url: '',
      },
    ],

    githubUrl: 'https://github.com/[your-username]/nyc-collision-analysis',

    references: [
      '[Placeholder] NYC Open Data — Motor Vehicle Collisions. Add the actual link.',
    ],

    limitations: [
      '[Placeholder] Note limitations, e.g. "Data relies on police reports and may contain reporting biases."',
    ],
  },
];
