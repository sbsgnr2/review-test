import { multipleRowsType } from './multipleRowsType'

export function MultipleRows({ element }: multipleRowsType) {
  return (
    <>
      {(element as string[]).map((el: string, index: number) => {
        return (
          <p
            key={el}
            style={{
              fontWeight: index === 0 ? 600 : 400,
              color: index === 0 ? 'var(--primary-color)' : 'var(--light-color)',
            }}
          >
            {el}
          </p>
        )
      })}
    </>
  )
}
