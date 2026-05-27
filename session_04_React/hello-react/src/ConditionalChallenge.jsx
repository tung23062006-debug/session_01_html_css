function ConditionalChallenge() {
    const isOnline = true;
    const isLoggedIn = true;
    const stock = 0;

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Trạng thái: {isOnline ? "🟢 Online" : "🔴 Offline"}</h2>

            <hr />
            <h2>Hệ thống</h2>
            {isLoggedIn && (
                <ul style={{ background: "#f0f0f0", padding: "15px", listStyle: "none" }}>
                    <li>👤 Trang cá nhân</li>
                    <li>⚙️ Cài đặt</li>
                    <li>🚪 Đăng xuất</li>
                </ul>
            )}
            <hr />

            <h2>Sản phẩm</h2>
            <p>Số lượng kho: {stock}</p>
            {stock === 0 && (
                <span style={{ color: "red", fontWeight: "bold", border: "1px solid red", padding: "2px 5px" }}>
                    Hết hàng
                </span>
            )}
        </div>
    );
}

export default ConditionalChallenge;