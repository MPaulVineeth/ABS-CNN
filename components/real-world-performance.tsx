"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function RealWorldPerformance() {
  const realWorldData = [
    { name: "Baidu", accuracy: 100, precision: 100, recall: 100, f1: 100 },
    { name: "QQ", accuracy: 98, precision: 97, recall: 98, f1: 97.5 },
    { name: "QQ Email", accuracy: 99, precision: 98, recall: 99, f1: 98.5 },
    { name: "IQIYI", accuracy: 100, precision: 100, recall: 100, f1: 100 },
    { name: "Weibo", accuracy: 98, precision: 97, recall: 98, f1: 97.5 },
    { name: "DDoS", accuracy: 97, precision: 96, recall: 97, f1: 96.5 },
    { name: "ARP", accuracy: 98, precision: 97, recall: 98, f1: 97.5 },
    { name: "Nsis-ay", accuracy: 100, precision: 100, recall: 100, f1: 100 },
    { name: "Virut", accuracy: 97, precision: 96, recall: 97, f1: 96.5 },
    { name: "Zeus", accuracy: 98, precision: 97, recall: 98, f1: 97.5 },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Real-World Performance Analysis</h3>
        <p className="text-muted-foreground mb-6">
          Performance of the ABS-CNN model on real-world traffic data, including both normal and malicious traffic.
        </p>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={realWorldData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[95, 100]} />
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Normal Traffic Performance</h3>
          <p className="text-muted-foreground mb-4">
            The model achieves excellent performance on normal traffic types, with an average accuracy of 99%.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Perfect classification (100% accuracy) for Baidu and IQIYI traffic</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>High accuracy (98-99%) for QQ, QQ Email, and Weibo traffic</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Consistent F1-scores above 97.5% for all normal traffic types</span>
            </li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Malicious Traffic Performance</h3>
          <p className="text-muted-foreground mb-4">
            The model effectively detects and classifies various types of malicious traffic, with an average accuracy of
            98%.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Perfect classification (100% accuracy) for Nsis-ay malware traffic</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>High accuracy (97-98%) for DDoS, ARP, Virut, and Zeus traffic</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Consistent F1-scores above 96.5% for all malicious traffic types</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Overall Real-World Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-muted-foreground mb-4">
              The ABS-CNN model demonstrates robust performance in real-world environments, achieving an overall
              accuracy of 97.65% across all traffic types.
            </p>
            <p className="text-muted-foreground">
              This high performance on both normal and malicious traffic, including encrypted traffic, confirms the
              model's effectiveness and robustness in different complex environments.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="font-medium mb-4">Key Achievements</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>97.65% overall accuracy on real-world traffic</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Effective classification of encrypted traffic</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Fine-grained detection of malicious traffic types</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Consistent performance across different traffic categories</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Robustness to different complex environments</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

