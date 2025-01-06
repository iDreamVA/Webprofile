// ฟังก์ชันสำหรับอัปเดตวันและเวลา
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit', // เพิ่มวินาทีให้แสดงผลแบบ real-time
        hour12: true       // ใช้รูปแบบ 12 ชั่วโมง
    };
    dateTimeElement.textContent = now.toLocaleString('en-US', options);
}

// เรียกใช้ฟังก์ชันทุก ๆ 1 วินาที
setInterval(updateDateTime, 1000);

// เรียกใช้ครั้งแรกเพื่อแสดงผลทันที
updateDateTime();
