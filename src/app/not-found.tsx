import { Metadata } from "next"
import Link from "next/link"

import { ArrowLeft, FileSearch } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto text-center">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted"
            role="img"
            aria-label="Not found icon"
          >
            <FileSearch className="h-8 w-8 text-muted-foreground" />
          </div>

          <p className="text-6xl font-bold text-primary mb-2">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
