import { HeroUIProvider } from "@heroui/react"

export default function NextUiProvider({children}) {
  return (
  <HeroUIProvider>
    {children}
  </HeroUIProvider>
  )
}
