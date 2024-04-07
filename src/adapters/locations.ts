import { getFullName } from "./getFullName";
import { getCapitalize } from "@/utils/functions/getCapitalize";

export function locationsAdapter(apiResponse: any) {
  const transformedData = {
    page: apiResponse.page,
    pageSize: apiResponse.pageSize,
    data: apiResponse.data?.map((location: any) => {
      return {
        id: location.id?.toString(),
        createdAt: location.createdAt,
        updatedAt: location.updatedAt,
        createdDate: location.createdAt?.substring(0, 10),
        updatedDate: location.updatedAt?.substring(0, 10),
        deletedAt: location.deletedAt,
        createdBy: location.createdBy,
        lastUpdatedBy: location.lastUpdatedBy,
        tags: location.tags,
        name: location.name,
        slug: location.slug,
        location: location.location,
        company_id: location.company_id,
        company_name: location.company_id,
        country: getCapitalize(location.country),
        city: getCapitalize(location.city),
        state: getCapitalize(location.state),
        address: getCapitalize(location.address),
        accountName: location.account?.name,
        createdInfo: [location.createdAt?.substring(0, 10), `by ${getFullName({firstName: location.locationCreator?.firstName, lastName: location.locationCreator?.lastName})}`],
        updatedInfo: [location.updatedAt?.substring(0, 10), `by ${getFullName({firstName: location.locationLastUpdater?.firstName, lastName: location.locationLastUpdater?.lastName})}`],
      }
    }),
    totalpageCount: apiResponse.itemsInPage,
    total: apiResponse.totalItems,
    totalPages: apiResponse.totalPages
  }
  return { transformedData };
}