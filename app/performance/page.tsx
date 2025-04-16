import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PerformanceComparison from "@/components/performance-comparison"
import ConfusionMatrix from "@/components/confusion-matrix"
import AblationStudy from "@/components/ablation-study"
import RealWorldPerformance from "@/components/real-world-performance"

export default function PerformancePage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Performance Analysis</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Comprehensive analysis of the ABS-CNN model's performance in abnormal traffic detection
        </p>
      </div>

      <Tabs defaultValue="comparison" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="comparison">Model Comparison</TabsTrigger>
          <TabsTrigger value="confusion">Confusion Matrix</TabsTrigger>
          <TabsTrigger value="ablation">Ablation Study</TabsTrigger>
          <TabsTrigger value="real-world">Real-World Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="comparison" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Comparison with Other Models</CardTitle>
              <CardDescription>
                Comparing ABS-CNN with traditional machine learning and deep learning models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceComparison />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="confusion" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Confusion Matrix Analysis</CardTitle>
              <CardDescription>
                Detailed analysis of the model's classification performance for different traffic types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ConfusionMatrix />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ablation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ablation Study</CardTitle>
              <CardDescription>Analyzing the impact of each component on the model's performance</CardDescription>
            </CardHeader>
            <CardContent>
              <AblationStudy />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="real-world" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Real-World Performance</CardTitle>
              <CardDescription>Performance analysis on real-world traffic data</CardDescription>
            </CardHeader>
            <CardContent>
              <RealWorldPerformance />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Key Performance Metrics</CardTitle>
            <CardDescription>Summary of the ABS-CNN model's performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-muted p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-2">99.5%</h3>
                <p className="text-muted-foreground">Accuracy</p>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-2">99.4%</h3>
                <p className="text-muted-foreground">Precision</p>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-2">99.5%</h3>
                <p className="text-muted-foreground">Recall</p>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-2">99.4%</h3>
                <p className="text-muted-foreground">F1-Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

