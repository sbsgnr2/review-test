import { optionsFilter, optionsGroups, optionsLocations, optionsSources } from '@/mocks/reviews'
import { DDL } from '../../DDL'
import { CommonFilters } from '../../Users/CommonFilters'

export function Filters() {
  return (
    <CommonFilters>
      <DDL
        options={optionsFilter}
        handleChange={() => {}}
        label=''
        width='9rem'
        required={false}
        backgroundList='var(--main-bg-color)'
        value={'1'}
        borderRadius={'4px'}
      />
      <DDL
        options={optionsLocations}
        handleChange={() => {}}
        label=''
        width='9rem'
        required={false}
        backgroundList='var(--main-bg-color)'
        value={'1'}
        borderRadius={'4px'}
      />
      <DDL
        options={optionsGroups}
        handleChange={() => {}}
        label=''
        width='9rem'
        required={false}
        backgroundList='var(--main-bg-color)'
        value={'1'}
        borderRadius={'4px'}
      />
      <DDL
        options={optionsSources}
        handleChange={() => {}}
        label=''
        width='9rem'
        required={false}
        backgroundList='var(--main-bg-color)'
        value={'1'}
        borderRadius={'4px'}
      />
    </CommonFilters>
  )
}
