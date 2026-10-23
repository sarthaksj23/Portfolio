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
        url: 'https://github.com/sarthaksj23/Netflix-Content-Analysis/blob/main/netflix-content-analysis-project/netflix-content-analysis/data/raw/netflix-original-uncleaned.csv',
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
  // PROJECT 2 — NYC Motor Vehicle Collision Analysis 
  // Replace this with your real project when ready.
  // ---------------------------------------------------------------------------
  {
    slug: 'nyc-motor-vehicle-collisions-2020',
    title: 'NYC Motor Vehicle Collisions 2020: Data Profiling & Excel Analysis',
    shortDescription: 'Profiled 74,881 NYC collision records in Excel and used pivot tables to show when, where and how severely collisions occurred in 2020.',
    thumbnail: 'https://www.google.com/imgres?q=nyc%20cty%20redlght%20top%20vew%20traffc&imgurl=https%3A%2F%2Ftraffictickets.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fred-light-1024x683.jpg.webp&imgrefurl=https%3A%2F%2Ftraffictickets.com%2Fnew-york%2Ftraffic-tickets%2Frunning-red-light%2F&docid=0_qeFag2mYx9VM&tbnid=IbfQylnp3nB35M&vet=12ahUKEwj0gYXC9NCXAxWkjuEIHXh9JVYQnPAOegUIyAMQAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwj0gYXC9NCXAxWkjuEIHXh9JVYQnPAOegUIyAMQAA',  // add a screenshot of your pivot chart / analysis sheet
    tools: ['Excel'],
    category: 'Excel Analysis',
    featured: false,

    overview: 'This project analyses 74,881 police-reported motor vehicle collisions in New York City between 1 January and 29 August 2020. I profiled every one of the 29 columns for missing values, duplicates, invalid values and inconsistent spellings, added three derived fields (day of week, hour of day and severity group), and used pivot tables to answer when collisions happen, which boroughs and streets are most affected, and how severe the outcomes are.',
    businessProblem: 'City transport and road-safety teams need to know when and where collisions cluster in order to target enforcement, signage and awareness campaigns. The raw collision log is large and incomplete (a third of the records have no borough), so before drawing conclusions the data has to be profiled to see what can and cannot be trusted, and then summarised in a way that is easy to act on.',
    objectives: [
      'Profile the raw data: data types, missing values, unique values, ranges, duplicates and invalid values.',
      'Find out when collisions occur most often: day of week, hour of day and month.',
      'Compare collision counts across boroughs, and be clear about the effect of missing borough data.',
      'Classify each collision as Fatal, Injury or No injury recorded and measure the split.',
      'Identify the streets with the most collisions and how severe those collisions are.',
    ],
    dataset: 'NYC Open Data motor vehicle collisions extract for 2020: 74,881 rows and 29 columns covering crash date and time, borough, ZIP code, coordinates, street names, counts of persons, pedestrians, cyclists and motorists injured or killed, up to five contributing factors and up to five vehicle types per collision. COLLISION_ID is unique for every row. The data runs from 1 January to 29 August 2020 (242 days).',
    dataCleaning: 'I started with a full data profile in Excel (data type, missing count and percentage, unique values, min/max/average, zero counts and invalid-value checks on coordinates). COLLISION_ID has no duplicates. The main quality issues are: borough and ZIP code missing in 34.4% of rows, latitude, longitude and location missing in 7.9%, on-street name missing in 26.0%, cross street in 52.4% and off-street in 74.0%, and inconsistent spellings in all five vehicle type columns. I deliberately did not guess missing boroughs or streets; they stay blank and are shown as "(blank)" in the analysis so that borough comparisons are read with the gap in mind. I then added three calculated columns to the cleaned table: CRASH_DAY, CRASH_HOUR and SEVERITY_GROUP.',
    methodology: 'Step 1, profile the data in Excel using formulas such as COUNTBLANK, MIN/MAX, COUNTIF and unique-value counts, and a Zip-to-Borough pivot to test whether blank boroughs could be recovered from the ZIP code (they could not, because rows missing a borough also have no ZIP). Step 2, build derived fields in an Excel table: weekday from the crash date, hour from the crash time, and a severity group (Fatal if anyone was killed, otherwise Injury if anyone was injured, otherwise No injury recorded). Step 3, build pivot tables on COLLISION_ID counts for time, borough, severity and street, and calculate severity percentages with GETPIVOTDATA. Step 4, write the findings up in an Analysis sheet.',
    code: [
      {
        language: 'excel',
        label: 'Day of week and hour of day from the crash date and time',
        code: `CRASH_DAY  =TEXT([@[CRASH DATE]],"dddd")
CRASH_HOUR =HOUR([@[CRASH TIME]])`,
      },
      {
        language: 'excel',
        label: 'Severity group for each collision',
        code: `SEVERITY_GROUP =IF([@[NUMBER OF PERSONS KILLED]]>0,"Fatal",
                  IF([@[NUMBER OF PERSONS INJURED]]>0,"Injury","No injury recorded"))`,
      },
      {
        language: 'excel',
        label: 'Severity percentage from the pivot table',
        code: `=GETPIVOTDATA("COLLISION_ID",$A$3,"SEVERITY_GROUP","Injury")/74881*100`,
      },
      {
        language: 'excel',
        label: 'Share of collisions with injury or fatality, by street',
        code: `=(B5+C5)/E5*100    // (Fatal + Injury) / Grand Total`,
      },
    ],
    keyFindings: [
      'The dataset holds 74,881 collisions over 242 days (1 Jan to 29 Aug 2020), about 309 per day, with 27,448 people injured and 144 killed.',
      'Friday has the most collisions (12,271, 16.4% of the total) and Sunday the fewest (9,003, 12.0%). Friday is about 36% higher than Sunday.',
      'The afternoon commute dominates. 4 PM is the busiest hour with 5,219 collisions, followed by 2 PM (5,016) and 5 PM (4,974). The five hours from 2 PM to 6:59 PM contain about 33% of all collisions.',
      'January had the most collisions (14,287) and April the fewest (4,116), about 71% below January. The sharp drop from March to April is consistent with the COVID-19 lockdown, though the dataset itself contains no cause.',
      'Among records with a borough, Brooklyn has the most collisions (16,907, 34.4%), followed by Queens (14,017, 28.5%), the Bronx (9,417, 19.2%), Manhattan (7,353, 15.0%) and Staten Island (1,446, 2.9%).',
      'About 72.6% of collisions (54,371) have no injury recorded, 27.2% (20,375) involve an injury and 0.18% (135) are fatal.',
      'Pedestrians are far more exposed to fatal outcomes than to injury: they make up 14.9% of people injured (4,099 of 27,448) but 38.9% of people killed (56 of 144). Motorists account for 73.1% of injuries and 54.9% of deaths.',
      'The streets with the most recorded collisions are highways and parkways: Belt Parkway (about 1,240), Long Island Expressway (745), Brooklyn Queens Expressway (about 740), FDR Drive (about 730) and Major Deegan Expressway (591).',
      'Driver inattention or distraction is the most common specified first contributing factor (19,123 collisions, 25.5%). A further 26.0% are recorded as "Unspecified". Sedans (45.9%) and SUVs/station wagons (36.8%) are the most common first vehicle type.',
    ],
    recommendations: [
      'Target enforcement and awareness campaigns at the 2 PM to 6 PM window and at Fridays, when collision counts are highest.',
      'Prioritise pedestrian protection measures. Pedestrians are a small share of injuries but close to 4 in 10 deaths.',
      'Review the highways and parkways that top the street ranking (Belt Parkway, Long Island Expressway, Brooklyn Queens Expressway, FDR Drive) for speed, merging and lane-use issues.',
      'Recover missing boroughs: 21,189 of the 25,741 records with no borough have coordinates, so a map-based lookup could fill most of them and make borough comparisons reliable.',
      'Standardise vehicle type entries and reduce "Unspecified" contributing factors at the point of data capture.',
    ],
    files: [
      {
        name: 'NYC Accidents 2020 Original.csv',
        type: 'CSV',
        description: 'Original raw collision data (74,881 rows, 29 columns).',
        url: 'https://github.com/sarthaksj23/NYC-Collisions-Project/blob/main/NYC%20Accidents%202020%20Original.csv',  // 14.7 MB: host externally (GitHub / Drive) and paste the link here
      },
      {
        name: 'Profiling 1.xlsx',
        type: 'Excel',
        description: 'Data profiling workbook: column-level quality checks and Zip-to-Borough pivot.',
        url: 'https://github.com/sarthaksj23/NYC-Collisions-Project/blob/main/Profiling%201.xlsx',  // 13.9 MB: host externally
      },
      {
        name: 'Cleaning.xlsx',
        type: 'Excel',
        description: 'Analysis workbook: derived fields, pivot tables for time, borough, severity and location, and written findings.',
        url: 'https://github.com/sarthaksj23/NYC-Collisions-Project/blob/main/Cleaning.xlsx',  // 25.6 MB: host externally
      },
      {
        name: 'extra profiling.csv',
        type: 'CSV',
        description: 'Column profile summary: data types, missing counts, unique values and notes.',
        url: 'https://github.com/sarthaksj23/NYC-Collisions-Project/blob/main/extra%20profiling.csv',
      },
    ],
    githubUrl: 'https://github.com/sarthaksj23/NYC-Collisions-Project',  // replace with your repo
    references: [
      'NYC Open Data: Motor Vehicle Collisions (Crashes), 2020 extract.',
    ],
    limitations: [
      'Borough is missing for 34.4% of collisions, so borough rankings cover only 65.6% of the data. Counts are also raw totals, not adjusted for population, road length or traffic volume, so they do not show which borough is the riskiest.',
      'The data covers 1 January to 29 August 2020 only, and the lockdown period distorts monthly comparisons, so January being the busiest month should not be read as a seasonal pattern.',
      'Missing values were left blank rather than imputed, and vehicle type spellings were documented but not standardised, so vehicle-type counts are approximate.',
      '26% of first contributing factors are "Unspecified", and about 26% of records have no on-street name, which limits location and cause analysis.',
      'Street rankings reward long roads: highways appear at the top partly because they are long and busy, not necessarily because they are the most dangerous per kilometre.',
      '63 records have coordinates of 0,0 (outside New York City) and should be excluded from any map.',
      'Severity is a simple rule based on recorded injuries and deaths; it does not capture how serious an injury was.',
    ],
  },
];
