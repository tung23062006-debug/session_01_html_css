function SimpleVariables() {
    const ten = "Cao Thanh Tùng";
    const tuoi = 20;
    const queQuan = "Hà Nội";
    const gio = new Date().getHours();
    const canNang = 68; 
    const chieuCao = 1.74; 
    const bmi = canNang / (chieuCao * chieuCao);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Thông tin cá nhân</h2>
            <p>Tên: {ten}</p>
            <p>Tuổi: {tuoi}</p>
            <p>Quê quán: {queQuan}</p>
            <hr />

            <h2>Lời chào theo thời gian</h2>
            <p>
                {gio < 12 ? "Chào buổi sáng!" : gio < 18 ? "Chào buổi chiều!" : "Chào buổi tối!"}
            </p>
            <hr />

            <h2>Chỉ số cơ thể (BMI)</h2>
            <p>Cân nặng: {canNang}kg | Chiều cao: {chieuCao}m</p>
            <p>Chỉ số BMI của bạn: <strong>{bmi.toFixed(1)}</strong></p>
        </div>
    );
}

export default SimpleVariables;