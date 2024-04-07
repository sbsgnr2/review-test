import { CheckedPoints } from '@/components/molecules/CheckedPoints'
import { UserInfo } from '@/components/molecules/Finish/UserInfo'
import { Button } from '@/components/molecules/Form/Button'
import { Message } from '@/components/molecules/Finish/Message'
import styles from './ThirdStep.module.css'
import { Toast } from '@/components/molecules/Toast'
import { useThirdStep } from './useThirdStep'

export default function ThirdStep({ handleStep }: { handleStep: (num: number) => void }) {
  const { removeMessages, checkedArr, handleBack, handleSubmit, user, messages } = useThirdStep({
    handleStep,
  })

  return (
    <>
      <Toast messages={messages} removeMessages={removeMessages} />
      <CheckedPoints checkedArr={checkedArr} />
      <UserInfo user={user} />
      <Message />
      <div className={styles.buttonContainer}>
        <Button
          variant='contained'
          type='button'
          width='max-content'
          fontSize='0.85rem'
          height='1.8rem'
          ariaLabel='Back'
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant='contained'
          type='button'
          width='max-content'
          fontSize='0.85rem'
          height='1.8rem'
          ariaLabel='Complete Profile'
          onClick={handleSubmit}
        >
          Complete Profile
        </Button>
      </div>
    </>
  )
}
