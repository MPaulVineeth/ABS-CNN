"use client"

import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

export default function PerformanceComparison() {
  const performanceData = [
    { name: "SVM", accuracy: 85.2, precision: 84.7, recall: 85.1, f1: 84.9 },
    { name: "ANN", accuracy: 89.6, precision: 88.9, recall: 89.3, f1: 89.1 },
    { name: "RF", accuracy: 91.2, precision: 90.8, recall: 91.0, f1: 90.9 },
    { name: "Bayes", accuracy: 87.3, precision: 86.5, recall: 87.1, f1: 86.8 },
    { name: "CNN", accuracy: 93.8, precision: 93.5, recall: 93.7, f1: 93.6 },
    { name: "APSO-CNN", accuracy: 94.0, precision: 93.8, recall: 93.9, f1: 93.8 },
    { name: "PBCNN", accuracy: 94.1, precision: 93.9, recall: 94.0, f1: 93.9 },
    { name: "ABS-CNN", accuracy: 99.5, precision: 99.4, recall: 99.5, f1: 99.4 },
  ]

  const operationalData = [
    { name: "APSO-CNN", trainingTime: 943, testingTime: 2.95, accuracy: 94.0 },
    { name: "PBCNN", trainingTime: 1092, testingTime: 4.01, accuracy: 94.1 },
    { name: "ABS-CNN", trainingTime: 950, testingTime: 3.0, accuracy: 99.5 },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Performance Metrics Comparison</h3>
        <p className="text-muted-foreground mb-6">
          Comparison of ABS-CNN with traditional machine learning models (SVM, ANN, RF, Bayes) and deep learning models
          (CNN, APSO-CNN, PBCNN).
        </p>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[80, 100]} />
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

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Key Observations</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              ABS-CNN achieves the highest accuracy (99.5%), precision (99.4%), recall (99.5%), and F1-Score (99.4%)
              among all models.
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              Traditional machine learning models (SVM, ANN, RF, Bayes) have lower performance metrics, with SVM having
              the lowest accuracy (85.2%).
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              Deep learning models (CNN, APSO-CNN, PBCNN) perform better than traditional models but still fall short
              compared to ABS-CNN.
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              The performance gap between ABS-CNN and other models is significant, with at least a 5.4% improvement in
              accuracy over the next best model (PBCNN).
            </span>
          </li>
        </ul>
      </Card>

      <div>
        <h3 className="text-lg font-semibold mb-4">Operational Efficiency Comparison</h3>
        <p className="text-muted-foreground mb-6">
          Comparison of training time, testing time, and accuracy for ABS-CNN and other deep learning models.
        </p>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={operationalData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" domain={[0, 1200]} />
              <YAxis yAxisId="right" orientation="right" domain={[90, 100]} />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="trainingTime"
                name="Training Time (s)"
                stroke="#3b82f6"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="testingTime"
                name="Testing Time (s)"
                stroke="#10b981"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="accuracy"
                name="Accuracy (%)"
                stroke="#f59e0b"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

