export type Component = {
  id: string;
  name: string;
  icon: string;
  description?: string;
};

export type ArchitectureNode = {
  id: string;
  name: string;
  provider: string;
  icon: string;
  x: number;
  y: number;
  connections: string[];
};

export type CostItem = {
  id: string;
  name: string;
  cost: string;
  description?: string;
};

export type AIRecommendation = {
  id: string;
  type: 'savings' | 'performance' | 'security';
  title: string;
  description: string;
  icon: string;
};

export type ExportOption = {
  id: string;
  name: string;
  icon: string;
};

export type ArchitectureState = {
  components: Component[];
  architectureNodes: ArchitectureNode[];
  costBreakdown: CostItem[];
  totalCost: string;
  aiRecommendations: AIRecommendation[];
  exportOptions: ExportOption[];
};

const formState: ArchitectureState = {
  components: [
    { id: 'web-server', name: 'Web Server', icon: '🖥️', description: 'Virtual machine for hosting web applications' },
    { id: 'database', name: 'Database', icon: '🗄️', description: 'Relational or NoSQL database service' },
    { id: 'load-balancer', name: 'Load Balancer', icon: '⚖️', description: 'Distributes traffic across multiple servers' },
    { id: 'object-storage', name: 'Object Storage', icon: '☁️', description: 'Scalable storage for files and data' },
    { id: 'cdn', name: 'CDN', icon: '🌐', description: 'Content delivery network for faster content' },
    { id: 'kubernetes', name: 'Kubernetes Cluster', icon: '☸️', description: 'Container orchestration platform' },
    { id: 'api-gateway', name: 'API Gateway', icon: '🚪', description: 'Manages and routes API requests' },
    { id: 'serverless', name: 'Serverless Function', icon: '⚡', description: 'Event-driven compute service' },
  ],
  architectureNodes: [
    { id: 'users', name: 'Users', provider: '', icon: '👥', x: 15, y: 50, connections: ['cloudflare-cdn'] },
    { id: 'cloud-sql', name: 'Cloud SQL', provider: 'GCP', icon: '🗄️', x: 35, y: 25, connections: ['web-server-1'] },
    { id: 'cloudflare-cdn', name: 'Cloudflare CDN', provider: 'Cloudflare', icon: '🌐', x: 35, y: 50, connections: ['web-server-1', 'web-server-2'] },
    { id: 'blob-storage', name: 'Blob Storage', provider: 'Azure', icon: '☁️', x: 35, y: 75, connections: ['web-server-2'] },
    { id: 'web-server-1', name: 'Web Server 1', provider: 'AWS EC2', icon: '🖥️', x: 60, y: 25, connections: ['aws-elb'] },
    { id: 'web-server-2', name: 'Web Server 2', provider: 'AWS EC2', icon: '🖥️', x: 60, y: 75, connections: ['aws-elb'] },
    { id: 'aws-elb', name: 'AWS ELB', provider: 'Load Balancer', icon: '⚖️', x: 85, y: 50, connections: [] },
  ],
  costBreakdown: [
    { id: 'ec2', name: 'AWS EC2 (2x m5.large)', cost: '$116.80', description: 'Compute instances' },
    { id: 'blob-storage', name: 'Azure Blob Storage (1TB)', cost: '$20.88', description: 'Object storage' },
    { id: 'cloud-sql', name: 'GCP Cloud SQL (db-g1-small)', cost: '$25.55', description: 'Managed database' },
    { id: 'cdn', name: 'Cloudflare CDN', cost: '$20.00', description: 'Content delivery' },
  ],
  totalCost: '$183.23',
  aiRecommendations: [
    { 
      id: 'savings-1', 
      type: 'savings', 
      title: 'Switch EC2 to Graviton instances to save ~20%', 
      description: 'Graviton processors offer better price-performance ratio',
      icon: '✅'
    },
    { 
      id: 'performance-1', 
      type: 'performance', 
      title: 'Your database may be under-provisioned. Consider upgrading to \'db-g1-medium\'', 
      description: 'Current configuration may cause performance bottlenecks',
      icon: '⚠️'
    },
  ],
  exportOptions: [
    { id: 'terraform', name: 'Terraform', icon: '📄' },
    { id: 'pulumi', name: 'Pulumi', icon: '📄' },
    { id: 'k8s-yaml', name: 'K8s YAML', icon: '📄' },
    { id: 'jenkinsfile', name: 'Jenkinsfile', icon: '📄' },
  ],
};

export default formState;
