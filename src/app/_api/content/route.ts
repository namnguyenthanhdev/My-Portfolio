import { NextResponse } from "next/server"

import { getAllContent } from "@/db/queries"

export async function GET() {
  try {
    const content = await getAllContent()

    if (!content.site || !content.about) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 })
    }

    return NextResponse.json(content)
  } catch (error) {
    console.error("Failed to fetch content:", error)
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}
