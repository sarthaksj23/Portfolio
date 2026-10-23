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
  // PROJECT 1 — Netflix Data Analysis
  // 
  // ---------------------------------------------------------------------------
  
{
    slug: 'netflix-content-analysis',
    title: 'Netflix Content Analysis: SQL Data Cleaning & Power BI Dashboard',
    shortDescription: 'Cleaned 8,807 raw Netflix title records with MySQL and built a 3-page Power BI dashboard on content type, country and genre trends.',
    thumbnail: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/assets/netflx%20mg.jpeg',  // swap for a dashboard screenshot when you have one
    tools: ['SQL', 'Power BI', 'Excel'],
    category: 'Power BI Dashboard',
    featured: false,

    overview: 'This project takes the public Netflix titles dataset (8,807 rows) from raw CSV to an interactive dashboard. I used MySQL to audit and clean the data, handling duplicates, blanks, missing directors and countries, and invalid ratings. I then built a Power BI report with three analysis pages (Types, Country and Genre) to show what the catalogue is made of, where it comes from and how fast it has grown.',
    businessProblem: 'Netflix\'s catalogue data is messy. Directors, cast and countries are frequently blank, a few rows are shifted so that durations sit in the rating column, and genres are packed into a single comma-separated field. Before anyone can answer questions such as "what do we offer, where is it made and how is it growing?", the data has to be made trustworthy and then presented in a form a non-technical stakeholder can explore.',
    objectives: [
      'Audit the raw dataset for duplicates, nulls, blanks and malformed rows.',
      'Fill missing director and country values using relationships already present in the data, and clearly mark what cannot be recovered.',
      'Measure the split between Movies and TV Shows and the typical length of each (average movie runtime, average number of seasons).',
      'Identify which countries contribute the most titles and how maturity ratings differ by country.',
      'Show how content additions to the platform changed over time.',
      'Break the catalogue down by genre.',
    ],
    dataset: 'The Netflix Movies and TV Shows dataset (Kaggle) contains 8,807 titles with 12 columns: show_id, type, title, director, cast, country, date_added, release_year, rating, duration, listed_in (genres) and description. show_id has no duplicates. Missing values in the raw file: director 2,634, country 831, cast 825, date_added 10, rating 4, duration 3.',
    dataCleaning: 'Cleaning was done in MySQL. I loaded the CSV into a table, checked show_id for duplicates (none found) and then worked on a backup copy so the original stayed untouched. Blank strings were converted to NULL for director, country and cast. Missing countries were filled from the most common country for the same director, then from the same cast list. Missing directors were filled from the most common director for the same country and genre, then country and cast, then cast and genre. Rows with a blank rating, or with a runtime such as "74 min" in the rating column (shifted rows), were deleted, as were rows where both director and country were still missing. Remaining gaps were labelled "Not Given" and the long description column was dropped. The result is 8,390 clean rows (417 removed, about 4.7%).',
    methodology: 'Phase 1, audit: profile every column for duplicates, NULLs and blanks. Phase 2, clean: SQL updates using correlated sub-queries over CTEs that rank the most frequent director/country/genre combinations, run in order of reliability. My first attempt (main.sql) hard-coded directors for individual country and genre groups, and I replaced it with the rule-based approach in MAIN 2.sql because it is repeatable and easier to defend. Phase 3, model and visualise: load the cleaned table into Power BI, split the comma-separated genre and country fields, and build measures such as show count, average movie duration, average seasons, total countries and unknown-country count. Phase 4, report: three analysis pages, Types (type split, average duration and seasons, additions over time), Country (titles by country, a map of ratings by country, unknown-country card) and Genre (titles by genre).',
    code: [
      {
        language: 'sql',
        label: 'Standardise blanks to NULL on a backup table',
        code: `create table newnet as select * from netflix;

update newnet set director = null where director = "";
update newnet set country = null where country = "";
update newnet set cast = null where cast = "";`,
      },
      {
        language: 'sql',
        label: 'Fill missing country using the same director',
        code: `with fill_country as
(select country, director, count(*) from newnet
 where director is not null and country is not null
 group by country, director
 order by count(*) desc)

update newnet
set country = (select country from fill_country
               where newnet.director = fill_country.director limit 1)
where director is not null and country is null;`,
      },
      {
        language: 'sql',
        label: 'Fill missing director using the same country and genre',
        code: `with fill_director as
(select director, country, listed_in, count(*) from newnet
 where country is not null and director is not null
 group by director, country, listed_in
 order by count(*) desc)

update newnet
set director = (select director from fill_director
                where newnet.country = fill_director.country
                and newnet.listed_in = fill_director.listed_in limit 1)
where director is null and country is not null and listed_in is not null;`,
      },
      {
        language: 'sql',
        label: 'Remove invalid rows and label what could not be recovered',
        code: `delete from newnet where rating = "";
delete from newnet where rating like "%min";
delete from newnet where director is null and country is null;

update newnet set director = "Not Given" where director is null;
update newnet set country = "Not Given" where country is null;`,
      },
    ],
    keyFindings: [
      'The catalogue is movie-heavy: 6,069 Movies (72.3%) versus 2,321 TV Shows (27.7%) in the cleaned data of 8,390 titles.',
      'Content is concentrated in a few countries. The United States leads with 3,239 titles (38.6%), followed by India with 1,070 (12.8%) and the United Kingdom with 636. These three account for about 59% of the catalogue, across 87 distinct lead countries.',
      'India\'s catalogue is almost entirely movies (989 of 1,070 titles, about 92%), whereas the US and UK have a much larger share of TV shows.',
      'The average movie runs about 100 minutes (median 98), and the average TV show has 1.82 seasons. About 65% of TV shows have only one season.',
      'Content additions grew roughly fivefold from 411 titles in 2016 to a peak of 1,925 in 2019. Additions dipped slightly in 2020 (1,825), and 2021 (1,371) is most likely a partial year.',
      'The catalogue is aimed at older audiences. TV-MA (3,062 titles) and TV-14 (2,054) together make up 61% of all titles, while children-focused ratings account for under 10%.',
      'The biggest genre tags are International Movies (2,739), Dramas (2,412) and Comedies (1,664). Genres overlap because one title can carry several tags.',
      'Most of the catalogue is recent: about 70% of titles were released in 2015 or later.',
    ],
    recommendations: [
      'Keep the content mix under review: with roughly 3 movies for every TV show, there is room to test whether more multi-season series would improve retention.',
      'Treat India as a growth market for series: it has a deep movie library (989 titles) but very few TV shows (81).',
      'Fill the gap in family content: children-focused ratings are under 10% of the catalogue while the mix is dominated by TV-MA and TV-14.',
      'Improve metadata capture at source: 1,115 titles still have no director, 729 have no cast and 262 have no country, which limits any country-level analysis.',
      'Interpret the 2020 to 2021 additions trend carefully until a full year of 2021 data is available.',
    ],
    files: [
      {
        name: 'main.sql',
        type: 'SQL',
        description: 'First cleaning attempt: schema, data load, quality checks and trial-and-error director fills.',
        url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/sql/01-initial-profiling-and-cleaning.sql',
      },
      {
        name: 'MAIN 2.sql',
        type: 'SQL',
        description: 'Final cleaning script: NULL standardisation, rule-based country and director imputation, invalid-row removal.',
        url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/sql/02-follow-up-cleaning.sql',
      },
      {
        name: 'secondary.sql',
        type: 'SQL',
        description: 'Exploratory queries used to find the most frequent director, country and genre combinations.',
        url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/sql/03-staging-and-investigation.sql',
      },
      {
        name: 'Fully cleaned netflix project1.csv',
        type: 'CSV',
        description: 'Final cleaned dataset (8,390 rows) used in the Power BI dashboard.',
        url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/data/working-files/netflix-cleaned-final.csv',
      },
      {
        name: 'Fully cleaned netflix project1.xlsx',
        type: 'Excel',
        description: 'Excel version of the final cleaned dataset.',
        url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/data/working-files/netflix-cleaned-final.xlsx',
      },
      {
        name: 'uncleaned netflix.csv',
        type: 'CSV',
        description: 'Original raw dataset (8,807 rows) before any cleaning.',
        url: '',  'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/data/raw/netflix-original-uncleaned.csv'
      },
      {
        name: 'visualization.pbix',
        type: 'Power BI',
        description: 'Power BI report with the Types, Country and Genre pages.',
        url: '',  // 'Power BI' is not in your supported type list, so check the icon; host externally
      },
    ],
    githubUrl: 'https://github.com/your-username/your-repo',  // replace with your repo
    references: [
      'Netflix Movies and TV Shows dataset (Kaggle).',
    ],
    limitations: [
      'Imputed directors are inferred, not verified. About 1,122 directors (roughly 13% of rows) were filled from the most common director for the same country and genre, so the Directors visuals and any "top director" ranking reflect this rule as much as the real data.',
      'About 185 missing countries were inferred from director or cast and may be wrong for co-productions.',
      'For multi-country titles, country counts use the first listed country, and genre counts treat each tag separately, so genre totals exceed the number of titles.',
      '417 rows (about 4.7%) were removed during cleaning, and 262 titles still have an unknown country.',
      'The dataset is a snapshot. The latest year (2021) is incomplete, and the data contains no viewership, so "popularity" cannot be measured, only catalogue composition.',
      'The dashboard page does not include a screenshot or published link yet.',
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
