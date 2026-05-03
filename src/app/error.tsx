"use client"

import { useEffect } from "react"

import Link from "next/link"

import { AlertTriangle, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto text-center">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10"
            role="img"
            aria-label="Error icon"
          >
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>

          <h1 className="text-4xl font-bold mb-2">Something went wrong</h1>
          <p className="text-lg text-muted-foreground mb-8">
            An unexpected error occurred. Please try again or go back home.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={reset}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
