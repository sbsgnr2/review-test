import styles from './Body.module.css'
import { bodyType } from './bodyType'
import { objectDataType } from '../tableType'
import { Actions } from '../Actions'
import { CheckBoxRow } from '../CheckBoxRow'
import { RedirectButton } from '../RedirectButton'
import { StarRow } from '../StarRow'
import { MultipleRows } from '../MultipleRows'
import { useBody } from './useBody'

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
  const { fields, redirect } = useBody({ header })

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
              <CheckBoxRow
                tableConfig={tableConfig}
                checkedArr={checkedArr}
                element={element}
                handleCheckedArr={handleCheckedArr}
              />
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
                    <>
                      {tableConfig.starRows.includes(key) && typeof element[key] === 'number' ? (
                        <StarRow rating={Number(element[key])} />
                      ) : tableConfig.redirectButtons.includes(key) ? (
                        <RedirectButton element={String(element[key])} redirect={redirect} />
                      ) : tableConfig.selecteds.some((select: any) => select.field === key) ? (
                        tableConfig.selecteds
                          .find((select: any) => select.field === key)
                          ?.element(element[key])
                      ) : (
                        <>
                          {tableConfig.multipleRows.includes(key) && Array.isArray(element[key]) ? (
                            <MultipleRows element={element[key] as string[]} />
                          ) : (
                            element[key]
                          )}
                        </>
                      )}
                    </>
                  </td>
                )
              })}
              <Actions
                tableConfig={tableConfig}
                handleEdit={handleEdit}
                element={element}
                handleDelete={handleDelete}
              />
            </tr>
          )
        })}
      </tbody>
    </>
  )
}
