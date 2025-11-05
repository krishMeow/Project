import ManageDatabaseTable from "./manageDatabaseTable";
import ObjectStorageTable from "./objectTable";
import KubernetesTable from "./kubernetesTable";
import VirtualMachineTable from "./virtualMachineTable";
import VirtualPricingSummary from "./virtualPricingSummary";
import AiCostInsights from "./aiCostInsights";


const PricingComparison = () => {


  return (
    <div> 
      <div className="mb-4">
      <h1 className="text-[2.5rem] font-semibold text-gray-700 ">Multi-Cloud Pricing Comparison</h1>
      <p className="text-[1rem] text-gray-500">Compare pricing across major cloud providers for common services.</p>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-10 gap-4 ">

           {/* Chart Section */}
           <div className="col-span-5">
          <VirtualPricingSummary />
        </div>
            {/* AI Cost Insights - col-span-4 */}
            <div className="col-span-5">
          <AiCostInsights />
        </div>

        <div className="col-span-10">
          <VirtualMachineTable />
        </div>
     

        {/* Managed Database Table - col-span-6 */}
        <div className="col-span-10">
          <ManageDatabaseTable  />
        </div>
      
        

        {/* Object Storage Table - col-span-5 */}
        <div className="col-span-10">
          <ObjectStorageTable />
        </div>

        
        {/* Kubernetes Table - col-span-5 */}
        <div className="col-span-10">
          <KubernetesTable />
        </div>
      </div>
    </div>
  );
};

export default PricingComparison;
