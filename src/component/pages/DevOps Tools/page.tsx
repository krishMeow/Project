import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ContainerWrapper from '../../common/containerWrapper';
import { devOpsToolsData, type DevOpsToolsState } from './form.state';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`devops-tabpanel-${index}`}
      aria-labelledby={`devops-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const DevOpsToolsPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderToolCard = (tool: DevOpsToolsState) => (
    <ContainerWrapper
      key={tool.id}
      className="mb-4"
      showHeader={true}
      title={tool.name}
      subtitle={tool.description}
      actionButtonText="View Details"
      actionButtonVariant="primary"
      onActionButtonClick={() => console.log(`View details for ${tool.name}`)}
      headerAction={
        <div className="flex justify-end">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">{tool.icon}</span>
          </div>
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">SLA</span>
          <span className="text-sm font-semibold text-gray-800">{tool.sla}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Integrations</span>
          <span className="text-sm font-semibold text-gray-800">{tool.integrations}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">AI Fit Score</span>
          <span className="text-sm font-semibold text-gray-800">{tool.aiFitScore}</span>
        </div>
      </div>
    </ContainerWrapper>
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">DevOps Tools</h1>
      
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="DevOps tools categories"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 500,
                minWidth: '120px',
                padding: '12px 24px',
              },
              '& .Mui-selected': {
                color: '#5fa5de !important',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#5fa5de',
                height: '3px',
              }
            }}
          >
            {devOpsToolsData.map((category, index) => (
              <Tab 
                key={category.category}
                label={category.category} 
                id={`devops-tab-${index}`}
                aria-controls={`devops-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>
        
        {devOpsToolsData.map((category, index) => (
          <TabPanel key={category.category} value={value} index={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map(renderToolCard)}
            </div>
          </TabPanel>
        ))}
      </Box>
    </div>
  );
};

export default DevOpsToolsPage;
