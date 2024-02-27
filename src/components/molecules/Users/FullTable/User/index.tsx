import { USER_DATA, USER_HEADER, USER_TABLE_CONFIG } from '@/mocks/table'
import { TableHeader } from '../../TableHeader'
import Table from '@/components/molecules/Table'

export function UserTable() {
  return (
    <>
      <TableHeader />
      <Table
        header={USER_HEADER}
        data={USER_DATA}
        tableConfig={USER_TABLE_CONFIG}
        width='100%'
        backgroundColor='transparent'
        headerColor='var(--primary-color)'
        handleDelete={() => {}}
        handleEdit={() => {}}
      />
    </>
  )
}
