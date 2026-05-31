import { useState, useRef } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" }
    ]);
    const [newName, setNewName] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const inputRef = useRef(null);

    function handleAdd() {
        if (newName.trim() === "") {
            alert("Tên môn học không được để trống!");
            return;
        }

        const newItem = {
            id: Date.now(), 
            name: newName
        };

        setItems([...items, newItem]);

        setNewName("");

        setSuccessMessage(`🎉 Đã thêm thành công môn: ${newName}!`);
        setTimeout(() => {
            setSuccessMessage("");
        }, 2500);

        inputRef.current.focus();
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleAdd();
        }
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                ➕ Quản lý Mảng State: Create Item
            </h2>

            {successMessage && (
                <div style={{ padding: "10px", background: "#d4edda", color: "#155724", borderRadius: "4px", marginBottom: "15px", fontWeight: "bold", fontSize: "14px" }}>
                    {successMessage}
                </div>
            )}

            <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
                <input
                    ref={inputRef} 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={handleKeyDown} 
                    placeholder="Nhập tên môn học..."
                    style={inputStyle}
                />
                <button onClick={handleAdd} style={buttonStyle}>
                    ➕ Thêm vào cuối
                </button>
            </div>

            <h3>Danh sách khóa học ({items.length} môn):</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {items.map(item => (
                    <div key={item.id} style={itemStyle}>
                        📚 {item.name}
                        <span style={{ fontSize: "11px", color: "#aaa", fontStyle: "italic" }}> (ID: {item.id})</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const inputStyle = {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    width: "250px",
    outline: "none"
};

const buttonStyle = {
    padding: "8px 16px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px"
};

const itemStyle = {
    padding: "10px",
    borderBottom: "1px solid #eee",
    background: "#fdfefe",
    borderRadius: "4px"
};

export default CreateItem;