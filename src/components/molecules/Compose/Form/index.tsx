import { BaseForm } from '../../Form/BaseForm'
import { RadioButtons } from '../../Form/RadioButtons'
import { FORMAT_OPTIONS } from '@/utils/constants/campaigns'
import { SearchCampaign } from '../SearchCampaign'
import { useCampaigns } from '@/zustand/compose'
import { ContainerBoxes } from '../ContainerBoxes'

export function ComposeForm() {
  const DEFAULT_VALUE = 'email'
  const { handleFormat, format } = useCampaigns()

  return (
    <BaseForm submitTitle='' handleSubmit={() => {}} horizontalJustify='flex-start'>
      <RadioButtons
        name='format'
        label='FORMAT'
        options={FORMAT_OPTIONS}
        onChange={handleFormat}
        defaultValue={DEFAULT_VALUE}
      />
      <SearchCampaign />
      <ContainerBoxes format={format} />
    </BaseForm>
  )
}
