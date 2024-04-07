import { getFullName } from "./getFullName";

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
        smsMonthlyLimit: company.smsMonthlyLimit,
        createdInfo: [company.createdAt?.substring(0, 10), `by ${getFullName({firstName: company.accountCreator?.firstName, lastName: company.accountCreator?.lastName})}`],
        updatedInfo: [company.updatedAt?.substring(0, 10), `by ${getFullName({firstName: company.accountLastUpdater?.firstName, lastName: company.accountLastUpdater?.lastName})}`],
      }
    }),
    totalpageCount: apiResponse.itemsInPage,
    total: apiResponse.totalItems,
    totalPages: apiResponse.totalPages
  }
  return { transformedData };
}