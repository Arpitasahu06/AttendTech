// import './Topbar.css';
// import { useState, useEffect } from "react";  
// import { useTheme } from "../Context/ThemeContext";
// import { useAuth } from "../Context/AuthContext";

// const Topbar =({toggleTheme,theme}) =>{
    


// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <span>{time.toLocaleTimeString()}</span>;
// }


//     return (
//         <div className="topbar">
//            <div className="clock">
//         <Clock />
//       </div>
//             <div className="mode" onClick={toggleTheme} >{theme==='light'?'🌙':'☀️'}</div>
//             <div className="icon">B</div>
//         </div>
//     )
// }
// export default Topbar;import './Topbar.css';
// // import { useState, useEffect } from "react";  
// // import { useTheme } from "../Context/ThemeContext";
// // import { useAuth } from "../Context/AuthContext";

// // const Topbar = () => {
// //   const { theme, toggleTheme } = useTheme();
// //   const { user } = useAuth();

// //   function Clock() {
// //     const [time, setTime] = useState(new Date());

// //     useEffect(() => {
// //       const interval = setInterval(() => {
// //         setTime(new Date());
// //       }, 1000);
// //       return () => clearInterval(interval);
// //     }, []);

// //     return <span>{time.toLocaleTimeString()}</span>;
// //   }

// //   return (
// //     <div className="topbar">
// //       <div className="clock">
// //         <Clock />
// //       </div>
// //       <div className="mode" onClick={toggleTheme}>
// //         {theme === 'light' ? '🌙' : '☀️'}
// //       </div>
// //       <div className="icon">{user.avatar}</div>
// //     </div>
// //   );
// // };

// // export default Topbar;
import './Topbar.css';
import { useState, useEffect } from "react";

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
      <div className="icon">B</div>
    </div>
  );
};

export default Topbar;
