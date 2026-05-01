export interface SkillCategory {
  category: string;
  description?: string;
  skills: {
    name: string;
    proficiency: 'Expert' | 'Advanced' | 'Intermediate';
    frequency?: string;
  }[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages & Programming',
    description: 'Core programming languages and scripting',
    skills: [
      { name: 'Python', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'T-SQL', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'SQL', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'PySpark', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Bash', proficiency: 'Intermediate', frequency: 'Regular' },
    ],
  },
  {
    category: 'BI & Visualization Tools',
    description: 'Business intelligence and data visualization platforms',
    skills: [
      { name: 'Power BI', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'Tableau', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'SSRS', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Excel', proficiency: 'Advanced', frequency: 'Daily' },
    ],
  },
  {
    category: 'Cloud & Data Platforms',
    description: 'Cloud infrastructure and data warehousing',
    skills: [
      { name: 'AWS S3, Glue, Athena, Redshift', proficiency: 'Expert', frequency: 'Regular' },
      { name: 'AWS MWAA/Airflow', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Snowflake', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Databricks', proficiency: 'Intermediate', frequency: 'Familiar' },
      { name: 'Azure', proficiency: 'Intermediate', frequency: 'Familiar' },
    ],
  },
  {
    category: 'Data Engineering & Tools',
    description: 'ETL/ELT pipelines, orchestration, and data quality',
    skills: [
      { name: 'Apache Airflow', proficiency: 'Expert', frequency: 'Regular' },
      { name: 'ETL/ELT Pipeline Design', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'Dimensional Modeling', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Incremental Loads', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Data Quality Monitoring', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'dbt', proficiency: 'Intermediate', frequency: 'Familiar' },
    ],
  },
  {
    category: 'Databases',
    description: 'Relational and cloud databases',
    skills: [
      { name: 'SQL Server', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'PostgreSQL', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Amazon Redshift', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Teradata', proficiency: 'Intermediate', frequency: 'Familiar' },
    ],
  },
  {
    category: 'Python Data & ML Libraries',
    description: 'Data manipulation, analysis, and machine learning',
    skills: [
      { name: 'pandas', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'NumPy', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'SciPy', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'scikit-learn', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'OpenCV', proficiency: 'Intermediate', frequency: 'Familiar' },
    ],
  },
  {
    category: 'AI & Development Tools',
    description: 'AI assistants and development tools',
    skills: [
      { name: 'Claude', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'ChatGPT', proficiency: 'Expert', frequency: 'Daily' },
      { name: 'GitHub Copilot', proficiency: 'Advanced', frequency: 'Daily' },
      { name: 'Git', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'Linux', proficiency: 'Advanced', frequency: 'Regular' },
      { name: 'CI/CD', proficiency: 'Intermediate', frequency: 'Regular' },
      { name: 'Agile', proficiency: 'Advanced', frequency: 'Daily' },
    ],
  },
];
