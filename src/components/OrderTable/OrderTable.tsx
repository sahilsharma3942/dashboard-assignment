import React from 'react';
import './OrderTable.css';

type Order = {
  id: string;
  created: string;
  customer: string;
  total: string;
  profit: { value: string; percentage: string };
  status: string;
};

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>ORDER ID</th>
          <th>CREATED</th>
          <th>CUSTOMER</th>
          <th>TOTAL</th>
          <th>PROFIT</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td><span className="id">{order.id}</span></td>
            <td>{order.created}</td>
            <td>{order.customer}</td>
            <td>{order.total}</td>
            <td><span className="profit-value">{order.profit.value}</span><span className="profit-percentage">{order.profit.percentage}</span></td>
            <td>
              <div className="status-container">
                <span className="status-label">{order.status}</span>
                <button className="status-dropdown">&#9662;</button>
              </div>
            </td>
            <td><button className="action-btn">&#9675;</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
