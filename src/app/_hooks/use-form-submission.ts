"use client"

import { useCallback, useState } from "react"

const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }, [])

  return { isSubmitting, handleSubmit }
}

export default useFormSubmission
