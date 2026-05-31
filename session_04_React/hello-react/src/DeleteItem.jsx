import { useState, useRef } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);

    const [alertMessage, setAlertMessage] = useState("");
    const [recentlyDeleted, setRecentlyDeleted] = useState(null); 

    const timeoutRef = useRef(null);

    function handleDelete(itemToDelete) {
        if (window.confirm(`Bạn có chắc chắn muốn xóa sinh viên "${itemToDelete.name}" không?`)) {

            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setRecentlyDeleted(itemToDelete);
            setAlertMessage(`🗑️ Đã xóa sinh viên: ${itemToDelete.name}`);

            setItems(items.filter(item => item.id !== itemToDelete.id));

            timeoutRef.current = setTimeout(() => {
                setAlertMessage("");
                setRecentlyDeleted(null);
            }, 5000);
        }
    }

    function handleUndo() {
        if (!recentlyDeleted) return;
        setItems([...items, recentlyDeleted]);
        setAlertMessage(`⏪ Đã khôi phục thành công sinh viên: ${recentlyDeleted.name}!`);
        setRecentlyDeleted(null);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setTimeout(() => {
            setAlertMessage("");
        }, 2000);
    }

    function handleDeleteAll() {
        if (window.confirm("CẢNH BÁO: Bạn có chắc chắn muốn xóa TẤT CẢ sinh viên không?")) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setItems([]);
            setRecentlyDeleted(null);
            setAlertMessage("🗑️ Đã xóa toàn bộ danh sách sinh viên.");
            setTimeout(() => setAlertMessage(""), 3000);
        }
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                🗑️ Quản lý Mảng State: Delete Item
            </h2>

            {alertMessage && (
                <div style={{
                    padding: "12px",
                    background: "#fff3cd",
                    color: "#856404",
                    borderRadius: "4px",
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                    border: "1px solid #ffeeba"
                }}>
                    <span>{alertMessage}</span>

                    {recentlyDeleted && (
                        <button
                            onClick={handleUndo}
                            style={undoButtonStyle}
                        >
                            ↩️ Hoàn tác (Trong 5s)
                        </button>
                    )}
                </div>
            )}

            {items.length > 0 && (
                <button onClick={handleDeleteAll} style={deleteAllButtonStyle}>
                    🗑 Xóa tất cả dữ liệu
                </button>
            )}

            {items.length === 0 ? (
                <p style={{ color: "#999", textAlign: "center", fontStyle: "italic", margin: "20px 0" }}>
                    📭 Danh sách trống. Vui lòng reload lại trang hoặc thêm mới sinh viên!
                </p>
            ) : (
                items.sort((a, b) => a.id - b.id).map(item => (
                    <div key={item.id} style={itemRowStyle}>
                        <span>👤 <strong>{item.name}</strong> <span style={{ color: "#aaa", fontSize: "12px" }}>(ID: {item.id})</span></span>
                        <button
                            onClick={() => handleDelete(item)} 
                            style={deleteButtonStyle}
                        >
                            Xóa
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

const itemRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    margin: "6px 0",
    background: "#f9f9f9",
    border: "1px solid #eee",
    borderRadius: "4px"
};

const deleteButtonStyle = {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold"
};

const deleteAllButtonStyle = {
    marginBottom: "15px",
    background: "#c0392b",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px"
};

const undoButtonStyle = {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px"
};

export default DeleteItem;