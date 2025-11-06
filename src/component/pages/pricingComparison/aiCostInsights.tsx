import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CheckIcon from "@mui/icons-material/Check";

const AiCostInsights = () => {
  const insights = [
    "For dev/test workloads, Hetzner offers up to 50% savings over major clouds.",
    "Switch from AWS RDS to DigitalOcean for simple projects to save 20% with easier management.",
    "For media hosting, using Backblaze B2 instead of S3 can cut storage/egress costs by over 75%.",
    "Switch Kubernetes from Azure to GCP for a 15% saving with a better SLA and more robust features.",
    "For storage-intensive applications, Google Cloud's standard storage is 20% cheaper than AWS EBS.",
    "Switch Kubernetes from Azure to GCP for a 15% saving with a better SLA and more robust features.",
  ];

  return (
    <div className="bg-white rounded-[1rem] p-[1rem]">
      <div className="flex items-center gap-[0.5rem] mb-[1rem]">
        <LightbulbIcon className="!w-6 !h-6 text-yellow-500" />
        <h3 className="text-[1.5rem] font-semibold text-black">AI Cost Insights</h3>
      </div>
      
      <div className="space-y-9">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckIcon className="!w-5 !h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <p className="text-black text-sm leading-relaxed">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiCostInsights;
