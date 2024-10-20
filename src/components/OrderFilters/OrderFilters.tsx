import React, { ChangeEvent } from 'react';
import "./OrderFilters.css"
interface OrderFiltersProps {
  searchTerm: string;
  dateRange: string;
  onSearchChange: (term: string) => void;
  onDateRangeChange: (range: string) => void;
}

const OrderFilters: React.FC<OrderFiltersProps> = ({ searchTerm, dateRange, onSearchChange, onDateRangeChange }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleDateRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onDateRangeChange(e.target.value);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by order id"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select className="filter-dropdown" value={dateRange} onChange={handleDateRangeChange}>
        <option value="">Filter by date range</option>
        <option value="1d">Last 24 hours</option>
        <option value="7d">Last 7 days</option>
        <option value="30d">Last 30 days</option>
      </select>
    </div>
  );
};

export default OrderFilters;
