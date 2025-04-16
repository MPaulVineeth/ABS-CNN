"use client"

import { useEffect, useRef } from "react"

interface ModelDiagramProps {
  type: "architecture" | "attention" | "histogram" | "convolution"
  width?: number
  height?: number
}

export default function ModelDiagram({ type, width = 500, height = 300 }: ModelDiagramProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Draw based on diagram type
    switch (type) {
      case "architecture":
        drawArchitecture(ctx, width, height)
        break
      case "attention":
        drawAttention(ctx, width, height)
        break
      case "histogram":
        drawHistogram(ctx, width, height)
        break
      case "convolution":
        drawConvolution(ctx, width, height)
        break
    }
  }, [type, width, height])

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <canvas ref={canvasRef} width={width} height={height} className="w-full h-auto" />
    </div>
  )
}

// Draw ABS-CNN architecture
function drawArchitecture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Background
  ctx.fillStyle = "#f8fafc"
  ctx.fillRect(0, 0, width, height)

  // Title
  ctx.fillStyle = "#0f172a"
  ctx.font = "bold 16px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("ABS-CNN Model Architecture", width / 2, 30)

  // Layer colors
  const colors = {
    input: "#bfdbfe",
    conv: "#93c5fd",
    attention: "#c7d2fe",
    fc: "#a5b4fc",
    output: "#818cf8",
  }

  // Draw layers
  const startX = 50
  const endX = width - 50
  const startY = 70
  const endY = height - 40
  const layerSpacing = (endX - startX) / 6

  // Input layer
  drawLayer(ctx, startX, startY, 40, 80, colors.input, "Input Layer", "28×28×2")

  // Conv1 + Attention
  drawLayer(ctx, startX + layerSpacing, startY, 40, 70, colors.conv, "Conv1", "14×14×64")
  drawLayer(ctx, startX + layerSpacing, startY + 90, 40, 30, colors.attention, "Attention", "")
  drawArrow(ctx, startX + 40, startY + 40, startX + layerSpacing - 40, startY + 40)
  drawArrow(ctx, startX + layerSpacing, startY + 70, startX + layerSpacing, startY + 90)
  drawArrow(ctx, startX + layerSpacing, startY + 120, startX + layerSpacing, startY + 140)

  // Conv2
  drawLayer(ctx, startX + layerSpacing * 2, startY, 40, 60, colors.conv, "Conv2", "7×7×128")
  drawArrow(ctx, startX + layerSpacing + 40, startY + 40, startX + layerSpacing * 2 - 40, startY + 40)

  // Conv3 + Attention
  drawLayer(ctx, startX + layerSpacing * 3, startY, 40, 50, colors.conv, "Conv3", "5×5×256")
  drawLayer(ctx, startX + layerSpacing * 3, startY + 90, 40, 30, colors.attention, "Attention", "")
  drawArrow(ctx, startX + layerSpacing * 2 + 40, startY + 40, startX + layerSpacing * 3 - 40, startY + 40)
  drawArrow(ctx, startX + layerSpacing * 3, startY + 50, startX + layerSpacing * 3, startY + 90)
  drawArrow(ctx, startX + layerSpacing * 3, startY + 120, startX + layerSpacing * 3, startY + 140)

  // FC
  drawLayer(ctx, startX + layerSpacing * 4, startY, 40, 40, colors.fc, "FC", "1600")
  drawArrow(ctx, startX + layerSpacing * 3 + 40, startY + 40, startX + layerSpacing * 4 - 40, startY + 40)

  // Output
  drawLayer(ctx, startX + layerSpacing * 5, startY, 40, 30, colors.output, "Output", "10")
  drawArrow(ctx, startX + layerSpacing * 4 + 40, startY + 40, startX + layerSpacing * 5 - 40, startY + 40)

  // Legend
  const legendY = height - 30
  const legendSpacing = width / 5

  drawLegendItem(ctx, startX, legendY, colors.input, "Input Layer")
  drawLegendItem(ctx, startX + legendSpacing, legendY, colors.conv, "Convolutional Layer")
  drawLegendItem(ctx, startX + legendSpacing * 2, legendY, colors.attention, "Attention Mechanism")
  drawLegendItem(ctx, startX + legendSpacing * 3, legendY, colors.fc, "Fully Connected")
  drawLegendItem(ctx, startX + legendSpacing * 4, legendY, colors.output, "Output Layer")
}

// Draw attention mechanism
function drawAttention(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Background
  ctx.fillStyle = "#f8fafc"
  ctx.fillRect(0, 0, width, height)

  // Title
  ctx.fillStyle = "#0f172a"
  ctx.font = "bold 16px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Convolutional Block Attention Module (CBAM)", width / 2, 30)

  const centerX = width / 2
  const startY = 70
  const boxWidth = 120
  const boxHeight = 60
  const spacing = 40

  // Input feature
  ctx.fillStyle = "#bfdbfe"
  ctx.fillRect(centerX - boxWidth / 2, startY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "14px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Input Feature", centerX, startY + boxHeight / 2 + 5)
  ctx.fillText("F", centerX, startY + boxHeight / 2 + 25)

  // Channel attention
  ctx.fillStyle = "#c7d2fe"
  ctx.fillRect(centerX - boxWidth / 2, startY + boxHeight + spacing, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "14px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Channel Attention", centerX, startY + boxHeight + spacing + boxHeight / 2 + 5)
  ctx.fillText("Mc(F)", centerX, startY + boxHeight + spacing + boxHeight / 2 + 25)

  // Arrow down
  drawArrow(ctx, centerX, startY + boxHeight, centerX, startY + boxHeight + spacing)

  // Intermediate feature
  ctx.fillStyle = "#dbeafe"
  ctx.fillRect(centerX - boxWidth / 2, startY + boxHeight * 2 + spacing * 2, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "14px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Intermediate Feature", centerX, startY + boxHeight * 2 + spacing * 2 + boxHeight / 2 + 5)
  ctx.fillText("F'", centerX, startY + boxHeight * 2 + spacing * 2 + boxHeight / 2 + 25)

  // Arrow down
  drawArrow(ctx, centerX, startY + boxHeight * 2 + spacing, centerX, startY + boxHeight * 2 + spacing * 2)

  // Spatial attention
  ctx.fillStyle = "#a5b4fc"
  ctx.fillRect(centerX - boxWidth / 2, startY + boxHeight * 3 + spacing * 3, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "14px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Spatial Attention", centerX, startY + boxHeight * 3 + spacing * 3 + boxHeight / 2 + 5)
  ctx.fillText("Ms(F')", centerX, startY + boxHeight * 3 + spacing * 3 + boxHeight / 2 + 25)

  // Arrow down
  drawArrow(ctx, centerX, startY + boxHeight * 3 + spacing * 2, centerX, startY + boxHeight * 3 + spacing * 3)

  // Output feature
  ctx.fillStyle = "#818cf8"
  ctx.fillRect(centerX - boxWidth / 2, startY + boxHeight * 4 + spacing * 4, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "14px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Output Feature", centerX, startY + boxHeight * 4 + spacing * 4 + boxHeight / 2 + 5)
  ctx.fillText("F''", centerX, startY + boxHeight * 4 + spacing * 4 + boxHeight / 2 + 25)

  // Arrow down
  drawArrow(ctx, centerX, startY + boxHeight * 4 + spacing * 3, centerX, startY + boxHeight * 4 + spacing * 4)
}

// Draw histogram equalization
function drawHistogram(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Background
  ctx.fillStyle = "#f8fafc"
  ctx.fillRect(0, 0, width, height)

  // Title
  ctx.fillStyle = "#0f172a"
  ctx.font = "bold 16px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Histogram Equalization Process", width / 2, 30)

  const startX = 50
  const startY = 70
  const boxSize = 100
  const spacing = 50

  // Original image
  ctx.fillStyle = "#e2e8f0"
  ctx.fillRect(startX, startY, boxSize, boxSize)

  // Draw a simple grayscale pattern
  const gradient = ctx.createLinearGradient(startX, startY, startX + boxSize, startY + boxSize)
  gradient.addColorStop(0, "rgba(0, 0, 0, 0.8)")
  gradient.addColorStop(1, "rgba(255, 255, 255, 0.2)")
  ctx.fillStyle = gradient
  ctx.fillRect(startX, startY, boxSize, boxSize)

  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Raw Traffic Data", startX + boxSize / 2, startY + boxSize + 20)

  // Arrow right
  drawArrow(ctx, startX + boxSize, startY + boxSize / 2, startX + boxSize + spacing, startY + boxSize / 2)

  // Histogram
  const histStartX = startX + boxSize + spacing
  ctx.fillStyle = "#cbd5e1"
  ctx.fillRect(histStartX, startY, boxSize, boxSize)

  // Draw histogram bars
  ctx.fillStyle = "#475569"
  const barWidth = 8
  const barSpacing = 4
  const numBars = 10
  const maxBarHeight = 80

  for (let i = 0; i < numBars; i++) {
    const barHeight = Math.random() * maxBarHeight
    ctx.fillRect(histStartX + (barWidth + barSpacing) * i + 10, startY + boxSize - barHeight, barWidth, barHeight)
  }

  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Histogram Analysis", histStartX + boxSize / 2, startY + boxSize + 20)

  // Arrow right
  drawArrow(ctx, histStartX + boxSize, startY + boxSize / 2, histStartX + boxSize + spacing, startY + boxSize / 2)

  // Equalized image
  const eqStartX = histStartX + boxSize + spacing
  ctx.fillStyle = "#e2e8f0"
  ctx.fillRect(eqStartX, startY, boxSize, boxSize)

  // Draw a more balanced grayscale pattern
  const eqGradient = ctx.createLinearGradient(eqStartX, startY, eqStartX + boxSize, startY + boxSize)
  eqGradient.addColorStop(0, "rgba(40, 40, 40, 0.8)")
  eqGradient.addColorStop(0.5, "rgba(128, 128, 128, 0.5)")
  eqGradient.addColorStop(1, "rgba(220, 220, 220, 0.2)")
  ctx.fillStyle = eqGradient
  ctx.fillRect(eqStartX, startY, boxSize, boxSize)

  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Equalized Image", eqStartX + boxSize / 2, startY + boxSize + 20)

  // Arrow right
  drawArrow(ctx, eqStartX + boxSize, startY + boxSize / 2, eqStartX + boxSize + spacing, startY + boxSize / 2)

  // Multi-channel image
  const mcStartX = eqStartX + boxSize + spacing
  ctx.fillStyle = "#e2e8f0"
  ctx.fillRect(mcStartX, startY, boxSize, boxSize)

  // Draw two overlapping squares to represent channels
  ctx.fillStyle = "rgba(191, 219, 254, 0.7)"
  ctx.fillRect(mcStartX + 10, startY + 10, boxSize - 20, boxSize - 20)

  ctx.fillStyle = "rgba(165, 180, 252, 0.7)"
  ctx.fillRect(mcStartX + 20, startY + 20, boxSize - 40, boxSize - 40)

  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Multi-channel Image", mcStartX + boxSize / 2, startY + boxSize + 20)

  // Legend
  const legendY = height - 30
  ctx.fillStyle = "#0f172a"
  ctx.font = "14px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Original + Equalized = Multi-channel Input", width / 2, legendY)
}

// Draw big step convolution
function drawConvolution(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Background
  ctx.fillStyle = "#f8fafc"
  ctx.fillRect(0, 0, width, height)

  // Title
  ctx.fillStyle = "#0f172a"
  ctx.font = "bold 16px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Big Step Convolution vs Traditional CNN", width / 2, 30)

  const startX = 50
  const startY = 70
  const boxWidth = 80
  const boxHeight = 80
  const spacing = 40

  // Traditional CNN - Top row
  ctx.fillStyle = "#0f172a"
  ctx.font = "14px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Traditional CNN", startX + boxWidth * 2, startY - 20)

  // Input
  ctx.fillStyle = "#bfdbfe"
  ctx.fillRect(startX, startY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Input", startX + boxWidth / 2, startY + boxHeight / 2)
  ctx.fillText("28×28", startX + boxWidth / 2, startY + boxHeight / 2 + 15)

  // Arrow right
  drawArrow(ctx, startX + boxWidth, startY + boxHeight / 2, startX + boxWidth + spacing, startY + boxHeight / 2)

  // Conv
  const convX = startX + boxWidth + spacing
  ctx.fillStyle = "#93c5fd"
  ctx.fillRect(convX, startY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Conv", convX + boxWidth / 2, startY + boxHeight / 2)
  ctx.fillText("26×26", convX + boxWidth / 2, startY + boxHeight / 2 + 15)

  // Arrow right
  drawArrow(ctx, convX + boxWidth, startY + boxHeight / 2, convX + boxWidth + spacing, startY + boxHeight / 2)

  // Pool
  const poolX = convX + boxWidth + spacing
  ctx.fillStyle = "#a5b4fc"
  ctx.fillRect(poolX, startY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Pool", poolX + boxWidth / 2, startY + boxHeight / 2)
  ctx.fillText("13×13", poolX + boxWidth / 2, startY + boxHeight / 2 + 15)

  // Arrow right
  drawArrow(ctx, poolX + boxWidth, startY + boxHeight / 2, poolX + boxWidth + spacing, startY + boxHeight / 2)

  // Conv2
  const conv2X = poolX + boxWidth + spacing
  ctx.fillStyle = "#93c5fd"
  ctx.fillRect(conv2X, startY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Conv", conv2X + boxWidth / 2, startY + boxHeight / 2)
  ctx.fillText("11×11", conv2X + boxWidth / 2, startY + boxHeight / 2 + 15)

  // Arrow right
  drawArrow(ctx, conv2X + boxWidth, startY + boxHeight / 2, conv2X + boxWidth + spacing, startY + boxHeight / 2)

  // Pool2
  const pool2X = conv2X + boxWidth + spacing
  ctx.fillStyle = "#a5b4fc"
  ctx.fillRect(pool2X, startY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Pool", pool2X + boxWidth / 2, startY + boxHeight / 2)
  ctx.fillText("5×5", pool2X + boxWidth / 2, startY + boxHeight / 2 + 15)

  // Big Step CNN - Bottom row
  const bottomY = startY + boxHeight + spacing * 2

  ctx.fillStyle = "#0f172a"
  ctx.font = "14px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Big Step CNN (No Pooling)", startX + boxWidth * 2, bottomY - 20)

  // Input
  ctx.fillStyle = "#bfdbfe"
  ctx.fillRect(startX, bottomY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Input", startX + boxWidth / 2, bottomY + boxHeight / 2)
  ctx.fillText("28×28", startX + boxWidth / 2, bottomY + boxHeight / 2 + 15)

  // Arrow right
  drawArrow(ctx, startX + boxWidth, bottomY + boxHeight / 2, startX + boxWidth + spacing, bottomY + boxHeight / 2)

  // Conv with stride 2
  const bsConvX = startX + boxWidth + spacing
  ctx.fillStyle = "#93c5fd"
  ctx.fillRect(bsConvX, bottomY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Conv", bsConvX + boxWidth / 2, bottomY + boxHeight / 2)
  ctx.fillText("Stride 2", bsConvX + boxWidth / 2, bottomY + boxHeight / 2 + 15)
  ctx.fillText("14×14", bsConvX + boxWidth / 2, bottomY + boxHeight / 2 + 30)

  // Arrow right
  drawArrow(ctx, bsConvX + boxWidth, bottomY + boxHeight / 2, bsConvX + boxWidth + spacing, bottomY + boxHeight / 2)

  // Conv2 with stride 2
  const bsConv2X = bsConvX + boxWidth + spacing
  ctx.fillStyle = "#93c5fd"
  ctx.fillRect(bsConv2X, bottomY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Conv", bsConv2X + boxWidth / 2, bottomY + boxHeight / 2)
  ctx.fillText("Stride 2", bsConv2X + boxWidth / 2, bottomY + boxHeight / 2 + 15)
  ctx.fillText("7×7", bsConv2X + boxWidth / 2, bottomY + boxHeight / 2 + 30)

  // Arrow right
  drawArrow(ctx, bsConv2X + boxWidth, bottomY + boxHeight / 2, bsConv2X + boxWidth + spacing, bottomY + boxHeight / 2)

  // Conv3 with stride 1
  const bsConv3X = bsConv2X + boxWidth + spacing
  ctx.fillStyle = "#93c5fd"
  ctx.fillRect(bsConv3X, bottomY, boxWidth, boxHeight)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Conv", bsConv3X + boxWidth / 2, bottomY + boxHeight / 2)
  ctx.fillText("Stride 1", bsConv3X + boxWidth / 2, bottomY + boxHeight / 2 + 15)
  ctx.fillText("5×5", bsConv3X + boxWidth / 2, bottomY + boxHeight / 2 + 30)

  // Legend
  const legendY = height - 30

  // Traditional CNN
  ctx.fillStyle = "#a5b4fc"
  ctx.fillRect(width / 4 - 60, legendY - 10, 20, 20)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "left"
  ctx.fillText("Pooling (Information Loss)", width / 4 - 35, legendY)

  // Big Step CNN
  ctx.fillStyle = "#93c5fd"
  ctx.fillRect((width * 3) / 4 - 60, legendY - 10, 20, 20)
  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "left"
  ctx.fillText("Stride > 1 (Preserves Features)", (width * 3) / 4 - 35, legendY)
}

// Helper functions
function drawLayer(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
  label: string,
  size: string,
) {
  ctx.fillStyle = color
  ctx.fillRect(x - width / 2, y, width, height)

  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText(label, x, y + height / 2)

  if (size) {
    ctx.font = "10px sans-serif"
    ctx.fillText(size, x, y + height / 2 + 15)
  }
}

function drawArrow(ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number) {
  const headLength = 10
  const angle = Math.atan2(toY - fromY, toX - fromX)

  ctx.beginPath()
  ctx.moveTo(fromX, fromY)
  ctx.lineTo(toX, toY)
  ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6))
  ctx.moveTo(toX, toY)
  ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6))
  ctx.strokeStyle = "#64748b"
  ctx.lineWidth = 2
  ctx.stroke()
}

function drawLegendItem(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, label: string) {
  ctx.fillStyle = color
  ctx.fillRect(x, y - 10, 15, 15)

  ctx.fillStyle = "#0f172a"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "left"
  ctx.fillText(label, x + 20, y)
}

