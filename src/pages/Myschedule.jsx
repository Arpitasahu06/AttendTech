import { useState, useEffect } from 'react';
import './Myschedule.css';

const SCHEDULE = [
  { id: 1, day: 'Monday', start: 9, end: 10, subject: 'Data Structures', classId: 'CSE 3A', room: 'Lab 101', sub: 'ds' },
  { id: 2, day: 'Monday', start: 11, end: 12, subject: 'Algorithms', classId: 'CSE 5A', room: 'Room 204', sub: 'algo' },
  { id: 3, day: 'Monday', start: 14, end: 15, subject: 'Operating Systems', classId: 'CSE 3B', room: 'Room 105', sub: 'os' },
  { id: 4, day: 'Tuesday', start: 10, end: 11, subject: 'Data Structures', classId: 'CSE 3B', room: 'Lab 101', sub: 'ds' },
  { id: 5, day: 'Tuesday', start: 12, end: 13, subject: 'Database Management', classId: 'IT 3A', room: 'Room 301', sub: 'dbms' },
  { id: 6, day: 'Wednesday', start: 9, end: 10, subject: 'Data Structures', classId: 'CSE 3A', room: 'Lab 101', sub: 'ds' },
  { id: 7, day: 'Wednesday', start: 11, end: 12, subject: 'Algorithms', classId: 'CSE 3A', room: 'Room 105', sub: 'algo' },
  { id: 8, day: 'Wednesday', start: 14, end: 15, subject: 'Computer Networks', classId: 'CSE 5A', room: 'Room 204', sub: 'cn' },
  { id: 9, day: 'Thursday', start: 10, end: 11, subject: 'Operating Systems', classId: 'CSE 5A', room: 'Room 204', sub: 'os' },
  { id: 10, day: 'Thursday', start: 14, end: 15, subject: 'Database Management', classId: 'CSE 3B', room: 'Room 301', sub: 'dbms' },
  { id: 11, day: 'Friday', start: 9, end: 10, subject: 'Data Structures', classId: 'IT 3A', room: 'Lab 101', sub: 'ds' },
  { id: 12, day: 'Friday', start: 11, end: 12, subject: 'Computer Networks', classId: 'CSE 3A', room: 'Room 105', sub: 'cn' },
];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Myschedule = () => {
  const [selectedschedule, setschedule] = useState('Monday');
  const todayindex = new Date().getDay()
  const todayname = days[todayindex];
  const todayclass = SCHEDULE.filter(item => item.day === todayname);
  const filterday=SCHEDULE.filter(item=>item.day===selectedschedule);
  const workingDays = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
  return (

    <div className="schedule-page">
      <h2>Today : {todayname}</h2>
      {todayname === 'Sunday' || todayname === 'Saturday' ?
        <div className="no-class-box">No classes today 🎉</div>
        :
        todayclass.map(item => (
          <div key={item.id} className='today-card'>
          <h3>{item.subject}</h3>
          <p>{item.classId}  {item.room}</p>
          </div>
        ))}
        <select value={selectedschedule}
      onChange={(e) => setschedule(e.target.value)}>
    {
      workingDays.map(day=>(
        <option key={day} value={day}>{day}</option>
      ))
    }
    </select>
    
      <table className="schedule-table">
  <thead>
    <tr>
      <th>Time</th>
      <th>Subject</th>
      <th>Class</th>
      <th>Room</th>
    </tr>
  </thead>

  <tbody>
    {filterday.map(item => (
      <tr key={item.id}>
        <td>{item.start}:00 - {item.end}:00</td>
        <td>{item.subject}</td>
        <td>{item.classId}</td>
        <td>{item.room}</td>
      </tr>
    ))}
  </tbody>
</table>
      
    
  
   </div >
)
}
export default Myschedule;

