export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  accomplishments: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Data Analyst',
    company: 'Franchise Tax Board (FTB)',
    period: 'Jan 2026 – Present',
    location: 'Sacramento, CA',
    description:
      'Own Power BI dashboards used by 20+ analysts across State Controller\'s Office, audit, and compliance teams. Build complex T-SQL queries on large tax datasets. Automate recurring reporting workflows.',
    accomplishments: [
      'Designed and deployed Monthly Tax Filing Trend dashboard across compliance teams',
      'Built Refund Status tracker dashboard replacing manual status pulls, saving 5+ hours weekly',
      'Write complex T-SQL using CTEs, window functions, and multi-table joins on large datasets',
      'Automated recurring reporting workflows using Python and SQL Server scheduled jobs',
      'Partner with data engineering on data-retention logic and SLA monitoring',
    ],
    skills: ['T-SQL', 'Power BI', 'Python', 'SQL Server', 'ETL', 'Data Analysis'],
  },
  {
    id: 'exp-2',
    title: 'BI Engineer',
    company: 'Honeywell',
    period: 'May 2025 – Dec 2025',
    location: 'Remote',
    description:
      'Developed BI solutions and analytics infrastructure. Collaborated on data pipeline optimization and visualization design.',
    accomplishments: [
      'Developed Power BI and Tableau dashboards for business operations',
      'Optimized SQL queries and ETL processes for improved performance',
      'Partnered with stakeholders on requirements and data architecture',
      'Built self-service analytics capabilities for cross-functional teams',
    ],
    skills: ['Power BI', 'Tableau', 'SQL', 'Azure', 'ETL', 'Data Modeling'],
  },
  {
    id: 'exp-3',
    title: 'Data Analyst Intern',
    company: 'University of South Florida (USF)',
    period: 'Nov 2024 – May 2025',
    location: 'Tampa, FL',
    description:
      'Capstone project on data analytics and business intelligence. Developed analytics solutions for academic and research applications.',
    accomplishments: [
      'Completed M.S. coursework in Business Analytics & Information Systems',
      'Built end-to-end analytics solutions using modern data stack',
      'Developed dashboards and reports for stakeholder decision-making',
      'Worked with large datasets using Python, SQL, and visualization tools',
    ],
    skills: ['Python', 'SQL', 'Power BI', 'Tableau', 'Data Analysis', 'Statistics'],
  },
  {
    id: 'exp-4',
    title: 'Data Engineer',
    company: 'Cognizant / Gilead Sciences',
    period: 'Jan 2022 – Jul 2023',
    location: 'Chennai/Remote',
    description:
      'Built production data engineering solutions on AWS. Designed and maintained ETL/ELT pipelines processing large-scale life sciences data.',
    accomplishments: [
      'Engineered Apache Airflow DAGs for complex ETL workflows processing 100GB+ daily',
      'Built S3 → Glue → Athena/Redshift pipelines with incremental load logic',
      'Implemented data quality checks and SLA monitoring dashboards',
      'Optimized PySpark jobs reducing processing time by 40%',
      'Collaborated with analytics and compliance teams on data governance',
    ],
    skills: ['Python', 'PySpark', 'Airflow', 'AWS (S3, Glue, Athena, Redshift)', 'SQL', 'ETL/ELT'],
  },
  {
    id: 'exp-5',
    title: 'Research Intern, Gesture Recognition',
    company: 'Samsung R&D',
    period: 'Mar 2021 – Dec 2021',
    location: 'Bengaluru',
    description:
      'Research and development on computer vision and gesture recognition. Worked with deep learning models and OpenCV.',
    accomplishments: [
      'Developed gesture recognition models using OpenCV and deep learning',
      'Achieved 92% accuracy on gesture classification using CNN architecture',
      'Collaborated on research paper and technical documentation',
      'Worked with Python, NumPy, and TensorFlow for model training and evaluation',
    ],
    skills: ['Python', 'OpenCV', 'Deep Learning', 'NumPy', 'TensorFlow', 'Computer Vision'],
  },
];
