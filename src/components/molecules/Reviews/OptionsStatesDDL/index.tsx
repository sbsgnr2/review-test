import { optionsStates } from '@/mocks/reviews'
import { DDL } from '../../DDL'
import { useOptionsStatesDDL } from './useOptionsStatesDDL'

export function OptionsStatesDDL({ selected, id }: { selected: string; id: string }) {
  const { handleStatus } = useOptionsStatesDDL({ id })

  return (
    <DDL
      options={optionsStates}
      handleChange={handleStatus}
      label=''
      width='11rem'
      required={false}
      backgroundList='var(--main-bg-color)'
      value={selected}
      borderRadius={'4px'}
    />
  )
}
