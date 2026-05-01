export interface KnowledgeEntry {
  keywords: string[];
  answer: string;
  category: string;
  suggestedFollowUps?: string[];
}

export const askJayKnowledge: Record<string, KnowledgeEntry> = {
  about: {
    category: 'About',
    keywords: ['tell me about', 'who are you', 'background', 'about yourself'],
    answer: 'I am a Data Analyst with 4+ years across analytics and data engineering. Currently at the State of California Franchise Tax Board, I deliver compliance and audit reporting dashboards. I have strong T-SQL experience on large tax datasets, end-to-end Power BI ownership, and production data engineering on AWS.',
    suggestedFollowUps: ['What roles are you looking for?', 'What is your strongest skill?'],
  },
  roles: {
    category: 'Career',
    keywords: ['what roles', 'looking for', 'interested in', 'target role'],
    answer: 'I am looking for Data Analyst, BI Engineer, or Data Engineer roles. I am especially interested in positions where I can leverage Power BI and T-SQL on large-scale datasets, build data engineering pipelines on cloud platforms (AWS, Snowflake), or own analytics platforms end-to-end.',
    suggestedFollowUps: ['Tell me about your current work'],
  },
  ftb: {
    category: 'Work',
    keywords: ['ftb', 'franchise tax board', 'current role', 'state of california'],
    answer: 'At Franchise Tax Board (Jan 2026-Present), I own Power BI dashboards used by 20+ analysts. I write complex T-SQL on large tax datasets and have automated recurring reporting workflows. I work on compliance and audit reporting for the State Controller Office.',
    suggestedFollowUps: ['What about your previous roles?'],
  },
  honeywell: {
    category: 'Work',
    keywords: ['honeywell', 'bi engineer'],
    answer: 'At Honeywell (May 2025-Dec 2025), I developed BI solutions and analytics infrastructure. I worked with Power BI and Tableau, optimized SQL queries, and built self-service analytics for cross-functional teams.',
    suggestedFollowUps: ['Tell me about your data engineering background'],
  },
  gilead: {
    category: 'Work',
    keywords: ['cognizant', 'gilead', 'data engineer', 'aws', 'airflow'],
    answer: 'At Cognizant/Gilead Sciences (Jan 2022-Jul 2023), I engineered production data solutions on AWS. I built Apache Airflow DAGs for complex ETL workflows processing 100GB+ daily and designed S3-Glue-Athena-Redshift pipelines. I optimized PySpark jobs reducing processing time by 40%.',
    suggestedFollowUps: ['What is your AWS experience?', 'Tell me about your Airflow expertise'],
  },
  skills: {
    category: 'Skills',
    keywords: ['skills', 'what are you good at', 'expertise', 'strongest'],
    answer: 'My strongest skills are: T-SQL and SQL (daily use), Power BI (end-to-end ownership), Data Engineering (ETL/ELT pipelines on AWS), Python (data analysis and automation), and AWS (S3, Glue, Athena, Redshift). I also use Airflow, PySpark, and AI tools like Claude and ChatGPT.',
    suggestedFollowUps: ['Tell me about your AWS experience'],
  },
  aws: {
    category: 'Skills',
    keywords: ['aws', 'amazon', 'cloud', 's3', 'redshift'],
    answer: 'I have hands-on production experience with AWS: S3 (data lakes), Glue (ETL), Athena (SQL queries), Redshift (data warehouse), MWAA (Airflow), and Lambda. I am AWS Certified Solutions Architect-Associate and have built end-to-end data pipelines on AWS.',
    suggestedFollowUps: ['Do you have certifications?'],
  },
  certs: {
    category: 'Certifications',
    keywords: ['certification', 'certified', 'credentials'],
    answer: 'I hold two professional certifications: PL-300 (Microsoft Power BI Data Analyst) and AWS Certified Solutions Architect-Associate. Both validate my expertise in their respective domains.',
    suggestedFollowUps: ['Tell me about your education'],
  },
  education: {
    category: 'Background',
    keywords: ['education', 'degree', 'university', 'school'],
    answer: 'I hold an M.S. in Business Analytics & Information Systems from University of South Florida (Aug 2023-May 2025) and a B.Tech in Electronics & Communication Engineering from Karunya Institute (2018-2022).',
    suggestedFollowUps: ['What about your work experience?'],
  },
  location: {
    category: 'Logistics',
    keywords: ['where', 'location', 'based', 'relocation'],
    answer: 'I am currently based in Sacramento, California. I am open to remote roles as well as on-site positions. I am also willing to relocate for the right opportunity.',
    suggestedFollowUps: ['What roles are you looking for?'],
  },
  visa: {
    category: 'Logistics',
    keywords: ['visa', 'sponsorship', 'work authorization', 'f-1', 'opt'],
    answer: 'I am on F-1 OPT with STEM eligibility, which provides extended work authorization in the U.S. I do not require visa sponsorship at this time.',
    suggestedFollowUps: ['What is your current location?'],
  },
  contact: {
    category: 'Contact',
    keywords: ['contact', 'email', 'phone', 'reach', 'get in touch'],
    answer: 'You can reach me at: Email: upparajayanth999@gmail.com | Phone: 656-203-4661 | LinkedIn: linkedin.com/in/jayanthu/ | GitHub: github.com/jayanthuppara',
    suggestedFollowUps: ['Tell me about yourself'],
  },
};
