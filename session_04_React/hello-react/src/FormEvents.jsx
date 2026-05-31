import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "" 
    });

    const [errors, setErrors] = useState({
        email: "",
        confirmPassword: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        const updatedData = {
            ...formData,
            [name]: value
        };
        setFormData(updatedData);

        if (name === "email") {
            if (value && !value.includes("@")) {
                setErrors((prev) => ({ ...prev, email: "✕ Email phải có ký tự '@'!" }));
            } else {
                setErrors((prev) => ({ ...prev, email: "" }));
            }
        }

        if (name === "confirmPassword") {
            if (value !== formData.password) {
                setErrors((prev) => ({ ...prev, confirmPassword: "✕ Mật khẩu xác nhận không trùng khớp!" }));
            } else {
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }
        }

        if (name === "password") {
            if (formData.confirmPassword && value !== formData.confirmPassword) {
                setErrors((prev) => ({ ...prev, confirmPassword: "✕ Mật khẩu xác nhận không trùng khớp!" }));
            } else {
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }
        }
    }

    function handleSubmit(event) {
        event.preventDefault(); 

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            alert("Vui lòng điền đầy đủ tất cả các trường!");
            return;
        }

        if (errors.email || errors.confirmPassword) {
            alert("Vui lòng sửa các lỗi đỏ trước khi gửi form!");
            return;
        }

        setSubmitted(true);
    }

    function handleReset() {
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setErrors({ email: "", confirmPassword: "" });
        setSubmitted(false);
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#2c3e50", marginTop: 0, borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
                📋 Quản lý Sự kiện: Form Events
            </h2>

            {!submitted ? (
                <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Tên người dùng:</label>
                        <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Nhập tên..."
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Email đăng ký:</label>
                        <input
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ ...inputStyle, borderColor: errors.email ? "#e74c3c" : "#ccc" }}
                            placeholder="example@gmail.com"
                        />
                        {errors.email && <p style={errorTextStyle}>{errors.email}</p>}
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Mật khẩu:</label>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Nhập mật khẩu..."
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Xác nhận mật khẩu:</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={{ ...inputStyle, borderColor: errors.confirmPassword ? "#e74c3c" : "#ccc" }}
                            placeholder="Nhập lại mật khẩu..."
                        />
                        {errors.confirmPassword && <p style={errorTextStyle}>{errors.confirmPassword}</p>}
                    </div>
                    <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                        <button type="submit" style={submitButtonStyle}>Đăng ký</button>
                        <button type="button" onClick={handleReset} style={resetButtonStyle}>Xóa sạch</button>
                    </div>

                </form>
            ) : (
                <div style={{ background: "#d4edda", color: "#155724", padding: "15px", borderRadius: "4px", border: "1px solid #c3e6cb" }}>
                    <h3 style={{ marginTop: 0 }}>🎉 Tài khoản đã khởi tạo thành công!</h3>
                    <p><strong>Tên:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Mật khẩu bảo mật:</strong> ••••••••</p>
                    <button onClick={handleReset} style={submitButtonStyle}>Tạo tài khoản khác</button>
                </div>
            )}
        </div>
    );
}

const inputGroupStyle = {
    marginBottom: "15px"
};

const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "14px"
};

const inputStyle = {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none"
};

const errorTextStyle = {
    color: "#e74c3c",
    fontSize: "12px",
    margin: "4px 0 0 0",
    fontWeight: "bold"
};

const submitButtonStyle = {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold"
};

const resetButtonStyle = {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold"
};

export default FormEvents;