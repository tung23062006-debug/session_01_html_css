import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import UserProfile from "./profile";
import ProductInfo from "./ProductInfo";
import SimpleVariables from "./SimpleVariables";
import ListRendering from "./ListRendering";
import ConditionalChallenge from "./ConditionalChallenge"

function App() {
  const products = [
    { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=200" },
    { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200" },
    { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200" }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>
      <Header />
      <main style={{ padding: "20px 0" }}>
        <h2 style={{ textAlign: "center", color: "#2c3e50" }}>📱 Danh sách điện thoại</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {/* THỬ THÁCH 3: HIỂN THỊ 3 USER CARD VỚI PRICE TAG VỪA TÁCH  */}
        <h2 style={{ textAlign: "center", color: "#2c3e50", marginTop: "40px" }}>👥 Khách hàng thành viên</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <UserCard
            name="Nguyễn Văn Minh"
            email="minh@gmail.com"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Minh"
            originalPrice={500000}
            salePrice={350000}
          />
          <UserCard
            name="Trần Thị An"
            email="an@gmail.com"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=An"
            originalPrice={1000000}
            salePrice={790000}
          />
          <UserCard
            name="Lê Hoàng Linh"
            email="linh@gmail.com"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Linh"
            originalPrice={300000}
            salePrice={150000}
          />
        </div>

        <div style={{ marginTop: "5px", borderTop: "2px solid #eee", paddingTop: "30px" }}>
          <h2 style={{ textAlign: "center", color: "#7f8c8d" }}>📚 Ôn tập Tier 0 - Tier 2</h2>
          <UserProfile />
          <ProductInfo />
          <SimpleVariables />
          <ListRendering />
          <ConditionalChallenge />
        </div>
      </main>
      <Footer />

    </div>
  );
}

export default App;