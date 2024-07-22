import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { ProductOptionData } from '@/types';

import { fetchInstance } from '../instance';
import { dynamicPath } from '../instance/apiPath';

export type ProductOptionsResponseData = {
  productId: number;
  productName: string;
  productPrice: number;
  hasOption: boolean;
  giftOrderLimit: number;
  names: string[];
  options: ProductOptionData[];
};

export const getProductOptions = async (productId: number) => {
  const response = await fetchInstance.get(dynamicPath.PRODUCT_OPTIONS(productId));
  return response.data;
};

export const useProductOptions = (
  productId: number,
): UseQueryResult<ProductOptionsResponseData> => {
  return useQuery<ProductOptionsResponseData>({
    queryKey: ['productOptions', productId],
    queryFn: () => getProductOptions(productId),
  });
};
