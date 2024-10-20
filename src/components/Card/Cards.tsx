import { imgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c1-content">
        <p>Total Sales and Cost</p>
        <div className="lg-value">Last 7 days</div>
        <div className="card-wrapper">
          <div className="wrap1">
            <p>350K</p>
            <p>⬆ 8.56K vs last7 days</p>
          </div>
          <div className="wrap2">
            <img src={imgs.chart} className="chart"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
