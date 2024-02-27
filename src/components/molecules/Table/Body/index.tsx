import styles from './Body.module.css'
import { CheckBox } from '../../Form/CheckBox'
import { bodyType } from './bodyType'
import { CloseIcon } from '@/components/atoms/Icons/CloseIcon'
import { EditIcon } from '@/components/atoms/Icons/EditIcon'
import { IconButton } from '../../Form/Button/IconButton'
import { objectDataType } from '../tableType'

export default function Body({
  data,
  handleCheckedArr,
  checkedArr,
  handleDelete,
  handleEdit,
  tableConfig,
  header,
  fontSize = '0.75rem',
  pairBackgroundColor = 'var(--row-bg-primary-color)',
  oddBackgroundColor = 'var(--row-bg-secondary-color)',
  color = 'var(--primary-color)',
}: bodyType) {
  const fields: string[] = header?.map((row) => row.field)
  return (
    <>
      <tbody className={styles.tbody} style={{ fontSize, color }}>
        {data.map((element: objectDataType, index: number) => {
          return (
            <tr
              key={element.id}
              style={{
                backgroundColor: `${
                  (index + 1) % 2 === 0 ? pairBackgroundColor : oddBackgroundColor
                }`,
              }}
            >
              {tableConfig.withCheckbox && (
                <td>
                  <CheckBox
                    checked={checkedArr.includes(element.id)}
                    handleChange={() => handleCheckedArr({ key: element.id })}
                  />
                </td>
              )}
              {fields.map((key: string) => {
                return (
                  <td
                    key={key}
                    style={{
                      color: tableConfig.colorRows.includes(key)
                        ? 'var(--focused-color)'
                        : 'inherit',
                      fontWeight: tableConfig.colorRows.includes(key) ? '600' : 'inherit',
                    }}
                  >
                    {element[key]}
                  </td>
                )
              })}
              {tableConfig.withActions && (
                <td className={styles.iconsContainer}>
                  {handleEdit && tableConfig.withEdit && (
                    <IconButton
                      width='max-content'
                      height='max-content'
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                        handleEdit({ event, id: element.id })
                      }
                    >
                      <span>
                        <EditIcon width='1rem' height='1rem' />
                      </span>
                    </IconButton>
                  )}
                  {handleDelete && tableConfig.withDelete && (
                    <IconButton
                      width='max-content'
                      height='max-content'
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                        handleDelete({ event, id: element.id })
                      }
                    >
                      <span>
                        <CloseIcon width='1rem' height='1rem' />
                      </span>
                    </IconButton>
                  )}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </>
  )
}
