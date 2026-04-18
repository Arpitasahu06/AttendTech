import './Topbar.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import image from '../assets/profile-picture.png';
import image2 from '../assets/logout.png';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
 <span>
      {time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })}
    </span>
  );
}

const Topbar = ({ toggleTheme, theme }) => {
  return (
    <div className="topbar">
      <div className="clock">
       <p>Time : <Clock /></p> 
      </div>
      <div className="mode" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </div>
     <Link to="/profile" className="nav-link"> 
    <img src={image} alt="Profile"  className='nav-icon'/>
     </Link>
     <Link to='/' className="nav-link">
      <img src={image2} alt="Profile"  className='nav-icon2'/>
   </Link>
    </div>
  );
};

export default Topbar;
