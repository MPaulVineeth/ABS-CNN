import * as React from "react"

const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className="rounded-md border" ref={ref} {...props} />
  },
)
ChartContainer.displayName = "ChartContainer"

const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div className={className} ref={ref} {...props} />
})
Chart.displayName = "Chart"

const ChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-md p-2 shadow-md">
        <p className="font-bold">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} className="text-muted-foreground">
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    )
  }

  return null
}

const ChartLegend = ({ payload }: any) => {
  if (!payload) return null

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-2">
      {payload.map((item: any, index: number) => (
        <div key={index} className="flex items-center gap-1">
          <div style={{ backgroundColor: item.color }} className="w-3 h-3 rounded-sm"></div>
          <span className="text-sm">{item.value}</span>
        </div>
      ))}
    </div>
  )
}

export { ChartContainer, Chart, ChartTooltip, ChartLegend }

