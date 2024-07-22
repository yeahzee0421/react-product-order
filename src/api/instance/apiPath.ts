export const apiPath = {
  THEMES: '/v1/themes',
  RANKING: '/v1/ranking/products',
  PRODUCT: '/v1/products',
};

export const dynamicPath = {
  THEME_PRODUCTS: (themeKey: string) => `${apiPath.THEMES}/${themeKey}/products`,
  PRODUCT_DETAILS: (productId: number) => `${apiPath.PRODUCT}/${productId}/detail`,
  PRODUCT_OPTIONS: (productId: number) => `${apiPath.PRODUCT}/${productId}/options`,
};
