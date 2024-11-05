// Định nghĩa đường dẫn hình ảnh mã QR và thông tin của từng người
const qrDetails = {
    groom: {
        qrSrc: './assets/qr-thanh.jpg', 
        infoHtml: `
            <div class="mt-2" style="font-size: 16px; font-weight: 600;">Hồ Chí Thành</div>
            <div style="font-size: 14px;" class="mt-2">105869222004</div>
        `
    },
    bride: {
        qrSrc: './assets/qr-mai.jpg', 
        infoHtml: `
            <div class="mt-2" style="font-size: 16px; font-weight: 600;">Văn Thị Quỳnh Mai</div>
            <div style="font-size: 14px;" class="mt-2">1234567863</div>
        `
    }
};

// Lấy các nút "Mừng cưới"
const donateButtons = document.querySelectorAll('.donate-btn button');

// Lặp qua các nút và thêm sự kiện 'click'
donateButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const qrModal = new bootstrap.Modal(document.getElementById('qrModal'));
        
        // Kiểm tra xem nút nào được nhấn để thay đổi thông tin QR
        const buttonType = event.target.closest('.item-info').querySelector('.desc-info p').innerText.includes('Chú Rể') ? 'groom' : 'bride';
        
        // Cập nhật hình ảnh QR và thông tin bổ sung trong modal
        document.getElementById('qrImage').src = qrDetails[buttonType].qrSrc;
        document.getElementById('qrInfo').innerHTML = qrDetails[buttonType].infoHtml;
        
        // Hiển thị modal
        qrModal.show();
    });
});


// Danh sách đường dẫn hình ảnh và thời gian hiển thị mỗi ảnh
const images = [
    { src: './assets/n1.jpg', interval: 1000 },
    { src: './assets/n2.jpg', interval: 2000 },
    { src: './assets/n3.jpg', interval: 2000 },
    { src: './assets/n4.jpg', interval: 2000 },
    { src: './assets/n6.jpg', interval: 2000 },
    { src: './assets/n7.jpg', interval: 2000 },
    { src: './assets/n8.jpg', interval: 2000 },
    { src: './assets/n9.jpg', interval: 2000 },
    { src: './assets/n10.jpg', interval: 2000 },
    { src: './assets/n11.jpg', interval: 2000 },
    { src: './assets/n12.jpg', interval: 2000 },
    { src: './assets/n14.jpg', interval: 2000 },
    { src: './assets/n13.jpg', interval: 2000 },
    { src: './assets/n15.jpg', interval: 2000 },
    { src: './assets/n16.jpg', interval: 2000 },
    { src: './assets/n17.jpg', interval: 2000 },
    { src: './assets/n18.jpg', interval: 2000 },
    { src: './assets/n19.jpg', interval: 2000 },
    { src: './assets/n20.jpg', interval: 2000 },
    { src: './assets/n21.jpg', interval: 2000 },
    { src: './assets/n22.jpg', interval: 2000 }
];

// Lấy phần tử chứa carousel-inner
const carouselContainer = document.getElementById('carouselItemsContainer');

// Thêm các mục carousel-item bằng JavaScript
images.forEach((image, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) carouselItem.classList.add('active'); // Đặt phần tử đầu tiên là active

    // Đặt thời gian hiển thị mỗi ảnh
    carouselItem.setAttribute('data-bs-interval', image.interval);

    // Thêm thẻ img vào carousel-item
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = '...';
    img.classList.add('d-block', 'w-100');
    img.style.borderRadius = '16px';

    carouselItem.appendChild(img);
    carouselContainer.appendChild(carouselItem);
});

