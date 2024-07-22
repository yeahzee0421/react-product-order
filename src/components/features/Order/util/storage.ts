import { orderHistorySessionStorage } from '@/utils/storage';

export const storageOrderHistory = (productId: number) => {
  const orderHistorys = orderHistorySessionStorage.get() || [];

  const existingOrder = orderHistorys.find((order) => order.id === productId);

  if (existingOrder) {
    existingOrder.count += 1;
  } else {
    orderHistorys.push({ id: productId, count: 1 });
  }

  orderHistorySessionStorage.set(orderHistorys);
};
