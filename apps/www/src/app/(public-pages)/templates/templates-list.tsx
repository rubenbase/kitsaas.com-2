import * as React from "react"

export interface TemplatesListProps {}

export const TemplatesList: React.FC<
  React.PropsWithChildren<TemplatesListProps>
> = ({ children }) => {
  return (
    <div className="mx-auto mt-20 w-full max-w-[1408px] space-y-24 px-4 sm:px-6 lg:px-0">
      {children}
    </div>
  )
}
