import CommonButton from "../../common/Button";
import CommonTextField from "../../common/commonTextField";
import ContainerWrapper from "../../common/containerWrapper";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { architecturesData } from "./form.state";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


const SharedPipelinesPage = () => {
  return (
    <div className="p-6">
    <div className="mb-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-3">Pipeline Sharing & Marketplace</h1>
    <p className="text-gray-600">Discover, share, and deploy validated, open-source cloud architectures.</p>
    </div>

        <ContainerWrapper
        title="Community Pipelines"
        subtitle="Browse architectures shared by the CloudWise community."
        bgColor="bg-white"
        borderColor="border-gray-200"
         headerAction={
            <div className="flex items-center gap-2 ">

            <FilterAltOutlinedIcon className="text-gray-500" fontSize="medium" />
            <CommonTextField
            onChange={() => console.log("Text changed")}
            placeholder="Filter by name or description"
            className="w-full bg-[#f0f7ff] rounded-lg"
            
            />
          </div>
        }
      >
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[10px]">
      {architecturesData.map((a) => (
        <div
          key={a.id}
          className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              Providers:{" "}
              {a.providers.map((p, i) => (
                <span key={i} className="font-semibold text-gray-800 mr-1">
                  {p}
                </span>
              ))}
            </p>

            <div className="mt-3 space-y-1 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Est. Cost/Month</span>
                <span className="font-semibold">${a.estimatedCostPerMonth}</span>
              </div>
              <div className="flex justify-between">
                <span>Clones</span>
                <span>{a.clones}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Validation</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    a.validation === "Validated"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {a.validation}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <CommonButton variant="primary" className="w-full">
              <div className="flex justify-center items-center gap-2">

            <ShareOutlinedIcon className="!w-4 !h-4"/>
            <span className="text-sm"> Clone Pipeline</span>
              </div>
            </CommonButton>
          </div>
        </div>
      ))}
    </div>
      
      </ContainerWrapper>
    </div>
  );
};

export default SharedPipelinesPage;
