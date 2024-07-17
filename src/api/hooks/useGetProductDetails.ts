import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { GoodsData } from '@/types';

import { fetchInstance } from '../instance';
import { API_ENDPOINT } from '../instance/apiPath';

export type ProductsDetailResponseData = {
  detail: GoodsData & {
    isAccessableProductPage: boolean;
    review: {
      averageRating: number;
      totalReviewCount: number;
    };
    productDescription: {
      images: string[];
    };
    productDetailInfo: {
      announcements: {
        displayOrder: number;
        name: string;
        value: string;
      }[];
      terms: {
        displayOrder: number;
        title: string;
        description: string;
      }[];
    };
  };
};

export const getProductDetails = async (productId: string): Promise<ProductsDetailResponseData> => {
  const response = await fetchInstance.get(API_ENDPOINT.PRODUCT_DETAILS(productId));
  return response.data;
};

export const useProductDetails = (
  productId: string,
): UseQueryResult<ProductsDetailResponseData> => {
  return useQuery<ProductsDetailResponseData>({
    queryKey: ['productDetails', productId],
    queryFn: () => getProductDetails(productId),
  });
};
