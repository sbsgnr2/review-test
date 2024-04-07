import generalStyle from '@/styles/CustomFormContainer.module.css'
import { BaseForm } from '../Form/BaseForm'
import { ImageUpload } from '../Form/ImageUpload'
import { MultipleTags } from '../Form/MultipleTags'
import { NumberBox } from '../Form/NumberBox'
import { TextArea } from '../Form/TextArea'
import { TextBox } from '../Form/TextBox'
import { useCompanyForm } from './useCompanyForm'
import { validateCompanyName } from '@/utils/validations/company/name'
import { validateCompanySlug } from '@/utils/validations/company/slug'
import { validateCompanySmsMonthlyLimit } from '@/utils/validations/company/smsMonthlyLimit'
import { Toast } from '../Toast'

export function CompanyForm() {
  const { handleSubmit, handleTags, loading, messages, removeMessages, resetSignal } =
    useCompanyForm()

  return (
    <div className={generalStyle.container}>
      <Toast messages={messages} removeMessages={removeMessages} />
      <BaseForm
        submitTitle='Add Company'
        handleSubmit={handleSubmit}
        horizontalJustify='flex-start'
        loading={loading}
      >
        <ImageUpload name='logo' alt='Company Image' resetSignal={resetSignal} />
        <TextBox
          label='Company Name'
          name='name'
          required={true}
          variant='border_focused_outlined'
          withErrorPadding={false}
          placeholder='Company Name'
          width='100%'
          maxWidth='30rem'
          height='1.9rem'
          type='text'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          validationFunction={validateCompanyName}
          resetSignal={resetSignal}
        />
        <TextBox
          label='Slug'
          name='slug'
          required={true}
          variant='border_focused_outlined'
          withErrorPadding={false}
          placeholder='your-slug'
          width='100%'
          maxWidth='30rem'
          height='1.9rem'
          type='text'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          validationFunction={validateCompanySlug}
          resetSignal={resetSignal}
        />
        <NumberBox
          label='SMS Monthly Limit'
          name='smsMonthlyLimit'
          changeValue={() => {}}
          maxWidth='30rem'
          validationFunction={validateCompanySmsMonthlyLimit}
          resetSignal={resetSignal}
        />
        <TextArea
          label='Description'
          placeholder='Enter a Description'
          width='100%'
          maxWidth='30rem'
          variant='border_focused_outlined'
          name='description'
          backgroundColor='var(--main-bg-color)'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
        />
        <MultipleTags onTagsChange={handleTags} maxWidth='450px' resetSignal={resetSignal} />
      </BaseForm>
    </div>
  )
}
