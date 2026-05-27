Bài 0.1 — Chạy React đầu tiên
1. File .jsx khác gì .js?
- .js: Chỉ viết được code JavaScript thuần túy
- .jsx: Viết được HTML nằm ngay trong JavaScript (như đoạn <div><h1>...</h1></div> mà tôi vừa sửa)
2. Tại sao phải export default App?
Để "xuất khẩu" component App này ra ngoài. Có xuất ra thì file chính của dự án (main.jsx) mới "nhập khẩu" (import) và hiển thị nó lên màn hình trình duyệt được
3. Thử xóa export default → Chuyện gì xảy ra?
- Web sẽ bị lỗi và sập ngay lập tức (màn hình trắng/đen)
- Vì file chính không tìm thấy component App đâu để hiển thị nữa

Bài 0.2 — JSX là HTML "xịn hơn"
Bài 1: Viết component UserProfile