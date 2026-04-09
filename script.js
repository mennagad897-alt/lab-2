// الوصول للعناصر
const btn = document.getElementById('action-btn');
const message = document.getElementById('message');

// إضافة حدث عند الضغط
btn.addEventListener('click', () => {
    message.textContent = "Great job! You've interacted with the page.";
    message.style.color = "blue";
    console.log("Button was clicked!");
});