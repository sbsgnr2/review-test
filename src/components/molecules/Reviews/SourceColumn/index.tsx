import { GoogleIcon } from "@/components/atoms/Icons/GoogleIcon";
import styles from './SourceColumn.module.css'

export function SourceColumn({ source }: { source: string }) {
  return (
    <div className={styles.container}>
      <GoogleIcon width='0.9rem' height='0.9rem' />{' '}
      <p>{source}</p>
    </div>
  )
}
