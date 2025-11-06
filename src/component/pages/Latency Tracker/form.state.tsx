export interface LatencyTrackerState {
  id: string;
  endpoint: string;
  latency: number;
  timestamp: string;
  region: string;
}

export const latencyTrackerData: LatencyTrackerState[] = [
  {
    id: "1",
    endpoint: "api/users",
    latency: 120,
    timestamp: "2024-01-15T10:30:00Z",
    region: "us-east-1"
  },
  {
    id: "2",
    endpoint: "api/orders", 
    latency: 85,
    timestamp: "2024-01-15T10:30:00Z",
    region: "us-west-2"
  }
];

export default {
  latencyData: latencyTrackerData
};
