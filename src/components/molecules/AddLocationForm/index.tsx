import generalStyle from '@/styles/CustomFormContainer.module.css'
import { BaseForm } from '../Form/BaseForm'
import { MultipleTags } from '../Form/MultipleTags'
import { TextBox } from '../Form/TextBox'
import { useAddLocationForm } from './useAddLocationForm'
import { DDL } from '../DDL'
import { validateLocationName } from '@/utils/validations/location/name'
import { validateLocationSlug } from '@/utils/validations/location/slug'
import { Toast } from '../Toast'
import { GeosuggestField } from './GeosuggestField'

export function AddLocationForm() {
  const {
    handleSubmit,
    handleTags,
    handleCompany,
    messages,
    removeMessages,
    data,
    resetSignal,
    refLocationOption,
    loading,
  } = useAddLocationForm()

  return (
    <div className={generalStyle.container}>
      <Toast messages={messages} removeMessages={removeMessages} />
      <BaseForm
        submitTitle='Add Location'
        handleSubmit={handleSubmit}
        horizontalJustify='flex-start'
        loading={loading}
      >
        <DDL
          options={data}
          handleChange={handleCompany}
          label='Company'
          width='15rem'
          height='1.9rem'
          backgroundList='var(--main-bg-color)'
          resetSignal={resetSignal}
        />
        <TextBox
          label='Name'
          name='name'
          required={true}
          variant='border_focused_outlined'
          withErrorPadding={false}
          placeholder='Location Name'
          type='text'
          height='1.9rem'
          width='100%'
          maxWidth='30rem'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          validationFunction={validateLocationName}
          resetSignal={resetSignal}
        />
        <TextBox
          label='Slug'
          name='slug'
          required={true}
          variant='border_focused_outlined'
          withErrorPadding={false}
          placeholder='your-slug'
          type='text'
          height='1.9rem'
          width='100%'
          maxWidth='30rem'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          validationFunction={validateLocationSlug}
          resetSignal={resetSignal}
        />
        <GeosuggestField refLocationOption={refLocationOption} resetSignal={resetSignal} />
        <MultipleTags onTagsChange={handleTags} maxWidth='25rem' resetSignal={resetSignal} />
      </BaseForm>
    </div>
  )
}
