import { CustomImage } from '@/components/atoms/CustomImage'
import styles from './LogoContainer.module.css'

export function LogoContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.logoCont}>
        <CustomImage
          imgUrl='/images/logo-2.png'
          width='100%'
          height='2rem'
          type='standard'
          optimized
          objectFit='contain'
        />
        <p>Reviewshub</p>
      </div>
    </div>
  )
}
