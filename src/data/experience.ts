export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Senior Data Analyst',
    company: 'TechCorp Analytics',
    period: '2023 - Present',
    description:
      'Lead data analytics initiatives for 15+ product teams. Designed and implemented real-time dashboards in Tableau that increased decision-making velocity by 40%. Built ETL pipelines processing 5TB+ daily using Python and SQL, reducing query times by 60%.',
    skills: ['Tableau', 'SQL', 'Python', 'ETL', 'Tableau', 'Analytics'],
  },
  {
    id: 'exp-2',
    title: 'BI Engineer',
    company: 'DataFlow Systems',
    period: '2021 - 2023',
    description:
      'Architected dbt-based data transformation layer for analytics team. Created 50+ semantic models in dbt, improving data quality metrics by 35%. Mentored 3 junior analysts on best practices in data modeling and documentation.',
    skills: ['dbt', 'Snowflake', 'SQL', 'Data Modeling', 'Looker', 'Analytics'],
  },
  {
    id: 'exp-3',
    title: 'Data Engineer',
    company: 'CloudScale Inc',
    period: '2019 - 2021',
    description:
      'Developed and maintained data pipelines on AWS (Lambda, S3, RDS). Optimized data warehouse queries resulting in 45% cost reduction. Implemented monitoring and alerting systems for data quality, achieving 99.9% uptime.',
    skills: ['Python', 'AWS', 'Spark', 'PostgreSQL', 'Data Engineering', 'Cloud'],
  },
  {
    id: 'exp-4',
    title: 'Analytics Engineer',
    company: 'InsightHub Analytics',
    period: '2018 - 2019',
    description:
      'Built analytics infrastructure using modern data stack (dbt, Airflow, BigQuery). Developed 20+ data marts serving business stakeholders. Created self-service analytics platform reducing report request time by 75%.',
    skills: ['dbt', 'BigQuery', 'Airflow', 'Analytics', 'Google Cloud', 'SQL'],
  },
  {
    id: 'exp-5',
    title: 'Junior Data Analyst',
    company: 'StartupXYZ',
    period: '2017 - 2018',
    description:
      'Performed exploratory data analysis and created KPI dashboards. Developed SQL queries for stakeholders. Assisted in A/B testing analysis, informing product decisions that improved user retention by 12%.',
    skills: ['Excel', 'SQL', 'Tableau', 'Analytics', 'Statistics', 'A/B Testing'],
  },
];
