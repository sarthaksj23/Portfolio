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
    slug: 'netflix-data-analysis',
    title: 'Netflix Data Analysis',
    shortDescription:
      'SQL-based analysis of a Netflix titles dataset including data cleaning, duplicate detection, and advanced analytical queries.',
    thumbnail:
      'https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tools: ['SQL', 'PostgreSQL', 'Excel'],
    category: 'SQL Analysis',
    featured: true,
    isSample: true,

    overview:
      '[Placeholder] This project explores a dataset of Netflix titles using SQL. The analysis covers data cleaning, validation, duplicate identification, and a series of analytical queries to understand content distribution, trends over time, and genre patterns.',

    businessProblem:
      '[Placeholder] A streaming platform wants to understand the composition of its content library — what types of titles are available, how the catalog has grown over time, and which genres are most represented — to inform content acquisition and marketing strategy.',

    objectives: [
      '[Placeholder] Clean and validate the dataset for analysis.',
      '[Placeholder] Identify and handle duplicate records.',
      '[Placeholder] Analyze the distribution of content by type (Movie vs. TV Show).',
      '[Placeholder] Examine trends in content additions over time.',
      '[Placeholder] Identify the most common genres and countries of origin.',
    ],

    dataset:
      '[Placeholder] The dataset used is a publicly available Netflix titles CSV file containing columns such as show_id, type, title, director, cast, country, date_added, release_year, rating, duration, and listed_in. Replace this with your actual data source.',

    dataCleaning:
      '[Placeholder] The data cleaning process included: checking for missing values in key columns, standardizing date formats, trimming whitespace from text fields, and verifying data types. Duplicate records were identified using a combination of title and release_year.',

    methodology:
      '[Placeholder] The analysis followed a structured SQL workflow: (1) data profiling with COUNT, DISTINCT, and NULL checks; (2) data cleaning with UPDATE and string functions; (3) exploratory queries using GROUP BY, aggregations, and window functions; (4) trend analysis using date extraction and ordering.',

    code: [
      {
        language: 'sql',
        label: 'Data profiling — check for missing values',
        code: `-- Count missing values in key columns
SELECT
  SUM(CASE WHEN title IS NULL THEN 1 ELSE 0 END) AS missing_titles,
  SUM(CASE WHEN director IS NULL THEN 1 ELSE 0 END) AS missing_directors,
  SUM(CASE WHEN country IS NULL THEN 1 ELSE 0 END) AS missing_countries,
  SUM(CASE WHEN date_added IS NULL THEN 1 ELSE 0 END) AS missing_dates
FROM netflix_titles;`,
      },
      {
        language: 'sql',
        label: 'Identify duplicate records',
        code: `-- Find potential duplicates by title and release year
SELECT title, release_year, COUNT(*) AS record_count
FROM netflix_titles
GROUP BY title, release_year
HAVING COUNT(*) > 1
ORDER BY record_count DESC;`,
      },
      {
        language: 'sql',
        label: 'Content distribution by type',
        code: `-- Compare Movies vs TV Shows
SELECT
  type,
  COUNT(*) AS total_titles,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) AS percentage
FROM netflix_titles
GROUP BY type
ORDER BY total_titles DESC;`,
      },
    ],

    dashboards: [
      {
        type: 'screenshot',
        screenshotUrl:
          'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption:
          '[Placeholder] Dashboard screenshot. Replace with your actual dashboard embed or screenshot.',
      },
    ],

    keyFindings: [
      '[Placeholder] Describe your actual finding here, e.g. "Movies make up approximately 70% of the catalog."',
      '[Placeholder] Describe a second finding, e.g. "Content additions peaked in 2019."',
    ],

    recommendations: [
      '[Placeholder] Replace with a real recommendation based on your findings.',
    ],

    files: [
      {
        name: 'netflix_analysis.sql',
        type: 'SQL',
        description: '[Placeholder] Main SQL script with all queries.',
        url: '',
      },
      {
        name: 'netflix_titles.csv',
        type: 'CSV',
        description: '[Placeholder] Source dataset (link to external source).',
        url: '',
      },
    ],

    githubUrl: 'https://github.com/[your-username]/netflix-data-analysis',

    references: [
      '[Placeholder] Add references, data sources, or inspiration here.',
    ],

    limitations: [
      '[Placeholder] Note any limitations, e.g. "Dataset is a snapshot and may not reflect current catalog."',
    ],
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
