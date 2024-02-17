import { Header } from "./header"

const navigation = [
  { name: "Components", href: "#" },
  { name: "Utilities", href: "#" },
  { name: "Templates", href: "#" },
]

export const Shell: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header navigation={navigation} />
      <main>{children}</main>
    </>
  )
}
