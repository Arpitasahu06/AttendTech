import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      
      <div className='logo'>
        <h1>SmartAttend</h1>
        <p>Faculty Portal</p>
      </div>

      <div className='navigation'>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/myschedule'>My Schedule</Link>
        <Link to='/report'>Reports</Link>
        <Link to='/profile'>Profile</Link>
      </div>

    </div>
  );
};

export default Sidebar;