import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout/layout";
import PricingComparison from "./component/pages/pricingComparison/page";
import DashboardPage from "./component/pages/dashboard/page";
import ArchitecturePage from "./component/pages/Architecture/page";
import DevOpsToolsPage from "./component/pages/DevOps Tools/page";
import AIRecommendationsPage from "./component/pages/AI Recommendations/page";
import LatencyTrackerPage from "./component/pages/Latency Tracker/page";
import SharedPipelinesPage from "./component/pages/Shared Pipelines/page";
import BenchmarksPage from "./component/pages/Benchmarks/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="pricing-comparison" element={<PricingComparison />} />
        <Route path="architecture" element={<ArchitecturePage />} />
        <Route path="devops-tools" element={<DevOpsToolsPage />} />
        <Route path="ai-recommendations" element={<AIRecommendationsPage />} />
        <Route path="latency-tracker" element={<LatencyTrackerPage />} />
        <Route path="shared-pipelines" element={<SharedPipelinesPage />} />
        <Route path="benchmarks" element={<BenchmarksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
