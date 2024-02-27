import generalStyle from '@/styles/CustomFormContainer.module.css'
import { validateCompanyMonthLimit } from '@/utils/validations/company/monthLimit'
import { BaseForm } from '../Form/BaseForm'
import { ImageUpload } from '../Form/ImageUpload'
import { MultipleTags } from '../Form/MultipleTags'
import { NumberBox } from '../Form/NumberBox'
import { TextArea } from '../Form/TextArea/indext'
import { TextBox } from '../Form/TextBox'
import { useCompanyForm } from './useCompanyForm'
import { validateCompanyName } from '@/utils/validations/company/name'
import { validateCompanySlug } from '@/utils/validations/company/slug'

export function CompanyForm() {
  const { handleSubmit, handleTags } = useCompanyForm()
  return (
    <div className={generalStyle.container}>
      <BaseForm
        submitTitle='Add Company'
        handleSubmit={handleSubmit}
        horizontalJustify='flex-start'
      >
        <ImageUpload name='companyImage' alt='Company Image' />
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
        />
        <NumberBox
          label='SMS Monthly Limit'
          name='monthLimit'
          changeValue={() => {}}
          maxWidth='30rem'
          validationFunction={validateCompanyMonthLimit}
        />
        <TextArea
          label='Description'
          placeholder='Enter a Description'
          width='100%'
          maxWidth='30rem'
          variant='border_focused_outlined'
          name='message'
          backgroundColor='var(--main-bg-color)'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
        />
        <MultipleTags onTagsChange={handleTags} maxWidth='450px' />
      </BaseForm>
    </div>
  )
}
