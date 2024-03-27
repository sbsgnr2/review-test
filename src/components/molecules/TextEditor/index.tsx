import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { EditorState, ContentState, convertToRaw, Modifier } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './TextEditor.module.css'
import { Tag } from '@/components/atoms/Tag'

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
})

export function TextEditor({ handleMessage }: { handleMessage: (selectedValue: any) => void }) {
  const initialContentState = ContentState.createFromText('')
  const [editorState, setEditorState] = useState(EditorState.createWithContent(initialContentState))

  const handleImageUpload = (file: any) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve(reader.result as string)
      }
      reader.onerror = (error) => reject(error)
    })
  }

  const onEditorStateChange = (newEditorState: any) => {
    const contentState = newEditorState.getCurrentContent()
    const contentRaw = convertToRaw(contentState)
    handleMessage(contentRaw)
    setEditorState(newEditorState)
  }

  const handleTagClick = (word: string) => {
    const contentState = editorState.getCurrentContent()
    const contentStateWithText = Modifier.insertText(contentState, editorState.getSelection(), word)
    const newEditorState = EditorState.push(editorState, contentStateWithText, 'insert-characters')
    onEditorStateChange(newEditorState)
  }

  return (
    <>
      <div className={styles.editorContent}>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: [
              'link',
              'inline',
              'colorPicker',
              'blockType',
              'fontSize',
              'fontFamily',
              'textAlign',
              'remove',
              'history',
            ],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough'],
            },
            image: { uploadCallback: handleImageUpload },
          }}
        />
      </div>
      <div>
        <p className={styles.title}>MERGE TAGS</p>
        <div className={styles.tagContainer}>
          <span onClick={() => handleTagClick(' %BusinessName%')}>
            <Tag word='Business Name' />
          </span>
          <span onClick={() => handleTagClick(' %LocationName%')}>
            <Tag word='Location Name' />
          </span>
          <span onClick={() => handleTagClick(' %SenderName%')}>
            <Tag word='Sender Name' />
          </span>
          <span onClick={() => handleTagClick(' %RecipientFirstName%')}>
            <Tag word='Recipient First Name' />
          </span>
          <span onClick={() => handleTagClick(' %RecipientLastName%')}>
            <Tag word='Recipient Last Name' />
          </span>
        </div>
      </div>
    </>
  )
}
