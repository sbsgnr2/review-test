import styles from './Subtitle.module.css'
import { subtitleType } from './subtitleType'

export function Subtitle({ text }: subtitleType) {
  return <h2 className={styles.subtitle}>{text}</h2>
}
