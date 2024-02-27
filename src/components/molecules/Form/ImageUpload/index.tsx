import { ImageUploadType } from './ImageUploadType'
import { ImageViewer } from './ImageViewer'
import { useImageUpload } from './useImageUpload'

export function ImageUpload({ name, alt }: ImageUploadType) {
  const { selectedImage, handleImageChange, handleRemoveImage } = useImageUpload()

  return (
    <div>
      <input
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        style={{ display: 'none' }}
        name={name}
        id='image-upload-input'
      />
      <ImageViewer selectedImage={selectedImage} handleRemoveImage={handleRemoveImage} alt={alt} />
    </div>
  )
}
