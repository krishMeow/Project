import dollarIcon from "../../../assets/dollar-green.svg";
import excalimatory from "../../../assets/exclaimatory.svg";
import { AWSIcon, AzureIcon, GoogleCloudIcon, LinodeIcon, DigitalOceanIcon } from '../../common/icon'

export type DashboardMetric = {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
  icon?: string;
};

export type DashboardState = {
  summary: DashboardMetric[];
  quickCompare: Array<{ provider: string; hourly: string; monthly: string; yearly: string; latency: string,icon?:any }>;
  recentArchitectures: Array<{ id: string; title: string; description: string }>;
};

const formState: DashboardState = {
  summary: [
    { id: "savings", title: "AI Savings Identified", value: "$1,234.56/mo", subtitle: "+20.1% vs last month", icon: dollarIcon },
    { id: "alerts", title: "Performance Alerts", value: "3 Active", subtitle: "2 CPU, 1 Memory hotspots", icon: excalimatory },
    { id: "provider", title: "Top Provider", value: "AWS", subtitle: "Based on your usage patterns" },
    { id: "trends", title: "Cloud Trends", value: "Serverless +15% YoY", subtitle: "Spot prices stable" },
  ],
 quickCompare: [
    { provider: "AWS", hourly: "$0.080", monthly: "$58.40",yearly: "$70.40", latency: "15ms",icon:AWSIcon },
    { provider: "Azure", hourly: "$0.085", monthly: "$62.05", yearly: "$70.40",  latency: "20ms" ,icon:AzureIcon},
    { provider: "Google Cloud", hourly: "$0.078", monthly: "$56.94", yearly: "$70.40",  latency: "18ms",icon:GoogleCloudIcon },
    { provider: "IBM Cloud", hourly: "$0.090", monthly: "$65.70", yearly: "$70.40", latency: "30ms" ,icon:LinodeIcon},
    { provider: "Oracle Cloud", hourly: "$0.070", monthly: "$51.10", yearly: "$70.40",  latency: "25ms" ,icon:DigitalOceanIcon},
  ],
  recentArchitectures: [
    { id: "arch-1", title: "Scalable E‑commerce Platform", description: "Best practice microservices template" },
    { id: "arch-2", title: "IoT Data Processing Pipeline", description: "Stream + analytics" },
    { id: "arch-3", title: "Serverless Web Application", description: "Zero-manage ops" },
  ],
};

export default formState;


