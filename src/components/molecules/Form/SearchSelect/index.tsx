import { TextBox } from '../TextBox'
import styles from './SearchSelect.module.css'
import { useSearchSelect } from './useSearchSelect'

export const optionsCampaign = [
  { value: '1', label: 'Campaign 1' },
  { value: '2', label: 'Campaign 2' },
  { value: '3', label: 'Campaign 3' },
]

export function SearchSelect({ name, placeholder }: { name: string; placeholder: string }) {
  const { isOpen, handleChange, contenedorRef, handleOpen, handleSelect, select, search } =
    useSearchSelect()

  return (
    <div className={styles.selectContainer} ref={contenedorRef}>
      <TextBox
        label='Campaign'
        labelColor='var(--primary-color)'
        fontSize='0.85rem'
        name={name}
        required={false}
        variant='rounded_outlined'
        withErrorPadding={false}
        placeholder={
          select ? optionsCampaign.find((el: any) => el.value === select)?.label : placeholder
        }
        width='100%'
        height='1.9rem'
        type='text'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        positionTop='-1rem'
        validationFunction={() => null}
        changeValue={handleChange}
        onClick={handleOpen}
        value={search}
      />
      {isOpen && (
        <div className={styles.options}>
          {optionsCampaign
            ?.filter((el: any) => el.label.toLowerCase().includes(search.toLowerCase()))
            ?.map((campaign: any) => {
              return (
                <div
                  key={campaign.value}
                  className={styles.option}
                  onClick={() => handleSelect({ option: campaign })}
                >
                  <p>{campaign.label}</p>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}
