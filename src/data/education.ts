export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'M.S.',
    field: 'Business Analytics & Information Systems',
    school: 'University of South Florida',
    location: 'Tampa, FL',
    period: 'Aug 2023 – May 2025',
  },
  {
    id: 'edu-2',
    degree: 'B.Tech',
    field: 'Electronics & Communication Engineering',
    school: 'Karunya Institute of Industrial Technology',
    location: 'Tamil Nadu, India',
    period: '2018 – 2022',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'PL-300: Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
  },
  {
    id: 'cert-2',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
  },
];
