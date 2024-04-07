import { CheckedPoints } from '@/components/molecules/CheckedPoints'
import Location from '@/components/molecules/Locations'

export default function SecondStep({ handleStep }: { handleStep: (num: number) => void }) {
  const checkedArr = [
    {
      title: 'Create Profile',
      label: 1,
      completed: true,
      actual: false,
    },
    {
      title: 'Locations',
      label: 2,
      completed: false,
      actual: true,
    },
    {
      title: 'Finish',
      label: 3,
      completed: false,
      actual: false,
    },
  ]

  return (
    <>
      <CheckedPoints checkedArr={checkedArr} />
      <Location handleStep={handleStep} />
    </>
  )
}
