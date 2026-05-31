import { useState } from "react";

function KeyboardEvents() {
    const keysPool = ["A", "S", "D", "F", "W", "E", "R", "G"];
    const [targetKey, setTargetKey] = useState("A");
    const [gameMessage, setGameMessage] = useState("Nhấn phím hiển thị ở dưới để bắt đầu!");
    const [position, setPosition] = useState({ top: 50, left: 50 });
    const [bgColor, setBgColor] = useState("#ffffff");

    function handleGlobalKeyDown(e) {
        const pressedKey = e.key;
        if (e.ctrlKey && (pressedKey === "d" || pressedKey === "D")) {
            e.preventDefault(); 
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            setBgColor(randomColor);
            return; 
        }

        if (pressedKey.toUpperCase() === targetKey) {
            setGameMessage("🎉 Chính xác! Bạn đỉnh quá!");
            const nextIndex = Math.floor(Math.random() * keysPool.length);
            setTargetKey(keysPool[nextIndex]);
        } else {
            if (pressedKey.length === 1) {
                setGameMessage(`❌ Sai rồi! Bạn vừa nhấn "${pressedKey.toUpperCase()}", hãy thử lại!`);
            }
        }

        const step = 15; 
        if (pressedKey === "ArrowUp") {
            e.preventDefault(); 
            setPosition((prev) => ({ ...prev, top: Math.max(0, prev.top - step) }));
        }
        if (pressedKey === "ArrowDown") {
            e.preventDefault();
            setPosition((prev) => ({ ...prev, top: Math.min(120, prev.top + step) }));
        }
        if (pressedKey === "ArrowLeft") {
            setPosition((prev) => ({ ...prev, left: Math.max(0, prev.left - step) }));
        }
        if (pressedKey === "ArrowRight") {
            setPosition((prev) => ({ ...prev, left: Math.min(85, prev.left + step) }));
        }
    }

    return (
        <div
            onKeyDown={handleGlobalKeyDown}
            tabIndex={0} 
            style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginTop: "20px",
                fontFamily: "Arial, sans-serif",
                backgroundColor: bgColor, 
                outline: "none", 
                transition: "background-color 0.3s ease"
            }}
        >
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                ⌨️ Quản lý Sự kiện: Keyboard Events
            </h2>
            <p style={{ color: "#e67e22", fontWeight: "bold", fontSize: "13px" }}>
                ⚠️ LƯU Ý: Click chuột vào khu vực khung này một lần để kích hoạt quyền lắng nghe bàn phím!
            </p>

            <div style={sectionStyle}>
                <h4>1. Trò chơi đoán phím</h4>
                <p style={{ margin: "5px 0" }}>Trạng thái: <strong>{gameMessage}</strong></p>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "10px" }}>
                    <span>Hãy bấm phím:</span>
                    <span style={{
                        fontSize: "24px",
                        background: "#2c3e50",
                        color: "#fff",
                        padding: "5px 15px",
                        borderRadius: "4px",
                        fontWeight: "bold"
                    }}>
                        {targetKey}
                    </span>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4>2. Di chuyển ô vuông (Sử dụng 4 phím mũi tên ↑ ↓ ← →)</h4>
                <div style={gameMapStyle}>
                    <div style={{
                        ...playerSquareStyle,
                        top: `${position.top}px`,
                        left: `${position.left}%`
                    }}>
                        🕹️
                    </div>
                </div>
            </div>

            <div style={{ ...sectionStyle, borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}>
                <h4>3. Phím tắt hệ thống (Hotkeys)</h4>
                <p style={{ margin: 0, background: "#f1f1f1", padding: "10px", borderRadius: "4px", display: "inline-block" }}>
                    ⌨️ Nhấn tổ hợp phím <strong>Ctrl + D</strong> để đổi màu nền ngẫu nhiên cho khung này.
                </p>
            </div>

        </div>
    );
}

const sectionStyle = {
    marginBottom: "20px",
    paddingBottom: "15px",
    borderBottom: "1px dashed #eee"
};

const gameMapStyle = {
    width: "100%",
    height: "160px",
    background: "#eef2f3",
    borderRadius: "6px",
    position: "relative",
    border: "1px solid #ccc",
    overflow: "hidden"
};

const playerSquareStyle = {
    width: "35px",
    height: "35px",
    background: "#e74c3c",
    borderRadius: "6px",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    transition: "all 0.1s ease" 
};

export default KeyboardEvents;