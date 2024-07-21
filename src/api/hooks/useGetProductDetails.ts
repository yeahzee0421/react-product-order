import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { GoodsData } from '@/types';

import { fetchInstance } from '../instance';
import { API_ENDPOINT } from '../instance/apiPath';

export type ProductDetailsData = {
  detail: GoodsData;
};

export const queryKeys = {
  detailsByProductId: (productId: number) => ['productDetails', productId],
};

export const getProductDetails = async (productId: number): Promise<ProductDetailsData> => {
  const response = await fetchInstance.get(API_ENDPOINT.PRODUCT_DETAILS(productId));
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
