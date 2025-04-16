"use client"

interface VisualizationProps {
  type: "architecture" | "attention" | "histogram" | "convolution" | "preprocessing" | "results"
  className?: string
}

export default function HighQualityVisualization({ type, className = "" }: VisualizationProps) {
  // Return the appropriate visualization based on type
  switch (type) {
    case "architecture":
      return (
        <div className={`relative overflow-hidden rounded-lg border bg-white ${className}`}>
          <svg viewBox="0 0 800 400" className="w-full h-auto">
            {/* Background */}
            <rect x="0" y="0" width="800" height="400" fill="#f8fafc" />

            {/* Title */}
            <text x="400" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0f172a">
              ABS-CNN Model Architecture
            </text>

            {/* Input Layer */}
            <rect x="50" y="80" width="80" height="100" rx="4" fill="#bfdbfe" />
            <text x="90" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Input
            </text>
            <text x="90" y="140" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              28×28×2
            </text>

            {/* First Conv Layer */}
            <rect x="180" y="80" width="80" height="100" rx="4" fill="#93c5fd" />
            <text x="220" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Conv1
            </text>
            <text x="220" y="140" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              7×7, 64
            </text>
            <text x="220" y="160" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              stride 2
            </text>
            <text x="220" y="180" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              14×14×64
            </text>

            {/* First Attention Module */}
            <rect x="180" y="210" width="80" height="60" rx="4" fill="#c7d2fe" />
            <text x="220" y="240" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              Attention
            </text>
            <text x="220" y="260" textAnchor="middle" fontSize="12" fill="#3730a3">
              CBAM
            </text>

            {/* Second Conv Layer */}
            <rect x="310" y="80" width="80" height="100" rx="4" fill="#93c5fd" />
            <text x="350" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Conv2
            </text>
            <text x="350" y="140" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              5×5, 128
            </text>
            <text x="350" y="160" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              stride 2
            </text>
            <text x="350" y="180" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              7×7×128
            </text>

            {/* Third Conv Layer */}
            <rect x="440" y="80" width="80" height="100" rx="4" fill="#93c5fd" />
            <text x="480" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Conv3
            </text>
            <text x="480" y="140" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              3×3, 256
            </text>
            <text x="480" y="160" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              stride 1
            </text>
            <text x="480" y="180" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              5×5×256
            </text>

            {/* Second Attention Module */}
            <rect x="440" y="210" width="80" height="60" rx="4" fill="#c7d2fe" />
            <text x="480" y="240" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              Attention
            </text>
            <text x="480" y="260" textAnchor="middle" fontSize="12" fill="#3730a3">
              CBAM
            </text>

            {/* Fully Connected Layer */}
            <rect x="570" y="80" width="80" height="100" rx="4" fill="#a5b4fc" />
            <text x="610" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              FC
            </text>
            <text x="610" y="140" textAnchor="middle" fontSize="12" fill="#3730a3">
              1600
            </text>

            {/* Output Layer */}
            <rect x="700" y="80" width="80" height="100" rx="4" fill="#818cf8" />
            <text x="740" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#312e81">
              Output
            </text>
            <text x="740" y="140" textAnchor="middle" fontSize="12" fill="#312e81">
              10
            </text>

            {/* Connections */}
            {/* Input to Conv1 */}
            <line x1="130" y1="130" x2="180" y2="130" stroke="#64748b" strokeWidth="2" />
            <polygon points="175,125 185,130 175,135" fill="#64748b" />

            {/* Conv1 to Attention */}
            <line x1="220" y1="180" x2="220" y2="210" stroke="#64748b" strokeWidth="2" />
            <polygon points="215,205 220,215 225,205" fill="#64748b" />

            {/* Attention to Conv2 */}
            <path d="M 260 240 C 280 240, 290 130, 310 130" stroke="#64748b" strokeWidth="2" fill="none" />
            <polygon points="305,125 315,130 305,135" fill="#64748b" />

            {/* Conv2 to Conv3 */}
            <line x1="390" y1="130" x2="440" y2="130" stroke="#64748b" strokeWidth="2" />
            <polygon points="435,125 445,130 435,135" fill="#64748b" />

            {/* Conv3 to Attention */}
            <line x1="480" y1="180" />

            {/* Conv3 to Attention */}
            <line x1="480" y1="180" x2="480" y2="210" stroke="#64748b" strokeWidth="2" />
            <polygon points="475,205 480,215 485,205" fill="#64748b" />

            {/* Attention to FC */}
            <path d="M 520 240 C 540 240, 550 130, 570 130" stroke="#64748b" strokeWidth="2" fill="none" />
            <polygon points="565,125 575,130 565,135" fill="#64748b" />

            {/* FC to Output */}
            <line x1="650" y1="130" x2="700" y2="130" stroke="#64748b" strokeWidth="2" />
            <polygon points="695,125 705,130 695,135" fill="#64748b" />

            {/* Legend */}
            <rect x="50" y="320" width="20" height="20" rx="2" fill="#bfdbfe" />
            <text x="80" y="335" textAnchor="start" fontSize="14" fill="#0f172a">
              Input Layer
            </text>

            <rect x="200" y="320" width="20" height="20" rx="2" fill="#93c5fd" />
            <text x="230" y="335" textAnchor="start" fontSize="14" fill="#0f172a">
              Convolutional Layer
            </text>

            <rect x="400" y="320" width="20" height="20" rx="2" fill="#c7d2fe" />
            <text x="430" y="335" textAnchor="start" fontSize="14" fill="#0f172a">
              Attention Module
            </text>

            <rect x="600" y="320" width="20" height="20" rx="2" fill="#a5b4fc" />
            <text x="630" y="335" textAnchor="start" fontSize="14" fill="#0f172a">
              Fully Connected
            </text>

            <rect x="600" y="350" width="20" height="20" rx="2" fill="#818cf8" />
            <text x="630" y="365" textAnchor="start" fontSize="14" fill="#0f172a">
              Output Layer
            </text>
          </svg>
        </div>
      )

    case "attention":
      return (
        <div className={`relative overflow-hidden rounded-lg border bg-white ${className}`}>
          <svg viewBox="0 0 800 500" className="w-full h-auto">
            {/* Background */}
            <rect x="0" y="0" width="800" height="500" fill="#f8fafc" />

            {/* Title */}
            <text x="400" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0f172a">
              Convolutional Block Attention Module (CBAM)
            </text>

            {/* Input Feature Map F */}
            <rect x="50" y="80" width="700" height="80" rx="4" fill="#bfdbfe" />
            <text x="400" y="120" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e3a8a">
              Input Feature Map (F)
            </text>
            <text x="400" y="145" textAnchor="middle" fontSize="14" fill="#1e3a8a">
              C × H × W
            </text>

            {/* Channel Attention Branch */}
            <rect x="100" y="200" width="250" height="60" rx="4" fill="#dbeafe" />
            <text x="225" y="235" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e3a8a">
              Global Avg Pooling
            </text>

            <rect x="100" y="280" width="250" height="60" rx="4" fill="#dbeafe" />
            <text x="225" y="315" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e3a8a">
              Global Max Pooling
            </text>

            <rect x="100" y="360" width="250" height="60" rx="4" fill="#c7d2fe" />
            <text x="225" y="395" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3730a3">
              Shared MLP
            </text>

            <rect x="175" y="440" width="100" height="60" rx="4" fill="#a5b4fc" />
            <text x="225" y="475" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3730a3">
              Channel Attention Map (Mc)
            </text>

            {/* Spatial Attention Branch */}
            <rect x="450" y="200" width="250" height="60" rx="4" fill="#dbeafe" />
            <text x="575" y="235" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e3a8a">
              Channel Avg Pooling
            </text>

            <rect x="450" y="280" width="250" height="60" rx="4" fill="#dbeafe" />
            <text x="575" y="315" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e3a8a">
              Channel Max Pooling
            </text>

            <rect x="450" y="360" width="250" height="60" rx="4" fill="#c7d2fe" />
            <text x="575" y="395" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3730a3">
              Convolution (7×7)
            </text>

            <rect x="525" y="440" width="100" height="60" rx="4" fill="#a5b4fc" />
            <text x="575" y="475" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3730a3">
              Spatial Attention Map (Ms)
            </text>

            {/* Connections */}
            <line x1="400" y1="160" x2="225" y2="200" stroke="#64748b" strokeWidth="2" />
            <polygon points="220,195 230,205 220,205" fill="#64748b" />

            <line x1="400" y1="160" x2="575" y2="200" stroke="#64748b" strokeWidth="2" />
            <polygon points="570,195 580,205 570,205" fill="#64748b" />

            <line x1="225" y1="260" x2="225" y2="280" stroke="#64748b" strokeWidth="2" />
            <polygon points="220,275 230,285 220,285" fill="#64748b" />

            <line x1="225" y1="340" x2="225" y2="360" stroke="#64748b" strokeWidth="2" />
            <polygon points="220,355 230,365 220,365" fill="#64748b" />

            <line x1="225" y1="420" x2="225" y2="440" stroke="#64748b" strokeWidth="2" />
            <polygon points="220,435 230,445 220,445" fill="#64748b" />

            <line x1="575" y1="260" x2="575" y2="280" stroke="#64748b" strokeWidth="2" />
            <polygon points="570,275 580,285 570,285" fill="#64748b" />

            <line x1="575" y1="340" x2="575" y2="360" stroke="#64748b" strokeWidth="2" />
            <polygon points="570,355 580,365 570,365" fill="#64748b" />

            <line x1="575" y1="420" x2="575" y2="440" stroke="#64748b" strokeWidth="2" />
            <polygon points="570,435 580,445 570,445" fill="#64748b" />

            {/* Mathematical Formulas */}
            <text x="400" y="60" textAnchor="middle" fontSize="14" fill="#0f172a">
              Mc(F) = σ(MLP(AvgPool(F)) + MLP(MaxPool(F)))
            </text>
            <text x="400" y="180" textAnchor="middle" fontSize="14" fill="#0f172a">
              Ms(F') = σ(f^7×7([AvgPool(F'); MaxPool(F')]))
            </text>
          </svg>
        </div>
      )

    case "histogram":
      return (
        <div className={`relative overflow-hidden rounded-lg border bg-white ${className}`}>
          <svg viewBox="0 0 800 400" className="w-full h-auto">
            {/* Background */}
            <rect x="0" y="0" width="800" height="400" fill="#f8fafc" />

            {/* Title */}
            <text x="400" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0f172a">
              Histogram Equalization Process
            </text>

            {/* Raw Traffic Data */}
            <rect x="50" y="80" width="120" height="120" rx="4" fill="#e2e8f0" />
            <text x="110" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              Raw Traffic Data
            </text>

            {/* Binary Representation */}
            <rect x="50" y="80" width="120" height="120" rx="4" fill="none" stroke="#0f172a" strokeWidth="1" />
            <text x="110" y="140" textAnchor="middle" fontSize="10" fill="#0f172a" fontFamily="monospace">
              01001010 10101010
            </text>
            <text x="110" y="155" textAnchor="middle" fontSize="10" fill="#0f172a" fontFamily="monospace">
              11010101 01010101
            </text>
            <text x="110" y="170" textAnchor="middle" fontSize="10" fill="#0f172a" fontFamily="monospace">
              00110011 10101010
            </text>
            <text x="110" y="185" textAnchor="middle" fontSize="10" fill="#0f172a" fontFamily="monospace">
              10101010 01010101
            </text>

            {/* Arrow 1 */}
            <line x1="170" y1="140" x2="220" y2="140" stroke="#64748b" strokeWidth="2" />
            <polygon points="215,135 225,140 215,145" fill="#64748b" />
            <text x="195" y="130" textAnchor="middle" fontSize="12" fill="#64748b">
              Convert
            </text>

            {/* Grayscale Image */}
            <rect x="220" y="80" width="120" height="120" rx="4" fill="#e2e8f0" />
            <defs>
              <linearGradient id="grayscale1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect x="230" y="90" width="100" height="100" rx="4" fill="url(#grayscale1)" />
            <text x="280" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              Grayscale Image
            </text>

            {/* Arrow 2 */}
            <line x1="340" y1="140" x2="390" y2="140" stroke="#64748b" strokeWidth="2" />
            <polygon points="385,135 395,140 385,145" fill="#64748b" />
            <text x="365" y="130" textAnchor="middle" fontSize="12" fill="#64748b">
              Equalize
            </text>

            {/* Histogram Equalized Image */}
            <rect x="390" y="80" width="120" height="120" rx="4" fill="#e2e8f0" />
            <defs>
              <linearGradient id="grayscale2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#333333" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#888888" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#dddddd" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect x="400" y="90" width="100" height="100" rx="4" fill="url(#grayscale2)" />
            <text x="450" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              Equalized Image
            </text>

            {/* Arrow 3 */}
            <line x1="510" y1="140" x2="560" y2="140" stroke="#64748b" strokeWidth="2" />
            <polygon points="555,135 565,140 555,145" fill="#64748b" />
            <text x="535" y="130" textAnchor="middle" fontSize="12" fill="#64748b">
              Combine
            </text>

            {/* Multi-channel Image */}
            <rect x="560" y="80" width="120" height="120" rx="4" fill="#e2e8f0" />
            <rect x="570" y="90" width="100" height="100" rx="4" fill="rgba(191, 219, 254, 0.7)" />
            <rect x="580" y="100" width="80" height="80" rx="4" fill="rgba(165, 180, 252, 0.7)" />
            <text x="620" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              Multi-channel Image
            </text>

            {/* Histogram Visualization */}
            <rect x="220" y="260" width="120" height="100" rx="4" fill="#f1f5f9" />
            <text x="280" y="280" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">
              Original Histogram
            </text>

            {/* Original Histogram Bars */}
            <rect x="230" y="340" width="10" height="10" fill="#64748b" />
            <rect x="245" y="330" width="10" height="20" fill="#64748b" />
            <rect x="260" y="290" width="10" height="60" fill="#64748b" />
            <rect x="275" y="320" width="10" height="30" fill="#64748b" />
            <rect x="290" y="310" width="10" height="40" fill="#64748b" />
            <rect x="305" y="335" width="10" height="15" fill="#64748b" />
            <rect x="320" y="325" width="10" height="25" fill="#64748b" />

            <rect x="390" y="260" width="120" height="100" rx="4" fill="#f1f5f9" />
            <text x="450" y="280" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">
              Equalized Histogram
            </text>

            {/* Equalized Histogram Bars */}
            <rect x="400" y="320" width="10" height="30" fill="#64748b" />
            <rect x="415" y="320" width="10" height="30" fill="#64748b" />
            <rect x="430" y="310" width="10" height="40" fill="#64748b" />
            <rect x="445" y="310" width="10" height="40" fill="#64748b" />
            <rect x="460" y="310" width="10" height="40" fill="#64748b" />
            <rect x="475" y="320" width="10" height="30" fill="#64748b" />
            <rect x="490" y="320" width="10" height="30" fill="#64748b" />

            {/* Explanation */}
            <text x="400" y="380" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              Enhanced contrast improves feature extraction and model dimensionality
            </text>
          </svg>
        </div>
      )

    case "convolution":
      return (
        <div className={`relative overflow-hidden rounded-lg border bg-white ${className}`}>
          <svg viewBox="0 0 800 500" className="w-full h-auto">
            {/* Background */}
            <rect x="0" y="0" width="800" height="500" fill="#f8fafc" />

            {/* Title */}
            <text x="400" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0f172a">
              Big Step Convolution vs Traditional CNN
            </text>

            {/* Traditional CNN - Top Section */}
            <text x="400" y="70" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0f172a">
              Traditional CNN with Pooling
            </text>

            {/* Input */}
            <rect x="50" y="100" width="100" height="100" rx="4" fill="#bfdbfe" />
            <text x="100" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Input
            </text>
            <text x="100" y="160" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              28×28
            </text>

            {/* Conv1 */}
            <rect x="200" y="100" width="100" height="100" rx="4" fill="#93c5fd" />
            <text x="250" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Conv
            </text>
            <text x="250" y="160" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              26×26
            </text>

            {/* Pool1 */}
            <rect x="350" y="100" width="100" height="100" rx="4" fill="#a5b4fc" />
            <text x="400" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              Pool
            </text>
            <text x="400" y="160" textAnchor="middle" fontSize="12" fill="#3730a3">
              13×13
            </text>

            {/* Conv2 */}
            <rect x="500" y="100" width="100" height="100" rx="4" fill="#93c5fd" />
            <text x="550" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Conv
            </text>
            <text x="550" y="160" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              11×11
            </text>

            {/* Pool2 */}
            <rect x="650" y="100" width="100" height="100" rx="4" fill="#a5b4fc" />
            <text x="700" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              Pool
            </text>
            <text x="700" y="160" textAnchor="middle" fontSize="12" fill="#3730a3">
              5×5
            </text>

            {/* Connections for Traditional CNN */}
            <line x1="150" y1="150" x2="200" y2="150" stroke="#64748b" strokeWidth="2" />
            <polygon points="195,145 205,150 195,155" fill="#64748b" />

            <line x1="300" y1="150" x2="350" y2="150" stroke="#64748b" strokeWidth="2" />
            <polygon points="345,145 355,150 345,155" fill="#64748b" />

            <line x1="450" y1="150" x2="500" y2="150" stroke="#64748b" strokeWidth="2" />
            <polygon points="495,145 505,150 495,155" fill="#64748b" />

            <line x1="600" y1="150" x2="650" y2="150" stroke="#64748b" strokeWidth="2" />
            <polygon points="645,145 655,150 645,155" fill="#64748b" />

            {/* Big Step CNN - Bottom Section */}
            <text x="400" y="270" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0f172a">
              Big Step CNN (No Pooling)
            </text>

            {/* Input */}
            <rect x="50" y="300" width="100" height="100" rx="4" fill="#bfdbfe" />
            <text x="100" y="340" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Input
            </text>
            <text x="100" y="360" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              28×28
            </text>

            {/* Conv1 with stride 2 */}
            <rect x="200" y="300" width="100" height="100" rx="4" fill="#93c5fd" />
            <text x="250" y="330" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Conv
            </text>
            <text x="250" y="350" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Stride 2
            </text>
            <text x="250" y="370" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              14×14
            </text>

            {/* Conv2 with stride 2 */}
            <rect x="350" y="300" width="100" height="100" rx="4" fill="#93c5fd" />
            <text x="400" y="330" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Conv
            </text>
            <text x="400" y="350" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Stride 2
            </text>
            <text x="400" y="370" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              7×7
            </text>

            {/* Conv3 with stride 1 */}
            <rect x="500" y="300" width="100" height="100" rx="4" fill="#93c5fd" />
            <text x="550" y="330" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Conv
            </text>
            <text x="550" y="350" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Stride 1
            </text>
            <text x="550" y="370" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              5×5
            </text>

            {/* FC Layer */}
            <rect x="650" y="300" width="100" height="100" rx="4" fill="#a5b4fc" />
            <text x="700" y="340" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              FC
            </text>
            <text x="700" y="360" textAnchor="middle" fontSize="12" fill="#3730a3">
              1600
            </text>

            {/* Connections for Big Step CNN */}
            <line x1="150" y1="350" x2="200" y2="350" stroke="#64748b" strokeWidth="2" />
            <polygon points="195,345 205,350 195,355" fill="#64748b" />

            <line x1="300" y1="350" x2="350" y2="350" stroke="#64748b" strokeWidth="2" />
            <polygon points="345,345 355,350 345,355" fill="#64748b" />

            <line x1="450" y1="350" x2="500" y2="350" stroke="#64748b" strokeWidth="2" />
            <polygon points="495,345 505,350 495,355" fill="#64748b" />

            <line x1="600" y1="350" x2="650" y2="350" stroke="#64748b" strokeWidth="2" />
            <polygon points="645,345 655,350 645,355" fill="#64748b" />

            {/* Information Loss Visualization */}
            <rect x="350" y="210" width="100" height="30" rx="4" fill="#fecaca" />
            <text x="400" y="230" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7f1d1d">
              Information Loss
            </text>

            <rect x="650" y="210" width="100" height="30" rx="4" fill="#fecaca" />
            <text x="700" y="230" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7f1d1d">
              Information Loss
            </text>

            {/* Feature Preservation */}
            <rect x="200" y="410" width="100" height="30" rx="4" fill="#bbf7d0" />
            <text x="250" y="430" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#14532d">
              Feature Preservation
            </text>

            <rect x="350" y="410" width="100" height="30" rx="4" fill="#bbf7d0" />
            <text x="400" y="430" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#14532d">
              Feature Preservation
            </text>

            <rect x="500" y="410" width="100" height="30" rx="4" fill="#bbf7d0" />
            <text x="550" y="430" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#14532d">
              Feature Preservation
            </text>

            {/* Legend */}
            <rect x="50" y="460" width="20" height="20" rx="2" fill="#a5b4fc" />
            <text x="80" y="475" textAnchor="start" fontSize="14" fill="#0f172a">
              Pooling (Information Loss)
            </text>

            <rect x="300" y="460" width="20" height="20" rx="2" fill="#93c5fd" />
            <text x="330" y="475" textAnchor="start" fontSize="14" fill="#0f172a">
              Stride &gt; 1 (Preserves Features)
            </text>

            <rect x="550" y="460" width="20" height="20" rx="2" fill="#bbf7d0" />
            <text x="580" y="475" textAnchor="start" fontSize="14" fill="#0f172a">
              Feature Preservation
            </text>
          </svg>
        </div>
      )

    case "preprocessing":
      return (
        <div className={`relative overflow-hidden rounded-lg border bg-white ${className}`}>
          <svg viewBox="0 0 800 400" className="w-full h-auto">
            {/* Background */}
            <rect x="0" y="0" width="800" height="400" fill="#f8fafc" />

            {/* Title */}
            <text x="400" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0f172a">
              Data Preprocessing Flow
            </text>

            {/* Step 1: Raw Traffic */}
            <rect x="50" y="80" width="150" height="80" rx="4" fill="#bfdbfe" />
            <text x="125" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Raw Traffic
            </text>
            <text x="125" y="130" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              PCAP Format
            </text>
            <text x="125" y="150" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Network Packets
            </text>

            {/* Step 2: Slice Traffic */}
            <rect x="250" y="80" width="150" height="80" rx="4" fill="#93c5fd" />
            <text x="325" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Slice Traffic
            </text>
            <text x="325" y="130" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Cut into smaller pieces
            </text>
            <text x="325" y="150" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Standardize headers
            </text>

            {/* Step 3: Clean Up Flow */}
            <rect x="450" y="80" width="150" height="80" rx="4" fill="#93c5fd" />
            <text x="525" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Clean Up Flow
            </text>
            <text x="525" y="130" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Remove MAC/IP addresses
            </text>
            <text x="525" y="150" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Delete duplicate content
            </text>

            {/* Step 4: Generate Images */}
            <rect x="650" y="80" width="150" height="80" rx="4" fill="#93c5fd" />
            <text x="725" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">
              Generate Images
            </text>
            <text x="725" y="130" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              Convert to 2D grayscale
            </text>
            <text x="725" y="150" textAnchor="middle" fontSize="12" fill="#1e3a8a">
              28×28 pixel images
            </text>

            {/* Step 5: Histogram Equalization */}
            <rect x="250" y="210" width="150" height="80" rx="4" fill="#c7d2fe" />
            <text x="325" y="240" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              Histogram Equalization
            </text>
            <text x="325" y="260" textAnchor="middle" fontSize="12" fill="#3730a3">
              Enhance contrast
            </text>
            <text x="325" y="280" textAnchor="middle" fontSize="12" fill="#3730a3">
              Uniform grayscale
            </text>

            {/* Step 6: Image Overlay */}
            <rect x="450" y="210" width="150" height="80" rx="4" fill="#c7d2fe" />
            <text x="525" y="240" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              Image Overlay
            </text>
            <text x="525" y="260" textAnchor="middle" fontSize="12" fill="#3730a3">
              Superimpose with original
            </text>
            <text x="525" y="280" textAnchor="middle" fontSize="12" fill="#3730a3">
              Multi-channel grayscale
            </text>

            {/* Step 7: ABS-CNN Model */}
            <rect x="650" y="210" width="150" height="80" rx="4" fill="#a5b4fc" />
            <text x="725" y="240" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">
              ABS-CNN Model
            </text>
            <text x="725" y="260" textAnchor="middle" fontSize="12" fill="#3730a3">
              Attention mechanism
            </text>
            <text x="725" y="280" textAnchor="middle" fontSize="12" fill="#3730a3">
              Big step convolution
            </text>

            {/* Connections */}
            <line x1="200" y1="120" x2="250" y2="120" stroke="#64748b" strokeWidth="2" />
            <polygon points="245,115 255,120 245,125" fill="#64748b" />

            <line x1="400" y1="120" x2="450" y2="120" stroke="#64748b" strokeWidth="2" />
            <polygon points="445,115 455,120 445,125" fill="#64748b" />

            <line x1="600" y1="120" x2="650" y2="120" stroke="#64748b" strokeWidth="2" />
            <polygon points="645,115 655,120 645,125" fill="#64748b" />

            <line x1="725" y1="160" x2="725" y2="210" stroke="#64748b" strokeWidth="2" />
            <polygon points="720,205 730,210 720,215" fill="#64748b" />

            <line x1="725" y1="160" x2="325" y2="210" stroke="#64748b" strokeWidth="2" />
            <polygon points="320,205 330,215 320,215" fill="#64748b" />

            <line x1="400" y1="250" x2="450" y2="250" stroke="#64748b" strokeWidth="2" />
            <polygon points="445,245 455,250 445,255" fill="#64748b" />

            <line x1="600" y1="250" x2="650" y2="250" stroke="#64748b" strokeWidth="2" />
            <polygon points="645,245 655,250 645,255" fill="#64748b" />

            {/* Output */}
            <rect x="450" y="330" width="150" height="50" rx="4" fill="#818cf8" />
            <text x="525" y="360" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#312e81">
              Traffic Classification
            </text>

            <line x1="725" y1="290" x2="725" y2="320" stroke="#64748b" strokeWidth="2" />
            <line x1="725" y1="320" x2="525" y2="320" stroke="#64748b" strokeWidth="2" />
            <line x1="525" y1="320" x2="525" y2="330" stroke="#64748b" strokeWidth="2" />
            <polygon points="520,325 530,330 520,335" fill="#64748b" />
          </svg>
        </div>
      )

    case "results":
      return (
        <div className={`relative overflow-hidden rounded-lg border bg-white ${className}`}>
          <svg viewBox="0 0 800 500" className="w-full h-auto">
            {/* Background */}
            <rect x="0" y="0" width="800" height="500" fill="#f8fafc" />

            {/* Title */}
            <text x="400" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0f172a">
              Performance Analysis Results
            </text>

            {/* Model Comparison Chart */}
            <rect x="50" y="60" width="700" height="200" rx="4" fill="#f1f5f9" />
            <text x="400" y="80" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0f172a">
              Model Performance Comparison
            </text>

            {/* X-Axis */}
            <line x1="100" y1="220" x2="700" y2="220" stroke="#64748b" strokeWidth="1" />
            <text x="150" y="240" textAnchor="middle" fontSize="12" fill="#64748b">
              SVM
            </text>
            <text x="230" y="240" textAnchor="middle" fontSize="12" fill="#64748b">
              ANN
            </text>
            <text x="310" y="240" textAnchor="middle" fontSize="12" fill="#64748b">
              RF
            </text>
            <text x="390" y="240" textAnchor="middle" fontSize="12" fill="#64748b">
              Bayes
            </text>
            <text x="470" y="240" textAnchor="middle" fontSize="12" fill="#64748b">
              CNN
            </text>
            <text x="550" y="240" textAnchor="middle" fontSize="12" fill="#64748b">
              APSO-CNN
            </text>
            <text x="630" y="240" textAnchor="middle" fontSize="12" fill="#64748b">
              PBCNN
            </text>
            <text x="700" y="240" textAnchor="middle" fontSize="12" fill="#64748b">
              ABS-CNN
            </text>

            {/* Y-Axis */}
            <line x1="100" y1="220" x2="100" y2="100" stroke="#64748b" strokeWidth="1" />
            <text x="90" y="220" textAnchor="end" fontSize="10" fill="#64748b">
              80%
            </text>
            <text x="90" y="180" textAnchor="end" fontSize="10" fill="#64748b">
              85%
            </text>
            <text x="90" y="140" textAnchor="end" fontSize="10" fill="#64748b">
              90%
            </text>
            <text x="90" y="100" textAnchor="end" fontSize="10" fill="#64748b">
              95%
            </text>
            <text x="90" y="60" textAnchor="end" fontSize="10" fill="#64748b">
              100%
            </text>

            {/* Bars - Accuracy */}
            <rect x="130" y="170" width="20" height="50" fill="#3b82f6" />
            <rect x="210" y="160" width="20" height="60" fill="#3b82f6" />
            <rect x="290" y="150" width="20" height="70" fill="#3b82f6" />
            <rect x="370" y="165" width="20" height="55" fill="#3b82f6" />
            <rect x="450" y="130" width="20" height="90" fill="#3b82f6" />
            <rect x="530" y="125" width="20" height="95" fill="#3b82f6" />
            <rect x="610" y="125" width="20" height="95" fill="#3b82f6" />
            <rect x="690" y="60" width="20" height="160" fill="#3b82f6" />

            {/* Bars - F1-Score */}
            <rect x="155" y="175" width="20" height="45" fill="#8b5cf6" />
            <rect x="235" y="165" width="20" height="55" fill="#8b5cf6" />
            <rect x="315" y="155" width="20" height="65" fill="#8b5cf6" />
            <rect x="395" y="170" width="20" height="50" fill="#8b5cf6" />
            <rect x="475" y="135" width="20" height="85" fill="#8b5cf6" />
            <rect x="555" y="130" width="20" height="90" fill="#8b5cf6" />
            <rect x="635" y="130" width="20" height="90" fill="#8b5cf6" />
            <rect x="715" y="65" width="20" height="155" fill="#8b5cf6" />

            {/* Legend */}
            <rect x="300" y="260" width="15" height="15" fill="#3b82f6" />
            <text x="325" y="273" textAnchor="start" fontSize="12" fill="#0f172a">
              Accuracy
            </text>

            <rect x="400" y="260" width="15" height="15" fill="#8b5cf6" />
            <text x="425" y="273" textAnchor="start" fontSize="12" fill="#0f172a">
              F1-Score
            </text>

            {/* Confusion Matrix */}
            <rect x="50" y="300" width="350" height="180" rx="4" fill="#f1f5f9" />
            <text x="225" y="320" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0f172a">
              ABS-CNN Confusion Matrix
            </text>

            {/* Matrix Grid - Just showing a simplified version */}
            <rect x="100" y="340" width="250" height="120" fill="#ffffff" stroke="#64748b" strokeWidth="1" />

            {/* Diagonal (correct classifications) */}
            <rect x="100" y="340" width="25" height="12" fill="#bbf7d0" />
            <rect x="125" y="352" width="25" height="12" fill="#bbf7d0" />
            <rect x="150" y="364" width="25" height="12" fill="#bbf7d0" />
            <rect x="175" y="376" width="25" height="12" fill="#bbf7d0" />
            <rect x="200" y="388" width="25" height="12" fill="#bbf7d0" />
            <rect x="225" y="400" width="25" height="12" fill="#bbf7d0" />
            <rect x="250" y="412" width="25" height="12" fill="#bbf7d0" />
            <rect x="275" y="424" width="25" height="12" fill="#bbf7d0" />
            <rect x="300" y="436" width="25" height="12" fill="#bbf7d0" />
            <rect x="325" y="448" width="25" height="12" fill="#bbf7d0" />

            <text x="112" y="348" textAnchor="middle" fontSize="8" fill="#0f172a">
              99%
            </text>
            <text x="137" y="360" textAnchor="middle" fontSize="8" fill="#0f172a">
              100%
            </text>
            <text x="162" y="372" textAnchor="middle" fontSize="8" fill="#0f172a">
              100%
            </text>
            <text x="187" y="384" textAnchor="middle" fontSize="8" fill="#0f172a">
              100%
            </text>
            <text x="212" y="396" textAnchor="middle" fontSize="8" fill="#0f172a">
              100%
            </text>
            <text x="237" y="408" textAnchor="middle" fontSize="8" fill="#0f172a">
              100%
            </text>
            <text x="262" y="420" textAnchor="middle" fontSize="8" fill="#0f172a">
              100%
            </text>
            <text x="287" y="432" textAnchor="middle" fontSize="8" fill="#0f172a">
              100%
            </text>
            <text x="312" y="444" textAnchor="middle" fontSize="8" fill="#0f172a">
              95%
            </text>
            <text x="337" y="456" textAnchor="middle" fontSize="8" fill="#0f172a">
              99%
            </text>

            {/* Ablation Study */}
            <rect x="450" y="300" width="300" height="180" rx="4" fill="#f1f5f9" />
            <text x="600" y="320" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0f172a">
              Ablation Study Results
            </text>

            {/* Ablation Bars */}
            <rect x="480" y="350" width="30" height="100" fill="#3b82f6" />
            <rect x="550" y="390" width="30" height="60" fill="#3b82f6" />
            <rect x="620" y="395" width="30" height="55" fill="#3b82f6" />
            <rect x="690" y="405" width="30" height="45" fill="#3b82f6" />

            <text x="495" y="460" textAnchor="middle" fontSize="10" fill="#0f172a">
              ABS-CNN
            </text>
            <text x="565" y="460" textAnchor="middle" fontSize="10" fill="#0f172a">
              NA-ABS-CNN
            </text>
            <text x="635" y="460" textAnchor="middle" fontSize="10" fill="#0f172a">
              NH-ABS-CNN
            </text>
            <text x="705" y="460" textAnchor="middle" fontSize="10" fill="#0f172a">
              WP-ABS-CNN
            </text>

            <text x="495" y="340" textAnchor="middle" fontSize="12" fill="#0f172a">
              99.5%
            </text>
            <text x="565" y="380" textAnchor="middle" fontSize="12" fill="#0f172a">
              94.4%
            </text>
            <text x="635" y="385" textAnchor="middle" fontSize="12" fill="#0f172a">
              94.2%
            </text>
            <text x="705" y="395" textAnchor="middle" fontSize="12" fill="#0f172a">
              93.1%
            </text>

            {/* Key Findings */}
            <text x="400" y="490" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              ABS-CNN achieves superior performance with 99.5% accuracy in abnormal traffic detection
            </text>
          </svg>
        </div>
      )

    default:
      return <div className={`bg-muted rounded-lg p-4 ${className}`}>Visualization not available</div>
  }
}

