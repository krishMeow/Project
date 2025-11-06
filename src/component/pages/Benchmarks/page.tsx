import React, { useState } from 'react';
import { Trophy, Lightbulb, Check } from 'lucide-react';
import { AWSIcon, AzureIcon, DigitalOceanIcon, GoogleCloudIcon, HetznerIcon, LinodeIcon } from '../../common/icon';

const BenchmarksPage = () => {
  const [serviceType, setServiceType] = useState('Compute/VMs');
  const [region, setRegion] = useState('US East (N. Virginia)');

  const benchmarkData = [
    {
      provider: 'AWS',
      icon: AWSIcon,
      color: 'orange',
      configuration: 'm5.large (2 vCPU, 8GB)',
      cpuScore: 9500,
      memoryScore: 9800,
      iops: 4600,
      priceScore: '$0.0077'
    },
    {
      provider: 'Google Cloud',
      icon: GoogleCloudIcon,
      color: 'blue',
      configuration: 'e2-standard-2 (2 vCPU, 8GB)',
      cpuScore: 9200,
      memoryScore: 9600,
      iops: 'N/A',
      priceScore: '$0.0073'
    },
    {
      provider: 'Azure',
      icon: AzureIcon,
      color: 'blue',
      configuration: 'D2s v3 (2 vCPU, 8GB)',
      cpuScore: 9300,
      memoryScore: 9700,
      iops: 3200,
      priceScore: '$0.0078'
    },
    {
      provider: 'DigitalOcean',
      icon: DigitalOceanIcon,
      color: 'blue',
      configuration: 's-2vcpu-4gb (2 vCPU, 4GB)',
      cpuScore: 7800,
      memoryScore: 7500,
      iops: 'N/A',
      priceScore: '$0.0041'
    },
    {
      provider: 'Hetzner',
      icon: HetznerIcon,
      color: 'pink',
      configuration: 'CPX31 (4 vCPU, 8GB)',
      cpuScore: 14500,
      memoryScore: 11000,
      iops: 'N/A',
      priceScore: '$0.0013',
      isBest: true
    },
    {
      provider: 'Linode',
      icon: LinodeIcon,
      color: 'green',
      configuration: 'g6-standard-2 (2 vCPU, 4GB)',
      cpuScore: 7900,
      memoryScore: 7600,
      iops: 'N/A',
      priceScore: '$0.0030'
    }
  ];

  const topPerformers = [
    { provider: 'AWS', color: 'bg-orange-500' },
    { provider: 'Google Cloud', color: 'bg-blue-500' },
    { provider: 'Azure', color: 'bg-sky-500' }
  ];

  return (
    <div className=" bg-gray-50 p-8">
      <div >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Multi-Service Benchmarks</h1>
          <p className="text-gray-600">In-depth performance benchmarks for various cloud services.</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Compute/VMs</option>
                <option>Storage</option>
                <option>Databases</option>
                <option>Networking</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>US East (N. Virginia)</option>
                <option>US West (Oregon)</option>
                <option>EU (Frankfurt)</option>
                <option>Asia Pacific (Singapore)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benchmarks Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Compute/VMs Benchmarks</h2>
                  <p className="text-sm text-gray-600 mt-1">Performance based on a blend of CPU, memory, and I/O tests.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-green-800">AI Best Perf/Cost: Hetzner (Outstanding raw performance for the price.)</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Provider</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Configuration</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">CPU Score</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Memory Score</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">IOPS</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">$/1k Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarkData.map((item, index) => (
                      <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 ${item.isBest ? 'bg-green-50' : ''}`}>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            {item.icon && <item.icon className="w-5 h-5 text-gray-700" />}
                            <span className="font-medium text-gray-900">{item.provider}</span>
                          </div>
                        </td>

                        <td className="py-4 px-4 text-gray-700">{item.configuration}</td>
                        <td className="py-4 px-4 text-right font-semibold text-gray-900">{item.cpuScore.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right font-semibold text-gray-900">{item.memoryScore.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right text-gray-700">{item.iops === 'N/A' ? 'N/A' : item.iops.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right font-semibold text-gray-900">{item.priceScore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Visual Performance Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Performance Summary</h3>
              <p className="text-sm text-gray-600 mb-6">Top performers by key metric.</p>

              <div className="space-y-6">
                {/* CPU Score Chart */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-3">CPU Score</div>
                  <div className="flex gap-1 h-24">
                    <div className="flex-1 bg-gray-900 rounded"></div>
                    <div className="flex-1 bg-gray-800 rounded"></div>
                    <div className="flex-1 bg-gray-700 rounded"></div>
                  </div>
                </div>

                {/* Memory Score Chart */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-3">Memory Score</div>
                  <div className="flex gap-1 h-24">
                    <div className="flex-1 bg-gray-900 rounded"></div>
                    <div className="flex-1 bg-gray-800 rounded"></div>
                    <div className="flex-1 bg-gray-700 rounded"></div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-xs text-gray-700">AWS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-xs text-gray-700">Google Cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-sky-500 rounded"></div>
                    <span className="text-xs text-gray-700">Azure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Performance Insights */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-900">AI Performance Insights</h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Hetzner's CPX line offers 30-50% better price/performance for CPU-bound tasks over major clouds.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    For balanced workloads, Linode and DigitalOcean provide competitive performance with better SLAs than Hetzner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarksPage;