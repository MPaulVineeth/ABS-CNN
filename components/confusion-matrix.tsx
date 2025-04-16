"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConfusionMatrix() {
  const trafficTypes = [
    "BitTorrent",
    "Facetime",
    "FTP",
    "Gmail",
    "MySQL",
    "Outlook",
    "Skype",
    "SMB",
    "Weibo",
    "WorldOfWarcraft",
  ]

  const absConfusionMatrix = [
    [99, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 100, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 100, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 100, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 100, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 100, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 100, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 100, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 100, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 99],
  ]

  const cnnConfusionMatrix = [
    [95, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 94, 2, 0, 0, 0, 4, 0, 0, 0],
    [0, 1, 95, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 93, 3, 4, 0, 0, 0, 0],
    [0, 0, 0, 2, 94, 0, 0, 0, 4, 0],
    [0, 0, 0, 5, 0, 93, 0, 0, 2, 0],
    [0, 3, 0, 0, 0, 0, 95, 0, 0, 2],
    [0, 0, 3, 0, 0, 0, 0, 94, 0, 3],
    [0, 0, 0, 0, 3, 2, 0, 0, 95, 0],
    [4, 0, 0, 0, 0, 0, 2, 3, 0, 91],
  ]

  const svmConfusionMatrix = [
    [87, 0, 0, 0, 0, 0, 0, 0, 0, 13],
    [0, 85, 5, 0, 0, 0, 10, 0, 0, 0],
    [0, 4, 86, 0, 0, 0, 0, 10, 0, 0],
    [0, 0, 0, 84, 8, 8, 0, 0, 0, 0],
    [0, 0, 0, 7, 85, 0, 0, 0, 8, 0],
    [0, 0, 0, 9, 0, 84, 0, 0, 7, 0],
    [0, 8, 0, 0, 0, 0, 86, 0, 0, 6],
    [0, 0, 9, 0, 0, 0, 0, 85, 0, 6],
    [0, 0, 0, 0, 7, 6, 0, 0, 87, 0],
    [12, 0, 0, 0, 0, 0, 5, 6, 0, 77],
  ]

  const renderConfusionMatrix = (matrix) => {
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-muted"></th>
              {trafficTypes.map((type, index) => (
                <th key={index} className="border p-2 bg-muted text-xs md:text-sm">
                  {type}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border p-2 bg-muted font-medium text-xs md:text-sm">{trafficTypes[rowIndex]}</td>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border p-2 text-center text-xs md:text-sm ${
                      rowIndex === cellIndex
                        ? cell > 95
                          ? "bg-green-100 dark:bg-green-900/30"
                          : cell > 90
                            ? "bg-green-50 dark:bg-green-900/20"
                            : "bg-yellow-50 dark:bg-yellow-900/20"
                        : cell > 0
                          ? "bg-red-50 dark:bg-red-900/20"
                          : ""
                    }`}
                  >
                    {cell}%
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Confusion Matrix Analysis</h3>
        <p className="text-muted-foreground mb-6">
          The confusion matrix shows the classification accuracy for each traffic type. The diagonal elements represent
          the percentage of correctly classified instances, while off-diagonal elements represent misclassifications.
        </p>
        <Tabs defaultValue="abs-cnn">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="abs-cnn">ABS-CNN</TabsTrigger>
            <TabsTrigger value="cnn">CNN</TabsTrigger>
            <TabsTrigger value="svm">SVM</TabsTrigger>
          </TabsList>
          <TabsContent value="abs-cnn" className="mt-4">
            <Card className="p-4">
              <h4 className="font-medium mb-4">ABS-CNN Confusion Matrix</h4>
              {renderConfusionMatrix(absConfusionMatrix)}
            </Card>
          </TabsContent>
          <TabsContent value="cnn" className="mt-4">
            <Card className="p-4">
              <h4 className="font-medium mb-4">CNN Confusion Matrix</h4>
              {renderConfusionMatrix(cnnConfusionMatrix)}
            </Card>
          </TabsContent>
          <TabsContent value="svm" className="mt-4">
            <Card className="p-4">
              <h4 className="font-medium mb-4">SVM Confusion Matrix</h4>
              {renderConfusionMatrix(svmConfusionMatrix)}
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Key Observations</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              ABS-CNN achieves near-perfect classification for most traffic types, with 100% accuracy for 8 out of 10
              types.
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              BitTorrent and WorldOfWarcraft have slightly lower accuracy (99%) with minimal misclassification between
              them.
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              CNN shows good performance but with more misclassifications, particularly for WorldOfWarcraft (91%).
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              SVM has the lowest performance, with significant misclassifications across multiple traffic types.
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>
              The superior performance of ABS-CNN demonstrates its effectiveness in distinguishing between similar
              traffic types.
            </span>
          </li>
        </ul>
      </Card>
    </div>
  )
}

