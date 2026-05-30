import PriceTag from "./PriceTag"; 

function UserCard({ name, email, avatar, originalPrice, salePrice }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      width: "220px",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      fontFamily: "Arial, sans-serif"
    }}>
      <img src={avatar} alt={name} style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
      <h3 style={{ margin: "10px 0 5px 0" }}>{name}</h3>
      <p style={{ color: "#666", margin: "0 0 10px 0", fontSize: "14px" }}>{email}</p>
      
      <PriceTag originalPrice={originalPrice} salePrice={salePrice} />
    </div>
  );
}

export default UserCard;