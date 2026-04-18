import { Link } from 'react-router-dom';
import './Sidebar.css';
import userImage from '../assets/signal.png'; 
import dashboard from '../assets/profile.png';
import report from '../assets/report.png';
import schedule from '../assets/schd.png';
import profile from '../assets/profile.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      
      <div className='logo'>
        <div className='logo-image'>
          
       <img src={userImage} alt="SmartAttend Logo" />
       </div>
       <div>
        <h1>SmartAttend</h1>
        
        <p>Faculty Portal</p>
        </div>
      </div>

    <div className='navigation'>
  <Link to='/dashboard'>
    <img src={dashboard} className='nav-icon' />
    Dashboard
  </Link>

  <Link to='/myschedule'>
    <img src={schedule} className='nav-icon' />
    My Schedule
  </Link>

  <Link to='/report'>
    <img src={report} className='nav-icon' />
    Reports
  </Link>

  <Link to='/profile'>
    <img src={profile} className='nav-icon' />
    Profile
  </Link>
</div>

    </div>
  );
};

export default Sidebar;