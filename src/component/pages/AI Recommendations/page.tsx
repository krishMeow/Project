import CommonTextField from "../../common/commonTextField";
import ContainerWrapper from "../../common/containerWrapper";

const AIRecommendationsPage = () => {
  return (
    <div className="p-6">
    <div className="mb-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-3">AI Recommendation Hub</h1>
    <p className="text-gray-600">Get personalized, AI-driven recommendations to optimize your cloud stack.</p>
    </div>

        <ContainerWrapper
        title="Describe Your Environment"
        subtitle="Provide details about your cloud setup for tailored recommendations."
        bgColor="bg-white"
        borderColor="border-gray-200"
        actionButtonVariant="primary"
        actionButtonText="Generate Recommendations"
        actionButtonSize="sm"
        onActionButtonClick={() => console.log("View All clicked")}
        className="w-[50%]"
        actionButtonClassName="w-[70%] mt-[15px]"
      >
        <div className="text-gray-600 flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-gray-500">Current Cloud Setup</span>
          <textarea className="w-full h-24 p-2 border border-gray-300 rounded-lg bg-[#f0f7ff]" placeholder="Describe your Current Cloud Setup" />
        </label>
        <label className="flex flex-col gap-2"  >
          <span className="text-gray-500">Spending Data</span>
          <CommonTextField
            onChange={() => console.log("Text changed")}
            placeholder="Describe your Spending Data"
            className="w-full bg-[#f0f7ff] rounded-lg"
            />
        </label>
        <label className="flex flex-col gap-2"  >
          <span className="text-gray-500">Optimization Goals</span>
          <textarea className="w-full h-24 p-2 border border-gray-300 rounded-lg bg-[#f0f7ff]" placeholder="Describe your Optimization Goals" />
        </label>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default AIRecommendationsPage;
