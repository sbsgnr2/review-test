import styles from './Header.module.css'
import { CustomImage } from '@/components/atoms/CustomImage'
import { headerType } from './headerType'

export function Header({ title }: headerType) {
  return (
    <>
      <div className={styles.logo_container}>
        <CustomImage
          imgUrl='/images/logo-2.png'
          width='5.5rem'
          height='1.3rem'
          optimized={true}
          type='standard'
        />
      </div>
      <h1 className={styles.h1}>{title}</h1>
    </>
  )
}
