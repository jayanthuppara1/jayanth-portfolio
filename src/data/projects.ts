export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Real-Time Sales Dashboard',
    description:
      'Interactive Tableau dashboard connecting to Snowflake. Visualizes real-time sales metrics, regional performance, and forecasting. Used by 50+ stakeholders daily with automated refresh every 15 minutes. Reduced reporting time by 90%.',
    tech: ['Tableau', 'Snowflake', 'SQL', 'Data Visualization'],
    github: 'https://github.com/jayanthuppara/sales-dashboard',
    link: 'https://public.tableau.com/app/profile/jayanth.uppara',
  },
  {
    id: 'proj-2',
    title: 'Customer Churn Prediction Model',
    description:
      'Machine learning pipeline predicting customer churn with 87% accuracy. Built with Python (scikit-learn, pandas) and deployed via FastAPI. Integrated with Airflow for monthly retraining. Identified 200+ at-risk customers resulting in $500K retained revenue.',
    tech: ['Python', 'scikit-learn', 'SQL', 'FastAPI', 'Airflow', 'ML'],
    github: 'https://github.com/jayanthuppara/churn-prediction',
  },
  {
    id: 'proj-3',
    title: 'Modern Analytics Stack',
    description:
      'Implemented complete dbt + Snowflake + Tableau stack for fintech startup. Created 15 production-ready data models with tests and documentation. Enabled self-service analytics for 30+ business users. Reduced data literacy gap through training workshops.',
    tech: ['dbt', 'Snowflake', 'Tableau', 'YAML', 'SQL', 'Data Modeling'],
    github: 'https://github.com/jayanthuppara/analytics-stack',
  },
  {
    id: 'proj-4',
    title: 'ETL Pipeline Optimization',
    description:
      'Redesigned legacy ETL pipelines using Python and Pandas. Reduced processing time from 4 hours to 12 minutes (95% improvement). Implemented incremental loading and data validation. Achieved 99.9% data quality score with automated monitoring.',
    tech: ['Python', 'Pandas', 'PostgreSQL', 'Docker', 'monitoring'],
    github: 'https://github.com/jayanthuppara/etl-optimization',
  },
];
