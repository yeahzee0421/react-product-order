export const API_ENDPOINT = {
  THEMES: '/v1/themes',
  RANKING: '/v1/ranking/products',
  THEME_PRODUCTS: (themeKey: string) => `/v1/themes/${themeKey}/products`,
  PRODUCT_DETAILS: (productId: number) => `/v1/products/${productId}/detail`,
  PRODUCT_OPTIONS: (productId: number) => `/v1/products/${productId}/options`,
};
