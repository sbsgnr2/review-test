export const COMPANY_HEADER = [
  { id: '1', title: 'Name', field: 'name', withArrows: true },
  { id: '2', title: 'Slug', field: 'slug', withArrows: true },
  { id: '3', title: 'Monthly SMS Limit', field: 'smsMonthlyLimit', withArrows: true },
  { id: '4', title: 'Updated Date', field: 'updatedInfo', withArrows: true },
  { id: '5', title: 'Created Date', field: 'createdInfo', withArrows: true },
]

export const COMPANY_TABLE_CONFIG = {
  withCheckbox: true,
  withActions: true,
  withDelete: true,
  withEdit: true,
  withPagination: true,
  colorRows: ['name'],
  multipleRows: ['updatedInfo', 'createdInfo'],
  starRows: [],
  redirectButtons: [],
  selecteds: [],
}
