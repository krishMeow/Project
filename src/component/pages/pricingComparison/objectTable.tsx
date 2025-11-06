import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@mui/material";
  import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
  import { objectStorageData, type PricingData } from "./form.state";
import { useMemo, useState } from "react";
import CommonSelectField from "../../common/commonSelectField";
import CommonTextField from "../../common/commonTextField";
import CommonButton from "../../common/Button";
import { regions } from "../../../utils/helperData";

  
  
  const ObjectStorageTable = () => {

    const [filters, setFilters] = useState({
      provider: "",
      vcpuMin: "",
      vcpuMax: "",
      memoryMin: "",
      memoryMax: "",
      regions: "",
    });
  
    // Provider options
    const providerOptions = [
      { value: "", label: "All Providers" },
      { value: "AWS", label: "AWS" },
      { value: "Azure", label: "Azure" },
      { value: "Google Cloud", label: "Google Cloud" },
      { value: "DigitalOcean", label: "DigitalOcean" },
      { value: "Linode", label: "Linode" },
    ];
  
    // Filter function
    const filterData = (objectStorageData: PricingData[]) => {
      return objectStorageData.filter((item) => {
        // Provider filter
        if (filters.provider && item.provider !== filters.provider) {
          return false;
        }
  
        // vCPU filter (extract vCPU from specs)
        const vcpuMatch = item.specs.match(/(\d+)\s*vCPU/i);
        if (vcpuMatch) {
          const vcpu = parseInt(vcpuMatch[1]);
          if (filters.vcpuMin && vcpu < parseInt(filters.vcpuMin)) {
            return false;
          }
          if (filters.vcpuMax && vcpu > parseInt(filters.vcpuMax)) {
            return false;
          }
        }
  
        // Memory filter (extract memory from specs)
        const memoryMatch = item.specs.match(/(\d+)GB/i);
        if (memoryMatch) {
          const memory = parseInt(memoryMatch[1]);
          if (filters.memoryMin && memory < parseInt(filters.memoryMin)) {
            return false;
          }
          if (filters.memoryMax && memory > parseInt(filters.memoryMax)) {
            return false;
          }
        }
  
        return true;
      });
    };
  
  
    const filteredObjectStorageData = useMemo(() => filterData(objectStorageData), [filters]);
    const clearFilters = () => {
      setFilters({
        provider: "",
        vcpuMin: "",
        vcpuMax: "",
        memoryMin: "",
        memoryMax: "",
        regions: "",
      });
    };

    return (
      <div className="bg-white rounded-[1rem] p-[1rem]">
        <div className="flex items-center justify-between gap-[5rem] text-[black] pl-[1rem] mb-[1rem]">
          <div>
            <p className="text-[1.5rem] font-semibold">Object Storage</p>
          </div>
          <div className=" border border-[#d7e6fa] bg-[#d7e6fa] rounded-[1rem] px-[1rem] py-[0.2rem] text-[13px] font-semibold">
            <p className="flex gap-[5px] text-[#1e40b0]">
              <TipsAndUpdatesIcon className="!w-[15px] !h-[20px]" /> Al Best Fit: Backblaze B2 (Significantly cheaper storage and egress.)
            </p>
          </div>
        </div>

        <div className="col-span-10">
        <div className="bg-white rounded-[1rem] p-[1rem]">
          {/* <h2 className="text-black text-[1.5rem] font-semibold mb-4">Object Storage Filters</h2> */}
          
          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 items-end">
            <CommonSelectField
              label="Provider"
              value={filters.provider}
              onChange={(value) => setFilters(prev => ({ ...prev, provider: value }))}
              options={providerOptions}
              placeholder="Select Provider"
            />
            
              <CommonSelectField
              label="Region"
              value={filters.regions}
              onChange={(value) => setFilters(prev => ({ ...prev, regions: value }))}
              options={regions}
              placeholder="Select Region"
            />
            
            <CommonTextField
              label="vCPUs (Min)"
              value={filters.vcpuMin}
              onChange={(value) => setFilters(prev => ({ ...prev, vcpuMin: value }))}
              type="number"
              placeholder="Min vCPUs"
            />
            
            <CommonTextField
              label="vCPUs (Max)"
              value={filters.vcpuMax}
              onChange={(value) => setFilters(prev => ({ ...prev, vcpuMax: value }))}
              type="number"
              placeholder="Max vCPUs"
            />
            
            <CommonTextField
              label="Memory (Min GB)"
              value={filters.memoryMin}
              onChange={(value) => setFilters(prev => ({ ...prev, memoryMin: value }))}
              type="number"
              placeholder="Min Memory"
            />
            
            <CommonTextField
              label="Memory (Max GB)"
              value={filters.memoryMax}
              onChange={(value) => setFilters(prev => ({ ...prev, memoryMax: value }))}
              type="number"
              placeholder="Max Memory"
            />
            
            <CommonButton
              variant="secondary"
              size="md"
              onClick={clearFilters}
              className="h-[40px] px-4 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white cursor-pointer"
            >
              CLEAR FILTERS
            </CommonButton>
          </div>
        </div>
        </div>
  
        <Table className="mb-[1.5rem]">
        <TableHead>
            <TableRow className="!font-bold">
              <TableCell className="!font-bold !text-[#8c94a3]">Provider</TableCell>
              <TableCell className="!font-bold !text-[#8c94a3]">Specs</TableCell>
              <TableCell className="!font-bold !text-[#8c94a3]">Hourly</TableCell>
              <TableCell className="!font-bold !text-[#8c94a3]">Monthly</TableCell>
              <TableCell className="!font-bold !text-[#8c94a3]">Yearly</TableCell>
              <TableCell className="!font-bold !text-[#8c94a3]">Spot</TableCell>
              <TableCell className="!font-bold !text-[#8c94a3]">SLA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredObjectStorageData.map((row) => (
              <TableRow key={row.provider}>
                <TableCell>
                  {" "}
                   <div className="flex items-center gap-2">
                    {row.icon}
                    <span>{row.provider}</span>
                  </div>
                </TableCell>
                <TableCell>{row.specs}</TableCell>
                <TableCell>{row.hourly}</TableCell>
                <TableCell className="!font-bold">{row.monthly}</TableCell>
                <TableCell className="!font-bold">{row.yearly}</TableCell>
                <TableCell>{row.spot}</TableCell>
                <TableCell>{row.sla}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default ObjectStorageTable;
  