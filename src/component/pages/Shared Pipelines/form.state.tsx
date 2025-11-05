export interface SharedPipelinesState {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'draft';
  lastRun: string;
}

export const sharedPipelinesData: SharedPipelinesState[] = [
  {
    id: "1",
    name: "Build Pipeline",
    description: "Standard build pipeline for all projects",
    status: "active",
    lastRun: "2024-01-15T09:45:00Z"
  },
  {
    id: "2",
    name: "Deploy Pipeline", 
    description: "Automated deployment pipeline",
    status: "active",
    lastRun: "2024-01-15T10:15:00Z"
  }
];

export default {
  pipelines: sharedPipelinesData
};

export const architecturesData = [
  {
    id: 1,
    title: "High-Availability WordPress",
    providers: ["AW", "GC"],
    estimatedCostPerMonth: 150,
    clones: 120,
    validation: "Validated",
  },
  {
    id: 2,
    title: "Static Site on Netlify/Vercel",
    providers: ["AW"],
    estimatedCostPerMonth: 20,
    clones: 890,
    validation: "Validated",
  },
  {
    id: 3,
    title: "Serverless API Backend",
    providers: ["AZ", "GC"],
    estimatedCostPerMonth: 75,
    clones: 450,
    validation: "Community",
  },
  {
    id: 4,
    title: "Kubernetes Microservices Cluster",
    providers: ["DI", "LI"],
    estimatedCostPerMonth: 250,
    clones: 78,
    validation: "Validated",
  },
];

