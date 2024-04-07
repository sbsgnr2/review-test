import { ChangeEvent, useEffect, useState } from "react"

export function useImageUpload ({ resetSignal, image, handleFunction }: { resetSignal: boolean, image?: string, handleFunction?: (value: string | null | undefined) => void }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(image || null)
  useEffect(() => {
    setSelectedImage(image || null)
    handleFunction && handleFunction(image || null)
  }, [resetSignal, image, handleFunction])
  
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string
        setSelectedImage(imageDataUrl)
        handleFunction && handleFunction(imageDataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedImage(null)
    handleFunction && handleFunction(null)
    const input = document.getElementById('image-upload-input') as HTMLInputElement
    if (input) {
      input.value = ''
    }
  }

  return { selectedImage, handleImageChange, handleRemoveImage }
}