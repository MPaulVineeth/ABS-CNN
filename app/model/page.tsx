import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ModelArchitecture from "@/components/model-architecture"
import AttentionMechanism from "@/components/attention-mechanism"
import HistogramEqualization from "@/components/histogram-equalization"
import BigStepConvolution from "@/components/big-step-convolution"
import HighQualityVisualization from "@/components/high-quality-visualizations"

export default function ModelPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Model Architecture</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore the ABS-CNN model architecture and its key components
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="attention">Attention Mechanism</TabsTrigger>
          <TabsTrigger value="histogram">Histogram Equalization</TabsTrigger>
          <TabsTrigger value="convolution">Big Step Convolution</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>ABS-CNN Model Architecture</CardTitle>
              <CardDescription>
                The complete architecture of the Attention and Big Step Convolutional Neural Network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ModelArchitecture />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="attention" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attention Mechanism</CardTitle>
              <CardDescription>How the attention mechanism enhances feature extraction</CardDescription>
            </CardHeader>
            <CardContent>
              <AttentionMechanism />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="histogram" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Histogram Equalization</CardTitle>
              <CardDescription>Preprocessing traffic data with histogram equalization</CardDescription>
            </CardHeader>
            <CardContent>
              <HistogramEqualization />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="convolution" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Big Step Convolution</CardTitle>
              <CardDescription>How big step convolution preserves sequence-related features</CardDescription>
            </CardHeader>
            <CardContent>
              <BigStepConvolution />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Data Preprocessing</CardTitle>
            <CardDescription>How raw traffic data is preprocessed before being fed into the model</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Preprocessing Steps</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="pl-2">
                    <span className="font-medium">Slice Traffic:</span> Raw traffic is cut into smaller pieces of data.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Clean Up the Flow:</span> Eliminate information that can affect
                    classification, such as MAC and IP addresses.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Generate Images:</span> Convert the cleaned data into two-dimensional
                    grayscale images.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Image Overlay:</span> Apply histogram equalization and superimpose
                    with the original image to create multi-channel grayscale images.
                  </li>
                </ol>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                  <HighQualityVisualization type="preprocessing" />
                  <p className="text-sm text-muted-foreground text-center mt-2">Figure: Data Preprocessing Flow</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

