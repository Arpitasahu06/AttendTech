
import './Profile.css';
import { useAuth } from "../Context/AuthContext";


import teacher from '../assets/teacher.png';

const Profile = () => {
  return (
    <div className='main-cont'>


      <div className='profile'>
        <div>
          <h1>Hello John Doe 👋</h1>
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
          <p>john.doe@gmail.com</p>
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
            <span className='class'>CSE-A</span>
          </div>

          <div className='row'>
            <span className='subject'>Operating Systems</span>
            <span className='class'>CSE-B</span>
          </div>

          <div className='row'>
            <span className='subject'>Data Structures</span>
            <span className='class'>CSE-C</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;