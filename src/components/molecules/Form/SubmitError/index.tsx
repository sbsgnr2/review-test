import styles from './SubmitError.module.css'

export function SubmitError({ error }: { error: string | null }) {
  return (
    <>
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
    </>
  )
}
