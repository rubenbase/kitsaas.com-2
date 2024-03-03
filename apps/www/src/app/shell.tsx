import { Header } from "./header"

const navigation = [
  { name: "Components", href: "/components" },
  { name: "Utilities", href: "/utilities" },
  { name: "Templates", href: "/templates" },
]

export const Shell: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header navigation={navigation} />
      <main>{children}</main>
    </>
  )
}
