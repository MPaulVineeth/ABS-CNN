import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function ResultsVisualization({ results }) {
  // Sample packet size distribution data
  const packetSizeData = [
    { name: "0-64", value: 245 },
    { name: "65-128", value: 378 },
    { name: "129-256", value: 412 },
    { name: "257-512", value: 156 },
    { name: "513-1024", value: 43 },
    { name: "1025+", value: 20 },
  ]

  // Colors for the pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

  // Custom label renderer for traffic classification pie chart
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontWeight: "bold", fontSize: "12px" }}
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Classification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: results.trafficType, value: results.confidence },
                      { name: "Other", value: 100 - results.confidence },
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={renderCustomizedLabel}
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#e5e7eb" />
                  </Pie>
                  <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Importance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={results.featureImportance}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 100,
                    bottom: 5,
                  }}
                >
                  <XAxis type="number" domain={[0, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value) => `${(value * 100).toFixed(0)}%`} />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Packet Size Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={packetSizeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {packetSizeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Analysis Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Traffic Classification</h4>
                <p className="text-muted-foreground">
                  The traffic has been classified as <strong>{results.trafficType}</strong> with a confidence of{" "}
                  <strong>{results.confidence.toFixed(1)}%</strong>.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Key Metrics</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Total Packets: {results.details.packetCount}</li>
                  <li>Total Bytes: {results.details.bytesTransferred.toLocaleString()}</li>
                  <li>Duration: {results.details.duration} seconds</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Network Information</h4>
                <div className="text-muted-foreground">
                  <p>
                    <strong>Source IPs:</strong> {results.details.sourceIPs.join(", ")}
                  </p>
                  <p>
                    <strong>Destination IPs:</strong> {results.details.destinationIPs.join(", ")}
                  </p>
                  <p>
                    <strong>Ports:</strong> {results.details.ports.join(", ")}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Recommendation</h4>
                <p className="text-muted-foreground">
                  {results.classification === "Malicious"
                    ? "This traffic appears to be malicious. We recommend blocking the source IPs and investigating further."
                    : "This traffic appears to be normal. No action is required."}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

