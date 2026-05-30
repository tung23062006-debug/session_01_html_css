import { useState } from "react";

function StringState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px" }}>
      <h2 style={{ color: "#2c3e50", marginTop: 0 }}>📋 Quản lý State: Controlled Input</h2>
      
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Tên của bạn:</label>
        <input 
          type="text"
          value={name}
          maxLength={100} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên..."
          style={inputStyle}
        />
        <p style={{ fontSize: "12px", color: "#7f8c8d", margin: "4px 0 0 0" }}>
          Số ký tự: <strong>{name.length}/100</strong>
        </p>
      </div>
      
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email..."
          style={inputStyle}
        />
        {email && (
          <p style={{ fontSize: "13px", fontWeight: "bold", margin: "4px 0 0 0", color: email.includes("@") ? "#2ecc71" : "#e74c3c" }}>
            {email.includes("@") ? "✓ Email hợp lệ" : "✕ Email chưa đúng định dạng (thiếu @)"}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Mật khẩu:</label>
        <div style={{ display: "flex", gap: "5px" }}>
          <input 
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
            style={{ ...inputStyle, flex: 1 }}
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            style={toggleButtonStyle}
          >
            {showPassword ? "👁️ Ẩn" : "👁️ Hiện"}
          </button>
        </div>
      </div>
      
      <div style={{ background: "#f9f9f9", padding: "12px", borderRadius: "6px", borderLeft: "4px solid #3498db" }}>
        <h4 style={{ margin: "0 0 8px 0" }}>🔍 Xem trước thông tin:</h4>
        <p style={{ margin: "4px 0" }}>Tên: {name || "—"}</p>
        <p style={{ margin: "4px 0" }}>Email: {email || "—"}</p>
        <p style={{ margin: "4px 0" }}>Mật khẩu bí mật: {password ? "••••••••" : "—"}</p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
  width: "100%",
  boxSizing: "border-box"
};

const toggleButtonStyle = {
  padding: "0 15px",
  background: "#ecf0f1",
  border: "1px solid #ccc",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px"
};

export default StringState;