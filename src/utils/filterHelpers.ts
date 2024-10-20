type Order = {
    id: number;
    created: string;
    customer: string;
    total: string;
    profit: { value: string; percentage: string };
    status: string;
  };
  
  export const filterByDateRange = (orders: Order[], range: string) => {
    const now = new Date();
    let filteredOrders = orders;
  
    if (range === '1d') {
      const last24Hours = new Date(now);
      last24Hours.setDate(now.getDate() - 1);
      filteredOrders = orders.filter(order => new Date(order.created) >= last24Hours);
    } else if (range === '7d') {
      const last7Days = new Date(now);
      last7Days.setDate(now.getDate() - 7);
      filteredOrders = orders.filter(order => new Date(order.created) >= last7Days);
    } else if (range === '30d') {
      const last30Days = new Date(now);
      last30Days.setDate(now.getDate() - 30);
      filteredOrders = orders.filter(order => new Date(order.created) >= last30Days);
    }
  
    return filteredOrders;
  };
  