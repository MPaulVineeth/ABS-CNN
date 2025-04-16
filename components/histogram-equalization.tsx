import HighQualityVisualization from "@/components/high-quality-visualizations"

export default function HistogramEqualization() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Histogram Equalization in Traffic Processing</h3>
          <p className="text-muted-foreground mb-4">
            Histogram equalization is a technique used to enhance the contrast of images. In the context of abnormal
            traffic detection, it is used to enhance the grayscale images generated from network traffic data.
          </p>
          <p className="text-muted-foreground mb-4">The process involves:</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li className="pl-2">Converting raw traffic data into grayscale images</li>
            <li className="pl-2">Applying histogram equalization to enhance the contrast</li>
            <li className="pl-2">Superimposing the enhanced image with the original image</li>
            <li className="pl-2">Creating a multi-channel grayscale image for better feature extraction</li>
          </ol>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <HighQualityVisualization type="histogram" />
            <p className="text-sm text-muted-foreground text-center mt-2">Figure: Histogram Equalization Process</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Benefits of Histogram Equalization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Enhanced Feature Contrast</h4>
            <p className="text-sm text-muted-foreground">
              Histogram equalization enhances the contrast of the grayscale images, making the features more distinct
              and easier to detect.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Multi-dimensional Features</h4>
            <p className="text-sm text-muted-foreground">
              By creating multi-channel images, the model can extract features from different perspectives, improving
              its ability to detect abnormal traffic.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Improved Classification Accuracy</h4>
            <p className="text-sm text-muted-foreground">
              The enhanced features lead to better classification accuracy, especially for traffic with similar
              characteristics.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Robustness to Noise</h4>
            <p className="text-sm text-muted-foreground">
              Histogram equalization can help reduce the impact of noise in the traffic data, making the model more
              robust.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

