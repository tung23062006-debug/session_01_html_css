import { useState } from "react";

function MultipleStates() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState(""); 
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit() {
        if (name.trim() === "" || age === "" || email.trim() === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        const ageNum = Number(age);
        if (ageNum <= 0 || ageNum >= 100) {
            alert("Tuổi nhập vào không hợp lệ! Tuổi phải lớn hơn 0 và nhỏ hơn 100.");
            return;
        }
        if (!email.includes("@")) {
            alert("Email không hợp lệ! Thiếu ký tự '@'.");
            return;
        }

        setSubmitted(true);
    }

    function handleReset() {
        setName("");
        setAge("");
        setEmail("");
        setIsStudent(false);
        setSubmitted(false);
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                📝 Form Đăng Ký Thành Viên
            </h2>
            {name.trim() && (
                <h3 style={{ color: "#2ecc71", margin: "10px 0" }}>
                    👋 Xin chào {name}!
                </h3>
            )}

            {!submitted ? (
                <div style={{ maxWidth: "400px" }}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Tên: </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={inputStyle}
                            placeholder="Nhập họ và tên..."
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Tuổi: </label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            style={inputStyle}
                            placeholder="Nhập số tuổi..."
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Email: </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                            placeholder="example@gmail.com"
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ cursor: "pointer", userSelect: "none" }}>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => setIsStudent(e.target.checked)}
                                style={{ marginRight: "8px" }}
                            />
                            Là sinh viên
                        </label>
                    </div>

                    <button onClick={handleSubmit} style={submitButtonStyle}>Đăng ký</button>
                </div>
            ) : (
                <div style={{ background: "#d4edda", color: "#155724", padding: "15px", borderRadius: "4px", border: "1px solid #c3e6cb" }}>
                    <h3 style={{ marginTop: 0 }}>🎉 Đăng ký thành công!</h3>
                    <p><strong>Tên:</strong> {name}</p>
                    <p><strong>Tuổi:</strong> {age}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Sinh viên:</strong> {isStudent ? "Có" : "Không"}</p>
                    <button onClick={handleReset} style={resetButtonStyle}>Đăng ký lại</button>
                </div>
            )}
        </div>
    );
}

const inputGroupStyle = {
    marginBottom: "12px"
};

const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold"
};

const inputStyle = {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box"
};

const submitButtonStyle = {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    width: "100%"
};

const resetButtonStyle = {
    background: "#6c757d",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px"
};

export default MultipleStates;