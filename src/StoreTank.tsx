"use client"

import type React from "react"
import { useState } from "react"
import { type FileItem, mockData } from "./mockData"
import {
  FolderIcon,
  FileTypeIcon as DocumentIcon,
  ImageIcon,
  VideoIcon,
  MusicIcon,
  ChevronRightIcon,
  PlusIcon,
  Database,
} from "lucide-react"
import { Button } from "./components/ui/button"

const FileIcon: React.FC<{ type: FileItem["type"] }> = ({ type }) => {
  switch (type) {
    case "folder":
      return <FolderIcon className="w-5 h-5 text-yellow-600" />
    case "document":
      return <DocumentIcon className="w-5 h-5 text-blue-600" />
    case "image":
      return <ImageIcon className="w-5 h-5 text-green-600" />
    case "video":
      return <VideoIcon className="w-5 h-5 text-red-600" />
    case "audio":
      return <MusicIcon className="w-5 h-5 text-purple-600" />
    default:
      return null
  }
}

const StoreTank: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<FileItem[]>([])
  const [currentFolder, setCurrentFolder] = useState<FileItem[]>(mockData)

  const navigateToFolder = (folder: FileItem) => {
    setCurrentPath([...currentPath, folder])
    setCurrentFolder(folder.children || [])
  }

  const navigateToBreadcrumb = (index: number) => {
    if (index === -1) {
      setCurrentPath([])
      setCurrentFolder(mockData)
    } else {
      const newPath = currentPath.slice(0, index + 1)
      setCurrentPath(newPath)
      setCurrentFolder(newPath[newPath.length - 1].children || [])
    }
  }

  const handleUpload = () => {
    const newFile: FileItem = {
      id: `${Date.now()}`,
      name: `New File ${currentFolder.length + 1}.txt`,
      type: "document",
    }
    setCurrentFolder([...currentFolder, newFile])
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Database className="w-8 h-8 text-gray-700 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Store Tank</h1>
        </div>
        <Button onClick={handleUpload} className="flex items-center bg-gray-800 hover:bg-gray-700">
          <PlusIcon className="w-4 h-4 mr-2" />
          Upload
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="#" onClick={() => navigateToBreadcrumb(-1)} className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </li>
              {currentPath.map((item, index) => (
                <li key={item.id}>
                  <div className="flex items-center">
                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                    <a
                      href="#"
                      onClick={() => navigateToBreadcrumb(index)}
                      className="ml-1 text-gray-700 hover:text-gray-900 md:ml-2"
                    >
                      {item.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <ul className="divide-y divide-gray-200">
          {currentFolder.map((item) => (
            <li
              key={item.id}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
              onClick={() => (item.type === "folder" ? navigateToFolder(item) : alert(`Opening ${item.name}`))}
            >
              <div className="flex items-center">
                <FileIcon type={item.type} />
                <span className="ml-2 text-gray-800">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default StoreTank

