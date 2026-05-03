"use client"

import { useEffect, useState } from "react"

import type { Store, StoreValue } from "nanostores"

export function useStore<SomeStore extends Store>(store: SomeStore): StoreValue<SomeStore> {
  const [value, setValue] = useState<StoreValue<SomeStore>>(store.get())

  useEffect(() => {
    const unsubscribe = store.subscribe((newValue) => {
      setValue(newValue)
    })
    return unsubscribe
  }, [store])

  return value
}
