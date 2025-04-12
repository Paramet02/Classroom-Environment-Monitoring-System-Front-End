import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    // --- จำลองการตรวจสอบการล็อกอินด้วยอีเมล (แทนที่ด้วย API จริง) ---
    try {
      // ตรวจสอบข้อมูลผู้ใช้ในฐานข้อมูล (สมมติว่ามีฟังก์ชัน `verifyUser`)
      const user = await verifyUser(email, password);
      if (user) {
        // ล็อกอินสำเร็จ พาไปยังหน้า Home
        navigate('/home');
      } else {
        setLoginError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการล็อกอิน:', error);
      setLoginError('เกิดข้อผิดพลาดในการล็อกอิน');
    }
    // ------------------------------------------------------------
  };

  const handleGoogleLogin = () => {
    // --- ขั้นตอนการล็อกอินด้วย Google OAuth (ต้องมีการตั้งค่าฝั่ง Client และ Server) ---
    // 1. Redirect ผู้ใช้ไปยังหน้าล็อกอินของ Google
    // 2. Google จะ Redirect กลับมาพร้อมกับข้อมูลผู้ใช้ (authorization code หรือ token)
    // 3. ส่งข้อมูลนี้ไปยัง Server ของคุณเพื่อตรวจสอบและสร้าง Session
    // 4. หากสำเร็จ พาไปยังหน้า Home
    alert('ระบบล็อกอินด้วย Google ยังไม่พร้อมใช้งาน'); // แทนที่ด้วยการทำงานจริง
    // ------------------------------------------------------------------------
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
        <div className="form-container">
      <h2>เข้าสู่ระบบ</h2>
      {loginError && <p className="error-message">{loginError}</p>}

      <form onSubmit={handleEmailLogin}>
        <div className="form-group">
          <label htmlFor="email">อีเมล:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">รหัสผ่าน:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button">เข้าสู่ระบบด้วยอีเมล</button>
      </form>

      <div className="separator">
        <span>หรือ</span>
      </div>

      <button onClick={handleGoogleLogin} className="google-login-button">
        เข้าสู่ระบบด้วยบัญชี Google
      </button>

      <p className="signup-link">
        ยังไม่มีบัญชี? <button onClick={handleSignupClick}>สมัครสมาชิก</button>
      </p>
      </div>
    </div>
  );
}

// --- ฟังก์ชันจำลองการตรวจสอบผู้ใช้ (แทนที่ด้วยการเรียก API จริง) ---
async function verifyUser(email, password) {
  // ในการใช้งานจริง คุณจะต้องส่งข้อมูลไปยัง Server เพื่อตรวจสอบกับฐานข้อมูล
  // และอาจใช้ bcrypt หรือฟังก์ชันเข้ารหัสอื่น ๆ ในการเปรียบเทียบรหัสผ่าน

  // ตัวอย่างข้อมูลผู้ใช้ที่สมมติขึ้น
  const users = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'test@test.com', password: 'testpassword' },
  ];

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  return foundUser; // คืนค่า object ผู้ใช้หากพบ ไม่พบคืนค่า undefined
}



export default Login;