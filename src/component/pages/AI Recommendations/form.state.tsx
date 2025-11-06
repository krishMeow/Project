export interface AIRecommendationsState {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export const aiRecommendationsData: AIRecommendationsState[] = [
  {
    id: "1",
    title: "Cost Optimization",
    description: "Recommendations for reducing cloud costs",
    priority: "high",
    category: "cost"
  },
  {
    id: "2",
    title: "Performance Improvement",
    description: "Suggestions for improving application performance",
    priority: "medium", 
    category: "performance"
  }
];

export default {
  recommendations: aiRecommendationsData
};
