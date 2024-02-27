/* eslint-disable @next/next/no-img-element */
import { CustomImageType } from '@/components/atoms/CustomImage/CustomImageType'
import styles from './CustomImage.module.css'
import Image from 'next/image'

export function CustomImage({
  width = '3.7rem',
  height = '3.7rem',
  imgUrl = '/images/default-avatar.png',
  type = 'profile',
  optimized,
  objectFit = 'cover',
  alt = 'Profile Image',
}: CustomImageType) {
  return (
    <>
      <div
        className={type === 'profile' ? styles.circle : styles.standard}
        style={{ width: width, height: height }}
      >
        {optimized ? (
          <Image src={imgUrl} alt={alt} fill style={{ objectFit }} />
        ) : (
          <img src={imgUrl} alt={alt} style={{ width, height, objectFit }} />
        )}
      </div>
    </>
  )
}
