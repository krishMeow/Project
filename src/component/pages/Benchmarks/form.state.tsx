export interface BenchmarksState {
  id: string;
  name: string;
  score: number;
  category: string;
  timestamp: string;
  details: string;
}

export const benchmarksData: BenchmarksState[] = [
  {
    id: "1",
    name: "Performance Test",
    score: 95,
    category: "performance",
    timestamp: "2024-01-15T11:00:00Z",
    details: "Response time and throughput metrics"
  },
  {
    id: "2",
    name: "Security Audit",
    score: 88,
    category: "security",
    timestamp: "2024-01-15T11:30:00Z", 
    details: "Vulnerability assessment and compliance check"
  }
];

export default {
  benchmarks: benchmarksData
};
