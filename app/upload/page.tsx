"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Upload, FileUp, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import ResultsVisualization from "@/components/results-visualization"

// Deterministic results based on file name
const getResultsForFile = (fileName: string) => {
  // Use a simple hash function to get a deterministic number from the file name
  const hash = fileName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 5

  // Predefined results for sample files
  if (fileName === "normal_traffic_sample.pcap") {
    return {
      classification: "Normal",
      confidence: 98.7,
      trafficType: "Normal",
      details: {
        packetCount: 1245,
        bytesTransferred: 1876543,
        duration: 45,
        sourceIPs: ["192.168.1.105", "192.168.1.110"],
        destinationIPs: ["10.0.0.55"],
        ports: [80, 443, 8080],
      },
      featureImportance: [
        { name: "Packet Size", value: 0.82 },
        { name: "Inter-arrival Time", value: 0.75 },
        { name: "Flow Duration", value: 0.68 },
        { name: "Packet Count", value: 0.64 },
        { name: "TCP Flags", value: 0.58 },
      ],
    }
  } else if (fileName === "ddos_attack_sample.pcap") {
    return {
      classification: "Malicious",
      confidence: 99.2,
      trafficType: "DDoS",
      details: {
        packetCount: 8754,
        bytesTransferred: 3254789,
        duration: 32,
        sourceIPs: ["192.168.1.120", "192.168.1.121", "192.168.1.122", "192.168.1.123"],
        destinationIPs: ["10.0.0.60"],
        ports: [80],
      },
      featureImportance: [
        { name: "Packet Size", value: 0.65 },
        { name: "Inter-arrival Time", value: 0.92 },
        { name: "Flow Duration", value: 0.78 },
        { name: "Packet Count", value: 0.88 },
        { name: "TCP Flags", value: 0.72 },
      ],
    }
  } else if (fileName === "malware_traffic_sample.pcap") {
    return {
      classification: "Malicious",
      confidence: 97.8,
      trafficType: "Malware",
      details: {
        packetCount: 2341,
        bytesTransferred: 1254367,
        duration: 67,
        sourceIPs: ["192.168.1.130"],
        destinationIPs: ["10.0.0.70", "10.0.0.71"],
        ports: [443, 8443, 53],
      },
      featureImportance: [
        { name: "Packet Size", value: 0.75 },
        { name: "Inter-arrival Time", value: 0.68 },
        { name: "Flow Duration", value: 0.82 },
        { name: "Packet Count", value: 0.71 },
        { name: "TCP Flags", value: 0.79 },
      ],
    }
  }

  // For other files, generate deterministic values based on the hash
  const resultTypes = ["DDoS", "Malware", "Normal", "ARP Spoofing", "Port Scanning"]
  const selectedType = resultTypes[hash]
  const isMalicious = selectedType !== "Normal"

  // Generate deterministic values based on the hash
  const confidence = 95 + hash * 0.8
  const packetCount = 500 + hash * 300
  const bytesTransferred = 500000 + hash * 900000
  const duration = 10 + hash * 18

  return {
    classification: isMalicious ? "Malicious" : "Normal",
    confidence: confidence,
    trafficType: selectedType,
    details: {
      packetCount: packetCount,
      bytesTransferred: bytesTransferred,
      duration: duration,
      sourceIPs: [`192.168.1.${100 + hash}`, `192.168.1.${150 + hash}`],
      destinationIPs: [`10.0.0.${50 + hash}`],
      ports: [80, 443, 8080, 22, 21].slice(0, 2 + (hash % 3)),
    },
    featureImportance: [
      { name: "Packet Size", value: 0.7 + hash * 0.05 },
      { name: "Inter-arrival Time", value: 0.6 + hash * 0.05 },
      { name: "Flow Duration", value: 0.5 + hash * 0.05 },
      { name: "Packet Count", value: 0.5 + hash * 0.04 },
      { name: "TCP Flags", value: 0.4 + hash * 0.06 },
    ],
  }
}

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [processingComplete, setProcessingComplete] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      setError(null)
    }
  }

  const handleUpload = () => {
    if (!file) {
      setError("Please select a file to upload")
      return
    }

    setUploading(true)
    setUploadProgress(0)
    setError(null)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100) // Make it faster for better UX

    // Simulate processing completion after upload
    setTimeout(() => {
      clearInterval(interval)
      setUploading(false)
      setUploadProgress(100)
      setProcessingComplete(true)

      // Get deterministic results based on file name
      setResults(getResultsForFile(file.name))
    }, 2000) // Shorter time for better UX
  }

  const resetForm = () => {
    setFile(null)
    setUploading(false)
    setUploadProgress(0)
    setProcessingComplete(false)
    setResults(null)
    setError(null)
  }

  // Handle sample data selection
  const handleSampleSelection = (sampleFileName: string) => {
    const sampleFile = new File([""], sampleFileName)
    setFile(sampleFile)
    setError(null)
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Test with Your Data</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Upload your network traffic data to test the ABS-CNN model
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Upload Traffic Data</CardTitle>
              <CardDescription>Upload your network traffic data in PCAP format</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="traffic-file">Traffic File (PCAP)</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="traffic-file"
                      type="file"
                      accept=".pcap,.pcapng"
                      onChange={handleFileChange}
                      disabled={uploading || processingComplete}
                    />
                  </div>
                  {file && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Selected file: {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </p>
                  )}
                </div>

                {uploading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Uploading...</Label>
                      <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}

                {processingComplete && !results && (
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Processing complete!</span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {!processingComplete ? (
                <Button onClick={handleUpload} disabled={!file || uploading}>
                  {uploading ? "Uploading..." : "Upload and Analyze"}
                  {!uploading && <Upload className="ml-2 h-4 w-4" />}
                </Button>
              ) : (
                <Button variant="outline" onClick={resetForm}>
                  Upload Another File
                </Button>
              )}
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Sample Data</CardTitle>
              <CardDescription>Don't have your own data? Use our sample datasets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleSampleSelection("normal_traffic_sample.pcap")}
                >
                  <FileUp className="mr-2 h-4 w-4" />
                  Normal Traffic Sample
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleSampleSelection("ddos_attack_sample.pcap")}
                >
                  <FileUp className="mr-2 h-4 w-4" />
                  DDoS Attack Sample
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleSampleSelection("malware_traffic_sample.pcap")}
                >
                  <FileUp className="mr-2 h-4 w-4" />
                  Malware Traffic Sample
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {results ? (
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>Detailed analysis of your traffic data</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="summary">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="visualization">Visualization</TabsTrigger>
                  </TabsList>
                  <TabsContent value="summary" className="mt-4">
                    <div className="space-y-4">
                      <Alert
                        className={
                          results.classification === "Malicious"
                            ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                            : "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                        }
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle
                            className={`h-5 w-5 ${results.classification === "Malicious" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}
                          />
                          <AlertTitle
                            className={
                              results.classification === "Malicious"
                                ? "text-red-600 dark:text-red-400"
                                : "text-green-600 dark:text-green-400"
                            }
                          >
                            {results.classification} Traffic Detected
                          </AlertTitle>
                        </div>
                        <AlertDescription className="mt-2">
                          The model has classified this traffic as <strong>{results.trafficType}</strong> with{" "}
                          {results.confidence.toFixed(1)}% confidence.
                        </AlertDescription>
                      </Alert>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Traffic Type</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-2xl font-bold">{results.trafficType}</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Confidence</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-2xl font-bold">{results.confidence.toFixed(1)}%</p>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Key Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Packet Count</p>
                              <p className="font-medium">{results.details.packetCount}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Bytes Transferred</p>
                              <p className="font-medium">{results.details.bytesTransferred.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Duration</p>
                              <p className="font-medium">{results.details.duration} seconds</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="mt-4">
                    <div className="space-y-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Traffic Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">Source IPs</h4>
                              <div className="bg-muted p-2 rounded-md">
                                {results.details.sourceIPs.map((ip, index) => (
                                  <div key={index} className="text-sm">
                                    {ip}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Destination IPs</h4>
                              <div className="bg-muted p-2 rounded-md">
                                {results.details.destinationIPs.map((ip, index) => (
                                  <div key={index} className="text-sm">
                                    {ip}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Ports</h4>
                              <div className="bg-muted p-2 rounded-md">
                                {results.details.ports.map((port, index) => (
                                  <span key={index} className="text-sm mr-2">
                                    {port}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Feature Importance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {results.featureImportance.map((feature, index) => (
                              <div key={index}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">{feature.name}</span>
                                  <span className="text-sm text-muted-foreground">
                                    {(feature.value * 100).toFixed(0)}%
                                  </span>
                                </div>
                                <Progress value={feature.value * 100} className="h-2" />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="visualization" className="mt-4">
                    <ResultsVisualization results={results} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex flex-col justify-center items-center p-8">
              <div className="text-center space-y-4 max-w-md">
                <div className="bg-primary/10 p-6 rounded-full inline-flex items-center justify-center">
                  <Upload className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Upload Traffic Data</h3>
                <p className="text-muted-foreground">
                  Upload your network traffic data in PCAP format to analyze it using the ABS-CNN model. The model will
                  classify the traffic and provide detailed insights.
                </p>
                <div className="pt-4">
                  <Button onClick={() => document.getElementById("traffic-file")?.click()}>Select File</Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

