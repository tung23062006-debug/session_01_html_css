import { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [focusedInput, setFocusedInput] = useState("");

    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
    }

    function saveEdit() {
        if (editName.trim() === "") {
            alert("Tên sinh viên không được để trống!");
            return;
        }
        if (editAge === "" || parseInt(editAge) <= 0) {
            alert("Tuổi không hợp lệ!");
            return;
        }

        setItems(items.map(item =>
            item.id === editingId
                ? { ...item, name: editName.trim(), age: parseInt(editAge) }
                : item
        ));

        setSuccessMessage(`✅ Đã lưu thay đổi của sinh viên: ${editName.trim()}!`);
        setTimeout(() => {
            setSuccessMessage("");
        }, 2000);

        setEditingId(null); 
        setFocusedInput(""); 
    }
    function cancelEdit() {
        setEditingId(null);
        setFocusedInput("");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                ✏️ Quản lý Mảng State: Update Item
            </h2>

            {successMessage && (
                <div style={{ padding: "10px", background: "#d4edda", color: "#155724", borderRadius: "4px", marginBottom: "15px", fontWeight: "bold", fontSize: "14px" }}>
                    {successMessage}
                </div>
            )}

            <h3>Danh sách sinh viên</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {items.map(item => (
                    <div key={item.id} style={{
                        padding: "12px",
                        background: editingId === item.id ? "#ebf5fb" : "#f9f9f9", 
                        borderRadius: "6px",
                        border: "1px solid #eee",
                        transition: "all 0.2s ease"
                    }}>
                        {editingId === item.id ? (
                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

                                <input
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    onFocus={() => setFocusedInput("name")}
                                    onBlur={() => setFocusedInput("")}
                                    autoFocus
                                    style={{
                                        ...inputStyle,
                                        borderColor: focusedInput === "name" ? "#3498db" : "#ccc",
                                        boxShadow: focusedInput === "name" ? "0 0 5px rgba(52, 152, 219, 0.4)" : "none"
                                    }}
                                />

                                <input
                                    type="number"
                                    value={editAge}
                                    onChange={(e) => setEditAge(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    onFocus={() => setFocusedInput("age")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{
                                        ...inputStyle,
                                        width: "70px",
                                        borderColor: focusedInput === "age" ? "#3498db" : "#ccc",
                                        boxShadow: focusedInput === "age" ? "0 0 5px rgba(52, 152, 219, 0.4)" : "none"
                                    }}
                                />

                                <button onClick={saveEdit} style={saveButtonStyle}>✓ Lưu</button>
                                <button onClick={cancelEdit} style={cancelButtonStyle}>✕ Hủy</button>
                            </div>
                        ) : (
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span>👤 <strong>{item.name}</strong> — {item.age} tuổi</span>
                                <button onClick={() => startEdit(item)} style={editButtonStyle}>
                                    ✏️ Sửa
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

const inputStyle = {
    padding: "6px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s ease"
};

const editButtonStyle = {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px"
};

const saveButtonStyle = {
    background: "#27ae60",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px"
};

const cancelButtonStyle = {
    background: "#95a5a6",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px"
};

export default UpdateItem;