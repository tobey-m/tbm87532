// scripts.js

// ฟังก์ชันสำหรับทำให้หน้าเว็บค่อยๆ หายไปแล้วเปลี่ยนหน้า
function fadeOutAndRedirect(url) {
    document.body.style.opacity = 0; // ลดความโปร่งใสของ body ให้เป็น 0 (หายไป)
    setTimeout(function() {
        window.location.href = url; // เปลี่ยนหน้าเมื่อเอฟเฟกต์ fade out เสร็จ
    }, 500); // รอ 500 มิลลิวินาที (ครึ่งวินาที) ให้การ fade out สมบูรณ์
}