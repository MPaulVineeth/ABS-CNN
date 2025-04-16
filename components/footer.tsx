import Link from "next/link"
import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 gap-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          <span className="font-semibold">ABS-CNN</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            Home
          </Link>
          <Link href="/model" className="text-sm text-muted-foreground hover:text-primary">
            Model
          </Link>
          <Link href="/performance" className="text-sm text-muted-foreground hover:text-primary">
            Performance
          </Link>
          <Link href="/upload" className="text-sm text-muted-foreground hover:text-primary">
            Test Data
          </Link>
        </div>
        <div className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ABS-CNN Research</div>
      </div>
    </footer>
  )
}

