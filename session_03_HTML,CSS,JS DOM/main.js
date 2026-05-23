const btnThem = document.querySelector('.btn-them button');
const btnClose = document.querySelector('.btn-close');
const btnCancel = document.getElementById('btn-cancel');
const modalOverlay = document.getElementById('form-modal');
const studentForm = document.getElementById('student-form');
const modalTitle = modalOverlay.querySelector('h2');

const inputMsv = document.querySelector('.msv');
const inputName = document.querySelector('.name');
const inputDate = document.querySelector('.date');
const inputClass = document.querySelector('.class-name');
const inputDtb = document.querySelector('.dtb');
const inputEmail = document.querySelector('.email');

// Biến cờ hiệu quản lý trạng thái Form:
// null = Đang chế độ Thêm mới | Nếu chứa chuỗi "SV..." = Đang chế độ Sửa sinh viên đó
let currentEditId = null; 

// Mảng 5 dữ liệu mẫu ban đầu để hiển thị ngay khi localStorage trống
const defaultStudents = [
    { id: "SV001", name: "Nguyễn Văn Anh", dob: "2004-05-15", classroom: "66ĐHTT", gpa: 8.5, email: "vananh.tlu@gmail.com" },
    { id: "SV002", name: "Trần Thị Bình", dob: "2004-11-20", classroom: "66ĐHTT", gpa: 7.2, email: "thibinh99@gmail.com" },
    { id: "SV003", name: "Lê Hoàng Cường", dob: "2003-02-10", classroom: "65CNTT1", gpa: 6.8, email: "cuonglh.tlu@gmail.com" },
    { id: "SV004", name: "Phạm Minh Đức", dob: "2004-08-05", classroom: "66KTPM", gpa: 9.2, email: "ducpm.bkhn@gmail.com" },
    { id: "SV005", name: "Vũ Thùy Dương", dob: "2004-06-05", classroom: "66KTPM", gpa: 8.0, email: "thuyduong.vu@gmail.com" }
];

// Đọc dữ liệu từ localStorage, nếu bộ nhớ trống thì nạp mảng mặc định vào
let students = JSON.parse(localStorage.getItem('students')) || defaultStudents;
if (!localStorage.getItem('students')) {
    localStorage.setItem('students', JSON.stringify(students));
}

function renderStudents() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 

    if (students.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: gray; padding: 20px;">Danh sách trống</td></tr>`;
        return;
    }

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.dob}</td>
            <td>${student.classroom}</td>
            <td><strong>${parseFloat(student.gpa).toFixed(1)}</strong></td>
            <td>${student.email}</td>
            <td>
                <button class="btn bg-grey" onclick="editStudent('${student.id}')">Sửa</button>
                <button class="btn bg-red" onclick="deleteStudent('${student.id}')">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function updateStatistics() {
    const totalStudents = students.length;
    document.getElementById('total-students').textContent = totalStudents;

    if (totalStudents === 0) {
        document.getElementById('average-gpa').textContent = '0.0';
    } else {
        const totalGpa = students.reduce((sum, s) => sum + parseFloat(s.gpa), 0);
        const avg = totalGpa / totalStudents;
        document.getElementById('average-gpa').textContent = avg.toFixed(1);
    }
}

function resetForm() {
    studentForm.reset();
    currentEditId = null;
    modalTitle.textContent = "Thêm Sinh Viên Mới";
    inputMsv.disabled = false; 

    document.querySelectorAll('[class^="error-"]').forEach(div => div.textContent = '');
}


btnThem.addEventListener('click', () => {
    resetForm(); 
    modalOverlay.classList.add('open');
});

function closeForm() {
    modalOverlay.classList.remove('open');
    resetForm();
}
btnClose.addEventListener('click', closeForm);
btnCancel.addEventListener('click', closeForm);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeForm();
});

studentForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

    document.querySelectorAll('[class^="error-"]').forEach(div => div.textContent = '');

    if (inputMsv.value.trim().length < 4) {
        isValid = false;
        document.querySelector('.error-msv').textContent = 'Mã sinh viên phải có ít nhất 4 ký tự';
    } else if (currentEditId === null) {
        const isDuplicate = students.some(s => s.id.toLowerCase() === inputMsv.value.trim().toLowerCase());
        if (isDuplicate) {
            isValid = false;
            document.querySelector('.error-msv').textContent = 'Mã sinh viên này đã tồn tại trong hệ thống!';
        }
    }
    
    if (inputName.value.trim().length < 3) {
        isValid = false;
        document.querySelector('.error-name').textContent = 'Họ tên phải có ít nhất 3 ký tự';
    }

    if (inputDate.value === "") {
        isValid = false;
        document.querySelector('.error-date').textContent = 'Ngày sinh không được để trống';
    }

    if (inputClass.value.trim() === "") {
        isValid = false;
        document.querySelector('.error-class').textContent = 'Tên lớp không được để trống';
    }

    const gpaVal = parseFloat(inputDtb.value);
    if (isNaN(gpaVal) || gpaVal < 0 || gpaVal > 10) {
        isValid = false;
        document.querySelector('.error-dtb').textContent = 'Điểm trung bình hợp lệ phải từ 0 đến 10';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputEmail.value.trim())) {
        isValid = false;
        document.querySelector('.error-email').textContent = 'Định dạng Email không hợp lệ (Ví dụ: abc@gmail.com)';
    }

    if (isValid) {
        const studentData = {
            id: inputMsv.value.trim(),
            name: inputName.value.trim(),
            dob: inputDate.value,
            classroom: inputClass.value.trim(),
            gpa: gpaVal,
            email: inputEmail.value.trim()
        };

        if (currentEditId === null) {
            students.push(studentData);
        } else {
            const targetIndex = students.findIndex(s => s.id === currentEditId);
            if (targetIndex !== -1) {
                students[targetIndex] = studentData;
            }
        }
        localStorage.setItem('students', JSON.stringify(students));
        
        renderStudents();
        updateStatistics();
        closeForm();
    }
});

window.editStudent = function(id) {
    const student = students.find(s => s.id === id);
    if (!student) return;

    currentEditId = id; 
    modalTitle.textContent = "Cập Nhật Thông Tin Sinh Viên";
    
    inputMsv.value = student.id;
    inputMsv.disabled = true; 
    inputName.value = student.name;
    inputDate.value = student.dob;
    inputClass.value = student.classroom;
    inputDtb.value = student.gpa;
    inputEmail.value = student.email;

    modalOverlay.classList.add('open'); 
};

window.deleteStudent = function(id) {
    const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sinh viên mang mã số: ${id} không?`);
    if (confirmDelete) {
        students = students.filter(s => s.id !== id);
        localStorage.setItem('students', JSON.stringify(students));
        renderStudents();
        updateStatistics();
    }
};

renderStudents();
updateStatistics();