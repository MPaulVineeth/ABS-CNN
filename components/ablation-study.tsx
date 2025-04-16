"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function AblationStudy() {
  const ablationData = [
    {
      name: "ABS-CNN",
      accuracy: 99.5,
      precision: 99.4,
      recall: 99.5,
      f1: 99.4,
      description: "Complete model with attention mechanism, histogram equalization, and big step convolution",
    },
    {
      name: "NA-ABS-CNN",
      accuracy: 94.4,
      precision: 94.2,
      recall: 94.3,
      f1: 94.2,
      description: "ABS-CNN without attention mechanism",
    },
    {
      name: "NH-ABS-CNN",
      accuracy: 94.2,
      precision: 94.0,
      recall: 94.1,
      f1: 94.0,
      description: "ABS-CNN without histogram equalization",
    },
    {
      name: "WP-ABS-CNN",
      accuracy: 93.1,
      precision: 92.9,
      recall: 93.0,
      f1: 92.9,
      description: "ABS-CNN with pooling layers (without big step convolution)",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Ablation Study Results</h3>
        <p className="text-muted-foreground mb-6">
          The ablation study examines the impact of each component on the model's performance by removing them one at a
          time.
        </p>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ablationData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[90, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="accuracy" name="Accuracy (%)" fill="#3b82f6" />
              <Bar dataKey="precision" name="Precision (%)" fill="#10b981" />
              <Bar dataKey="recall" name="Recall (%)" fill="#f59e0b" />
              <Bar dataKey="f1" name="F1-Score (%)" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Component Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ablationData.map((model, index) => (
            <Card key={index} className="p-6">
              <h4 className="font-medium mb-2">{model.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                  <p className="font-medium">{model.accuracy}%</p>
                </div>
                <div className="bg-muted p-3 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">F1-Score</p>
                  <p className="font-medium">{model.f1}%</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Key Findings</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              <strong>Attention Mechanism:</strong> Removing the attention mechanism (NA-ABS-CNN) reduces accuracy by
              5.1%, demonstrating its importance in enhancing feature differentiation.
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              <strong>Histogram Equalization:</strong> Without histogram equalization (NH-ABS-CNN), accuracy drops by
              5.3%, showing its role in improving model dimensionality and feature extraction.
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              <strong>Big Step Convolution:</strong> Adding pooling layers (WP-ABS-CNN) results in a 6.4% decrease in
              accuracy, confirming that preserving sequence-related features is crucial for traffic classification.
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              <strong>Combined Effect:</strong> The complete ABS-CNN model achieves significantly better performance
              than any ablated version, demonstrating the synergistic effect of all components working together.
            </span>
          </li>
        </ul>
      </Card>
    </div>
  )
}

