import { USER_ACTIVITY_DATA, USER_ACTIVITY_HEADER, USER_ACTIVITY_TABLE_CONFIG } from '@/mocks/table'
import { TableHeader } from '../../TableHeader'
import Table from '@/components/molecules/Table'

export function ActivityTable() {
  return (
    <>
      <TableHeader />
      <Table
        header={USER_ACTIVITY_HEADER}
        data={USER_ACTIVITY_DATA}
        tableConfig={USER_ACTIVITY_TABLE_CONFIG}
        width='100%'
        backgroundColor='transparent'
        headerColor='var(--primary-color)'
        handleDelete={() => {}}
        handleEdit={() => {}}
      />
    </>
  )
}
