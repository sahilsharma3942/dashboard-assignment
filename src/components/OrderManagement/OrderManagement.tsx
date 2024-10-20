import "./OrderManagement.css";
import { useState, useEffect } from "react";
import { orders } from "../../data/data"; // Import updated orders data with statuses
import { filterByDateRange } from "../../utils/filterHelpers";
import OrderFilters from "../OrderFilters/OrderFilters";
import OrderTable from "../OrderTable/OrderTable";
import Pagination from "../Pagination/Pagination";
import { orderStatuses } from "../../data/data";


const OrderManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dateRange, setDateRange] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("Pending"); // Default tab is 'Pending'
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, dateRange, selectedStatus]);

  // Filter orders by search term, date range, and selected status
  const filteredOrders = orders
    .filter((order) =>
      searchTerm ? order.id.toString().includes(searchTerm) : true
    )
    .filter((order) =>
      dateRange ? filterByDateRange([order], dateRange).length > 0 : true
    )
    .filter((order) => order.status === selectedStatus);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="table-container">
      {/* Tabs for Order Status Filtering */}
      <div className="tabs">
        {orderStatuses.map((status) => (
          <button
            key={status}
            className={`tab-btn ${selectedStatus === status ? "active" : ""}`}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <OrderFilters
        searchTerm={searchTerm}
        dateRange={dateRange}
        onSearchChange={setSearchTerm}
        onDateRangeChange={setDateRange}
      />

      <OrderTable orders={currentOrders} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={filteredOrders.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default OrderManagement;
