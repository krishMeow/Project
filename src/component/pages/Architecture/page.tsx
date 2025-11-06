import CommonButton from "../../common/Button";
import formState, { type ArchitectureState } from "./form.state";

type ArchitecturePageProps = {
  data?: ArchitectureState;
};

export default function ArchitecturePage({ data = formState }: ArchitecturePageProps) {
  const handleExportClick = (exportType: string) => {
    console.log(`Exporting as ${exportType}`);
    // Add export functionality here
  };

  return (
    <div className=" p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Visual Architecture Builder</h1>
        <p className="text-lg text-gray-600">Design, cost, and optimize your multi-cloud infrastructure.</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)]">
               

        {/* Center Panel - Architecture Canvas */}
        <div className="lg:col-span-9">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200  p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Sample Multi-Cloud Architecture</h2>
                <p className="text-sm text-gray-500">Drag and drop components to build your stack.</p>
              </div>
              <div className="flex gap-2">
                <CommonButton variant="secondary" size="sm">Import</CommonButton>
                <CommonButton variant="secondary" size="sm">Export</CommonButton>
              </div>
            </div>
            
            {/* Inner layout with Components (30%) and Architecture Diagram (70%) */}
            <div className="flex gap-6 ">
              {/* Left Panel - Components (30%) */}
              <div className="w-[30%]">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Components</h2>
                  <div className="space-y-2">
                    {data.components.map((component) => (
                      <div
                        key={component.id}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#5f13b0] hover:bg-purple-50 cursor-pointer transition-all duration-200"
                      >
                        <span className="text-2xl">{component.icon}</span>
                        <div>
                          <p className="font-medium text-gray-900">{component.name}</p>
                          {/* {component.description && (
                            <p className="text-xs text-gray-500">{component.description}</p>
                          )} */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Architecture Diagram (70%) */}
              <div className="w-[70%]">
                <div className="relative bg-gray-50 rounded-lg ">
                  {/* <svg className="w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"> */}
                    {/* Connection Lines */}
                    {/* {data.architectureNodes.map((node) =>
                      node.connections.map((connectionId) => {
                        const targetNode = data.architectureNodes.find(n => n.id === connectionId);
                        if (!targetNode) return null;
                        
                        return (
                          <line
                            key={`${node.id}-${connectionId}`}
                            x1={node.x}
                            y1={node.y}
                            x2={targetNode.x}
                            y2={targetNode.y}
                            stroke="#d1d5db"
                            strokeWidth="0.5"
                            markerEnd="url(#arrowhead)"
                          />
                        );
                      })
                    )} */}
                    
                    {/* Arrow marker */}
                    {/* <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3.5, 0 7"
                          fill="#d1d5db"
                        />
                      </marker>
                    </defs> */}

                    {/* Architecture Nodes */}
                    {/* {data.architectureNodes.map((node) => (
                      <g key={node.id}>
                        <foreignObject
                          x={node.x - 8}
                          y={node.y - 4}
                          width="16"
                          height="8"
                        >
                          <div
                            className={`w-16 h-8 bg-white border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:border-[#5f13b0] hover:bg-purple-50 ${
                              selectedNode === node.id ? 'border-[#5f13b0] bg-purple-50' : 'border-gray-300'
                            }`}
                            onClick={() => handleNodeClick(node.id)}
                          >
                            <span className="text-xs">{node.icon}</span>
                            <span className="text-[8px] font-medium text-gray-700 text-center leading-tight">
                              {node.name}
                            </span>
                            {node.provider && (
                              <span className="text-[6px] text-gray-500 text-center">
                                {node.provider}
                              </span>
                            )}
                          </div>
                        </foreignObject>
                      </g>
                    ))} */}
                  {/* </svg> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Information */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Live Cost Breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Live Cost Breakdown</h3>
            <div className="space-y-3">
              {data.costBreakdown.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    {item.description && (
                      <p className="text-xs text-gray-500">{item.description}</p>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{item.cost}</p>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-900">Estimated Monthly Cost</p>
                  <p className="text-lg font-bold text-gray-900">{data.totalCost}</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Recommendations</h3>
            <div className="space-y-4">
              {data.aiRecommendations.map((rec) => (
                <div key={rec.id} className="flex items-start gap-3">
                  <span className="text-lg">{rec.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{rec.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{rec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Export as Code */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Export as Code</h3>
            <div className="grid grid-cols-2 gap-3">
              {data.exportOptions.map((option) => (
                <CommonButton
                  key={option.id}
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-2 justify-center hover:bg-[#5f13b0] hover:text-white transition-all duration-200"
                  onClick={() => handleExportClick(option.id)}
                >
                  <span>{option.icon}</span>
                  <span className="text-xs">{option.name}</span>
                </CommonButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
