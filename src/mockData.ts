export type FileType = "folder" | "document" | "image" | "video" | "audio"

export interface FileItem {
  id: string
  name: string
  type: FileType
  children?: FileItem[]
}

export const mockData: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      { id: "2", name: "Report.docx", type: "document" },
      { id: "3", name: "Presentation.pptx", type: "document" },
      {
        id: "4",
        name: "Projects",
        type: "folder",
        children: [
          { id: "5", name: "Project1.pdf", type: "document" },
          { id: "6", name: "Project2.pdf", type: "document" },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "Images",
    type: "folder",
    children: [
      { id: "8", name: "Vacation.jpg", type: "image" },
      { id: "9", name: "Family.png", type: "image" },
    ],
  },
  { id: "10", name: "Music.mp3", type: "audio" },
  { id: "11", name: "Video.mp4", type: "video" },
]

