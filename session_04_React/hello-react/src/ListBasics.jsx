import { useState } from "react";

function ListBasics() {
    const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);

    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                📊 Quản lý Danh sách: List Basics
            </h2>

            <h3>Danh sách trái cây</h3>
            <ul style={{ paddingLeft: "20px" }}>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <h3>Danh sách sinh viên</h3>
            <div>
                {students.map((student, index) => (
                    <div
                        key={student.id}
                        style={{
                            padding: "10px",
                            margin: "8px 0",
                            background: "#f9f9f9",
                            borderRadius: "4px",
                            borderLeft: "4px solid #ccd1d1",
                            color: student.age >= 20 ? "#27ae60" : "#333",
                            fontWeight: student.age >= 20 ? "bold" : "normal"
                        }}
                    >
                        <span>[{index + 1}] </span>
                        <span>{student.name} — {student.age} tuổi</span>

                        {student.age >= 20 && <span style={{ fontSize: "12px", marginLeft: "10px", fontStyle: "italic" }}>(Tuổi gặt hái thành công 🟢)</span>}
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: "15px",
                padding: "12px",
                background: "#e8f8f5",
                color: "#117a65",
                borderRadius: "6px",
                fontWeight: "bold"
            }}>
                📈 Độ tuổi trung bình của sinh viên: {averageAge.toFixed(1)} tuổi
            </div>
        </div>
    );
}

export default ListBasics;