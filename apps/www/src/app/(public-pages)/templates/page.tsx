import { templates } from "./domain"
import { TemplateDetail } from "./template-detail"
import { TemplatesHeader } from "./templates-header"
import { TemplatesList } from "./templates-list"

export default function TemplatesPage() {
  return (
    <>
      <TemplatesHeader />
      <TemplatesList>
        {templates.map((template) => (
          <TemplateDetail key={template.name} template={template} />
        ))}
      </TemplatesList>
    </>
  )
}
