import { useState } from "react";

function InputEvents() {
    const [email, setEmail] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);
        const words = value.trim().split(/\s+/);
        const count = value.trim() === "" ? 0 : words.length;
        setWordCount(count);
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                ⌨️ Quản lý Sự kiện: Input Events
            </h2>

            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                    Nhập Email của bạn:
                </label>

                <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange} 
                    onFocus={() => setIsFocused(true)} 
                    onBlur={() => setIsFocused(false)} 
                    placeholder="Ví dụ: minh@example.com"
                    style={{
                        ...inputStyle,
                        borderColor: isFocused ? "#3498db" : "#ccc",
                        boxShadow: isFocused ? "0 0 5px rgba(52, 152, 219, 0.3)" : "none"
                    }}
                />
            </div>

            <p style={{ fontSize: "14px", margin: "5px 0" }}>
                📊 Số từ đã nhập: <strong style={{ color: "#2980b9" }}>{wordCount}</strong> từ
            </p>

            <div style={{ margin: "10px 0" }}>
                {email && (
                    <span style={{
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "white",
                        background: email.includes("@") ? "#2ecc71" : "#e74c3c"
                    }}>
                        {email.includes("@") ? "✓ Email hợp lệ (Có chứa @)" : "✕ Email không hợp lệ (Thiếu ký tự @)"}
                    </span>
                )}
            </div>

            <div style={{ marginTop: "20px", background: "#f9f9f9", padding: "12px", borderRadius: "6px", borderLeft: "4px solid #3498db" }}>
                <h4 style={{ margin: "0 0 5px 0", color: "#7f8c8d" }}>👀 Preview kết quả:</h4>
                <p style={{ margin: 0, fontSize: "15px" }}>
                    Bạn đang nhập: <strong>{email || "(chưa nhập gì)"}</strong>
                </p>
            </div>
        </div>
    );
}

const inputStyle = {
    padding: "10px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    width: "100%",
    maxWidth: "400px",
    boxSizing: "border-box",
    outline: "none",
    transition: "all 0.2s ease"
};

export default InputEvents;