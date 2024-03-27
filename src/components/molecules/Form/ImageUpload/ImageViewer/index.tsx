import styles from './ImageViewer.module.css'
import { CloseIcon } from '@/components/atoms/Icons/CloseIcon'
import { CustomImage } from '@/components/atoms/CustomImage'
import { IconButton } from '../../Button/IconButton'
import { ImageViewerType } from './ImageViewerType'

export function ImageViewer({ selectedImage, handleRemoveImage, alt }: ImageViewerType) {
  return (
    <label htmlFor='image-upload-input'>
      {selectedImage ? (
        <div className={styles.imageContainer}>
          <CustomImage
            imgUrl={selectedImage}
            type='standard'
            width='100%'
            height='100%'
            alt={alt}
          />
          <div className={styles.buttonCont}>
            <IconButton
              onClick={handleRemoveImage}
              width='100%'
              height='100%'
              color='var(--contrast-color)'
            >
              <CloseIcon width='0.8rem' height='0.8rem' />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className={styles.imageContainer}></div>
      )}
    </label>
  )
}
