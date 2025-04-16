import { Card } from "@/components/ui/card"
import HighQualityVisualization from "@/components/high-quality-visualizations"

export default function ModelArchitecture() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">ABS-CNN Architecture</h3>
          <p className="text-muted-foreground mb-4">
            The ABS-CNN model consists of an input layer, three convolutional layers, a fully connected layer, and an
            output layer. The attention mechanism is applied after the first and last convolutional layers to enhance
            feature extraction.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Input Layer: Receives 28×28×2 multi-channel grayscale images</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>First Conv Layer: 64 kernels of size 7×7, stride 2, outputs 14×14×64</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Second Conv Layer: 128 kernels of size 5×5, stride 2, outputs 7×7×128</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Third Conv Layer: 256 kernels of size 3×3, stride 1</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Fully Connected Layer: 1600 neurons</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Output Layer: 10 neurons with sigmoid activation</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <HighQualityVisualization type="architecture" />
            <p className="text-sm text-muted-foreground text-center mt-2">Figure: ABS-CNN Model Architecture</p>
          </div>
        </div>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Key Innovations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium">Attention Mechanism</h4>
            <p className="text-sm text-muted-foreground">
              Assigns different weights to traffic features to enhance local features and improve detection accuracy.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Big Step Convolution</h4>
            <p className="text-sm text-muted-foreground">
              Uses larger stride values and no pooling layers to preserve sequence-related features and reduce
              information loss.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Histogram Equalization</h4>
            <p className="text-sm text-muted-foreground">
              Enhances grayscale images and creates multi-channel inputs to improve feature extraction and model
              dimensionality.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-lg font-semibold mb-4">Model Parameters</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Layer</th>
                <th className="border p-2 text-left">Kernel Size</th>
                <th className="border p-2 text-left">Number of Kernels</th>
                <th className="border p-2 text-left">Stride</th>
                <th className="border p-2 text-left">Output Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Input</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
                <td className="border p-2">28×28×2</td>
              </tr>
              <tr>
                <td className="border p-2">Conv1</td>
                <td className="border p-2">7×7</td>
                <td className="border p-2">64</td>
                <td className="border p-2">2</td>
                <td className="border p-2">14×14×64</td>
              </tr>
              <tr>
                <td className="border p-2">Conv2</td>
                <td className="border p-2">5×5</td>
                <td className="border p-2">128</td>
                <td className="border p-2">2</td>
                <td className="border p-2">7×7×128</td>
              </tr>
              <tr>
                <td className="border p-2">Conv3</td>
                <td className="border p-2">3×3</td>
                <td className="border p-2">256</td>
                <td className="border p-2">1</td>
                <td className="border p-2">5×5×256</td>
              </tr>
              <tr>
                <td className="border p-2">FC</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
                <td className="border p-2">1600</td>
              </tr>
              <tr>
                <td className="border p-2">Output</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
                <td className="border p-2">-</td>
                <td className="border p-2">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

