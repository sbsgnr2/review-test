export function companiesAdapter(apiResponse: any) {
  const transformedData = {
    page: apiResponse.page,
    pageSize: apiResponse.pageSize,
    data: apiResponse.data?.map((company: any) => {
      return {
        id: company.id?.toString(),
        createdAt: company.createdAt,
        updatedAt: company.updatedAt,
        createdDate: company.createdAt?.substring(0, 10),
        updatedDate: company.updatedAt?.substring(0, 10),
        deletedAt: company.deletedAt,
        createdBy: company.createdBy,
        lastUpdatedBy: company.lastUpdatedBy,
        tags: company.tags,
        name: company.name,
        slug: company.slug,
        description: company.description,
        logo: company.logo,
        smsMonthlyLimit: company.smsMonthlyLimit
      }
    }),
    totalpageCount: apiResponse.itemsInPage,
    total: apiResponse.totalItems,
    totalPages: apiResponse.totalPages
  }
  return { transformedData };
}