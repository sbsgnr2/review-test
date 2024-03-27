import { TextArea } from '@/components/molecules/Form/TextArea'
import { Locations } from '../../Locations'
import { useCampaigns } from '@/zustand/compose'

export function FirstRow() {
  const { handleLocations } = useCampaigns()

  return (
    <>
      <Locations handleChange={handleLocations} />
      <TextArea
        label='Paste Recipients'
        width='100%'
        variant='rounded_outlined_focus'
        name='recipients'
        backgroundColor='var(--main-bg-color)'
        fontWeight={'600'}
        fontSize='0.8rem'
        inputFontSize={'0.75rem'}
        cols={undefined}
        subtitle='Paste up to 50 emails below (ONE PER LINE)'
      />
    </>
  )
}
