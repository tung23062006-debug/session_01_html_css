import { useState } from "react";

function BooleanState() {
    const [showPassword, setShowPassword] = useState(false); 
    const [isAccordionOpen, setIsAccordionOpen] = useState(false); 
    const [isLightOn, setIsLightOn] = useState(false); 

    const [password, setPassword] = useState("12345678");

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                💡 Quản lý State: Boolean Toggle
            </h2>

            <div style={sectionStyle}>
                <h4>1. Nút "Hiện/Ẩn mật khẩu"</h4>
                <div style={{ display: "flex", gap: "5px", maxWidth: "300px" }}>
                    <input
                        type={showPassword ? "text" : "password"} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} 
                        style={buttonStyle}
                    >
                        {showPassword ? " Ẩn" : " Hiện"}
                    </button>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4>2. Khối Accordion Đóng/Mở</h4>
                <div style={{ border: "1px solid #ccc", borderRadius: "4px", maxWidth: "400px", overflow: "hidden" }}>
                    <div
                        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                        style={{
                            background: "#f1f1f1",
                            padding: "10px 15px",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "between",
                            alignItems: "center",
                            userSelect: "none",
                            fontWeight: "bold"
                        }}
                    >
                        <span style={{ flex: 1 }}> Click vào đây để xem câu trả lời</span>
                        <span>{isAccordionOpen ? "🔼" : "🔽"}</span>
                    </div>

                    {isAccordionOpen && (
                        <div style={{ padding: "15px", background: "#fff", borderTop: "1px solid #ccc", lineHeight: "1.5" }}>
                            🎉 Chúc mừng bạn! Bạn đã kích hoạt thành công trạng thái hiển thị của khối nội dung bằng toán tử điều kiện và state Boolean.
                        </div>
                    )}
                </div>
            </div>

            <div style={sectionStyle}>
                <h4>3. Bật/Tắt bóng đèn</h4>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{
                        fontSize: "50px",
                        filter: isLightOn ? "drop-shadow(0 0 15px #f1c40f)" : "grayscale(100%)",
                        opacity: isLightOn ? 1 : 0.4,
                        transition: "all 0.3s ease"
                    }}>
                        💡
                    </div>

                    <button
                        onClick={() => setIsLightOn(!isLightOn)}
                        style={{
                            ...buttonStyle,
                            background: isLightOn ? "#e74c3c" : "#2ecc71",
                            color: "white",
                            padding: "10px 20px"
                        }}
                    >
                        {isLightOn ? "🔴 TẮT ĐÈN" : "🟢 BẬT ĐÈN"}
                    </button>
                </div>
            </div>

        </div>
    );
}

// --- Styles bổ trợ ---
const sectionStyle = {
    marginBottom: "25px",
    paddingBottom: "15px",
    borderBottom: "1px dashed #eee"
};

const inputStyle = {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    flex: 1
};

const buttonStyle = {
    padding: "8px 15px",
    background: "#ecf0f1",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold"
};

export default BooleanState;