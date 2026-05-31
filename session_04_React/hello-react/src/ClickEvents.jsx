import { useState } from "react";

function ClickEvents() {
    const [bgColor, setBgColor] = useState("#3498db"); 
    const [countA, setCountA] = useState(0); 
    const [countB, setCountB] = useState(0); 
    const [isLiked, setIsLiked] = useState(false); 

    function handleRandomColor() {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randomColor);
    }

    function handleToggleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                🖱️ Quản lý Sự kiện: Click Events
            </h2>

            <div style={sectionStyle}>
                <h4>1. Đổi màu nền ngẫu nhiên</h4>
                <div style={{
                    ...colorBoxStyle,
                    backgroundColor: bgColor
                }}>
                    Màu hiện tại: <strong>{bgColor.toUpperCase()}</strong>
                </div>
                <button onClick={handleRandomColor} style={buttonStyle}>
                    🎨 Đổi màu ngẫu nhiên
                </button>
            </div>

            <div style={sectionStyle}>
                <h4>2. Đếm số lần click riêng biệt</h4>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div>
                        <button onClick={() => setCountA(countA + 1)} style={buttonStyle}>
                            Nút A
                        </button>
                        <p style={{ margin: "5px 0 0 0", fontSize: "14px" }}>Đã click: <strong>{countA}</strong> lần</p>
                    </div>

                    <div>
                        <button onClick={() => setCountB(countB + 1)} style={buttonStyle}>
                            Nút B
                        </button>
                        <p style={{ margin: "5px 0 0 0", fontSize: "14px" }}>Đã click: <strong>{countB}</strong> lần</p>
                    </div>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4>3. Nút "Like" với icon tương tác</h4>
                <button
                    onClick={handleToggleLike}
                    style={{
                        ...buttonStyle,
                        background: isLiked ? "#fff0f0" : "#fff",
                        borderColor: isLiked ? "#e74c3c" : "#ccc",
                        color: isLiked ? "#e74c3c" : "#333",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                    }}
                >
                    <span style={{ fontSize: "18px" }}>{isLiked ? "❤️" : "🤍"}</span>
                    <strong>{isLiked ? "Đã thích" : "Thích"}</strong>
                </button>
            </div>

        </div>
    );
}

const sectionStyle = {
    marginBottom: "25px",
    paddingBottom: "15px",
    borderBottom: "1px dashed #eee"
};

const colorBoxStyle = {
    width: "100%",
    maxWidth: "300px",
    height: "80px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
    marginBottom: "10px",
    transition: "background-color 0.2s ease"
};

const buttonStyle = {
    padding: "8px 16px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
};

export default ClickEvents;