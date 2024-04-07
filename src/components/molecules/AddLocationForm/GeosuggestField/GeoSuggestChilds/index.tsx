import { TextBox } from '@/components/molecules/Form/TextBox'
import styles from './GeosuggestChild.module.css'

export function GeoSuggestChilds({ selectedOption, resetSignal }: any) {
  return (
    <>
      <TextBox
        label='Address'
        name='address'
        required={false}
        variant='border_focused_outlined'
        withErrorPadding={false}
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        disabled={true}
        value={selectedOption?.vicinity || ''}
        validationFunction={() => null}
        resetSignal={resetSignal}
      />
      <div className={styles.addressInfo}>
        <input type='hidden' value={selectedOption?.location || ''} name='location' />
        <TextBox
          label='City'
          name='city'
          required={false}
          variant='border_focused_outlined'
          withErrorPadding={false}
          type='text'
          height='1.9rem'
          width='100%'
          maxWidth='30rem'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          disabled={true}
          value={selectedOption?.locality || ''}
          validationFunction={() => null}
          resetSignal={resetSignal}
        />
        <input type='hidden' value={selectedOption?.locality || ''} name='city2' />
        <TextBox
          label='Region'
          name='region'
          required={false}
          variant='border_focused_outlined'
          withErrorPadding={false}
          type='text'
          height='1.9rem'
          width='100%'
          maxWidth='30rem'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          disabled={true}
          value={selectedOption?.region || ''}
          validationFunction={() => null}
          resetSignal={resetSignal}
        />
        <TextBox
          label='Zip Code'
          name='zipCode'
          required={false}
          variant='border_focused_outlined'
          withErrorPadding={false}
          type='text'
          height='1.9rem'
          width='100%'
          maxWidth='30rem'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          disabled={true}
          value={selectedOption?.postalCode || ''}
          validationFunction={() => null}
          resetSignal={resetSignal}
        />
      </div>
      <TextBox
        label='Country'
        name='country'
        required={false}
        variant='border_focused_outlined'
        withErrorPadding={false}
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        disabled={true}
        value={selectedOption?.country || ''}
        validationFunction={() => null}
        resetSignal={resetSignal}
      />
    </>
  )
}
