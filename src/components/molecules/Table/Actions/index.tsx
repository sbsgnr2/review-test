import { EditIcon } from '@/components/atoms/Icons/EditIcon'
import { IconButton } from '../../Form/Button/IconButton'
import { CloseIcon } from '@/components/atoms/Icons/CloseIcon'
import styles from './Actions.module.css'
import { ActionsType } from './actionsType'

export function Actions({ tableConfig, handleEdit, element, handleDelete }: ActionsType) {
  return (
    <>
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
    </>
  )
}
