"use client"

import { useT } from "@/i18n/use-t"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import useFormSubmission from "@/app/_hooks/use-form-submission"

const FormField = ({
  id,
  label,
  placeholder,
  type,
  required,
}: {
  id: string
  label: string
  placeholder: string
  type: string
  required?: boolean
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-medium">
      {label} {required && <span className="text-destructive">*</span>}
    </label>
    <Input id={id} name={id} placeholder={placeholder} type={type} required={required} aria-required={required} />
  </div>
)

const ContactForm = () => {
  const { isSubmitting, handleSubmit } = useFormSubmission()
  const t = useT()

  return (
    <form
      className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-lg space-y-5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField id="name" label={t.contact.formName} placeholder={t.contact.namePlaceholder} type="text" required />
        <FormField
          id="email"
          label={t.contact.formEmail}
          placeholder={t.contact.emailPlaceholder}
          type="email"
          required
        />
      </div>

      <FormField id="subject" label={t.contact.formSubject} placeholder={t.contact.subjectPlaceholder} type="text" />

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {t.contact.formMessage} <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={t.contact.messagePlaceholder}
          className="min-h-[120px]"
          required
          aria-required="true"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full gradient-bg-button hover:opacity-90 shadow-lg shadow-blue-500/25"
        disabled={isSubmitting}
      >
        <Send className="mr-2 h-4 w-4" />
        {isSubmitting ? t.contact.sending : t.contact.sendMessage}
      </Button>
    </form>
  )
}

export default ContactForm
