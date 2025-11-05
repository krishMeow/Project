import CardWrapper from "../../common/CardWrapper";
import CommonButton from "../../common/Button";
import formState, { type DashboardState } from "./form.state";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ContainerWrapper from "../../common/containerWrapper";

type DashboardPageProps = {
  data?: DashboardState;
};

export default function DashboardPage({ data = formState }: DashboardPageProps) {
  return (
    <div className="space-y-10">
      <CardWrapper
        items={data.summary.map((m) => ({
          id: m.id,
          title: m.title,
          value: m.value,
          subtitle: m.subtitle,
          icon: m.icon ? <img src={m.icon} alt="icon" className="w-5 h-5" /> : undefined,
        }))}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl bg-white shadow-sm border border-gray-200">
          <div className="flex items-center justify-between px-4 py-3 ">
            <div>
            <p className="!text-[20px] font-semibold text-gray-700">Quick Compare</p>
            <p className="!text-[13px] text-gray-500">Top 5 providers based on general purpose VM (2vCPU, 8GB RAM).</p>
            </div>
            <CommonButton variant="primary" size="sm">View All</CommonButton>
          </div>
          <div className="overflow-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="!font-bold !text-[#8c94a3]">Provider</TableCell>
                  <TableCell className="!font-bold !text-[#8c94a3]">Hourly</TableCell>
                  <TableCell className="!font-bold !text-[#8c94a3]">Monthly</TableCell>
                  <TableCell className="!font-bold !text-[#8c94a3]">Latency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.quickCompare.map((row) => (
                  <TableRow key={row.provider}>
                    <TableCell>{row.provider}</TableCell>
                    <TableCell>{row.hourly}</TableCell>
                    <TableCell className="!font-bold">{row.monthly}</TableCell>
                    <TableCell>{row.latency}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <ContainerWrapper
      title="Recent Architectures"
      subtitle="Start building with our popular, pre-configured templates."
      bgColor="bg-white"
      borderColor="border-gray-200"
      actionButtonText="Start Building"
      actionButtonVariant="primary"
      actionButtonSize="md"
      onActionButtonClick={() => console.log("Start building clicked")}
    >
      <ul className="space-y-4">
        {data.recentArchitectures.map((a) => (
          <li
            key={a.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-md bg-gray-200 flex items-center justify-center text-[10px] text-gray-500">
                600 × 400
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{a.title}</p>
                <p className="text-xs text-gray-500">{a.description}</p>
              </div>
            </div>
            <CommonButton variant="secondary" size="sm">
              View
            </CommonButton>
          </li>
        ))}
      </ul>
    </ContainerWrapper>
      </div>
    </div>
  );
}


