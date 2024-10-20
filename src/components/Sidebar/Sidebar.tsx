import { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { iconsImgs, imgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import './Sidebar.css';
import { SidebarContext } from '../../context/sidebarContext';
import { formatPath } from '../../utils/helper';

const Sidebar: React.FC = () => {
  const [sidebarClass, setSidebarClass] = useState<string>("");
  const { isSidebarOpen } = useContext(SidebarContext)!; 
  const location = useLocation();

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="header-info">
        <div className="info-img img-fit-cover">
          <img src={imgs.logo} alt="header image" />
        </div>
        <span className="info-name">evaly</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => {
            const formattedPath = formatPath(navigationLink.title);
            return (
              <li className="nav-item" key={navigationLink.id}>
                <Link
                  to={`/${formattedPath}`}
                  className={`nav-link ${
                    location.pathname === `/${formattedPath}` ? 'active' : ''
                  }`}
                >
                  <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
