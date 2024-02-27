import { ChangeEvent, useState, KeyboardEvent } from "react"

export function useMultipleTags ({ onTagsChange }: { onTagsChange: ({ tags }: { tags: string[] }) => void }) {
  const [tagInput, setTagInput] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTagInput(event.target.value)
  }

  function addTag() {
    if (!tags.includes(tagInput.trim().toLowerCase()) && tagInput.trim().length) {
      setTags([...tags, tagInput.trim().toLowerCase()])
      setTagInput('')
      onTagsChange({tags: [...tags, tagInput.trim()]})
    }
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && tagInput.trim() !== '') {
      addTag()
    }
  }

  function handleRemoveTag(index: number) {
    const newTags = [...tags]
    newTags.splice(index, 1)
    setTags(newTags)
    onTagsChange({tags: newTags})
  }

  return { handleInputChange, addTag, handleInputKeyDown, handleRemoveTag, tags, tagInput }
}