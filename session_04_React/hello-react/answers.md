Bài 0.1 — Chạy React đầu tiên
1. File .jsx khác gì .js?
- .js: Chỉ viết được code JavaScript thuần túy
- .jsx: Viết được HTML nằm ngay trong JavaScript (như đoạn <div><h1>...</h1></div> mà tôi vừa sửa)
2. Tại sao phải export default App?
Để "xuất khẩu" component App này ra ngoài. Có xuất ra thì file chính của dự án (main.jsx) mới "nhập khẩu" (import) và hiển thị nó lên màn hình trình duyệt được
3. Thử xóa export default → Chuyện gì xảy ra?
- Web sẽ bị lỗi và sập ngay lập tức (màn hình trắng/đen)
- Vì file chính không tìm thấy component App đâu để hiển thị nữa

Bài 1.1 — Component render lần đầu
1. Tại sao chỉ render 1 lần?
- Vì đây là component tĩnh.Nó chỉ chứa HTML cố định,không có dữ liệu gì thay đổi nên React vẽ đúng 1 lần rồi dừng
2. Khi nào nó sẽ render lại?
- Chỉ khi gặp 1 trong 3 lý do sau:
+ State thay đổi: Dữ liệu bên trong nó thay đổi 
+ Props thay đổi: Cấp trên (component cha) truyền dữ liệu mới vào cho nó
+ Component cha render lại: Thằng cha vẽ lại thì kéo theo thằng con cũng vẽ lại

Bài 1.2 — Biến "bình thường" vs useState
1. Chạy BadCounter: Số trên màn hình bị đơ (luôn là 0), dù log console vẫn tăng.
2. Chạy GoodCounter: Số trên màn hình tăng theo mỗi lần bấm (1, 2, 3...).

3.Số lần Log "render" xuất hiện
- BadCounter: Đúng 1 lần duy nhất lúc mở trang
- GoodCounter: Mỗi lần bấm nút thêm 1 lần log (bấm bao nhiêu lần, render bấy nhiêu lần)
