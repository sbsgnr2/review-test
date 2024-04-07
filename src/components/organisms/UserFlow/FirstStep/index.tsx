import { AddUserForm } from '@/components/molecules/AddUser'
import { CheckedPoints } from '@/components/molecules/CheckedPoints'

export default function FirstStep({ handleStep }: { handleStep: (num: number) => void }) {
  const checkedArr = [
    {
      title: 'Create Profile',
      label: 1,
      completed: false,
      actual: true,
    },
    {
      title: 'Locations',
      label: 2,
      completed: false,
      actual: false,
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
      <AddUserForm handleStep={handleStep} />
    </>
  )
}
