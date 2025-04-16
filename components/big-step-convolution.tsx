import HighQualityVisualization from "@/components/high-quality-visualizations"

export default function BigStepConvolution() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Big Step Convolution</h3>
          <p className="text-muted-foreground mb-4">
            Big Step Convolution, also called stepwise convolution, is a technique used in the ABS-CNN model to extract
            traffic features while preserving sequence-related information. Unlike traditional CNNs that use pooling
            layers, big step convolution uses larger stride values to reduce the spatial dimensions of the feature maps.
          </p>
          <p className="text-muted-foreground mb-4">
            The key innovation is the removal of pooling layers, which can cause information loss and reduce the
            correlation of traffic sequences. Instead, the model uses convolutional layers with stride values of 2 to
            achieve dimensionality reduction while preserving important features.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <HighQualityVisualization type="convolution" />
            <p className="text-sm text-muted-foreground text-center mt-2">
              Figure: Big Step Convolution vs. Traditional CNN
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Advantages of Big Step Convolution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Preserves Sequence Information</h4>
            <p className="text-sm text-muted-foreground">
              By avoiding pooling operations, big step convolution preserves the sequence-related features of network
              traffic, which is crucial for accurate classification.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Reduces Information Loss</h4>
            <p className="text-sm text-muted-foreground">
              Traditional pooling operations can lead to information loss, especially for subtle features. Big step
              convolution minimizes this loss while still reducing spatial dimensions.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Improves Model Efficiency</h4>
            <p className="text-sm text-muted-foreground">
              By using larger stride values, the model can reduce the number of parameters and computational complexity,
              leading to faster training and inference times.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Enhances Feature Extraction</h4>
            <p className="text-sm text-muted-foreground">
              The combination of multiple convolutional layers with different kernel sizes allows the model to extract
              features at different scales and levels of abstraction.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Comparison with Traditional CNNs</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Feature</th>
                <th className="border p-2 text-left">Traditional CNN</th>
                <th className="border p-2 text-left">ABS-CNN (Big Step Convolution)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Dimensionality Reduction</td>
                <td className="border p-2">Pooling layers (max pooling, average pooling)</td>
                <td className="border p-2">Convolutional layers with stride &gt; 1</td>
              </tr>
              <tr>
                <td className="border p-2">Information Preservation</td>
                <td className="border p-2">Information loss due to pooling</td>
                <td className="border p-2">Better preservation of sequence-related features</td>
              </tr>
              <tr>
                <td className="border p-2">Feature Extraction</td>
                <td className="border p-2">May miss subtle features</td>
                <td className="border p-2">Enhanced extraction of local and global features</td>
              </tr>
              <tr>
                <td className="border p-2">Model Complexity</td>
                <td className="border p-2">More layers (conv + pooling)</td>
                <td className="border p-2">Fewer layers, potentially fewer parameters</td>
              </tr>
              <tr>
                <td className="border p-2">Training Speed</td>
                <td className="border p-2">Can be slower due to more layers</td>
                <td className="border p-2">Faster due to fewer layers and parameters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

