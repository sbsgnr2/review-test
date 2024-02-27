import { Button } from '../Form/Button'
import styles from './OptionsHandle.module.css'
import { OptionsHandleType } from './OptionsHandleType'

export function OptionsHandle({ options, selectedOption, handleSelected }: OptionsHandleType) {
  return (
    <div className={styles.options}>
      {options?.map((option: string) => {
        return (
          <span
            key={option}
            style={{
              borderBottom: selectedOption === option ? 'solid 2px var(--focused-color)' : 'none',
            }}
          >
            <Button
              variant='text'
              color='black'
              height='1.5rem'
              fontSize='0.7rem'
              padding='0.5rem 0'
              onClick={() => handleSelected(option)}
            >
              <p>{option}</p>
            </Button>
          </span>
        )
      })}
    </div>
  )
}
