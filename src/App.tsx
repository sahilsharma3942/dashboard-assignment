import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import OrderManagement from './components/OrderManagement/OrderManagement';
import Header from './components/Header/Header';

const WorkInProgress = ()=>{
  return <div>Work in Progress</div>
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="main-content-holder">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/order-management" element={<OrderManagement />} />
              <Route path="/customers" element={<WorkInProgress/>} />
              <Route path="/coupon-code" element={<WorkInProgress/>} />
              <Route path="/categories" element={<WorkInProgress/>} />
              <Route path="/transaction" element={<WorkInProgress/>} />
              <Route path="/brand" element={<WorkInProgress/>} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
