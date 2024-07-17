import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { ProductOptionData } from '@/types';

import { fetchInstance } from '../instance';
import { API_ENDPOINT } from '../instance/apiPath';

export type ProductOptionsResponseData = {
  productId: number;
  productName: string;
  productPrice: number;
  hasOption: boolean;
  giftOrderLimit: number;
  names: string[];
  options: ProductOptionData[];
};

export const getProductOptions = async (productId: string) => {
  const response = await fetchInstance.get(API_ENDPOINT.PRODUCT_OPTIONS(productId));
  return response.data;
};

export const useProductOptions = (
  productId: string,
): UseQueryResult<ProductOptionsResponseData> => {
  return useQuery<ProductOptionsResponseData>({
    queryKey: ['productOptions', productId],
    queryFn: () => getProductOptions(productId),
  });
};
