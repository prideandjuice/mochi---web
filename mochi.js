// 1. Efek Hover pada Tombol Order
const orderButton = document.querySelector('.banner button');
orderButton.addEventListener('mouseover', () => {
    orderButton.style.backgroundColor = 'dark salmon';
    orderButton.style.transform = 'scale(1.1)';
});
orderButton.addEventListener('mouseout', () => {
    orderButton.style.backgroundColor = '';
    orderButton.style.transform = 'scale(1)';
});

// 2. Animasi Fade-In pada Banner
const banner = document.querySelector('.banner');
window.addEventListener('load', () => {
    banner.style.opacity = 0;
    let opacity = 0;
    const fadeEffect = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            banner.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
});

// 3. Efek Scroll untuk Menu
const menuSection = document.querySelector('#menu');
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const menuTop = menuSection.getBoundingClientRect().top;
    const elementVisible = 100;

    if (menuTop < windowHeight - elementVisible) {
        menuSection.classList.add('active');
    }
});

// Menambahkan kelas 'active' di CSS untuk animasi muncul
document.getElementById("orderNowBtn").onclick = function() {
    window.location.href = "order.html";
};

// JavaScript untuk Modal
document.addEventListener("DOMContentLoaded", function () {
    const orderNowBtn = document.getElementById("orderNowBtn");
    const orderModal = document.getElementById("orderModal");
    const closeModal = document.querySelector(".modal .close");

    // Buka modal saat tombol "Order Now" diklik
    orderNowBtn.onclick = function () {
        orderModal.style.display = "flex";
    };

    // Tutup modal saat tombol "X" diklik
    closeModal.onclick = function () {
        orderModal.style.display = "none";
    };

    // Tutup modal saat klik di luar konten modal
    window.onclick = function (event) {
        if (event.target === orderModal) {
            orderModal.style.display = "none";
        }
    };
});

