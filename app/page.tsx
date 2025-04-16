import Link from "next/link"
import { ArrowRight, Shield, Zap, BarChart3, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Abnormal Traffic Detection
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Using Attention Mechanisms and Big Step Convolution for Enhanced Network Security
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/model">
                  <Button className="px-8">
                    Explore Model <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/upload">
                  <Button variant="outline" className="px-8">
                    Test with Your Data
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-xl"></div>
                <div className="relative bg-card border rounded-lg shadow-lg p-6 h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-muted rounded-md p-4 flex flex-col items-center justify-center">
                      <Shield className="h-8 w-8 mb-2 text-primary" />
                      <p className="text-sm font-medium">Enhanced Security</p>
                    </div>
                    <div className="bg-muted rounded-md p-4 flex flex-col items-center justify-center">
                      <Zap className="h-8 w-8 mb-2 text-primary" />
                      <p className="text-sm font-medium">99.5% Accuracy</p>
                    </div>
                    <div className="bg-muted rounded-md p-4 flex flex-col items-center justify-center">
                      <BarChart3 className="h-8 w-8 mb-2 text-primary" />
                      <p className="text-sm font-medium">Advanced Analytics</p>
                    </div>
                    <div className="bg-muted rounded-md p-4 flex flex-col items-center justify-center">
                      <Database className="h-8 w-8 mb-2 text-primary" />
                      <p className="text-sm font-medium">Real-time Detection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Innovative approaches to enhance abnormal traffic detection
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Attention Mechanism</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Assigns different weights to traffic features to enhance local features and improve detection accuracy.
              </p>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Big Step Convolution</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Preserves sequence-related features by removing pooling layers, reducing information loss and improving
                accuracy.
              </p>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Histogram Equalization</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enhances grayscale images and creates multi-channel inputs to improve feature extraction and model
                dimensionality.
              </p>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/model">
              <Button size="lg">
                Explore the Model <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Test?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Upload your network traffic data and see the model in action
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/upload">
                <Button size="lg" className="px-8">
                  Try with Your Data <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

