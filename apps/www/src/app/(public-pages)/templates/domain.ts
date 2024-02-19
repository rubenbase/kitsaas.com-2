export const templates = [
  {
    name: "Bengal",
    type: "Application UI kit",
    description:
      "Modern application UI components to kickstart your dashboard application.",
    previewUrl: "/templates/rubens",
    downloadUrl: "/templates/rubens/download",
    previewImages: [
      {
        src: "/templates/rubens/preview.png",
        alt: "Rubens Landing Page",
      },
      {
        src: "/templates/rubens/preview.png",
        alt: "Rubens Landing Page",
      },
      {
        src: "/templates/rubens/preview.png",
        alt: "Rubens Landing Page",
      },
    ],
  },
]

export type Template = (typeof templates)[number]
