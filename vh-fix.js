// vh-fix.js

function setAppHeight() {
    // ดึงค่าความสูงของ viewport ที่แท้จริง (รวมหรือไม่รวม UI ของเบราว์เซอร์)
    const appHeight = window.innerHeight;
    // กำหนดค่าความสูงนี้เป็น CSS Custom Property (หรือ CSS Variable) ชื่อ --app-height
    document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
}

// เรียกใช้ฟังก์ชันทันทีเมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', setAppHeight);
// เรียกใช้ฟังก์ชันทุกครั้งที่ขนาดหน้าจอเปลี่ยน (เช่น หมุนจอ, แถบ UI ของเบราว์เซอร์บนมือถือแสดง/ซ่อน)
window.addEventListener('resize', setAppHeight);

// เรียกใช้อีกครั้งทันที เพื่อให้แน่ใจว่าค่าถูกตั้งค่าตั้งแต่แรก
setAppHeight();