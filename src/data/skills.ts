interface Skill {
  name: string;
  description: string;
  details: string[];
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export const technicalSkills: Skill[] = [
  {
    name: 'Python',
    description: 'Data Analysis & Machine Learning',
    details: [
      'Pandas & NumPy for data manipulation',
      'Scikit-learn for machine learning models',
      'Web scraping with Beautiful Soup',
      'Data visualization with Matplotlib & Seaborn',
      'API development with FastAPI'
    ],
    proficiency: 'Expert'
  },
  {
    name: 'Stata',
    description: 'Statistical Analysis & Econometrics',
    details: [
      'Time series analysis',
      'Panel data regression',
      'Statistical modeling',
      'Custom command development',
      'Data cleaning and management'
    ],
    proficiency: 'Expert'
  },
  {
    name: 'Financial Modeling',
    description: 'Financial Analysis & Valuation',
    details: [
      'DCF modeling',
      'Sensitivity analysis',
      'Scenario planning',
      'Financial statement analysis',
      'Market research and forecasting'
    ],
    proficiency: 'Advanced'
  },
  {
    name: 'Econometric Analysis',
    description: 'Economic Research & Analysis',
    details: [
      'Time series econometrics',
      'Panel data analysis',
      'Causal inference',
      'Statistical hypothesis testing',
      'Research methodology'
    ],
    proficiency: 'Expert'
  },
  {
    name: 'Data Analysis',
    description: 'Data Processing & Visualization',
    details: [
      'Data cleaning and preprocessing',
      'Statistical analysis',
      'Data visualization',
      'Report generation',
      'Dashboard development'
    ],
    proficiency: 'Expert'
  },
  {
    name: 'Academic Writing',
    description: 'Research & Publication',
    details: [
      'Research paper writing',
      'Literature review',
      'Technical documentation',
      'Peer review process',
      'Publication strategy'
    ],
    proficiency: 'Advanced'
  }
];

export const businessSkills: Skill[] = [
  {
    name: 'Strategic Planning',
    description: 'Business Strategy Development',
    details: [
      'Market analysis',
      'Competitive positioning',
      'Growth strategy',
      'Risk assessment',
      'Implementation planning'
    ],
    proficiency: 'Advanced'
  },
  {
    name: 'Research',
    description: 'Market & Academic Research',
    details: [
      'Research design',
      'Data collection',
      'Analysis methodology',
      'Report writing',
      'Presentation of findings'
    ],
    proficiency: 'Expert'
  },
  {
    name: 'Project Management',
    description: 'Project Planning & Execution',
    details: [
      'Project planning',
      'Team coordination',
      'Resource allocation',
      'Timeline management',
      'Stakeholder communication'
    ],
    proficiency: 'Advanced'
  },
  {
    name: 'Negotiations',
    description: 'Business & Contract Negotiations',
    details: [
      'Contract negotiation',
      'Stakeholder management',
      'Conflict resolution',
      'Deal structuring',
      'Relationship building'
    ],
    proficiency: 'Advanced'
  },
  {
    name: 'Team Leadership',
    description: 'Team Management & Development',
    details: [
      'Team building',
      'Performance management',
      'Mentoring',
      'Conflict resolution',
      'Strategic delegation'
    ],
    proficiency: 'Advanced'
  }
];