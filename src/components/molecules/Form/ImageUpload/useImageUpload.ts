import { ChangeEvent, useEffect, useState } from "react"

export function useImageUpload ({ resetSignal }: { resetSignal: boolean }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  useEffect(() => {
    setSelectedImage(null)
  }, [resetSignal])
  
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string
        setSelectedImage(imageDataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedImage(null)
    const input = document.getElementById('image-upload-input') as HTMLInputElement
    if (input) {
      input.value = ''
    }
  }

  return { selectedImage, handleImageChange, handleRemoveImage }
}