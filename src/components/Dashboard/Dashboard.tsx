import Cards from '../Card/Cards';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Cards />
      </div>
      <div className="content-grid-two">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
