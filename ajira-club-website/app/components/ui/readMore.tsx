// components/ui/modal.tsx

import { Button } from "./button"
import { useState } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

export const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-4/5 md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
