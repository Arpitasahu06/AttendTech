
import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import { CLASSES, SUBJECTS, STUDENTS_BY_CLASS } from '../../data';
import './Report.css';

export default function Reports() {
  const [selClass,   setSelClass]   = useState('cse3a');
  const [selSubject, setSelSubject] = useState('ds');

  const className   = CLASSES.find(c => c.id === selClass)?.label   || '';
  const subjectName = SUBJECTS.find(s => s.id === selSubject)?.label || '';

  const students = STUDENTS_BY_CLASS[selClass]?.[selSubject] || [];

  const pieData = [
    {
      name: 'Above 75%',
      value: students.filter(s => (s.attended / s.totalClasses * 100) >= 75).length,
    },
    {
      name: 'Below 75%',
      value: students.filter(s => (s.attended / s.totalClasses * 100) < 75).length,
    },
  ];

  const barData = [
    { range: '0–40%',   present: 0, absent: 0 },
    { range: '41–60%',  present: 0, absent: 0 },
    { range: '61–75%',  present: 0, absent: 0 },
    { range: '76–90%',  present: 0, absent: 0 },
    { range: '91–100%', present: 0, absent: 0 },
  ];

  students.forEach(s => {
    const pct = (s.attended / s.totalClasses) * 100;
    let bucket;
    if      (pct <= 40)  bucket = 0;
    else if (pct <= 60)  bucket = 1;
    else if (pct <= 75)  bucket = 2;
    else if (pct <= 90)  bucket = 3;
    else                 bucket = 4;

    if (pct >= 75) barData[bucket].present += 1;
    else           barData[bucket].absent  += 1;
  });

  const StudentTable = () => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll</th>
          <th>Total</th>
          <th>Attended</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => {
          const p = Math.round((s.attended / s.totalClasses) * 100);
          return (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.totalClasses}</td>
              <td>{s.attended}</td>
              <td>{p}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div className="reports-page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <h2>Reports</h2>
          <p>{className} — {subjectName}</p>
        </div>

        <select value={selClass} onChange={(e) => setSelClass(e.target.value)}>
          {CLASSES.map(c => (
            <option key={c.id} value={c.id}>{c.label}</option>
          ))}
        </select>

        <select value={selSubject} onChange={(e) => setSelSubject(e.target.value)}>
          {SUBJECTS.map(s => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* CHARTS */}
      <div className="charts-row">

        <div className="card">
          <h4>Attendance by Range — {subjectName}</h4>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="range" stroke="#ccc" />
                <YAxis
                  stroke="#ccc"
                  allowDecimals={false}
                  label={{ value: 'Students', angle: -90, position: 'insideLeft', fill: '#ccc', fontSize: 12 }}
                />
                <Tooltip formatter={(value) => [`${value} student(s)`]} />
                <Legend />
                <Bar dataKey="present" fill="#820e0ed3" />
                <Bar dataKey="absent"  fill="#215604be" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h4>Distribution — {subjectName}</h4>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={80} label={({ name, value }) => `${name}: ${value}`}>
                  <Cell fill="#820e0ed3" />
                  <Cell fill="#215604be" />
                </Pie>
                <Tooltip formatter={(value) => [`${value} student(s)`]} />
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