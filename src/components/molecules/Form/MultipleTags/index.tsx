import { Button } from '../Button'
import { TextBox } from '../TextBox'
import { useMultipleTags } from './useMultipleTags'
import styles from './MultipleTags.module.css'
import { Tag } from './Tag'
import React from 'react'

export function MultipleTags({
  onTagsChange,
  maxWidth = '100%',
}: {
  onTagsChange: ({ tags }: { tags: string[] }) => void
  maxWidth?: string
}) {
  const { handleInputChange, handleInputKeyDown, handleRemoveTag, addTag, tags, tagInput } =
    useMultipleTags({
      onTagsChange,
    })

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <TextBox
          label='Tags'
          name='tag'
          required={false}
          value={tagInput}
          variant='border_focused_outlined'
          withErrorPadding={false}
          placeholder='your-tag'
          maxWidth={maxWidth}
          type='text'
          changeValue={handleInputChange}
          onKeyDown={handleInputKeyDown}
          fontWeight={'500'}
          height='1.9rem'
          width='100%'
          validationFunction={() => {
            return null
          }}
        />
        <Button
          onClick={addTag}
          width='4.1rem'
          fontSize='0.8rem'
          padding='0 0.5rem'
          height='1.9rem'
        >
          Add Tag
        </Button>
      </div>
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <React.Fragment key={tag}>
            <Tag tag={tag} index={index} handleRemoveTag={handleRemoveTag} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
