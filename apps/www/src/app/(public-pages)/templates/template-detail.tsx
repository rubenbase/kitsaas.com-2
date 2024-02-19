import * as React from "react"
import Link from "next/link"

import { Template } from "./domain"

export interface TemplateDetailProps {
  template: Template
}

export const TemplateDetail: React.FC<TemplateDetailProps> = ({ template }) => {
  return (
    <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0">
      <DetailInformation
        name={template.name}
        type={template.type}
        description={template.description}
      />

      <div className="lg:relative lg:mr-auto lg:flex lg:min-w-0 lg:overflow-x-auto">
        <div className="sticky left-0 z-10 hidden w-8 flex-none bg-gradient-to-r from-background lg:block"></div>
        <div className="lg:relative lg:flex lg:flex-none lg:items-start lg:pr-8">
          <a
            tabIndex={-1}
            className="hidden lg:absolute lg:inset-y-0 lg:-left-8 lg:right-8 lg:z-10 lg:block"
            href="https://tailwindui.com/templates/catalyst"
          >
            <span className="sr-only">View Catalyst template</span>
          </a>
          <img
            src="https://tailwindui.com/img/templates/catalyst/preview-01.png"
            alt="This is a preview image"
            width="560"
            height="380"
            className="w-full rounded-xl bg-slate-100 lg:w-[19.1666666rem] lg:flex-none"
          />
          <img
            src="https://tailwindui.com/img/templates/catalyst/preview-02.png"
            alt="This is a preview image"
            width="560"
            height="380"
            className="hidden w-full rounded-xl bg-slate-100 lg:ml-8 lg:block lg:w-[19.1666666rem] lg:flex-none"
          />
          <img
            src="https://tailwindui.com/img/templates/catalyst/preview-03.png"
            alt="This is a preview image"
            width="560"
            height="380"
            className="hidden w-full rounded-xl bg-slate-100 lg:ml-8 lg:block lg:w-[19.1666666rem] lg:flex-none"
          />
        </div>
      </div>
    </div>
  )
}

interface DetailInformationProps {
  name: string
  type: string
  description: string
}

const DetailInformation: React.FC<DetailInformationProps> = ({
  name,
  type,
  description,
}) => {
  return (
    <div className="relative sm:pt-2 md:pr-6 lg:relative lg:ml-auto lg:w-[19.5rem] lg:flex-none lg:pl-8 lg:pr-0">
      <Title name={name} />
      <Type type={type} />
      <Description description={description} />
      <div className="mt-4 h-px w-6 bg-slate-300"></div>

      <div className="mt-4 flex justify-start">
        <span className="flex items-center gap-2 rounded-full border border-dashed border-gray-300 py-px pl-1 pr-3 text-xs/6 font-medium text-gray-900">
          <span className="flex size-5 items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-200">
            <svg viewBox="0 0 8 12" fill="none" className="w-2 fill-gray-900">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 3.5C2 2.39543 2.89543 1.5 4 1.5C5.10457 1.5 6 2.39543 6 3.5V4C6 4.27614 5.77614 4.5 5.5 4.5H2.5C2.22386 4.5 2 4.27614 2 4V3.5ZM0.761594 4.92943C0.901674 4.81883 1 4.65765 1 4.47917V3.5C1 1.84315 2.34315 0.5 4 0.5C5.65685 0.5 7 1.84315 7 3.5V4.47917C7 4.65765 7.09833 4.81883 7.23841 4.92943C7.70228 5.2957 8 5.86308 8 6.5V9.5C8 10.6046 7.10457 11.5 6 11.5H2C0.895431 11.5 0 10.6046 0 9.5V6.5C0 5.86308 0.297724 5.2957 0.761594 4.92943Z"
              ></path>
            </svg>
          </span>
          Development preview
        </span>
      </div>
    </div>
  )
}

interface TitleProps {
  name: string
}

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-base font-semibold text-slate-900">
        <Link className="" href="https://tailwindui.com/templates/catalyst">
          <span className="absolute inset-0 lg:left-8"></span>
          {name}
        </Link>
      </h2>
    </div>
  )
}

interface TypeProps {
  type: string
}

const Type: React.FC<TypeProps> = ({ type }) => {
  return <p className="text-sm capitalize leading-6 text-slate-600">{type}</p>
}

interface DescriptionProps {
  description: string
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
}
