// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import './App.css';
// import Dashboard from './components/Dashboard';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import Setting from './components/Setting';
// import InfoTemp from './components/InfoTemp'; // เพิ่ม import InfoTemp
// import profileImage from './assets/Picture/Logo.png';

// function App() {
//   return (
//     <Router>
//       <div className="Bar-Header">
//       <header>
//         <Link to="/home" >
//           <div className="logo">
//             <img src={profileImage} alt="Logo" />
//           </div>
//           </Link>
//           <nav>
//             <Link to="/home" className="nav-link">Home</Link>
//             <Link to="/dashboard" className="nav-link">Dashboard</Link>
//             <Link to="/profile" className="nav-link">Profile</Link>
//             <Link to="/setting" className="nav-link">Setting</Link>
//           </nav>
//         </header>
//       </div>
//       <div className="app-container">
//         <main>
//           <Routes>
//             <Route path="/home" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/setting" element={<Setting />} />
//             <Route path="/info-temp" element={<InfoTemp />} /> {/* เพิ่ม Route InfoTemp */}
//             <Route path="/" element={<Navigate to="/Home" replace />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // เพิ่ม Navigate
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Setting from './components/Setting';
import Manage from './components/Manage';
import Appset from './components/Appset';
import Changepass from './components/Changepass';
import Editprofile from './components/Editprofile';


import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} /> {/* เปลี่ยนเส้นทางหน้าแรกเป็น /dashboard */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/appset" element={<Appset />} />
          <Route path="/changepass" element={<Changepass />} />
          <Route path="/editprofile" element={<Editprofile />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;