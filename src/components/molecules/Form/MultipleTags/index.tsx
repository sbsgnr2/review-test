import { Button } from '../Button'
import { TextBox } from '../TextBox'
import { useMultipleTags } from './useMultipleTags'
import styles from './MultipleTags.module.css'
import { Tag } from './Tag'
import React from 'react'
import { multipleTagsType } from './multipleTagsType'

export function MultipleTags({
  onTagsChange,
  maxWidth = '100%',
  resetSignal = false,
  color = 'var(--second-color)',
  fontSize,
  fontWeight = '500',
  label = 'Tags',
  defaultValues,
}: multipleTagsType) {
  const { handleInputChange, handleInputKeyDown, handleRemoveTag, addTag, tags, tagInput } =
    useMultipleTags({
      onTagsChange,
      resetSignal,
      defaultValues,
    })
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <TextBox
          fontSize={fontSize}
          fontWeight={fontWeight}
          label={label}
          name='tag'
          required={false}
          value={tagInput}
          variant='rounded_outlined_focus'
          withErrorPadding={false}
          placeholder='your-tag'
          maxWidth={maxWidth}
          type='text'
          changeValue={handleInputChange}
          onKeyDown={handleInputKeyDown}
          height='1.9rem'
          width='100%'
          validationFunction={() => {
            return null
          }}
          labelColor={color}
        />
        <Button
          onClick={addTag}
          width='max-content'
          fontSize='0.8rem'
          padding='0 0.5rem'
          height='1.9rem'
          type='button'
          ariaLabel='Add'
        >
          Add
        </Button>
      </div>
      <div className={styles.tagsContainer}>
        {tags?.map((tag, index) => (
          <React.Fragment key={tag}>
            <Tag tag={tag} index={index} handleRemoveTag={handleRemoveTag} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
