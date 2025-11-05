export interface DevOpsToolsState {
  id: string;
  name: string;
  description: string;
  sla: string;
  integrations: string;
  aiFitScore: string;
  icon: string;
}

export interface DevOpsToolsCategory {
  category: string;
  tools: DevOpsToolsState[];
}

export const devOpsToolsData: DevOpsToolsCategory[] = [
  {
    category: "CI/CD",
    tools: [
      {
        id: "1",
        name: "Jenkins",
        description: "Free (Open Source)",
        sla: "N/A",
        integrations: "1500+",
        aiFitScore: "85%",
        icon: "J"
      },
      {
        id: "2",
        name: "GitHub Actions",
        description: "Free for public repos",
        sla: "99.9%",
        integrations: "10000+",
        aiFitScore: "95%",
        icon: "G"
      },
      {
        id: "3",
        name: "GitLab CI",
        description: "Free Tier, Paid from $19/user/mo",
        sla: "99.95%",
        integrations: "500+",
        aiFitScore: "92%",
        icon: "G"
      },
      {
        id: "4",
        name: "CircleCI",
        description: "Free Tier, Paid from $15/mo",
        sla: "99.9%",
        integrations: "300+",
        aiFitScore: "90%",
        icon: "C"
      }
    ]
  },
  {
    category: "Monitoring",
    tools: [
      {
        id: "5",
        name: "Prometheus",
        description: "Free (Open Source)",
        sla: "N/A",
        integrations: "200+",
        aiFitScore: "88%",
        icon: "P"
      },
      {
        id: "6",
        name: "Grafana",
        description: "Free Tier, Paid from $8/user/mo",
        sla: "99.9%",
        integrations: "500+",
        aiFitScore: "93%",
        icon: "G"
      },
      {
        id: "7",
        name: "Datadog",
        description: "Paid from $15/host/mo",
        sla: "99.9%",
        integrations: "400+",
        aiFitScore: "96%",
        icon: "D"
      },
      {
        id: "8",
        name: "New Relic",
        description: "Free Tier, Paid from $25/user/mo",
        sla: "99.9%",
        integrations: "300+",
        aiFitScore: "91%",
        icon: "N"
      }
    ]
  },
  {
    category: "IaC",
    tools: [
      {
        id: "9",
        name: "Terraform",
        description: "Free (Open Source)",
        sla: "N/A",
        integrations: "1000+",
        aiFitScore: "89%",
        icon: "T"
      },
      {
        id: "10",
        name: "Ansible",
        description: "Free (Open Source)",
        sla: "N/A",
        integrations: "800+",
        aiFitScore: "87%",
        icon: "A"
      },
      {
        id: "11",
        name: "CloudFormation",
        description: "Free with AWS usage",
        sla: "99.9%",
        integrations: "200+",
        aiFitScore: "85%",
        icon: "C"
      },
      {
        id: "12",
        name: "Pulumi",
        description: "Free Tier, Paid from $50/user/mo",
        sla: "99.9%",
        integrations: "150+",
        aiFitScore: "94%",
        icon: "P"
      }
    ]
  }
];

export default {
  categories: devOpsToolsData
};
