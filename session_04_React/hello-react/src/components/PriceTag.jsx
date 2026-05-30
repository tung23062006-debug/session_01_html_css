function PriceTag({ originalPrice, salePrice }) {
    return (
        <div style={{ background: "#f9f9f9", padding: "8px", borderRadius: "4px", marginTop: "10px" }}>
            <span style={{ textDecoration: "line-through", color: "#999", marginRight: "10px", fontSize: "14px" }}>
                {originalPrice.toLocaleString("vi-VN")}đ
            </span>
            <span style={{ color: "red", fontWeight: "bold" }}>
                {salePrice.toLocaleString("vi-VN")}đ
            </span>
        </div>
    );
}

export default PriceTag;