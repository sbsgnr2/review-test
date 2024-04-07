import { getCapitalizeText } from "@/utils/functions/getCapitalizeText"
import { getFullName } from "./getFullName";

export function usersAdapter(apiResponse: any) {
  const transformedData = {
    page: apiResponse.page,
    pageSize: apiResponse.pageSize,
    data: apiResponse.data?.map((user: any) => {
      return {
        id: user.id?.toString(),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        createdDate: user.createdAt?.substring(0, 10),
        updatedDate: user.updatedAt?.substring(0, 10),
        deletedAt: user.deletedAt,
        createdBy: user.createdBy,
        lastUpdatedBy: user.lastUpdatedBy,
        tags: user.tags,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        fullname: getFullName({firstName: user.firstName, lastName: user.lastName}),
        userTypeId: user.userTypeId,
        type: getCapitalizeText(user.userType?.name),
        verify: user.isValid ? 'YES' : 'NO',
        createdInfo: [user.createdAt?.substring(0, 10), `by ${getFullName({firstName: user.userCreator?.firstName, lastName: user.userCreator?.lastName})}`],
        updatedInfo: [user.updatedAt?.substring(0, 10), `by ${getFullName({firstName: user.userLastUpdater?.firstName, lastName: user.userLastUpdater?.lastName})}`],
        isValid: user.isValid,
        image: user.image,
        phone: user.phone,
      }
    }),
    totalpageCount: apiResponse.itemsInPage,
    total: apiResponse.totalItems,
    totalPages: apiResponse.totalPages
  }
  return { transformedData };
}