import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const spotPriceData = [
  { date: "2025-07-01", AWS: 0.011, GCP: 0.010, Azure: 0.012 },
  { date: "2025-07-02", AWS: 0.012, GCP: 0.009, Azure: 0.013 },
  { date: "2025-07-03", AWS: 0.010, GCP: 0.011, Azure: 0.012 },
  { date: "2025-07-04", AWS: 0.009, GCP: 0.010, Azure: 0.011 },
  { date: "2025-07-05", AWS: 0.012, GCP: 0.009, Azure: 0.012 },
  { date: "2025-07-06", AWS: 0.013, GCP: 0.010, Azure: 0.011 },
  { date: "2025-07-07", AWS: 0.011, GCP: 0.012, Azure: 0.013 },
];

const latencyPoints:any = [
  { name: "US East", coords: [-80, 35], latency: 15 },
  { name: "EU West", coords: [0, 50], latency: 25 },
  { name: "India", coords: [78, 22], latency: 120 },
  { name: "Singapore", coords: [103, 1], latency: 45 },
];

const LatencyTrackerPage = () => {

  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";



const getColor= (latency:any) =>{
  if (latency < 20) return "#4ade80"; // green
  if (latency < 50) return "#facc15"; // yellow
  return "#ef4444"; // red
}
  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900">
        Live Regional Latency & Spot Price Tracker
      </h1>

      <p className="text-gray-600 -mt-3">
        Monitor global performance and pricing to make informed decisions.
      </p>

      {/* Top Section: Heatmap + Latency Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Heatmap */}
   <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
  <h2 className="text-lg font-semibold text-gray-900">World Map Latency Heatmap</h2>
  <p className="text-gray-500 text-sm mb-4">Average latency to provider regions.</p>

  <div className="h-[300px]">
    <ComposableMap projectionConfig={{ scale: 150 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }:any) =>
          geographies.map((geo:any) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#e5f1ff"
              stroke="#bcd7fc"
            />
          ))
        }
      </Geographies>

      {latencyPoints.map((loc:any, index:number) => (
        <Marker key={index} coordinates={loc.coords}>
          <circle r={7} fill={getColor(loc.latency)} />
        </Marker>
      ))}
    </ComposableMap>
  </div>
</div>

        {/* Latency Table */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Latency by Region (ms)</h2>

          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Region</th>
                <th>AWS</th>
                <th>GCP</th>
                <th>Azure</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">us-east-1</td>
                <td>15ms</td>
                <td>18ms</td>
                <td>20ms</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">eu-west-1</td>
                <td>25ms</td>
                <td>22ms</td>
                <td>28ms</td>
              </tr>
              <tr>
                <td className="py-2">ap-southeast-1</td>
                <td>40ms</td>
                <td>35ms</td>
                <td>45ms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Spot Price Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Spot Price Fluctuation (m5.large, us-east-1)
            </h2>
            <p className="text-gray-500 text-sm">Last 7 days price per hour</p>
          </div>

          <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm shadow">
            Create Alert
          </button>
        </div>

        {/* Spot Price Bar Chart */}
        <div className="mt-4 h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={spotPriceData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="AWS" />
              <Bar dataKey="GCP" />
              <Bar dataKey="Azure" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LatencyTrackerPage;
