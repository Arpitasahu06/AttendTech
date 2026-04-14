export const TEACHER = {
  name: 'Prof. Amit Kumar',
  email: 'amit.kumar@university.ac.in',
  department: 'Computer Science & Engineering',
  employeeId: 'FAC-2019-042',
  phone: '+91 98765 43210',
  designation: 'Associate Professor',
  joining: '2019-07-15',
  avatar: 'AK',
};

export const CLASSES = [
  { id: 'cse3a', label: 'CSE - 3A' },
  { id: 'cse3b', label: 'CSE - 3B' },
  { id: 'cse5a', label: 'CSE - 5A' },
  { id: 'cse4a',  label: 'CSE - 4A'  },
];

// ── Sirf 3 subjects ──
export const SUBJECTS = [
  { id: 'ds',   label: 'Data Structures'    },
  { id: 'os',   label: 'Operating Systems'  },
  { id: 'dbms', label: 'Database Management'},
];

// ── 15 students per class ──
export const STUDENTS_BY_CLASS = {

  // 🔴 CLASS 1
  cse3a: [
    { id:1, name:'Rahul Sharma', roll:'CSE3A001', mac:'A1', totalClasses:20, attended:18, connectedSec:3000, totalClassSec:3600 },
    { id:2, name:'Priya Singh', roll:'CSE3A002', mac:'A2', totalClasses:20, attended:16, connectedSec:2500, totalClassSec:3600 },
    { id:3, name:'Aman Verma', roll:'CSE3A003', mac:'A3', totalClasses:20, attended:14, connectedSec:1200, totalClassSec:3600 },
    { id:4, name:'Neha Gupta', roll:'CSE3A004', mac:'A4', totalClasses:20, attended:19, connectedSec:3400, totalClassSec:3600 },
    { id:5, name:'Rohit Yadav', roll:'CSE3A005', mac:'A5', totalClasses:20, attended:12, connectedSec:900, totalClassSec:3600 },
    { id:6, name:'Anjali Tiwari', roll:'CSE3A006', mac:'A6', totalClasses:20, attended:20, connectedSec:3500, totalClassSec:3600 },
    { id:7, name:'Vikram Patel', roll:'CSE3A007', mac:'A7', totalClasses:20, attended:9, connectedSec:800, totalClassSec:3600 },
    { id:8, name:'Sneha Mishra', roll:'CSE3A008', mac:'A8', totalClasses:20, attended:17, connectedSec:2800, totalClassSec:3600 },

    { id:9, name:'Riya Kapoor', roll:'CSE3A009', mac:'A9', totalClasses:20, attended:15, connectedSec:2600, totalClassSec:3600 },
    { id:10, name:'Aakash Jain', roll:'CSE3A010', mac:'A10', totalClasses:20, attended:13, connectedSec:1800, totalClassSec:3600 },
    { id:11, name:'Simran Kaur', roll:'CSE3A011', mac:'A11', totalClasses:20, attended:19, connectedSec:3300, totalClassSec:3600 },
    { id:12, name:'Yash Gupta', roll:'CSE3A012', mac:'A12', totalClasses:20, attended:10, connectedSec:1000, totalClassSec:3600 },
    { id:13, name:'Kunal Arora', roll:'CSE3A013', mac:'A13', totalClasses:20, attended:14, connectedSec:2100, totalClassSec:3600 },
    { id:14, name:'Isha Malhotra', roll:'CSE3A014', mac:'A14', totalClasses:20, attended:18, connectedSec:3000, totalClassSec:3600 },
    { id:15, name:'Dev Sharma', roll:'CSE3A015', mac:'A15', totalClasses:20, attended:11, connectedSec:900, totalClassSec:3600 }
  ],

  // 🔵 CLASS 2
  cse3b: [
    { id:16, name:'Arjun Nair', roll:'CSE3B001', mac:'B1', totalClasses:18, attended:15, connectedSec:3100, totalClassSec:3600 },
    { id:17, name:'Divya Sharma', roll:'CSE3B002', mac:'B2', totalClasses:18, attended:10, connectedSec:1000, totalClassSec:3600 },
    { id:18, name:'Suresh Kumar', roll:'CSE3B003', mac:'B3', totalClasses:18, attended:17, connectedSec:3300, totalClassSec:3600 },
    { id:19, name:'Meera Joshi', roll:'CSE3B004', mac:'B4', totalClasses:18, attended:13, connectedSec:2000, totalClassSec:3600 },
    { id:20, name:'Karan Singh', roll:'CSE3B005', mac:'B5', totalClasses:18, attended:8, connectedSec:700, totalClassSec:3600 },
    { id:21, name:'Pooja Reddy', roll:'CSE3B006', mac:'B6', totalClasses:18, attended:16, connectedSec:3000, totalClassSec:3600 },
    { id:22, name:'Nitin Gupta', roll:'CSE3B007', mac:'B7', totalClasses:18, attended:14, connectedSec:2600, totalClassSec:3600 },
    { id:23, name:'Kavita Das', roll:'CSE3B008', mac:'B8', totalClasses:18, attended:18, connectedSec:3500, totalClassSec:3600 },

    { id:24, name:'Rohit Verma', roll:'CSE3B009', mac:'B9', totalClasses:18, attended:12, connectedSec:1900, totalClassSec:3600 },
    { id:25, name:'Sneha Gupta', roll:'CSE3B010', mac:'B10', totalClasses:18, attended:15, connectedSec:2800, totalClassSec:3600 },
    { id:26, name:'Aman Kapoor', roll:'CSE3B011', mac:'B11', totalClasses:18, attended:11, connectedSec:1600, totalClassSec:3600 },
    { id:27, name:'Neha Singh', roll:'CSE3B012', mac:'B12', totalClasses:18, attended:17, connectedSec:3200, totalClassSec:3600 },
    { id:28, name:'Raj Malhotra', roll:'CSE3B013', mac:'B13', totalClasses:18, attended:9, connectedSec:900, totalClassSec:3600 },
    { id:29, name:'Priyansh Jain', roll:'CSE3B014', mac:'B14', totalClasses:18, attended:13, connectedSec:2100, totalClassSec:3600 },
    { id:30, name:'Tanya Arora', roll:'CSE3B015', mac:'B15', totalClasses:18, attended:16, connectedSec:2900, totalClassSec:3600 }
  ],

  // 🟢 CLASS 3
  cse4a: [
    { id:31, name:'Gaurav Mehta', roll:'CSE4A001', mac:'C1', totalClasses:19, attended:14, connectedSec:2400, totalClassSec:3600 },
    { id:32, name:'Sonal Agarwal', roll:'CSE4A002', mac:'C2', totalClasses:19, attended:18, connectedSec:3200, totalClassSec:3600 },
    { id:33, name:'Deepak Rao', roll:'CSE4A003', mac:'C3', totalClasses:19, attended:9, connectedSec:900, totalClassSec:3600 },
    { id:34, name:'Ananya Pillai', roll:'CSE4A004', mac:'C4', totalClasses:19, attended:17, connectedSec:3000, totalClassSec:3600 },
    { id:35, name:'Manish Tiwari', roll:'CSE4A005', mac:'C5', totalClasses:19, attended:13, connectedSec:2100, totalClassSec:3600 },
    { id:36, name:'Prachi Sharma', roll:'IT3A006', mac:'C6', totalClasses:19, attended:19, connectedSec:3400, totalClassSec:3600 },
    { id:37, name:'Varun Malhotra', roll:'IT3A007', mac:'C7', totalClasses:19, attended:8, connectedSec:800, totalClassSec:3600 },
    { id:38, name:'Neelam Joshi', roll:'IT3A008', mac:'C8', totalClasses:19, attended:16, connectedSec:2900, totalClassSec:3600 },

    { id:39, name:'Ritika Singh', roll:'IT3A009', mac:'C9', totalClasses:19, attended:15, connectedSec:2700, totalClassSec:3600 },
    { id:40, name:'Karan Mehta', roll:'IT3A010', mac:'C10', totalClasses:19, attended:11, connectedSec:1500, totalClassSec:3600 },
    { id:41, name:'Aditi Sharma', roll:'IT3A011', mac:'C11', totalClasses:19, attended:18, connectedSec:3300, totalClassSec:3600 },
    { id:42, name:'Rahul Nair', roll:'IT3A012', mac:'C12', totalClasses:19, attended:12, connectedSec:1800, totalClassSec:3600 },
    { id:43, name:'Simran Kaur', roll:'IT3A013', mac:'C13', totalClasses:19, attended:17, connectedSec:3100, totalClassSec:3600 },
    { id:44, name:'Yash Verma', roll:'IT3A014', mac:'C14', totalClasses:19, attended:10, connectedSec:1000, totalClassSec:3600 },
    { id:45, name:'Isha Kapoor', roll:'IT3A015', mac:'C15', totalClasses:19, attended:14, connectedSec:2200, totalClassSec:3600 }
  ],
    cse5a: [
    { id:31, name:'Gaurav Mehta', roll:'CSE4A001', mac:'C1', totalClasses:19, attended:14, connectedSec:2400, totalClassSec:3600 },
    { id:32, name:'Sonal Agarwal', roll:'CSE4A002', mac:'C2', totalClasses:19, attended:18, connectedSec:3200, totalClassSec:3600 },
    { id:33, name:'Deepak Rao', roll:'CSE4A003', mac:'C3', totalClasses:19, attended:9, connectedSec:900, totalClassSec:3600 },
    { id:34, name:'Ananya Pillai', roll:'CSE4A004', mac:'C4', totalClasses:19, attended:17, connectedSec:3000, totalClassSec:3600 },
    { id:35, name:'Manish Tiwari', roll:'CSE4A005', mac:'C5', totalClasses:19, attended:13, connectedSec:2100, totalClassSec:3600 },
    { id:36, name:'Prachi Sharma', roll:'IT3A006', mac:'C6', totalClasses:19, attended:19, connectedSec:3400, totalClassSec:3600 },
    { id:37, name:'Varun Malhotra', roll:'IT3A007', mac:'C7', totalClasses:19, attended:8, connectedSec:800, totalClassSec:3600 },
    { id:38, name:'Neelam Joshi', roll:'IT3A008', mac:'C8', totalClasses:19, attended:16, connectedSec:2900, totalClassSec:3600 },

    { id:39, name:'Ritika Singh', roll:'IT3A009', mac:'C9', totalClasses:19, attended:15, connectedSec:2700, totalClassSec:3600 },
    { id:40, name:'Karan Mehta', roll:'IT3A010', mac:'C10', totalClasses:19, attended:11, connectedSec:1500, totalClassSec:3600 },
    { id:41, name:'Aditi Sharma', roll:'IT3A011', mac:'C11', totalClasses:19, attended:18, connectedSec:3300, totalClassSec:3600 },
    { id:42, name:'Rahul Nair', roll:'IT3A012', mac:'C12', totalClasses:19, attended:12, connectedSec:1800, totalClassSec:3600 },
    { id:43, name:'Simran Kaur', roll:'IT3A013', mac:'C13', totalClasses:19, attended:17, connectedSec:3100, totalClassSec:3600 },
    { id:44, name:'Yash Verma', roll:'IT3A014', mac:'C14', totalClasses:19, attended:10, connectedSec:1000, totalClassSec:3600 },
    { id:45, name:'Isha Kapoor', roll:'IT3A015', mac:'C15', totalClasses:19, attended:14, connectedSec:2200, totalClassSec:3600 }
  ]

};

export const SIGNALS = ['-41 dBm','-55 dBm','-48 dBm','-62 dBm','-39 dBm','-57 dBm','-44 dBm','-51 dBm','-43 dBm','-59 dBm','-46 dBm','-53 dBm','-60 dBm','-38 dBm','-50 dBm'];

// ── Schedule — sirf DS, OS, DBMS ──
export const SCHEDULE = [
  { id:1,  day:'Monday',    time:'09:00 - 10:00', start:9,  end:10, subject:'Data Structures',    classId:'cse3a', room:'Lab 101',  sub:'ds'   },
  { id:2,  day:'Monday',    time:'11:00 - 12:00', subject:'Operating Systems',  classId:'cse5a', room:'Room 204', sub:'os'   },
  { id:3,  day:'Monday',    time:'14:00 - 15:00', subject:'Database Management',classId:'cse3b', room:'Room 105', sub:'dbms' },
  { id:4,  day:'Tuesday',   time:'10:00 - 11:00', subject:'Data Structures',    classId:'cse3b', room:'Lab 101',  sub:'ds'   },
  { id:5,  day:'Tuesday',   time:'12:00 - 13:00', subject:'Database Management',classId:'it3a',  room:'Room 301', sub:'dbms' },
  { id:6,  day:'Wednesday', time:'09:00 - 10:00', subject:'Operating Systems',  classId:'cse3a', room:'Room 204', sub:'os'   },
  { id:7,  day:'Wednesday', time:'11:00 - 12:00', subject:'Data Structures',    classId:'cse5a', room:'Room 105', sub:'ds'   },
  { id:8,  day:'Thursday',  time:'10:00 - 11:00', subject:'Database Management',classId:'cse5a', room:'Room 204', sub:'dbms' },
  { id:9,  day:'Thursday',  time:'14:00 - 15:00', subject:'Operating Systems',  classId:'cse3b', room:'Room 301', sub:'os'   },
  { id:10, day:'Friday',    time:'09:00 - 10:00', subject:'Data Structures',    classId:'it3a',  room:'Lab 101',  sub:'ds'   },
  { id:11, day:'Friday',    time:'11:00 - 12:00', subject:'Database Management',classId:'cse3a', room:'Room 105', sub:'dbms' },
];

export const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday'];

const TODAY_DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const TODAY = TODAY_DAYS[new Date().getDay()];

export const WEEKLY_REPORT = [
  { week:'Week 1', present:24, absent:6  },
  { week:'Week 2', present:28, absent:2  },
  { week:'Week 3', present:22, absent:8  },
  { week:'Week 4', present:26, absent:4  },
  { week:'Week 5', present:25, absent:5  },
  { week:'Week 6', present:29, absent:1  },
];

export const MONTHLY_TREND = [
  { month:'Jan', pct:82 },
  { month:'Feb', pct:78 },
  { month:'Mar', pct:85 },
  { month:'Apr', pct:91 },
  { month:'May', pct:74 },
  { month:'Jun', pct:88 },
];
