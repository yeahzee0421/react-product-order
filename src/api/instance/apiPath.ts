export const API_ENDPOINT = {
  THEMES: '/v1/themes',
  RANKING: '/v1/ranking/products',
  THEME_PRODUCTS: (themeKey: string) => `/v1/themes/${themeKey}/products`,
  PRODUCT_DETAILS: (productId: string) => `/v1/products/${productId}/detail`,
};
