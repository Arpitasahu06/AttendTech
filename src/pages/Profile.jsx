
import './Profile.css';


import { Link } from "react-router-dom";
import teacher from '../assets/teacher.png';
const Profile = () => {
  return (
    <div className='main-cont'>


      <div className='profile'>
        <div>
          <h1>Hello Amrita Kumari 👋</h1>
          <h2>Associate Professor · Computer Science & Engineering</h2>
         
          <p>Here is your teaching overview</p>
        </div>

        <div className='pic'>
          <img src={teacher} alt="Profile" />
        </div>
      </div>


      <div className='profile-info'>

        <div className='block'>
          <h4>Email</h4>
          <p>amit.kumar@university.ac.in</p>
        </div>

        <div className='block'>
          <h4>Phone</h4>
          <p>+91 9876543210</p>
        </div>

        <div className='block'>
          <h4>Department</h4>
          <p>Computer Science</p>
        </div>

        <div className='block'>
          <h4>Experience</h4>
          <p>5 Years</p>
        </div>

        <div className='block'>
          <h4>Joining Date</h4>
          <p>22-09-2022</p>
        </div>

        <div className='block'>
          <h4>Qualification</h4>
          <p>M.Tech, PhD</p>
        </div>

      </div>

      <div className='sub'>
        <h3>Subjects & Classes</h3>

        <div className='sblock'>

          <div className='row'>
            <span className='subject'>DBMS</span>
            <span className='class'>CSE-4A</span>
          </div>

          <div className='row'>
            <span className='subject'>Operating Systems</span>
            <span className='class'>CSE-3B</span>
          </div>

          <div className='row'>
            <span className='subject'>Data Structures</span>
            <div>
            <span className='class'>CSE-5A</span>
             <span className='class'>CSE-5A</span>
             </div>
          </div>

        </div>
      </div>
      <div className='logout'>
        <Link to="/" className="nav-link">
        <button className='logout-btn'>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;