import styles from './Table.module.css'
import Body from './Body'
import Header from './Header'
import { tableType } from './tableType'
import { useTable } from './useTable'
import { Pagination } from './Pagination'

export default function Table({
  header,
  data,
  width = 'max-content',
  tableConfig,
  handleDelete,
  handleEdit,
  handleOrderData,
  totalPages = 1,
  totalResults = 3,
  handlePagination = ({ value }: { value: number }) => {},
  rowsPerPage = 5,
  backgroundColor,
  pairBackgroundColor,
  oddBackgroundColor,
  fontSize,
  headerColor,
  bodyColor,
}: tableType) {
  const { checkedArr, handleCheckedArr, orderData, dataArr } = useTable({ data, handleOrderData })
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tableContainer}>
          <table className={styles.table} style={{ width }}>
            <Header
              header={header}
              checked={checkedArr.length === data.length}
              handleCheckedArr={handleCheckedArr}
              tableConfig={tableConfig}
              orderData={orderData}
              backgroundColor={backgroundColor}
              color={headerColor}
            />
            <Body
              header={header}
              data={dataArr}
              handleCheckedArr={handleCheckedArr}
              checkedArr={checkedArr}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              tableConfig={tableConfig}
              pairBackgroundColor={pairBackgroundColor}
              oddBackgroundColor={oddBackgroundColor}
              fontSize={fontSize}
              color={bodyColor}
            />
          </table>
        </div>
        {tableConfig?.withPagination && (
          <Pagination
            totalPages={totalPages}
            totalResults={totalResults}
            handlePagination={handlePagination}
            rowsPerPage={rowsPerPage}
          />
        )}
      </div>
    </>
  )
}
