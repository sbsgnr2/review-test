import { getCapitalizeText } from "@/utils/functions/getCapitalizeText";
import { getStars } from "@/utils/functions/getStars";

export function locationsAdapter(apiResponse: any) {
  const transformedData = {
    page: apiResponse.page,
    pageSize: apiResponse.pageSize,
    data: apiResponse.data?.map((review: any) => {
      return {
        id: review.id?.toString(),
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        createdDate: review.createdAt?.substring(0, 10),
        updatedDate: review.updatedAt?.substring(0, 10),
        deletedAt: review.deletedAt,
        createdBy: review.createdBy,
        lastUpdatedBy: review.lastUpdatedBy,
        tags: review.tags,
        locationId: review.locationId,
        provider: review.provider,
        type: review.type,
        reviewId: review.reviewId,
        rating: getStars(review.rating),
        time: review.time,
        relativeTime: review.relativeTime,
        comment: review.comment,
        placeId: review.placeId,
        authorId: review.authorId,
        authorName: review.authorName,
        authorEmail: review.authorEmail,
        authorImage: review.authorImage,
        slug: review.slug,
        source: review.provider || '-',
        summary: review.comment  || '-',
        date: review.time?.substring(0, 10) || '-',
        location: review.locationId || '-',
        status: review.status,
        locationDetail: review.location?.name ? [getCapitalizeText(review.location?.name), review.location?.address] : '-',
        hrefSource: review.dataRef
      }
    }),
    totalpageCount: apiResponse.itemsInPage,
    total: apiResponse.totalItems,
    totalPages: apiResponse.totalPages
  }
  return { transformedData };
}
