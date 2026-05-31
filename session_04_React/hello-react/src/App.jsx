import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import UserProfile from "./profile";
import ProductInfo from "./ProductInfo";
import SimpleVariables from "./SimpleVariables";
import ListRendering from "./ListRendering";
import ConditionalChallenge from "./ConditionalChallenge";
import StringState from "./StringState";
import BooleanState from "./BooleanState";
import MultipleStates from "./MultipleStates";
import ClickEvents from "./ClickEvents";
import InputEvents from "./InputEvents";
import KeyboardEvents from "./KeyboardEvents";
import FormEvents from "./FormEvents";
import ListBasics from "./ListBasics";
import CreateItem from "./CreateItem";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
  const products = [
    { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=200" },
    { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200" },
    { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200" }
  ];

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo() {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      done: false
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.done).length;
  const completedCount = todos.filter(todo => todo.done).length;

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

        <div style={{ marginTop: "40px", borderTop: "2px solid #eee", paddingTop: "30px", maxWidth: "500px", margin: "40px auto 0 auto" }}>
          <h2 style={{ textAlign: "center", color: "#2c3e50" }}>📋 Todo List App</h2>

          <div style={{ display: "flex", marginBottom: "20px" }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập công việc..."
              style={{
                flex: 1, padding: "10px", fontSize: "16px",
                border: "2px solid #ddd", borderRadius: "4px 0 0 4px", outline: "none"
              }}
            />
            <button
              onClick={addTodo}
              style={{
                padding: "10px 20px", fontSize: "16px", background: "#3498db",
                color: "white", border: "none", borderRadius: "0 4px 4px 0", cursor: "pointer"
              }}
            >
              Thêm
            </button>
          </div>
          <TodoFilter filter={filter} setFilter={setFilter} />

          {filteredTodos.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#999", background: "#f9f9f9", borderRadius: "4px" }}>
              {todos.length === 0 ? "📝 Chưa có công việc nào" : "Không có công việc phù hợp"}
            </div>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}

          {todos.length > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px", padding: "10px", background: "#f9f9f9", borderRadius: "4px", fontSize: "14px", fontWeight: "bold" }}>
              <span>{activeCount} việc chưa hoàn thành</span>
              {completedCount > 0 && (
                <span style={{ color: "#27ae60" }}>{completedCount} việc đã xong</span>
              )}
            </div>
          )}
        </div>

        <div style={{ marginTop: "40px", borderTop: "2px solid #eee", paddingTop: "30px" }}>
          <h2 style={{ textAlign: "center", color: "#7f8c8d" }}>📚 Ôn tập Tier 0 - Tier 2</h2>
          <UserProfile />
          <ProductInfo />
          <SimpleVariables />
          <ListRendering />
          <ConditionalChallenge />
          <StringState />
          <BooleanState />
          <MultipleStates />
          <ClickEvents />
          <InputEvents />
          <KeyboardEvents />
          <FormEvents />
          <ListBasics />
          <CreateItem />
          <DeleteItem />
          <UpdateItem />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;