import { useState } from "react";
import "./Dashboard.css";
// import { useAuth } from "../Context/AuthContext";
import { CLASSES, STUDENTS_BY_CLASS } from "../../data";

const sub = ["Data Structures", "Operating Systems", "DBMS"];
const rout = ["Room 101", "Room 102", "Room 103"];

const Dashboard = () => {
  const [selectedclass, setselectedclass] = useState("");
  const [selectedsub, setselectedsub] = useState("");
  const [selectedrout, setselectedrout] = useState("");

  const [showpopups, setshowpopup] = useState(false);
  const [devices, setDevices] = useState([]);
  const [manualMode, setManualMode] = useState(false);
  const [attendanceLocked, setAttendanceLocked] = useState(false);

  // 🔥 STATS
  const total = devices.length;
  const present = attendanceLocked ? devices.filter(d => d.status === "present").length : 0;
  const absent = attendanceLocked ? devices.filter(d => d.status === "absent").length : 0;
  const avg = attendanceLocked && total > 0 ? Math.round((present / total) * 100) : 0;

  function closepopup() {
    setshowpopup(false);
  }

  function handlechange() {
    if (!selectedclass || !selectedsub || !selectedrout) {
      alert("Please select all fields");
      return;
    }

    const list = STUDENTS_BY_CLASS[selectedclass] || [];

    const devs = list.map((s) => ({
      ...s,
      connected: false,
      connectedSec: s.connectedSec,
      totalClassSec: s.totalClassSec,
      status: ""
    }));

    setDevices(devs);
    setshowpopup(true);
    setAttendanceLocked(false);
  }

  function markManual(id, status) {
    setDevices(prev =>
      prev.map(d =>
        d.id === id ? { ...d, status } : d
      )
    );
  }

  function takeAttendance() {
    if (attendanceLocked) return;

    setDevices(prev =>
      prev.map(d => {
        const percent = d.totalClassSec > 0
          ? (d.connectedSec / d.totalClassSec) * 100
          : 0;

        return {
          ...d,
          status: percent >= 75 ? "present" : "absent"
        };
      })
    );

    setAttendanceLocked(true);
  }

  return (
    <div className="main-dash">
      <p>Good Morning</p>

      <div>
        <select value={selectedclass} onChange={(e) => setselectedclass(e.target.value)}>
          <option value="">Select Class</option>
          {CLASSES.map(item => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>

        <select value={selectedsub} onChange={(e) => setselectedsub(e.target.value)}>
          <option value="">Choose Subject</option>
          {sub.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select value={selectedrout} onChange={(e) => setselectedrout(e.target.value)}>
          <option value="">Choose Class</option>
          {rout.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <button onClick={handlechange}>Start</button>

      {showpopups && (
        <div className="popup">
          <div className="popup-content">

            <div className="popup-header">
              <h2>{selectedsub}</h2>
            </div>

            {/* 🔥 BUTTON ROW */}
<div className="btn-row">
  <button onClick={() => setManualMode(!manualMode)}>Manual</button>

  <button onClick={takeAttendance} disabled={attendanceLocked}>
    {attendanceLocked ? "Attendance Final ✓" : "Take Attendance"}
  </button>
 <button onClick={closepopup} className="close-btn">
    Close
  </button>
</div>

{/* 🔥 STATS CARDS */}
<div className="stats-cards">
  <div className="card present">
    <p>Present</p>
    <h3>{present}</h3>
  </div>

  <div className="card absent">
    <p>Absent</p>
    <h3>{absent}</h3>
  </div>

  <div className="card avg">
    <p>Average</p>
    <h3>{avg}%</h3>
  </div>
</div>

            <div className="table-card">
              <div className="table-wrap">
                <table>

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Roll</th>
                      <th>MAC</th>
                      <th>Time</th>
                      <th>Presence</th>
                      <th>Overall</th>
                      <th>Status</th>
                      {manualMode && <th>Action</th>}
                    </tr>
                  </thead>

                  <tbody>
                    {devices.map(d => {
                      const percent = d.totalClassSec > 0
                        ? (d.connectedSec / d.totalClassSec) * 100
                        : 0;

                      return (
                        <tr key={d.id}>
                          <td>
                            <span className="bold">{d.name}</span>
                          </td>

                          <td>{d.roll}</td>
                          <td>{d.mac}</td>

                          <td>
                            {Math.floor(d.connectedSec / 60)}:
                            {String(d.connectedSec % 60).padStart(2, "0")}
                          </td>

                          <td>{Math.round(percent)}%</td>

                          <td>
                            <span className="badge ok">83%</span>
                          </td>

                          <td>
                            <span className={`badge status-${d.status}`}>
                              {d.status || "-"}
                            </span>
                          </td>

                          <td>
                           {manualMode && (
  <td>
    <div>
      <button onClick={() => markManual(d.id, "present")}>P</button>
      <button onClick={() => markManual(d.id, "absent")}>A</button>
    </div>
  </td>
)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>

                </table>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
