// import { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
//   PieChart, Pie, Cell,
// } from 'recharts';
// import { CLASSES, STUDENTS_BY_CLASS, WEEKLY_REPORT } from '../../data';
// import './Report.css';

// export default function Reports({ dark }) {
//   const { classId: urlClassId } = useParams();
//   const navigate = useNavigate();
//   const [selClass, setSelClass] = useState(urlClassId || 'cse3a');
//   const [showModal, setShowModal] = useState(false);

//   const axisColor  = dark ? '#6b6b65' : '#999';
//   const gridColor  = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
//   const tooltipBg  = dark ? '#1a1a18' : '#fff';
//   const tooltipBrd = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

//   const className = CLASSES.find(c => c.id === selClass)?.label || '';
//   const students  = STUDENTS_BY_CLASS[selClass] || [];
//   console.log("Selected class:", selClass);
// console.log("All data:", STUDENTS_BY_CLASS);
// console.log("Students of class:", students);

//   function handleClassChange(e) {
//     setSelClass(e.target.value);
//     // cnavigate(`/reports/${e.target.value}`, { replace: true });
//   }

//   const attData = students.map(s => ({
//     name:     s.name.split(' ')[0],
//     attended: s.attended,
//     missed:   s.totalClasses - s.attended,
//   }));

//   const pieData = [
//     { name: 'Above 75%', value: students.filter(s => Math.round(s.attended / s.totalClasses * 100) >= 75).length },
//     { name: 'Below 75%', value: students.filter(s => Math.round(s.attended / s.totalClasses * 100) < 75).length  },
//   ];

//   const avg = students.length > 0
//     ? Math.round(students.reduce((a, s) => a + s.attended / s.totalClasses * 100, 0) / students.length)
//     : 0;

//   const StudentTable = () => (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Roll no.</th>
//           <th>Total classes</th>
//           <th>Attended</th>
//           <th>Missed</th>
//           <th>Attendance %</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map(s => {
//           const p = Math.round(s.attended / s.totalClasses * 100);
//           return (
//             <tr key={s.id}>
//               <td className="bold">{s.name}</td>
//               <td className="muted small">{s.roll}</td>
//               <td>{s.totalClasses}</td>
//               <td className="green-text">{s.attended}</td>
//               <td className="red-text">{s.totalClasses - s.attended}</td>
//               <td>
//                 <div className="prog-row">
//                   <div className="prog-bg">
//                     <div
//                       className="prog-fill"
//                       style={{
//                         width: `${p}%`,
//                         background: p >= 75 ? '#1D9E75' : '#E24B4A',
//                       }}
//                     />
//                   </div>
//                   <span className="prog-pct">{p}%</span>
//                 </div>
//               </td>
//               <td>
//                 <span className={`badge ${p >= 75 ? 'badge-present' : 'badge-absent'}`}>
//                   {p >= 75 ? 'Good' : 'Low'}
//                 </span>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );

//   return (
//     <div className="reports-page">

//       {/* HEADER */}
//       <div className="page-header">
//         <div>
//           <div className="page-title">Reports</div>
//           <div className="page-sub">Attendance analytics · {className}</div>
//         </div>
//         <div className="btn-group">
//           <select value={selClass} onChange={handleClassChange}>
//             {CLASSES.map(c => (
//               <option key={c.id} value={c.id}>{c.label}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* STATS */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <div className="stat-num">{students.length}</div>
//           <div className="stat-lbl">Total students</div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-num green">{pieData[0].value}</div>
//           <div className="stat-lbl">Above 75%</div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-num red">{pieData[1].value}</div>
//           <div className="stat-lbl">Below 75%</div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-num">{avg}%</div>
//           <div className="stat-lbl">Class avg</div>
//         </div>
//       </div>

//       {/* CHARTS */}
//       <div className="charts-row">

//         {/* Weekly Trend */}
//         <div className="card">
//           <div className="card-header">Weekly trend</div>
//           <div className="chart-area">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={WEEKLY_REPORT} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
//                 <XAxis dataKey="week" tick={{ fontSize: 11, fill: axisColor }} />
//                 <YAxis tick={{ fontSize: 11, fill: axisColor }} />
//                 <Tooltip contentStyle={{ background: tooltipBg, border: `0.5px solid ${tooltipBrd}`, borderRadius: 8, fontSize: 12 }} />
//                 <Legend wrapperStyle={{ fontSize: 11 }} />
//                 <Bar dataKey="present" name="Present" fill="#1D9E75" radius={[3, 3, 0, 0]} />
//                 <Bar dataKey="absent"  name="Absent"  fill="#E24B4A" radius={[3, 3, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
        
//         </div>

//         {/* Pie Chart */}
//         <div className="card">
//           <div className="card-header">Threshold distribution</div>
//           <div className="chart-area pie-area">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   cx="50%" cy="50%"
//                   innerRadius={40} outerRadius={65}
//                   dataKey="value"
//                   label={({ name, value }) => `${name}: ${value}`}
//                   labelLine={false}
//                   fontSize={11}
//                 >
//                   <Cell fill="#1D9E75" />
//                   <Cell fill="#E24B4A" />
//                 </Pie>
//                 <Tooltip contentStyle={{ background: tooltipBg, border: `0.5px solid ${tooltipBrd}`, borderRadius: 8, fontSize: 12 }} />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
        
//         </div>

//       </div>
//   <div className="see-details-btn" onClick={() => setShowModal(true)}>
//             <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
//               <circle cx="8" cy="8" r="6"/>
//               <path d="M8 5v3l2 1.5"/>
//             </svg>
//             See full details
//           </div>
     

//       {/* MODAL */}


//     </div>
//   );
// }


import { useState } from 'react';
import {
BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell,
} from 'recharts';
import { CLASSES, STUDENTS_BY_CLASS, WEEKLY_REPORT } from '../../data';
import './Report.css';

export default function Reports() {
const [selClass, setSelClass] = useState('cse3a');

const className = CLASSES.find(c => c.id === selClass)?.label || '';
const students = STUDENTS_BY_CLASS[selClass] || [];

function handleClassChange(e) {
setSelClass(e.target.value);
}

// Pie Data
const pieData = [
{
name: 'Above 75%',
value: students.filter(s => (s.attended / s.totalClasses * 100) >= 75).length
},
{
name: 'Below 75%',
value: students.filter(s => (s.attended / s.totalClasses * 100) < 75).length
}
];

// Table
const StudentTable = () => ( <table> <thead> <tr> <th>Name</th> <th>Roll</th> <th>Total</th> <th>Attended</th> <th>%</th> </tr> </thead> <tbody>
{students.map(s => {
const p = Math.round((s.attended / s.totalClasses) * 100);
return ( <tr key={s.id}> <td>{s.name}</td> <td>{s.roll}</td> <td>{s.totalClasses}</td> <td>{s.attended}</td> <td>{p}%</td> </tr>
);
})} </tbody> </table>
);

return ( <div className="reports-page">

  {/* HEADER */}
  <div className="page-header">
    <div>
      <h2>Reports</h2>
      <p>{className}</p>
    </div>

    <select value={selClass} onChange={handleClassChange}>
      {CLASSES.map(c => (
        <option key={c.id} value={c.id}>{c.label}</option>
      ))}
    </select>
  </div>

  {/* CHARTS */}
  <div className="charts-row">

    {/* BAR CHART */}
    <div className="card">
      <h4>Weekly</h4>
      <div className="chart-area">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={WEEKLY_REPORT}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="week" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" fill="#820e0ed3" />   {/* green */}
            <Bar dataKey="absent" fill="#215604be" />    {/* red */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* PIE CHART */}
    <div className="card">
      <h4>Distribution</h4>
      <div className="chart-area">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80}>
              <Cell fill="#820e0ed3" />   {/* above 75% */}
              <Cell fill="#215604be" />   {/* below 75% */}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

  </div>

  {/* TABLE */}
  <div className="table-section">
    <div className="table-wrap">
      <StudentTable />
    </div>
  </div>

</div>


);
}
