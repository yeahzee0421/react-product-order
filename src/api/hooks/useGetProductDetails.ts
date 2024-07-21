import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { GoodsData } from '@/types';

import { fetchInstance } from '../instance';
import { dynamicPath } from '../instance/apiPath';

export type ProductDetailsData = {
  detail: GoodsData;
};

export const queryKeys = {
  detailsByProductId: (productId: number) => ['productDetails', productId],
};

export const getProductDetails = async (productId: number): Promise<ProductDetailsData> => {
  const response = await fetchInstance.get(dynamicPath.PRODUCT_DETAILS(productId));
  return response.data;
};

export const useProductDetailsQuery = (
  productId: number,
  options?: UseQueryOptions<ProductDetailsData>,
): UseQueryResult<ProductDetailsData> => {
  return useQuery({
    queryKey: queryKeys.detailsByProductId(productId),
    queryFn: () => getProductDetails(productId),
    ...options,
  });
};
