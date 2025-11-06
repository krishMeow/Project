import { AWSIcon, AzureIcon, DigitalOceanIcon, GoogleCloudIcon, HetznerIcon, LinodeIcon } from "../../common/icon";

// Centralized data for all pricing comparison tables
export interface PricingData {
  provider: string;
  specs: string;
  hourly: string;
  monthly: string;
  yearly?: string;
  spot: string;
  sla: string;
  icon?: React.ReactNode;
}

// Virtual Machine data
export const virtualMachineData: PricingData[] = [
  {
    provider: "AWS",
    specs: "t3.medium (2 vCPU, 4GB RAM)",
    hourly: "$0.0416",
    monthly: "$30.37",
    yearly: "$70.37",
    spot: "$0.0125",
    sla: "99.99%",
    icon: <AWSIcon className="w-5 h-5" />,
  },
  {
    provider: "Azure",
    specs: "B2s (2 vCPU, 4GB RAM)",
    hourly: "$0.0416",
    monthly: "$30.37",
    yearly: "$70.37",
    spot: "$0.0083",
    sla: "99.99%",
    icon: <AzureIcon className="w-5 h-5" />,
  },
  {
    provider: "Google Cloud",
    specs: "e2-medium (2 vCPU, 4GB RAM)",
    hourly: "$0.0333",
    monthly: "$24.29",
    yearly: "$70.37",
    spot: "$0.0100",
    sla: "99.95%",
    icon: <GoogleCloudIcon className="w-5 h-5" />,
  },
  {
    provider: "DigitalOcean",
    specs: "Basic (2 vCPU, 4GB RAM)",
    hourly: "$0.0357",
    monthly: "$24.00",
    yearly: "$70.37",
    spot: "$0.0107",
    sla: "99.99%",
    icon: <DigitalOceanIcon className="w-5 h-5" />,
  },
  {
    provider: "Linode",
    specs: "Shared (2 vCPU, 4GB RAM)",
    hourly: "$0.0360",
    monthly: "$24.00",
    yearly: "$70.37",
    spot: "$0.0100",
    sla: "99.99%",
    icon: <LinodeIcon className="w-5 h-5" />,
  },
  {
    provider: "Hetzner",
    specs: "CPX21 (3 vCPU, 4GB RAM)",
    hourly: "$0.0150",
    monthly: "$10.95",
    yearly: "$70.37",
    spot: "$0.0050", // fixed
    sla: "99.99%",
    icon: <HetznerIcon className="w-5 h-5" />,
  },
];

// Managed Database data
export const managedDatabaseData: PricingData[] = [
  {
    provider: "AWS",
    specs: "RDS MySQL (db.t3.medium)",
    hourly: "$0.0580",
    monthly: "$42.34",
    yearly: "$70.37",
    spot: "$0.0174",
    sla: "99.95%",
    icon: <AWSIcon className="w-5 h-5" />,
  },
  {
    provider: "Azure",
    specs: "Azure Database MySQL (Gen5, 2 vCores)",
    hourly: "$0.0600",
    monthly: "$43.80",
    yearly: "$70.37",
    spot: "$0.0180",
    sla: "99.95%",
    icon: <AzureIcon className="w-5 h-5" />,
  },
  {
    provider: "Google Cloud",
    specs: "Cloud SQL MySQL (db-n1-standard-1)",
    hourly: "$0.0500",
    monthly: "$36.50",
    yearly: "$70.37",
    spot: "$0.0150",
    sla: "99.95%",
    icon: <GoogleCloudIcon className="w-5 h-5" />,
  },
  {
    provider: "DigitalOcean",
    specs: "Managed MySQL (2 vCPU, 4GB RAM)",
    hourly: "$0.0300",
    monthly: "$21.90",
    yearly: "$70.37",
    spot: "$0.0090",
    sla: "99.99%",
    icon: <DigitalOceanIcon className="w-5 h-5" />,
  },
  {
    provider: "Linode",
    specs: "Managed MySQL (2 vCPU, 4GB RAM)",
    hourly: "$0.0320",
    monthly: "$23.36",
    yearly: "$70.37",
    spot: "$0.0096",
    sla: "99.99%",
    icon: <LinodeIcon className="w-5 h-5" />,
  },
  {
    provider: "Hetzner",
    specs: "CPX21 (3 vCPU, 4GB RAM)",
    hourly: "$0.0150",
    monthly: "$10.95",
    yearly: "$70.37",
    spot: "$0.0050", // fixed
    sla: "99.99%",
    icon: <HetznerIcon className="w-5 h-5" />,
  },
];

// Object Storage data
export const objectStorageData: PricingData[] = [
  {
    provider: "AWS",
    specs: "S3 Standard (1TB storage)",
    hourly: "$0.0230",
    monthly: "$16.79",
    yearly: "$70.37",
    spot: "$0.0069",
    sla: "99.999999999%",
    icon: <AWSIcon className="w-5 h-5" />,
  },
  {
    provider: "Azure",
    specs: "Blob Storage (1TB storage)",
    hourly: "$0.0200",
    monthly: "$14.60",
    yearly: "$70.37",
    spot: "$0.0060",
    sla: "99.999999999%",
    icon: <AzureIcon className="w-5 h-5" />,
  },
  {
    provider: "Google Cloud",
    specs: "Cloud Storage (1TB storage)",
    hourly: "$0.0200",
    monthly: "$14.60",
    yearly: "$70.37",
    spot: "$0.0060",
    sla: "99.999999999%",
    icon: <GoogleCloudIcon className="w-5 h-5" />,
  },
  {
    provider: "DigitalOcean",
    specs: "Spaces (1TB storage)",
    hourly: "$0.0150",
    monthly: "$10.95",
    yearly: "$70.37",
    spot: "$0.0045",
    sla: "99.99%",
    icon: <DigitalOceanIcon className="w-5 h-5" />,
  },
  {
    provider: "Linode",
    specs: "Object Storage (1TB storage)",
    hourly: "$0.0150",
    monthly: "$10.95",
    yearly: "$70.37",
    spot: "$0.0045",
    sla: "99.99%",
    icon: <LinodeIcon className="w-5 h-5" />,
  },
  {
    provider: "Hetzner",
    specs: "CPX21 (3 vCPU, 4GB RAM)",
    hourly: "$0.0150",
    monthly: "$10.95",
    yearly: "$70.37",
    spot: "$0.0050", // fixed
    sla: "99.99%",
    icon: <HetznerIcon className="w-5 h-5" />,
  },
];

// Kubernetes data
export const kubernetesData: PricingData[] = [
  {
    provider: "AWS",
    specs: "EKS (3 nodes, t3.medium)",
    hourly: "$0.1000",
    monthly: "$73.00",
    yearly: "$70.37",
    spot: "$0.0300",
    sla: "99.95%",
    icon: <AWSIcon className="w-5 h-5" />,
  },
  {
    provider: "Azure",
    specs: "AKS (3 nodes, B2s)",
    hourly: "$0.1000",
    monthly: "$73.00",
    yearly: "$70.37",
    spot: "$0.0300",
    sla: "99.95%",
    icon: <AzureIcon className="w-5 h-5" />,
  },
  {
    provider: "Google Cloud",
    specs: "GKE (3 nodes, e2-medium)",
    hourly: "$0.0800",
    monthly: "$58.40",
    yearly: "$70.37",
    spot: "$0.0240",
    sla: "99.95%",
    icon: <GoogleCloudIcon className="w-5 h-5" />,
  },
  {
    provider: "DigitalOcean",
    specs: "DOKS (3 nodes, Basic)",
    hourly: "$0.0600",
    monthly: "$43.80",
    yearly: "$70.37",
    spot: "$0.0180",
    sla: "99.99%",
    icon: <DigitalOceanIcon className="w-5 h-5" />,
  },
  {
    provider: "Linode",
    specs: "LKE (3 nodes, Shared)",
    hourly: "$0.0600",
    monthly: "$43.80",
    yearly: "$70.37",
    spot: "$0.0180",
    sla: "99.99%",
    icon: <LinodeIcon className="w-5 h-5" />,
  },
  {
    provider: "Hetzner",
    specs: "CPX21 (3 vCPU, 4GB RAM)",
    hourly: "$0.0150",
    monthly: "$10.95",
    yearly: "$70.37",
    spot: "$0.0050", // fixed
    sla: "99.99%",
    icon: <HetznerIcon className="w-5 h-5" />,
  },
];

// Chart data for horizontal bar chart
export interface ChartData {
  category: string;
  aws: number;
  azure: number;
  googleCloud: number;
}

export const chartData: ChartData[] = [
  {
    category: "Virtual Machines",
    aws: 30.37,
    azure: 30.37,
    googleCloud: 24.29,
  },
  {
    category: "Managed Databases",
    aws: 42.34,
    azure: 43.80,
    googleCloud: 36.50,
  },
  {
    category: "Object Storage",
    aws: 16.79,
    azure: 14.60,
    googleCloud: 14.60,
  },
  {
    category: "Kubernetes Clusters",
    aws: 73.00,
    azure: 73.00,
    googleCloud: 58.40,
  },
];
